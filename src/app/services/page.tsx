import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop, Wrench, Network, ShieldCheck, Database, Users } from 'lucide-react';

const services = [
  {
    icon: <Laptop className="h-10 w-10 text-primary" />,
    title: 'Customized Training Programs',
    description: 'From basic computer literacy to advanced programming languages, our tailored courses fit your learning pace and goals.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Expert Hardware Repair',
    description: 'We diagnose and fix issues with desktops, laptops, and peripherals, ensuring your hardware runs smoothly.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Software Installation & Support',
    description: 'Seamless installation and configuration of operating systems, productivity suites, and specialized software.',
  },
  {
    icon: <Network className="h-10 w-10 text-primary" />,
    title: 'Network & Security Solutions',
    description: 'Secure and efficient network setup for your home or office, including Wi-Fi optimization and firewall configuration.',
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: 'IT Consulting',
    description: 'Strategic advice to help you leverage technology, improve efficiency, and make informed IT decisions.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Data Recovery Services',
    description: 'Professional assistance to recover lost or corrupted files from various storage devices.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Professional Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            We provide a wide array of technology services to empower individuals and businesses.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col transition-transform transform hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary p-3 rounded-full">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline text-xl leading-tight">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
