
import React from 'react';

interface NoMatchScreenProps {
  onTryAgain: () => void;
  onSearchManual: () => void;
  onBack: () => void;
}

const NoMatchScreen: React.FC<NoMatchScreenProps> = ({ onTryAgain, onSearchManual, onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark animate-in fade-in duration-300">
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10">
        <button onClick={onBack} className="text-white flex size-12 items-center cursor-pointer">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
        </button>
        <div className="flex-1 text-center pr-12">
          <span className="text-sm font-medium tracking-wider uppercase opacity-60">Identification</span>
        </div>
      </div>

      <div className="flex flex-col flex-1 px-6 pt-4 pb-10">
        <div className="flex flex-col items-center gap-8 py-4">
          <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-30"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-background-dark/80 backdrop-blur-sm"></div>
                <span className="material-symbols-outlined text-primary text-8xl relative z-20">movie_edit</span>
                <div className="absolute top-2 right-2 bg-primary rounded-full p-2 shadow-lg">
                  <span className="material-symbols-outlined text-white text-2xl">help</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-w-[480px] flex-col items-center gap-3">
            <h1 className="text-white text-2xl font-bold leading-tight tracking-tight text-center">
              Oops! We couldn't find a match.
            </h1>
            <p className="text-slate-400 text-base font-normal leading-relaxed text-center">
              The audio clip was a bit too short or unclear. Don't worry, let's try again with these tips:
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-white/70 text-sm font-bold uppercase tracking-widest pb-4">Tips for better results</h3>
          <div className="space-y-1 bg-slate-800/30 rounded-xl p-2 border border-slate-800">
            {[
              { icon: 'graphic_eq', text: 'Make sure the audio is clear' },
              { icon: 'volume_off', text: 'Minimize background noise' },
              { icon: 'timer', text: 'Record for at least 10 seconds' }
            ].map((tip, i) => (
              <div key={i} className="flex gap-x-4 py-3.5 px-4 flex-row items-center border-b border-slate-800 last:border-0">
                <div className="flex items-center justify-center size-6 rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-sm font-bold">{tip.icon}</span>
                </div>
                <p className="text-slate-200 text-base font-medium">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-10">
          <div className="flex flex-col gap-4">
            <button 
              onClick={onTryAgain}
              className="flex items-center justify-center rounded-xl h-14 bg-primary text-white text-lg font-bold transition-all active:scale-[0.98] shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined mr-2">mic</span>
              Try Again
            </button>
            <button 
              onClick={onSearchManual}
              className="flex items-center justify-center rounded-xl h-14 bg-slate-800 text-white text-lg font-bold transition-all active:scale-[0.98]"
            >
              <span className="material-symbols-outlined mr-2">search</span>
              Search Manually
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoMatchScreen;
