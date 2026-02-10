interface ImpactStatProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const ImpactStat = ({ value, label, icon }: ImpactStatProps) => {
  return (
    <div className="text-center p-6 animate-count-up">
      {icon && <div className="flex justify-center mb-3 text-primary">{icon}</div>}
      <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{value}</div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

export default ImpactStat;
