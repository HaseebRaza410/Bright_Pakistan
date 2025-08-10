import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  const lastUpdated = "January 1, 2024";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <Badge className="mb-4" variant="outline">Legal</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Privacy <span className="bg-gradient-hero bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last updated: {lastUpdated}</p>
        </section>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold">Personal Information</h4>
              <p className="text-muted-foreground">
                We may collect personal information such as your name, email address, and contact details when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Subscribe to our newsletter</li>
                <li>Contact us through our contact form</li>
                <li>Comment on our articles</li>
                <li>Create an account on our website</li>
              </ul>
              
              <h4 className="font-semibold pt-4">Automatically Collected Information</h4>
              <p className="text-muted-foreground">
                We automatically collect certain information when you visit our website, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Provide and improve our services</li>
                <li>Send you newsletters and updates (with your consent)</li>
                <li>Respond to your inquiries and comments</li>
                <li>Analyze website usage and performance</li>
                <li>Ensure the security of our website</li>
                <li>Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With service providers who help us operate our website (under strict confidentiality agreements)</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Remember your preferences</li>
                <li>Analyze website traffic and usage</li>
                <li>Provide personalized content</li>
                <li>Ensure website security</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                You can control cookies through your browser settings, but disabling them may affect website functionality.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, 
                and we cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your information</li>
                <li>Unsubscribe from our newsletters at any time</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, please contact us at contact@brightpakistan.com.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 space-y-1 text-muted-foreground">
                <p>Email: contact@brightpakistan.com</p>
                <p>Phone: +92 21 1234 5678</p>
                <p>Address: Karachi, Pakistan</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;