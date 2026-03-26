import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { CATEGORIES, type Nomination } from "@/lib/data";

interface NominationCardProps {
  nomination: Nomination;
  index: number;
}

const NominationCard = ({ nomination, index }: NominationCardProps) => {
  const category = CATEGORIES.find((c) => c.id === nomination.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/dia-diem/${nomination.id}`}
        className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
      >
        <div className="aspect-[16/10] bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
            {category?.icon}
          </div>
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground">
              {category?.icon} {category?.name}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
            {nomination.placeName}
          </h3>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
            <MapPin size={14} />
            <span>{nomination.placeAddress}</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {nomination.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default NominationCard;
