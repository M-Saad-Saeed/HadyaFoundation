import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonationCTA from "@/components/DonationCTA";
import { Pill, CheckCircle2 } from "lucide-react";
import medicineDistributionBg from "@/assets/Medical dist.jpg";

const MedicineDistributionPage = () => {
  const heroImageOffsetY = 30;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative overflow-hidden section-padding border-b border-border min-h-[320px] md:min-h-[400px]">
          <div className="absolute inset-0">
            <img
              src={medicineDistributionBg}
              alt="Medicine Distribution"
              className="w-full h-full object-cover"
              style={{ transform: `scale(1.1) translateY(${heroImageOffsetY}px)` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
          </div>
          <div className="relative container-max flex items-center min-h-[320px] md:min-h-[400px]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                Program Details
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-background">Medicine Distribution</h1>
              <p className="text-background/85 max-w-3xl leading-relaxed">
                The main goal of the Hadya Foundation is to consistently provide iron chelation medicine
                to thalassemia fighters while respecting their dignity. Alhamdulillah, by the end of 2023,
                we provide medicine to 327 children every month.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-card rounded-[16px] border border-border p-6 md:p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                <Pill className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold mb-4">What This Program Covers</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The main goal of the Hadya Foundation is to consistently provide iron chelation medicine
                to thalassemia fighters while respecting their dignity. Alhamdulillah, by the end of 2023,
                we provide medicine to 327 children every month.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our aim goal for 2024 is to increase the figure of children receiving medicine to 500.
                With the help of Allah and your support, we are confident that together we can achieve
                this goal, insha'Allah.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">Monthly medicine packs for registered patients</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">Free distribution with no out-of-pocket cost</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">Coordination with doctors for adherence and dosage continuity</p>
                </div>
              </div>
            </div>

            <aside className="bg-card rounded-[16px] border border-border p-6">
              <h3 className="text-lg font-bold mb-4">Program Impact</h3>
              <p className="text-sm text-muted-foreground mb-2">Children receiving medicine monthly (2023)</p>
              <p className="text-3xl font-extrabold text-primary mb-4">327</p>
              <p className="text-sm text-muted-foreground mb-2">Target for 2024</p>
              <p className="text-3xl font-extrabold text-primary mb-6">500</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                With your support, we aim to expand medicine access and reach 500 children through this
                program, insha'Allah.
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

export default MedicineDistributionPage;
