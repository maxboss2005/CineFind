
import React from 'react';
import { MovieResult } from '../types';

interface ResultScreenProps {
  movie: MovieResult;
  onBack: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ movie, onBack }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-background-dark animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Top App Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center p-4 justify-between bg-gradient-to-b from-black/60 to-transparent">
        <button onClick={onBack} className="text-white flex size-10 items-center justify-center rounded-full glass cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <div className="flex gap-3">
          <button className="flex items-center justify-center rounded-full glass size-10 text-white">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>

      {/* Header Image (Poster) */}
      <div className="relative w-full aspect-[2/3] max-h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-cover" 
          style={{ backgroundImage: `url(${movie.posterUrl})` }}
        ></div>
        <div className="absolute inset-0 poster-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative -mt-32 px-4 pb-28 z-10">
        <div className="flex flex-col gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary w-fit shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span className="text-xs font-bold tracking-wider uppercase">{movie.matchScore}% Audio Match</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white mt-2">{movie.title}</h1>
          <p className="text-white/60 text-lg font-medium">{movie.year} • {movie.genre} • {movie.duration}</p>
        </div>

        {/* Confidence Bar */}
        <div className="flex flex-col gap-3 p-4 glass rounded-xl mb-6">
          <div className="flex justify-between items-center">
            <p className="text-white/90 text-sm font-medium">Match Confidence</p>
            <p className="text-primary text-sm font-bold">High Accuracy</p>
          </div>
          <div className="rounded-full bg-white/10 h-2 w-full overflow-hidden">
            <div className="h-full rounded-full bg-primary" style={{ width: `${movie.matchScore}%` }}></div>
          </div>
        </div>

        {/* Synopsis */}
        <div className="mb-8">
          <h3 className="text-white/40 uppercase text-xs font-bold tracking-widest mb-3">Synopsis</h3>
          <p className="text-white/90 text-base leading-relaxed">{movie.synopsis}</p>
        </div>

        {/* Where to Watch */}
        <div className="mb-8">
          <h3 className="text-white/40 uppercase text-xs font-bold tracking-widest mb-4">Where to Watch</h3>
          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {movie.streamingPlatforms.map((platform, i) => (
              <div key={i} className="flex flex-col items-center gap-2 shrink-0">
                <div className="size-14 rounded-xl glass flex items-center justify-center p-2 hover:bg-white/10 transition-colors">
                  <div className={`w-full h-full ${platform.bg} rounded flex items-center justify-center font-bold text-[10px] ${platform.color || 'text-white'}`}>
                    {platform.icon}
                  </div>
                </div>
                <span className="text-[10px] font-medium text-white/60">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trailer */}
        <div className="mb-8">
          <h3 className="text-white/40 uppercase text-xs font-bold tracking-widest mb-4">Official Trailer</h3>
          <a 
            href={movie.trailerUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative w-full aspect-video rounded-xl overflow-hidden bg-black glass flex items-center justify-center group cursor-pointer border border-white/5"
          >
            <div className="absolute inset-0 opacity-60 bg-cover bg-center" style={{ backgroundImage: `url(${movie.posterUrl})` }}></div>
            <div className="relative z-10 size-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl fill-1">play_arrow</span>
            </div>
          </a>
        </div>
      </div>

      {/* Identify Another Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-gradient-to-t from-background-dark via-background-dark/90 to-transparent z-30">
        <button 
          onClick={onBack}
          className="w-full h-14 bg-primary text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-xl shadow-primary/40"
        >
          <span className="material-symbols-outlined">graphic_eq</span>
          Identify Another
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
