import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'saxenaroni360@gmail.com';

if (!SMTP_USER || !SMTP_PASSWORD) {
  // We don't throw here to avoid crashing builds; runtime will handle and show a friendly error.
  // eslint-disable-next-line no-console
  console.warn('SMTP credentials are not set. Emails will fail to send until SMTP_USER and SMTP_PASSWORD are provided.');
}

const EMAIL_MODE = process.env.EMAIL_MODE; // 'test' to force Ethereal

async function getTransport() {
  const useTest = EMAIL_MODE === 'test' || !SMTP_USER || !SMTP_PASSWORD;
  if (useTest) {
    const testAccount = await nodemailer.createTestAccount();
    // eslint-disable-next-line no-console
    console.info('[mailer] Using Ethereal test SMTP account (no real emails sent)');
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }

  // eslint-disable-next-line no-console
  console.info('[mailer] Using Gmail SMTP for real email delivery');
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465, // true for 465, false for 587
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
    requireTLS: SMTP_PORT === 587,
  });
}

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmails(data: ContactPayload) {
  const transporter = await getTransport();

  const fromAddress = SMTP_USER ? `Success Point Website <${SMTP_USER}>` : 'Success Point Website <no-reply@example.com>';

  const toBusiness = {
    from: fromAddress,
    to: BUSINESS_EMAIL,
    subject: `New contact from ${data.name}`,
    replyTo: data.email || undefined,
    text: `You received a new contact submission:\n\nName: ${data.name}\nEmail: ${data.email || 'N/A'}\n\nMessage:\n${data.message}`,
    html: `<p>You received a new contact submission:</p>
           <ul>
             <li><strong>Name:</strong> ${data.name}</li>
             <li><strong>Email:</strong> ${data.email || 'N/A'}</li>
           </ul>
           <p><strong>Message:</strong></p>
           <p style="white-space: pre-line;">${data.message}</p>`,
  } as const;

  const infoBusiness = await transporter.sendMail(toBusiness);
  console.log('[mailer] Business email sent successfully to:', BUSINESS_EMAIL);

  // In test mode, log the preview URL
  const testUrlBusiness = nodemailer.getTestMessageUrl(infoBusiness);
  if (testUrlBusiness) {
    // eslint-disable-next-line no-console
    console.info(`[mailer] Preview business email: ${testUrlBusiness}`);
  }

  // Optional copy to user
  if (data.email) {
    const infoUser = await transporter.sendMail({
      from: fromAddress,
      to: data.email,
      subject: 'We received your message – Success Point Computer',
      replyTo: BUSINESS_EMAIL,
      text: `Hi ${data.name},\n\nThanks for reaching out to Success Point Computer. We received your message and will get back to you soon.\n\nYour message:\n${data.message}\n\nRegards,\nSuccess Point Computer`,
      html: `<p>Hi ${data.name},</p>
             <p>Thanks for reaching out to <strong>Success Point Computer</strong>. We received your message and will get back to you soon.</p>
             <p><strong>Your message:</strong></p>
             <p style="white-space: pre-line;">${data.message}</p>
             <p>Regards,<br/>Success Point Computer</p>`,
    });
    console.log('[mailer] User acknowledgment sent successfully to:', data.email);
    const testUrlUser = nodemailer.getTestMessageUrl(infoUser);
    if (testUrlUser) {
      // eslint-disable-next-line no-console
      console.info(`[mailer] Preview user email: ${testUrlUser}`);
    }
  }

  // All sending done via `transporter` above.
}
