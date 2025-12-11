"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProgrammeCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProgrammeCard({
  title,
  description,
  image,
}: ProgrammeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white rounded-card overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full"
    >
      <div className="relative h-48 w-full overflow-hidden rounded-t-card flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          quality={100}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
          unoptimized={true}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow h-full">
        <h3 className="text-xl font-bold mb-3 text-text-dark line-clamp-2 min-h-[3.5rem]">{title}</h3>
        <p className="text-sm text-text-gray mb-6 flex-grow line-clamp-3">{description}</p>
        <button
          onClick={() => {
            const element = document.querySelector("#booking");
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          className="bg-primary-blue text-white px-6 py-3 rounded-button font-semibold hover:bg-primary-blue-light transition-colors w-full mt-auto shadow-md hover:shadow-lg"
        >
          Enroll now
        </button>
      </div>
    </motion.div>
  );
}

