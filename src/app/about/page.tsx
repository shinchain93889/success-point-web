import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Founder & Lead Instructor',
    image: PlaceHolderImages.find(p => p.id === 'team-1'),
  },
  {
    name: 'John Smith',
    role: 'Head Technician',
    image: PlaceHolderImages.find(p => p.id === 'team-2'),
  },
  {
    name: 'Emily White',
    role: 'Customer Support Specialist',
    image: PlaceHolderImages.find(p => p.id === 'team-3'),
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">About Success Point Computer</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/80">
            Dedicated to demystifying technology and empowering our community through education and reliable service.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our mission is to bridge the digital divide by providing accessible, high-quality computer education and dependable tech support. We believe that technology should be a tool for empowerment, not a barrier.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're starting your tech journey or are a business seeking expert IT solutions, we are committed to your success. We strive to create a learning environment that is welcoming, supportive, and focused on practical, real-world skills.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                 <Image src="https://picsum.photos/seed/about-mission/600/400" alt="Team working together" data-ai-hint="team collaboration" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Meet Our Team</h2>
            <p className="mt-2 text-lg text-muted-foreground">The experts dedicated to your success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="p-0">
                  {member.image && (
                    <div className="relative h-64 w-full">
                      <Image
                        src={member.image.imageUrl}
                        alt={member.image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={member.image.imageHint}
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                  <p className="text-accent font-semibold">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
