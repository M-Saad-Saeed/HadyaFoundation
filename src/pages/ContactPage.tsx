import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin, Phone, Mail, Clock, Send,
  Facebook, Twitter, Instagram,
} from "lucide-react";

const contactFaqs = [
  {
    question: "How quickly will I get a response?",
    answer: "We aim to respond to all enquiries within 24–48 hours on working days. For urgent patient-related matters, please call us directly.",
  },
  {
    question: "Can I visit your office without an appointment?",
    answer: "Yes, walk-ins are welcome during office hours. However, for detailed discussions we recommend scheduling a visit in advance by phone or email.",
  },
  {
    question: "How can I volunteer with Hadya Foundation?",
    answer: "Fill out the contact form above mentioning your interest in volunteering, or email us directly. We'll share current opportunities and onboarding details.",
  },
  {
    question: "Do you operate outside Multan?",
    answer: "Yes. While our head office is in Multan, we run programs and awareness campaigns across 15+ districts through our partner network and volunteer teams.",
  },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const isValid = form.name.trim().length > 0 && form.email.trim().length > 0 && form.message.trim().length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Page Header */}
        <section className="section-padding bg-muted/50 border-b border-border">
          <div className="container-max text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Get in Touch</span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Have a question, want to volunteer, or need support? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

              {/* Left — Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-xl font-bold mb-5">Reach Us</h2>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Office Address</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">Hassan Parwana Colony,<br />Multan, Pakistan, 6000</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Phone</p>
                        <a
                          href="tel:+923216336373"
                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          +92-321-6336373
                        </a>
                        <a
                          href="tel:+92612119466"
                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          +92-61-2119466
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Email</p>
                        <a
                          href="mailto:support@hadyafoundation.org"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          support@hadyafoundation.org
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Office Hours */}
                <div className="bg-card rounded-[16px] border border-border p-6">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Office Hours
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Saturday – Thursday</span>
                      <span className="font-semibold">9:00 AM – 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Friday</span>
                      <span className="font-semibold text-accent">Closed</span>
                    </li>
                  </ul>
                </div>

                {/* Socials */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-muted-foreground">Follow Us</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: <Facebook className="w-4 h-4" />, label: "Facebook" },
                      { icon: <Twitter className="w-4 h-4" />, label: "Twitter" },
                      { icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href="#"
                        aria-label={s.label}
                        className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-[16px] border border-border p-6 md:p-8">
                  <h2 className="text-xl font-bold mb-1">Send a Message</h2>
                  <p className="text-sm text-muted-foreground mb-6">Fields marked * are required.</p>

                  <div className="space-y-4">
                    <Input
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="h-12 rounded-[12px] border-2 border-border focus:border-primary"
                      maxLength={100}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="h-12 rounded-[12px] border-2 border-border focus:border-primary"
                        maxLength={255}
                      />
                      <Input
                        type="tel"
                        placeholder="Phone (optional)"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value.replace(/[^\d+\-() ]/g, ""))}
                        className="h-12 rounded-[12px] border-2 border-border focus:border-primary"
                        maxLength={20}
                      />
                    </div>
                    <Textarea
                      placeholder="Your Message *"
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="min-h-[140px] rounded-[12px] border-2 border-border focus:border-primary resize-none"
                      maxLength={1000}
                    />
                    <Button variant="default" size="lg" className="w-full text-base" disabled={!isValid}>
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="section-padding bg-muted/50">
          <div className="container-max">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold">Find Us</h2>
            </div>
            <div className="rounded-[16px] border border-border overflow-hidden bg-card aspect-[16/7] flex items-center justify-center">
              {/* Replace the placeholder below with a Google Maps / Leaflet embed */}
              <div className="text-center text-muted-foreground">
                <MapPin className="w-10 h-10 mx-auto mb-3 text-primary/30" />
                <p className="text-sm font-medium">Map embed goes here</p>
                <p className="text-xs mt-1">Hassan Parwana Colony, Multan, Pakistan, 6000</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">FAQ</span>
                <h2 className="text-2xl md:text-3xl font-extrabold">Common Questions</h2>
              </div>
              <FAQAccordion items={contactFaqs} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
