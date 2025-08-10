import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  const lastUpdated = "January 1, 2024";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <Badge className="mb-4" variant="outline">Legal</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Terms of <span className="bg-gradient-hero bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our website and services.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last updated: {lastUpdated}</p>
        </section>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By accessing and using the Bright Pakistan website and services, you accept and agree to be bound by the 
                terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Use License</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Permission is granted to temporarily download one copy of the materials on Bright Pakistan's website for 
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated 
                by Bright Pakistan at any time.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                When you submit content to our website (comments, feedback, etc.), you grant Bright Pakistan a non-exclusive, 
                royalty-free, perpetual, irrevocable right to use, reproduce, modify, publish, distribute, and display such content.
              </p>
              <p className="text-muted-foreground">
                You represent and warrant that:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>You own or have the necessary rights to the content you submit</li>
                <li>Your content does not violate any third-party rights</li>
                <li>Your content is not defamatory, obscene, or otherwise objectionable</li>
                <li>Your content does not contain viruses or malicious code</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prohibited Uses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                You may not use our website for any unlawful purpose or to solicit others to perform unlawful acts. 
                You may not violate any local, state, national, or international law or regulation. Prohibited uses include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Harassment, abuse, or harm of another person</li>
                <li>Transmission of spam or unsolicited communications</li>
                <li>Impersonation of any person or entity</li>
                <li>Interference with or disruption of the website's operation</li>
                <li>Collection of personal information without consent</li>
                <li>Use of the website for any commercial purpose without permission</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The materials on Bright Pakistan's website are provided on an 'as is' basis. Bright Pakistan makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied 
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                property or other violation of rights.
              </p>
              <p className="text-muted-foreground mt-4">
                Further, Bright Pakistan does not warrant or make any representations concerning the accuracy, likely results, 
                or reliability of the use of the materials on its website or otherwise relating to such materials or on any 
                sites linked to this site.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                In no event shall Bright Pakistan or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to 
                use the materials on Bright Pakistan's website, even if Bright Pakistan or a Bright Pakistan authorized 
                representative has been notified orally or in writing of the possibility of such damage. Because some 
                jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential 
                or incidental damages, these limitations may not apply to you.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accuracy of Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The materials appearing on Bright Pakistan's website could include technical, typographical, or photographic errors. 
                Bright Pakistan does not warrant that any of the materials on its website are accurate, complete, or current. 
                Bright Pakistan may make changes to the materials contained on its website at any time without notice. 
                However, Bright Pakistan does not make any commitment to update the materials.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at:
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

export default Terms;