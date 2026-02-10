import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import normalBloodImage from "@/assets/Normal Blood.jpg";
import thalassemiaBloodImage from "@/assets/Thalassemia Blood.jpg";
import firstPossibilityImage from "@/assets/1st Possibility.jpg";
import secondPossibilityImage from "@/assets/2nd Possibility.jpg";
import thirdPossibilityImage from "@/assets/3rd Possibility.jpg";
import preventanceImage from "@/assets/Preventance.jpg";

const ThalassemiaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="section-padding bg-primary border-b border-border">
          <div className="container-max text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/85 mb-2 block">
              Thalassemia
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground">What Is Thalassemia?</h1>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Blood Comparison</h2>
              <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Thalassemia is an inherited blood disorder where the body doesn&apos;t produce enough
                hemoglobin, a crucial protein in red blood cells. This condition is manageable with regular
                blood transfusions and chelation therapy to remove excess iron from the body. A child with
                thalassemia may need one or two blood transfusions per month and regular medication to
                manage the disorder.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-card rounded-[16px] border border-border overflow-hidden">
                <img
                  src={normalBloodImage}
                  alt="Normal Blood"
                  className="w-full h-[300px] md:h-[360px] object-contain bg-muted/30 p-4"
                />
                <div className="p-4">
                  <p className="font-semibold">Normal Blood</p>
                </div>
              </div>
              <div className="bg-card rounded-[16px] border border-border overflow-hidden">
                <img
                  src={thalassemiaBloodImage}
                  alt="Thalassemia Blood"
                  className="w-full h-[300px] md:h-[360px] object-contain bg-muted/30 p-4"
                />
                <div className="p-4">
                  <p className="font-semibold">Thalassemia Blood</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/50">
          <div className="container-max">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">How It Spreads</h2>
              <p className="text-muted-foreground">Explore inheritance possibilities.</p>
            </div>
            <div className="max-w-5xl mx-auto bg-card rounded-[16px] border border-border px-5 md:px-7">
              <Accordion type="single" collapsible defaultValue="possibility-1" className="w-full">
                <AccordionItem value="possibility-1" className="border-b-0">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline">
                    1st Possibility
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pb-6">
                      <p className="text-muted-foreground leading-relaxed mb-5">
                        If one parent is a thalassemia carrier and the other is not, there is a 50% chance
                        each child will be a carrier and a 50% chance they will not carry thalassemia at
                        all. None of the children will develop thalassemia major.
                      </p>
                      <div className="rounded-[12px] border border-border overflow-hidden bg-muted/30">
                        <img
                          src={firstPossibilityImage}
                          alt="First possibility for thalassemia inheritance"
                          className="w-full h-[260px] md:h-[340px] object-contain object-center p-3"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="possibility-2" className="border-b-0">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline">
                    2nd Possibility
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pb-6">
                      <p className="text-muted-foreground leading-relaxed mb-5">
                        If both parents are carriers, each child has a 50% chance of being a carrier,
                        a 25% chance of not being a carrier, and a 25% chance of developing thalassemia
                        major.
                      </p>
                      <div className="rounded-[12px] border border-border overflow-hidden bg-muted/30">
                        <img
                          src={secondPossibilityImage}
                          alt="Second possibility for thalassemia inheritance"
                          className="w-full h-[260px] md:h-[340px] object-contain object-center p-3"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="possibility-3" className="border-b-0">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline">
                    3rd Possibility
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pb-6">
                      <p className="text-muted-foreground leading-relaxed mb-5">
                        If one parent has thalassemia major and the other is not a carrier, all their
                        children will be carriers of thalassemia, but none will develop thalassemia major.
                      </p>
                      <div className="rounded-[12px] border border-border overflow-hidden bg-muted/30">
                        <img
                          src={thirdPossibilityImage}
                          alt="Third possibility for thalassemia inheritance"
                          className="w-full h-[260px] md:h-[340px] object-contain object-center p-3"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Prevention</h2>
              <p className="text-muted-foreground">Important awareness visual</p>
            </div>
            <div className="max-w-5xl mx-auto bg-card rounded-[16px] border border-border overflow-hidden">
              <img
                src={preventanceImage}
                alt="Thalassemia prevention awareness"
                className="w-full h-[340px] md:h-[520px] object-contain object-center bg-muted/30 p-3 md:p-5"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ThalassemiaPage;
