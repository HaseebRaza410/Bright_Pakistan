import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@brightpakistan.com",
      description: "Send us your queries, story tips, or feedback"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+92 21 1234 5678",
      description: "Available Monday to Friday, 9 AM - 6 PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Karachi, Pakistan",
      description: "Our headquarters in the heart of Pakistan's business capital"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9 AM - 6 PM",
      description: "We're here to help during business hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge className="mb-4" variant="outline">Contact Us</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get in <span className="bg-gradient-hero bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a story tip, feedback, or just want to connect? We'd love to hear from you. 
            Reach out and let's discuss how we can illuminate Pakistan's bright future together.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="What is this about?" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="h-12 w-12 rounded-full bg-gradient-hero flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="font-medium text-primary mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <Card className="bg-gradient-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Have a Story Tip?</h3>
                <p className="text-muted-foreground mb-4">
                  Know about an exciting startup, innovative technology, or inspiring business story? 
                  We'd love to hear about it!
                </p>
                <Button variant="outline" className="w-full">
                  Submit Story Tip
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-accent">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Join Our Newsletter</h3>
                <p className="text-muted-foreground mb-4">
                  Stay updated with the latest news and insights from Pakistan's tech and business world.
                </p>
                <div className="flex space-x-2">
                  <Input placeholder="Your email" className="flex-1" />
                  <Button>Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;