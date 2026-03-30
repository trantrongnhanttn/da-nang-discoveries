import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { CATEGORIES, type Nomination } from "@/lib/data";

interface NominationCardProps {
  nomination: Nomination;
  index: number;
}

const NominationCard = ({ nomination, index }: NominationCardProps) => {
  const category = CATEGORIES.find((c) => c.id === nomination.category);
  const [votes, setVotes] = useState(nomination.votes || 0);
  const [voted, setVoted] = useState(false);

  const handleVote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!voted) {
      setVotes((v) => v + 1);
      setVoted(true);
    } else {
      setVotes((v) => v - 1);
      setVoted(false);
    }
  };

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
        {/* Colored top accent */}
        <div className={`h-1.5 bg-gradient-to-r ${category?.color || "from-primary to-primary"}`} />
        <div className={`aspect-[16/10] ${category?.gradient || "bg-gradient-primary"} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
            {category?.icon}
          </div>
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/10" />
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground shadow-sm">
              {category?.icon} {category?.name}
            </span>
          </div>
          {/* Vote count badge */}
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-semibold text-foreground shadow-sm">
              <Heart size={12} className={voted ? "fill-destructive text-destructive" : "text-muted-foreground"} />
              {votes}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
            {nomination.placeName}
          </h3>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
            <MapPin size={14} className={category?.textColor} />
            <span>{nomination.placeAddress}</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {nomination.description}
          </p>
          {/* Vote button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleVote}
            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              voted
                ? "bg-destructive/10 text-destructive border border-destructive/20"
                : "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
            }`}
          >
            <Heart size={16} className={voted ? "fill-destructive" : ""} />
            {voted ? "Đã bình chọn" : "Bình chọn"}
          </motion.button>
        </div>
      </Link>
    </motion.div>
  );
};

export default NominationCard;
