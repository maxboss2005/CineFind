
import React from 'react';
import { IdentificationHistory, AppScreen, MovieResult } from '../types';

interface HistoryScreenProps {
  history: IdentificationHistory[];
  onNavigate: (s: AppScreen) => void;
  onSelectMovie: (m: MovieResult) => void;
}

const HistoryScreen: React.FC<HistoryScreenProps> = ({ history, onNavigate, onSelectMovie }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark pb-24">
      <div className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md px-4 pt-10 pb-4">
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate(AppScreen.IDENTIFY)} className="flex size-10 items-center justify-start">
            <span className="material-symbols-outlined text-white">arrow_back_ios</span>
          </button>
          <h2 className="text-white text-xl font-bold leading-tight tracking-tight flex-1 text-center">History</h2>
          <div className="flex size-10 items-center justify-end">
            <span className="material-symbols-outlined text-white">tune</span>
          </div>
        </div>
      </div>

      <div className="px-4 py-3">
        <div className="flex w-full h-12 items-stretch rounded-xl overflow-hidden bg-charcoal">
          <div className="text-[#9da1b9] flex items-center justify-center pl-4">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input 
            className="flex-1 bg-transparent border-none text-white focus:ring-0 px-4 pl-2 text-base" 
            placeholder="Search your matches..." 
          />
        </div>
      </div>

      <div className="px-4 py-2 mt-2">
        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Recent Identifications</p>
      </div>

      {history.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center opacity-40 py-20">
          <span className="material-symbols-outlined text-6xl mb-4">history</span>
          <p className="text-lg">No identifications yet.</p>
          <p className="text-sm mt-2">Identify a movie to see it in your history.</p>
        </div>
      ) : (
        <div className="flex flex-col">
          {history.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onSelectMovie(item.movie)}
              className="flex gap-4 px-4 py-4 justify-between items-center hover:bg-white/5 transition-colors border-b border-white/5 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div 
                    className="bg-center bg-no-repeat aspect-[2/3] bg-cover rounded-lg w-[60px] h-[80px]" 
                    style={{ backgroundImage: `url(${item.movie.posterUrl})` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                    <span className="material-symbols-outlined text-white text-2xl">play_circle</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-base font-semibold">{item.movie.title} ({item.movie.year})</p>
                  <p className="text-gray-500 text-xs mt-1">{item.timestamp}</p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="material-symbols-outlined text-primary text-[14px] font-bold">verified</span>
                    <p className="text-primary text-xs font-bold uppercase">{item.movie.matchScore}% Match</p>
                  </div>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-600">chevron_right</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryScreen;
