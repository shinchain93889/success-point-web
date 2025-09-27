import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            We're here to help. Contact us for training, support, or any questions you may have.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="font-headline text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  Fill out the form, or reach out to us using the details below. We look forward to hearing from you!
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Our Office</h3>
                  <p className="text-muted-foreground">Transit camp (Rudrapur) near samsahan ghat</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">successpcinstitute@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">+91 8449008009</p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
