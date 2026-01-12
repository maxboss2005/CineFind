
import React from 'react';
import { AppScreen } from '../types';

interface IdentificationScreenProps {
  onStart: () => void;
  onNavigate: (screen: AppScreen) => void;
}

const IdentificationScreen: React.FC<IdentificationScreenProps> = ({ onStart, onNavigate }) => {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center pt-16 px-6 pb-24 bg-background-dark">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md">
        <nav className="flex items-center justify-between p-4 max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">movie_filter</span>
            <h1 className="text-xl font-bold tracking-tight">CineFind</h1>
          </div>
          <div className="flex gap-4">
            <button onClick={() => onNavigate(AppScreen.HISTORY)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <span className="material-symbols-outlined">history</span>
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <span className="material-symbols-outlined">info</span>
            </button>
          </div>
        </nav>
      </header>

      <div className="text-center mt-12 mb-12">
        <h2 className="text-white tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
          Identify any movie from audio
        </h2>
        <p className="text-gray-400 text-base font-normal leading-normal pb-3 pt-1 px-4 text-center max-w-xs mx-auto">
          Hold your phone near the sound source to find the film instantly.
        </p>
      </div>

      <div className="relative group mt-4">
        <div className="absolute inset-0 rounded-full bg-primary/20 scale-125 blur-xl"></div>
        <div className="absolute inset-0 rounded-full bg-primary/10 scale-150 blur-2xl"></div>
        <button 
          onClick={onStart}
          className="relative flex size-52 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary text-white shadow-2xl transition-all active:scale-95 hover:scale-105 glow-effect"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="material-symbols-outlined text-7xl leading-none">mic</span>
            <span className="text-sm font-bold uppercase tracking-widest">Tap to Identify</span>
          </div>
        </button>
      </div>

      <div className="mt-16 w-full max-w-xs flex flex-col items-center">
        <p className="text-gray-500 text-sm font-medium tracking-wide mb-6 uppercase">Ready to Listen</p>
        <div className="flex items-end justify-center h-8 gap-[3px] opacity-40">
          {[2, 4, 6, 3, 5, 8, 4, 6, 3, 7, 4, 2].map((h, i) => (
            <div key={i} className="waveform-bar" style={{ height: `${h * 4}px` }}></div>
          ))}
        </div>
      </div>

      <div className="w-full mt-12 max-w-md">
        <div className="flex w-full grow bg-transparent p-4">
          <div className="w-full gap-1 overflow-hidden bg-background-dark/50 border border-white/5 aspect-[16/9] rounded-xl flex items-center justify-center relative group">
            <div 
              className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-30 blur-[2px]" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3tU6ShfRQnxNJJ6c2uAwf_-Y8baf6QeNnlqd8lYjTFJBiH8-KtmkuSH8eo8VbRT0Bk10uNYHAuunPoRQO_O6HeGdv7wQv6Rhno3E0IE1EvOLoA9HA2NioIlYUglmHvkPsh76jeLBpiglYjql27-2WeElXZOBvFX5LMtQZarrZEASZc0kGENP1H4qigF1ZnUA87GgduvV_HzBcGItGAgQjXa6agd_1ux4XFoAkKjcYUo2D6JTwxqce2Uz7P_PWx1cvDj1o0MR_1J0S")' }}
            ></div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-white/40 mb-2">movie</span>
              <p className="text-white/40 text-xs font-medium uppercase tracking-widest">Recent Discovery Near You</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-xs z-30">
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-full py-3 px-6 flex items-center justify-center gap-3">
          <span className="material-symbols-outlined text-primary text-sm">lightbulb</span>
          <p className="text-xs font-medium text-gray-300">Tip: Hold closer for better results</p>
        </div>
      </div>
    </main>
  );
};

export default IdentificationScreen;
