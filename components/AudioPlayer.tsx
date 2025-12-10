import React, { useState, useEffect, useRef } from 'react';
import { Play, Square, Pause, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  text: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ text }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [supported, setSupported] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setSupported(false);
    }
  }, []);

  useEffect(() => {
    // Stop audio if the text source changes (navigating to new page)
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  }, [text]);

  const handlePlay = () => {
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    // Clean up previous
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9; // Slightly slower for narration feel
    utterance.pitch = 1.0;
    
    // Try to find a good English voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.lang === 'en-GB' || v.name.includes('Google UK English Female'));
    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  if (!supported) {
    return <div className="text-red-500 text-xs mt-2">Audio not supported on this device.</div>;
  }

  return (
    <div className="bg-amber-100 rounded-xl p-4 shadow-sm border border-amber-200 mt-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-amber-500 p-2 rounded-full text-white">
          <Volume2 size={20} />
        </div>
        <div>
          <h3 className="text-amber-900 font-bold text-sm">Audio Guide</h3>
          <p className="text-amber-700 text-xs">{isPlaying ? 'Playing...' : 'Tap to listen'}</p>
        </div>
      </div>
      
      <div className="flex gap-2">
        {!isPlaying && !isPaused ? (
          <button 
            onClick={handlePlay}
            className="p-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-colors shadow-md"
            aria-label="Play"
          >
            <Play size={24} fill="currentColor" />
          </button>
        ) : (
          <>
            {isPlaying ? (
               <button 
               onClick={handlePause}
               className="p-3 bg-amber-200 hover:bg-amber-300 text-amber-800 rounded-full transition-colors"
               aria-label="Pause"
             >
               <Pause size={24} fill="currentColor" />
             </button>
            ) : (
              <button 
              onClick={handlePlay}
              className="p-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-colors shadow-md"
              aria-label="Resume"
            >
              <Play size={24} fill="currentColor" />
            </button>
            )}
            
            <button 
              onClick={handleStop}
              className="p-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition-colors"
              aria-label="Stop"
            >
              <Square size={20} fill="currentColor" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
