import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Heart } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const loopRef = useRef<number | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // A list of calming healing notes in C Major Pentatonic (C4, D4, E4, G4, A4, C5, E5)
  const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 659.25];

  const playChime = (ctx: AudioContext, destination: AudioNode) => {
    // Select 2-3 random harmony chimes
    const numNotes = Math.floor(Math.random() * 2) + 2; 
    const now = ctx.currentTime;

    for (let i = 0; i < numNotes; i++) {
      const noteFreq = notes[Math.floor(Math.random() * notes.length)];
      
      const vco = ctx.createOscillator();
      const vca = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Soft triangle wave for a woodwind/flute-like cozy tone
      vco.type = 'triangle';
      vco.frequency.setValueAtTime(noteFreq, now);

      // Low pass filter to make it ultra-warm and soft
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);

      // Amplitude envelope (slow attack, long dreamy decay)
      vca.gain.setValueAtTime(0, now);
      vca.gain.linearRampToValueAtTime(0.04 + Math.random() * 0.03, now + 1.2); // soft chime volume
      vca.gain.exponentialRampToValueAtTime(0.0001, now + 5.0 + Math.random() * 2);

      vco.connect(filter);
      filter.connect(vca);
      vca.connect(destination);

      vco.start(now);
      vco.stop(now + 8);
    }
  };

  const startCalmMusic = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Master output volume block
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.8, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Play prime chime immediately
      playChime(ctx, masterGain);

      // Repeat soothing chords every 4 seconds
      const intervalId = window.setInterval(() => {
        if (ctx.state === 'running') {
          playChime(ctx, masterGain);
        }
      }, 4500);

      loopRef.current = intervalId;
      setIsPlaying(true);
    } catch (err) {
      console.warn("Web Audio API not supported or blocked: ", err);
    }
  };

  const stopCalmMusic = () => {
    if (loopRef.current) {
      clearInterval(loopRef.current);
      loopRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopCalmMusic();
    } else {
      startCalmMusic();
    }
  };

  useEffect(() => {
    return () => {
      if (loopRef.current) {
        clearInterval(loopRef.current);
      }
    };
  }, []);

  return (
    <div 
      id="cozy-music-player bg-slate-900" 
      className="bg-slate-900/90 border border-slate-800 rounded-full px-4 py-2 flex items-center gap-3 shadow-lg select-none hover:bg-slate-800/80 transition-all duration-300"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">
          <Music className={`w-4 h-4 ${isPlaying ? 'animate-spin' : ''}`} />
        </div>
        <div>
          <span className="block text-xs font-bold text-slate-200">배경음: 숲의 곰 자장가</span>
          <span className="block text-[10px] text-slate-400">
            {isPlaying ? '따뜻하게 연주 중...' : '소리 켜기 재생'}
          </span>
        </div>
      </div>

      {/* Visual Bouncing Waves */}
      <div className="flex items-center gap-0.5 h-3 px-2">
        {[1, 2, 3, 4, 5, 2, 4, 1].map((h, i) => (
          <span
            key={i}
            className="w-0.5 bg-gradient-to-t from-sky-400 to-mint-400 rounded-full transition-all duration-500"
            style={{
              height: isPlaying ? `${h * 4}px` : '3px',
              animation: isPlaying ? `bounce 1s ease-in-out infinite` : 'none',
              animationDelay: `${i * 120}ms`
            }}
          />
        ))}
      </div>

      <button
        id="bgm-play-pause-button"
        onClick={toggleMusic}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
          isPlaying 
            ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20' 
            : 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20'
        }`}
        title={isPlaying ? '배경 음악 정지' : '따뜻한 모형 치유 연주 시작'}
      >
        {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>

      {/* CSS Bounce Animation Injection inside tailwind or pure inline */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(2.2); }
        }
      `}</style>
    </div>
  );
}
