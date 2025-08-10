import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To illuminate Pakistan's bright future by showcasing innovation, entrepreneurship, and technological advancement across the nation."
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "To be Pakistan's most trusted source for inspiring stories, cutting-edge technology news, and business insights that drive progress."
    },
    {
      icon: Users,
      title: "Our Community",
      description: "Building a vibrant community of innovators, entrepreneurs, and forward-thinkers who are shaping Pakistan's bright tomorrow."
    },
    {
      icon: Award,
      title: "Our Excellence",
      description: "Committed to delivering high-quality, accurate, and engaging content that empowers our readers to stay ahead of the curve."
    }
  ];

  const team = [
    {
      name: "Sarah Ahmed",
      role: "Editor-in-Chief",
      bio: "Tech journalist with 10+ years covering Pakistan's startup ecosystem"
    },
    {
      name: "Ali Hassan",
      role: "Business Reporter",
      bio: "Expert in Pakistani business trends and economic developments"
    },
    {
      name: "Fatima Khan",
      role: "Technology Writer",
      bio: "Specialist in emerging technologies and innovation in Pakistan"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge className="mb-4" variant="outline">About Us</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Illuminating Pakistan's <span className="bg-gradient-hero bg-clip-text text-transparent">Bright Future</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bright Pakistan is your premier destination for technology news, business insights, and inspiring stories 
            from across Pakistan. We're dedicated to showcasing the innovation and entrepreneurship that's driving 
            our nation toward a brighter tomorrow.
          </p>
        </section>

        {/* Values Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2024, Bright Pakistan emerged from a simple yet powerful belief: that Pakistan is home to 
                  incredible talent, innovation, and entrepreneurial spirit that deserves to be celebrated and shared 
                  with the world.
                </p>
                <p>
                  Our team of dedicated journalists, writers, and technology enthusiasts work tirelessly to bring you 
                  the latest news, in-depth analysis, and inspiring stories from Pakistan's rapidly evolving tech and 
                  business landscape.
                </p>
                <p>
                  From breakthrough startups to established enterprises, from cutting-edge technology to traditional 
                  industries embracing digital transformation, we cover it all with accuracy, insight, and passion.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-card shadow-card-hover overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-primary-light to-accent-light flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="h-16 w-16 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
                      <Heart className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold">Built with Passion</h3>
                    <p className="text-white/80">For Pakistan's Bright Future</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="h-24 w-24 rounded-full bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <Badge variant="outline">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;