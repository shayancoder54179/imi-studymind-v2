"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

const videos = [
  { id: 1, name: "Sarah", programme: "Medicine" },
  { id: 2, name: "James", programme: "Engineering" },
  { id: 3, name: "Aisha", programme: "Business" },
  { id: 4, name: "Michael", programme: "Law" },
  { id: 5, name: "Emma", programme: "Psychology" },
  { id: 6, name: "David", programme: "Computer Science" },
  { id: 7, name: "Sophia", programme: "Architecture" },
  { id: 8, name: "Oliver", programme: "Investment Banking" },
  { id: 9, name: "Isabella", programme: "Media & Journalism" },
];

export default function HearFromStudentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-gradient-to-br from-blue-50 to-sky-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Hear from Students
          </h2>
          <p className="text-lg text-text-gray">
            Real experiences from real students
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative aspect-video rounded-card overflow-hidden bg-gray-200">
                <Image
                  src={`https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format&sig=${video.id}`}
                  alt={`${video.name} - ${video.programme}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-blue ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">{video.name}</p>
                  <p className="text-white/80 text-sm">{video.programme}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-4xl w-full aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white">Video player would go here</p>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
                aria-label="Close video"
              >
                ×
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

