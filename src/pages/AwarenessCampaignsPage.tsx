import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonationCTA from "@/components/DonationCTA";
import { Megaphone, CheckCircle2 } from "lucide-react";

const AwarenessCampaignsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="section-padding bg-muted/50 border-b border-border">
          <div className="container-max">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
              Program Details
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Awareness Campaigns</h1>
            <p className="text-muted-foreground max-w-3xl leading-relaxed">
              The main goal of the Hadya Foundation is to consistently provide iron chelation medicine
              to thalassemia fighters while respecting their dignity. Alhamdulillah, by the end of 2023,
              we provide medicine to 327 children every month.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-card rounded-[16px] border border-border p-6 md:p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                <Megaphone className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Awareness Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In 2024, one of our main focuses is to convey our voice to the National Assembly and
                Provincial Assemblies. We will meet with the concerned people in this endeavor and
                strive to make our voice reach the Assembly and the Senate.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This initiative is crucial as we plan to expand the Thalassemia Awareness program
                further, seeing it as the only solution to turn the dream of Thalassemia-Free Pakistan
                into a reality. We will utilize all available platforms, including media, social media,
                and educational institutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Thalassemia Free Pakistan is a movement, and we all are its ambassadors. I hope you
                all spread this message more and more. Insha'Allah, the coming year will be as successful
                as the last one. Our cooperation will become stronger, and together we will light a new
                candle of hope in the lives of children.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">Policy-level advocacy with key national and provincial stakeholders</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">Multi-channel awareness through media, social media, and institutions</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">Community movement building for a Thalassemia-Free Pakistan</p>
                </div>
              </div>
            </div>

            <aside className="bg-card rounded-[16px] border border-border p-6">
              <h3 className="text-lg font-bold mb-4">Program Focus</h3>
              <p className="text-sm text-muted-foreground mb-2">Children receiving medicine monthly (2023)</p>
              <p className="text-3xl font-extrabold text-primary mb-4">327</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building policy support and public awareness is central to our long-term goal of a
                thalassemia-free Pakistan.
              </p>
            </aside>
          </div>
        </section>

        <DonationCTA />
      </main>

      <Footer />
    </div>
  );
};

export default AwarenessCampaignsPage;
