import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, CreditCard, Receipt, Landmark } from "lucide-react";

const amounts = [500, 1000, 2000, 5000];

const DonationBlock = () => {
  const [selected, setSelected] = useState<number>(1000);

  return (
    <section id="donate" className="section-padding bg-primary/[0.04]">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Support Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Make a Donation</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Choose an amount or enter a custom one. Every taka goes toward patient care.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Amount selector */}
          <div className="bg-card rounded-[16px] border border-border p-6 md:p-8">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              Select Amount (PKR)
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setSelected(amt)}
                  className={`py-3 rounded-[12px] text-sm font-bold border-2 transition-all duration-200 ${
                    selected === amt
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-primary/40"
                  }`}
                >
                  PKR {amt.toLocaleString()}
                </button>
              ))}
            </div>
            <Button variant="accent" size="lg" className="w-full text-base">
              <Heart className="w-5 h-5" />
              Donate PKR {selected.toLocaleString()}
            </Button>
          </div>

          {/* Bank details & receipt */}
          <div className="space-y-6">
            <div className="bg-card rounded-[16px] border border-border p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-primary" />
                Bank Transfer
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Bank:</span> Islami Bank Pakistan Ltd.</p>
                <p><span className="font-semibold text-foreground">Account:</span> Hadya Foundation</p>
                <p><span className="font-semibold text-foreground">A/C No:</span> 2050-1234-5678-9000</p>
                <p><span className="font-semibold text-foreground">Branch:</span> Hassan Parwana Colony, Multan</p>
              </div>
            </div>

            <div className="bg-primary/5 rounded-[16px] border border-primary/15 p-6">
              <h3 className="font-bold mb-2 flex items-center gap-2 text-primary">
                <Receipt className="w-5 h-5" />
                Donation Receipt
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All donors receive an official tax-deductible receipt via email. Contact us after your transfer to receive yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationBlock;
