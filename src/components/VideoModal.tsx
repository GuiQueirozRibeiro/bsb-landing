"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { Botao, LINK_GOOGLE_PLAY } from "./shared";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      const vid = videoRef.current;
      vid.currentTime = 0;
      vid.muted = false;
      setIsMuted(false);
      vid.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser blocks unmuted autoplay, fallback to muted autoplay so video always plays
          vid.muted = true;
          setIsMuted(true);
          vid.play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        });
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isOpen]);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().catch(() => {});
    } else {
      vid.pause();
    }
  };

  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
  };

  const handleFullscreen = () => {
    const vid = videoRef.current as HTMLVideoElement & {
      webkitEnterFullscreen?: () => void;
      webkitRequestFullscreen?: () => Promise<void>;
    };
    if (!vid) return;
    if (vid.requestFullscreen) {
      vid.requestFullscreen().catch(() => {});
    } else if (vid.webkitEnterFullscreen) {
      vid.webkitEnterFullscreen();
    } else if (vid.webkitRequestFullscreen) {
      vid.webkitRequestFullscreen().catch(() => {});
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-[32px] bg-slate-900 border border-slate-700 shadow-2xl z-10 text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F0582C] text-xs font-black text-white">
                  BSB
                </div>
                <h3 className="text-sm font-bold">Demonstração Oficial • SGP Condomínios</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video
                ref={videoRef}
                src="/video/sgp-app-demo-16x9.mp4"
                playsInline
                loop
                muted={isMuted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={togglePlay}
                className="h-full w-full object-contain cursor-pointer"
              />

              {/* Central Play Overlay when paused */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label="Reproduzir vídeo"
                  className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F0582C] text-white shadow-2xl transition-transform hover:scale-110"
                >
                  <Play className="h-9 w-9 fill-white ml-1" />
                </button>
              )}

              {/* Controls bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-slate-950/80 px-4 py-2.5 backdrop-blur-md border border-slate-800">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    title={isPlaying ? "Pausar" : "Reproduzir"}
                    className="text-white hover:text-[#F0582C] transition-colors"
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    title={isMuted ? "Ativar som" : "Silenciar"}
                    className="text-white hover:text-[#F0582C] transition-colors"
                  >
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </button>
                  <span className="text-xs text-slate-300 font-medium hidden sm:inline">
                    SGP Condomínios • Engenharia na palma da mão
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleFullscreen}
                    title="Tela cheia"
                    className="p-1.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                  >
                    <Maximize className="h-5 w-5" />
                  </button>
                  <Botao href={LINK_GOOGLE_PLAY} variante="laranja" className="!text-xs !py-1.5 !px-3">
                    Baixar App
                  </Botao>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
