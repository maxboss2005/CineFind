
import React, { useState } from 'react';
import { MovieResult } from '../types';
import { MOCK_MOVIES } from '../constants';

interface ManualSearchScreenProps {
  onBack: () => void;
  onSelectMovie: (m: MovieResult) => void;
}

const ManualSearchScreen: React.FC<ManualSearchScreenProps> = ({ onBack, onSelectMovie }) => {
  const [query, setQuery] = useState('Christopher Nolan');

  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-white border-x border-white/5 pb-20">
      <header className="sticky top-0 z-30 bg-background-dark/95 backdrop-blur-md pt-4 pb-2">
        <div className="flex items-center px-4 gap-2">
          <button onClick={onBack} className="text-white flex size-10 items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <h2 className="text-white text-lg font-bold leading-tight flex-1">Search</h2>
          <div className="size-10"></div>
        </div>

        <div className="px-4 py-3">
          <div className="flex h-12 rounded-xl bg-charcoal shadow-lg shadow-primary/10">
            <div className="text-primary flex items-center justify-center pl-4"><span className="material-symbols-outlined">search</span></div>
            <input 
              className="flex-1 bg-transparent border-none text-white focus:ring-0 px-4 text-base" 
              value={query} 
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={() => setQuery('')} className="pr-4 text-gray-500"><span className="material-symbols-outlined">cancel</span></button>
          </div>
        </div>

        <div className="flex gap-2 p-4 pt-0 overflow-x-auto no-scrollbar">
          <button className="flex h-9 shrink-0 items-center gap-x-2 rounded-xl bg-primary px-4 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-[20px]">tune</span>
            <span className="text-sm font-semibold">Filter</span>
          </button>
          {['Genre', 'Year', 'Rating'].map((f) => (
            <button key={f} className="flex h-9 shrink-0 items-center gap-x-2 rounded-xl bg-charcoal px-4">
              <span className="text-sm font-medium">{f}</span>
              <span className="material-symbols-outlined text-[20px]">expand_more</span>
            </button>
          ))}
        </div>
      </header>

      <div className="px-4"><h3 className="text-white/60 text-[10px] font-bold uppercase tracking-widest pb-2 pt-2">8 Results Found</h3></div>

      <main className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4 p-4">
          {MOCK_MOVIES.concat(MOCK_MOVIES).map((movie, i) => (
            <div key={`${movie.id}-${i}`} onClick={() => onSelectMovie(movie)} className="flex flex-col gap-2 group cursor-pointer">
              <div 
                className="relative bg-cover bg-center flex flex-col rounded-xl overflow-hidden aspect-[2/3] ring-1 ring-white/10 group-hover:ring-primary/50 transition-all duration-300" 
                style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.9) 100%), url(${movie.posterUrl})` }}
              >
                <div className="absolute top-2 right-2 bg-primary/90 backdrop-blur-md rounded-lg px-2 py-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-white text-[14px] fill-1">star</span>
                  <span className="text-white text-xs font-bold">8.8</span>
                </div>
              </div>
              <div>
                <p className="text-white text-sm font-bold truncate group-hover:text-primary transition-colors">{movie.title}</p>
                <p className="text-white/50 text-[10px] font-medium mt-1">{movie.year} • {movie.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ManualSearchScreen;
