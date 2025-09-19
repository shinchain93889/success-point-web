import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop, Wrench, Network, Star, Users, BrainCircuit } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const placeholderHeroImage = PlaceHolderImages.find(p => p.id === 'hero-home-computer');

const services = [
  {
    icon: <Laptop className="h-10 w-10 text-primary" />,
    title: 'Computer Training',
    description: 'Master the latest software and skills with our expert-led courses.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Hardware Repairs',
    description: 'Fast and reliable repair services to get your devices back in action.',
  },
  {
    icon: <Network className="h-10 w-10 text-primary" />,
    title: 'Networking Solutions',
    description: 'Robust networking setup and support for homes and businesses.',
  },
];

const features = [
    {
        icon: <Star className="h-8 w-8 text-accent" />,
        title: 'Expert Instructors',
        description: 'Learn from industry professionals with years of real-world experience.'
    },
    {
        icon: <Users className="h-8 w-8 text-accent" />,
        title: 'Personalized Approach',
        description: 'We tailor our services to meet your specific needs and goals.'
    },
    {
        icon: <BrainCircuit className="h-8 w-8 text-accent" />,
        title: 'Cutting-Edge Tech',
        description: 'We use and teach the latest technologies to keep you ahead of the curve.'
    }
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full text-white">
        {placeholderHeroImage &&
          <Image
            src={placeholderHeroImage.imageUrl}
            alt={placeholderHeroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={placeholderHeroImage.imageHint}
          />
        }
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight uppercase">
            SUCCESS POINT COMPUTER
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
            Unlock your tech potential.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">What We Offer</h2>
            <p className="mt-2 text-lg text-muted-foreground">Comprehensive solutions for all your tech needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary text-lg">
                <Link href="/services">Explore all services &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose Success Point?</h2>
                  <p className="mt-2 text-lg text-muted-foreground">The advantages of partnering with us.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-10">
                  {features.map((feature, index) => (
                      <div key={index} className="text-center">
                          <div className="flex justify-center items-center mb-4">
                              {feature.icon}
                          </div>
                          <h3 className="font-headline text-xl font-semibold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
            <blockquote className="max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl font-medium italic">
                    "Success Point completely transformed my understanding of computers. The instructors are patient, knowledgeable, and truly dedicated to helping students succeed."
                </p>
                <footer className="mt-6">
                    <p className="font-semibold text-lg"> - Alex Johnson</p>
                    <p className="text-muted-foreground">Former Student</p>
                </footer>
            </blockquote>
        </div>
      </section>
    </div>
  );
}
