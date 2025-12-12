"use client";

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
    <div className="bg-white rounded-card overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col h-full hover:-translate-y-1">
      <div className="relative h-40 sm:h-44 md:h-48 w-full overflow-hidden rounded-t-card flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          quality={80}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow h-full">
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-text-dark line-clamp-2 min-h-[3rem] sm:min-h-[3.5rem]">{title}</h3>
        <p className="text-xs sm:text-sm text-text-gray mb-4 sm:mb-5 md:mb-6 flex-grow line-clamp-3">{description}</p>
        <a
          href="#booking"
          className="bg-primary-blue text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-button font-semibold text-sm sm:text-base hover:bg-primary-blue-light transition-colors w-full mt-auto shadow-md hover:shadow-lg text-center"
        >
          Enroll now
        </a>
      </div>
    </div>
  );
}

