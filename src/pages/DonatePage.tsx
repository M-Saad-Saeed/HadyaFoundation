import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import {
  Heart, ShieldCheck, Landmark, Receipt, ArrowRight,
  Droplets, Pill, Stethoscope, Phone, Mail,
  CheckCircle2, Lock,
} from "lucide-react";

const presets = [1000, 3000, 5000, 10000];

const impactCards = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Blood Transfusions",
    description: "Your donation funds safe, regular blood transfusions that keep patients alive.",
  },
  {
    icon: <Pill className="w-6 h-6" />,
    title: "Medicines & Chelation",
    description: "Iron chelation therapy and essential medications to prevent organ damage.",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Health Monitoring",
    description: "Regular checkups including blood tests, liver function, and cardiac screening.",
  },
];

const bankDetails = [
  { label: "Bank Name", value: "Islami Bank Pakistan Ltd." },
  { label: "Account Title", value: "Hadya Foundation" },
  { label: "Account Number", value: "2050-1234-5678-9000" },
  { label: "Branch", value: "Hassan Parwana Colony, Multan" },
  { label: "SWIFT Code", value: "IBBLBDDH" },
];

const donateFaqs = [
  {
    question: "Will I receive a donation receipt?",
    answer: "Yes. Every donor receives an official receipt via email within 48 hours. For bank transfers, please share a screenshot of your transaction with us to expedite the process.",
  },
  {
    question: "Is my donation eligible for Zakat or Sadaqah?",
    answer: "Yes, Hadya Foundation accepts both Zakat and Sadaqah contributions. Funds are distributed according to Shariah guidelines to eligible patients. You can specify your intent during donation.",
  },
  {
    question: "How are the funds used?",
    answer: "100% of your donation goes toward patient care — blood transfusions, medicines, health checkups, and family support. We publish an annual transparency report with detailed financials.",
  },
  {
    question: "How do you ensure transparency?",
    answer: "We maintain audited accounts, publish yearly impact reports, and provide individual patient progress updates to recurring donors. Our board includes independent members who oversee fund allocation.",
  },
  {
    question: "Can I donate on behalf of someone else?",
    answer: "Absolutely. During the donation process you can include a note with the person's name. We'll issue the receipt in their name if requested.",
  },
];

const DonatePage = () => {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount] = useState<number | null>(3000);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const activeAmount = amount ?? (customAmount ? Number(customAmount) : 0);

  const handlePreset = (val: number) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustom = (val: string) => {
    // Only allow digits
    const cleaned = val.replace(/\D/g, "");
    setCustomAmount(cleaned);
    setAmount(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* ── Hero ── */}
        <section className="bg-primary section-padding">
          <div className="container-max text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6">
              <ShieldCheck className="w-4 h-4 text-primary-foreground/80" />
              <span className="text-xs font-semibold text-primary-foreground/80 uppercase tracking-wide">Trusted &amp; Transparent</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-4 max-w-2xl mx-auto">
              Donate to Support Thalassemia Fighters
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/70 max-w-lg mx-auto leading-relaxed">
              Every contribution — big or small — goes directly toward saving and improving the lives of patients. Your trust drives our mission.
            </p>
          </div>
        </section>

        {/* ── Donation Module ── */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-xl mx-auto">
              <div className="bg-card rounded-[16px] border border-border shadow-sm p-6 md:p-8">

                {/* Frequency Toggle */}
                <div className="flex rounded-[12px] bg-muted p-1 mb-8">
                  {(["one-time", "monthly"] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFrequency(f)}
                      className={`flex-1 py-2.5 rounded-[10px] text-sm font-semibold transition-all duration-200 ${
                        frequency === f
                          ? "bg-card text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {f === "one-time" ? "One-Time" : "Monthly"}
                    </button>
                  ))}
                </div>

                {/* Amount Presets */}
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">
                  Select Amount (PKR)
                </label>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {presets.map((p) => (
                    <button
                      key={p}
                      onClick={() => handlePreset(p)}
                      className={`py-3.5 rounded-[12px] text-sm font-bold border-2 transition-all duration-200 ${
                        amount === p
                          ? "border-primary bg-primary text-primary-foreground shadow-sm"
                          : "border-border bg-card text-foreground hover:border-primary/40"
                      }`}
                    >
                      ₨ {p.toLocaleString()}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="relative mb-8">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted-foreground">₨</span>
                  <Input
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => handleCustom(e.target.value)}
                    className="pl-9 h-12 rounded-[12px] text-sm border-2 border-border focus:border-primary"
                    maxLength={8}
                  />
                </div>

                {/* Donor Details */}
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">
                  Your Details
                </label>
                <div className="space-y-3 mb-8">
                  <Input
                    placeholder="Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 rounded-[12px] border-2 border-border focus:border-primary"
                    maxLength={100}
                  />
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 rounded-[12px] border-2 border-border focus:border-primary"
                    maxLength={255}
                  />
                  <Input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/[^\d+\-() ]/g, ""))}
                    className="h-12 rounded-[12px] border-2 border-border focus:border-primary"
                    maxLength={20}
                  />
                </div>

                {/* Submit */}
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full text-base h-13"
                  disabled={!activeAmount || activeAmount < 100 || !name.trim() || !email.trim()}
                >
                  <Heart className="w-5 h-5" />
                  {activeAmount
                    ? `Proceed to Donate ₨ ${activeAmount.toLocaleString()}`
                    : "Select an Amount"}
                </Button>

                {/* Trust notes */}
                <div className="mt-5 flex flex-col items-center gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Your information is secure and never shared</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Receipt className="w-3.5 h-3.5" />
                    <span>Official donation receipt provided via email</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Where Your Money Goes ── */}
        <section className="section-padding bg-muted/50">
          <div className="container-max">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Impact</span>
              <h2 className="text-2xl md:text-3xl font-extrabold">Where Your Money Goes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {impactCards.map((c) => (
                <div key={c.title} className="bg-card rounded-[16px] border border-border p-6 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    {c.icon}
                  </div>
                  <h3 className="font-bold mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bank Transfer Details ── */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Landmark className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-extrabold">Bank Transfer</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Prefer a direct transfer? Use the details below and share your receipt with us.
                </p>
              </div>

              <div className="bg-card rounded-[16px] border border-border overflow-hidden">
                {bankDetails.map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between px-6 py-4 text-sm ${
                      i < bankDetails.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="text-muted-foreground font-medium">{row.label}</span>
                    <span className="font-semibold text-right">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-primary/5 rounded-[12px] border border-primary/15 px-5 py-4 flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  After transferring, send a screenshot to{" "}
                  <span className="font-semibold text-foreground">support@hadyafoundation.org</span>{" "}
                  or WhatsApp us to receive your official receipt within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Donation FAQ ── */}
        <section className="section-padding bg-muted/50">
          <div className="container-max">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">FAQ</span>
                <h2 className="text-2xl md:text-3xl font-extrabold">Donation Questions</h2>
              </div>
              <FAQAccordion items={donateFaqs} />
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary-foreground mb-3">
              Still Have Questions?
            </h2>
            <p className="text-primary-foreground/70 max-w-md mx-auto mb-8 leading-relaxed">
              Our team is here to help. Reach out to us anytime — we're happy to talk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base">
                <Mail className="w-5 h-5" />
                Email Us
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base">
                <Phone className="w-5 h-5" />
                Call Support
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/50 mt-6">
              <a href="mailto:support@hadyafoundation.org" className="underline hover:text-primary-foreground/70">support@hadyafoundation.org</a> &middot; +92-321-6336373 &middot; +92-61-2119466
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DonatePage;
