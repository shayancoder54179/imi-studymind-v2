'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            See Study Mind Camp in Action
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Watch students experience their future careers at Study Mind's International Summer Career Experience in London
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Responsive video container with 16:9 aspect ratio */}
          <div className="relative aspect-video bg-black rounded-xl md:rounded-2xl shadow-2xl overflow-hidden group w-full">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/Study Mind's Law Summer  Career Camp WC.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play/Pause Overlay - Touch-friendly on mobile */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                onClick={togglePlay}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 ml-1" />
                </div>
              </div>
            )}

            {/* Video Controls - Always visible on mobile, hover on desktop */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={togglePlay}
                    className="text-white hover:text-red-500 transition-colors p-2 w-10 h-10 sm:w-auto sm:h-auto flex items-center justify-center"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-red-500 transition-colors p-2 w-10 h-10 sm:w-auto sm:h-auto flex items-center justify-center"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </button>
                </div>
                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-red-500 transition-colors p-2 w-10 h-10 sm:w-auto sm:h-auto flex items-center justify-center"
                  aria-label="Fullscreen"
                >
                  <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              <div className="mt-2">
                <p className="text-xs sm:text-sm font-medium text-white">
                  Law Career Camp 2024 - Student Experience
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            Video: Students exploring legal careers at leading London law firms
          </p>
        </motion.div>
      </div>
    </section>
  )
}

