import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonationCTA from "@/components/DonationCTA";
import { BookOpen, CheckCircle2 } from "lucide-react";
import educationalHeaderBg from "@/assets/14-scaled.jpg";

const EducationVocationalTrainingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative overflow-hidden section-padding border-b border-border min-h-[320px] md:min-h-[400px]">
          <div className="absolute inset-0">
            <img src={educationalHeaderBg} alt="Educational and vocational training" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
          </div>
          <div className="relative container-max flex items-center min-h-[320px] md:min-h-[400px]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                Program Details
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-background">Education &amp; Vocational Training</h1>
              <p className="text-background/85 max-w-3xl leading-relaxed">
                In 2022, we committed to guiding all these children towards education through awareness,
                enrollment support, and incentives for regular class attendance.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-card rounded-[16px] border border-border p-6 md:p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold mb-4">What This Program Covers</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In 2022, we committed to guiding all these children towards education. Through various
                seminars, we explained the importance of education to them. We enrolled them in nearby
                schools and tuition centers, whether government or private. Additionally, we provided
                incentives for those children who regularly attend classes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In 2023, we inaugurated the Hadya Educational &amp; Vocational Center and started a beautician
                course. Now, the second batch of girls is learning beautician skills.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In 2024, our aim is to ensure educational facilities and offer incentives. Our primary
                focus this year in vocational education is to establish a good stitching unit, enabling
                girls to learn stitching.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">Educational assistance for school and college students</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">Vocational training support for practical employable skills</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">Mentorship to help students stay on track and complete programs</p>
                </div>
              </div>
            </div>

            <aside className="bg-card rounded-[16px] border border-border p-6">
              <h3 className="text-lg font-bold mb-4">Program Impact</h3>
              <p className="text-sm text-muted-foreground mb-2">Students supported annually</p>
              <p className="text-3xl font-extrabold text-primary mb-6">120+</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Education and skills development improve confidence, opportunity, and long-term independence
                for thalassemia fighters and their families.
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

export default EducationVocationalTrainingPage;
