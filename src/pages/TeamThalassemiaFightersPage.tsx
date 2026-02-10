import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonationCTA from "@/components/DonationCTA";
import { Users, CheckCircle2 } from "lucide-react";
import teamHeaderBg from "@/assets/Team Thalassemia.jpg";

const TeamThalassemiaFightersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative overflow-hidden section-padding border-b border-border min-h-[320px] md:min-h-[400px]">
          <div className="absolute inset-0">
            <img src={teamHeaderBg} alt="Team Thalassemia Fighters" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
          </div>
          <div className="relative container-max flex items-center min-h-[320px] md:min-h-[400px]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                Program Details
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-background">Team Thalassemia Fighters</h1>
              <p className="text-background/85 max-w-3xl leading-relaxed">
                In 2022, our aim was to assemble a team of 50 thalassemia fighters dedicated to education,
                vocational training, and maintaining good health.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-card rounded-[16px] border border-border p-6 md:p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Team Development Journey</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In 2022, our aim was to assemble a team of 50 thalassemia fighters dedicated to education,
                vocational training, and maintaining good health. We intended to present them as role
                models for other thalassemia fighters, and Alhamdulillah, we've achieved some success.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We've formed a team of about 35 individuals who actively participate in all activities
                and take good care of their health. They've been actively engaged in all events this year,
                showcasing their skills and contributing towards a thalassemia-free Pakistan, insha'Allah.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In 2024, our aim goal is to increase their figure to 75 and engage them in conducting
                awareness programs as extensively as possible. This effort aims to help us achieve our
                goal of a Thalassemia-Free Pakistan insha'Allah.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">2022 target team size: 50 thalassemia fighters</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">Current active team: about 35 participants</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">2024 goal: grow to 75 and lead broader awareness programs</p>
                </div>
              </div>
            </div>

            <aside className="bg-card rounded-[16px] border border-border p-6">
              <h3 className="text-lg font-bold mb-4">Program Focus</h3>
              <p className="text-sm text-muted-foreground mb-2">Active team members</p>
              <p className="text-3xl font-extrabold text-primary mb-4">35</p>
              <p className="text-sm text-muted-foreground mb-2">2024 target</p>
              <p className="text-3xl font-extrabold text-primary mb-6">75</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The team represents resilience, leadership, and hope for a thalassemia-free Pakistan.
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

export default TeamThalassemiaFightersPage;
