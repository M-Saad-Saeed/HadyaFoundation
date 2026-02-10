import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
}

const EventCard = ({ title, date, location, description }: EventCardProps) => {
  return (
    <div className="bg-card rounded-[16px] border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-lg bg-accent/10 flex flex-col items-center justify-center shrink-0">
            <span className="text-xs font-bold text-accent uppercase">{date.split(" ")[0]}</span>
            <span className="text-lg font-extrabold text-accent leading-none">{date.split(" ")[1]}</span>
          </div>
          <div>
            <h3 className="font-bold text-base">{title}</h3>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
              <MapPin className="w-3 h-3" />
              {location}
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
        <Button variant="ghost" size="sm" className="text-primary font-semibold px-0 hover:bg-transparent hover:underline">
          <Calendar className="w-4 h-4" />
          Register Now
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
