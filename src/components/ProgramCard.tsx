interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProgramCard = ({ icon, title, description }: ProgramCardProps) => {
  return (
    <div className="bg-card rounded-[16px] border border-border p-6 md:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ProgramCard;
