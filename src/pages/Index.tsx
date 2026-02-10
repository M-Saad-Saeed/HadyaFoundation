import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import ImpactStat from "@/components/ImpactStat";
import StoryCard from "@/components/StoryCard";
import DonationBlock from "@/components/DonationBlock";
import HowDonationHelps from "@/components/HowDonationHelps";
import {
  Droplets, Stethoscope, BookOpen, HandHeart, Users, Pill,
  HeartPulse, Calendar, Megaphone, ShieldCheck,
} from "lucide-react";

const trustStats = [
  { icon: <Calendar className="w-5 h-5" />, value: "Est. 2013", label: "Serving since" },
  { icon: <Users className="w-5 h-5" />, value: "400+", label: "Patients Supported" },
  { icon: <Pill className="w-5 h-5" />, value: "Monthly", label: "Medicine Distribution" },
  { icon: <Megaphone className="w-5 h-5" />, value: "50+", label: "Awareness Campaigns" },
];

const programs = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Blood Transfusion Support",
    description: "Coordinating safe, regular blood transfusions for patients in need across partner hospitals.",
  },
  {
    icon: <Pill className="w-6 h-6" />,
    title: "Medicine & Chelation",
    description: "Providing iron chelation therapy and essential medications to prevent organ damage.",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Medical Checkups",
    description: "Regular health monitoring including blood tests, liver function, and cardiac screening.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Awareness & Education",
    description: "Community outreach programs and carrier screening drives to prevent thalassemia.",
  },
  {
    icon: <HandHeart className="w-6 h-6" />,
    title: "Family Support",
    description: "Emotional, financial, and logistical support for families navigating thalassemia care.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Carrier Screening",
    description: "Free screening programs for at-risk communities to identify carriers before marriage.",
  },
];

const stories = [
  {
    name: "Aisha Rahman",
    role: "Patient, age 12",
    quote: "Because of Hadya Foundation, I can go to school and play with my friends. They give me my medicine every month and the doctors are so kind.",
  },
  {
    name: "Fatima Begum",
    role: "Mother of a patient",
    quote: "When my son was diagnosed, I felt completely lost. Hadya Foundation became our second family — they gave us strength, guidance, and hope.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* 1) Hero */}
        <Hero />

        {/* 2) Trust Strip */}
        <section className="border-b border-border bg-card">
          <div className="container-max py-8 md:py-10 px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {trustStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-lg font-extrabold leading-tight">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3) Programs Grid */}
        <section id="programs" className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Our Programs</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Comprehensive, end-to-end support for thalassemia patients and their families.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((p) => (
                <ProgramCard key={p.title} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* 4) Impact Section */}
        <section id="impact" className="section-padding bg-muted/50">
          <div className="container-max">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Our Impact</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Numbers That Matter</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <ImpactStat value="400+" label="Patients Supported" icon={<HeartPulse className="w-6 h-6" />} />
              <ImpactStat value="12,000+" label="Blood Units Provided" icon={<Droplets className="w-6 h-6" />} />
              <ImpactStat value="30+" label="Partner Hospitals" icon={<Stethoscope className="w-6 h-6" />} />
              <ImpactStat value="5,000+" label="Volunteers Engaged" icon={<Users className="w-6 h-6" />} />
            </div>
            <div className="max-w-2xl mx-auto bg-card rounded-[16px] border border-border p-8 text-center">
              <h3 className="text-xl font-bold mb-3">How We Help</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every month, Hadya Foundation ensures that over 400 registered thalassemia patients receive their blood transfusions on time, access iron chelation medicine, and undergo critical health checkups. We work with a network of hospitals, blood banks, and volunteers to create a seamless support system — so no patient fights alone.
              </p>
            </div>
          </div>
        </section>

        {/* 5) How Your Donation Helps */}
        <HowDonationHelps />

        {/* 6) Stories */}
        <section id="stories" className="section-padding bg-muted/50">
          <div className="container-max">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Real Voices</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Stories of Hope</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Hear from the patients and families whose lives are changed by your support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {stories.map((s) => (
                <StoryCard key={s.name} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* 7) Donation CTA Block */}
        <DonationBlock />
      </main>

      {/* 8) Footer */}
      <Footer />
    </div>
  );
};

export default Index;
