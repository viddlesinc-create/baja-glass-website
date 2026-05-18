import { Shield } from "lucide-react";

interface TrustBarProps {
  badges: string[];
  className?: string;
}

export const TrustBar = ({ badges, className = "" }: TrustBarProps) => {
  return (
    <section className={`bg-charcoal py-4 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-white/90 text-sm font-medium">
              <Shield className="h-4 w-4 text-red-accent flex-shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
