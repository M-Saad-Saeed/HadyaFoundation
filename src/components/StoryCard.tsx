import { Quote } from "lucide-react";

interface StoryCardProps {
  name: string;
  role: string;
  quote: string;
  imageUrl?: string;
}

const StoryCard = ({ name, role, quote, imageUrl }: StoryCardProps) => {
  return (
    <div className="bg-card rounded-[16px] border border-border p-6 md:p-8 hover:shadow-lg transition-all duration-300">
      <Quote className="w-8 h-8 text-primary/20 mb-4" />
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div>
          <div className="text-sm font-bold">{name}</div>
          <div className="text-xs text-muted-foreground">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
