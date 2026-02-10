import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonationCTA from "@/components/DonationCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Pill, BookOpen, Megaphone, Users, Microscope, ArrowRight,
} from "lucide-react";

type Category = "all" | "health" | "education" | "community";

interface Program {
  icon: React.ReactNode;
  title: string;
  category: Category;
  description: string;
  impact: string;
  detailsPath?: string;
}

const programs: Program[] = [
  {
    icon: <Pill className="w-6 h-6" />,
    title: "Medicine Distribution",
    category: "health",
    description:
      "Monthly distribution of iron chelation therapy, folic acid, and essential medications to registered patients — free of cost. We ensure no patient misses a dose.",
    impact: "400+ patients receive medicines every month",
    detailsPath: "/programs/medicine-distribution",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Education & Vocational Training",
    category: "education",
    description:
      "Scholarships, school supplies, and vocational skill-building for thalassemia patients and their siblings — because treatment alone isn't enough for a full life.",
    impact: "120+ students supported annually",
    detailsPath: "/programs/education-vocational-training",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Awareness Campaigns",
    category: "community",
    description:
      "Community outreach, carrier screening drives, and public seminars to educate families about prevention, early diagnosis, and the importance of regular treatment.",
    impact: "50+ campaigns across 15 districts",
    detailsPath: "/programs/awareness-campaigns",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Thalassemia Fighters",
    category: "community",
    description:
      "A volunteer-led initiative connecting patients, families, and supporters into a strong mutual-aid network — offering emotional support, logistics help, and advocacy.",
    impact: "800+ active volunteers nationwide",
    detailsPath: "/programs/team-thalassemia-fighters",
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    title: "Diagnostics & Testing",
    category: "health",
    description:
      "Free carrier screening, CBC, hemoglobin electrophoresis, and HPLC tests at partner labs. Early detection is the most powerful prevention tool we have.",
    impact: "3,000+ individuals screened to date",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All Programs", value: "all" },
  { label: "Health", value: "health" },
  { label: "Education", value: "education" },
  { label: "Community", value: "community" },
];

const ProgramsPage = () => {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? programs : programs.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Page Header */}
        <section className="section-padding bg-muted/50 border-b border-border">
          <div className="container-max text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
              What We Do
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Our Programs &amp; Services</h1>
            <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
              From medicine to education, screening to community building — we provide end-to-end support so no patient fights thalassemia alone.
            </p>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="section-padding">
          <div className="container-max">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {filters.map((f) => (
                <Button
                  key={f.value}
                  variant={active === f.value ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setActive(f.value)}
                >
                  {f.label}
                </Button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <div
                  key={p.title}
                  className="bg-card rounded-[16px] border border-border p-6 md:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group flex flex-col"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {p.description}
                  </p>

                  {/* Impact stat line */}
                  <div className="bg-primary/5 rounded-[12px] px-4 py-2.5 mb-5">
                    <p className="text-xs font-semibold text-primary">{p.impact}</p>
                  </div>

                  {p.detailsPath ? (
                    <Button asChild variant="ghost" size="sm" className="text-primary font-semibold px-0 hover:bg-transparent hover:underline self-start">
                      <Link to={p.detailsPath}>
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="ghost" size="sm" disabled className="px-0 self-start text-muted-foreground">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation CTA */}
        <DonationCTA />
      </main>

      <Footer />
    </div>
  );
};

export default ProgramsPage;
