
import React from 'react';
import { AppScreen } from '../types';

interface DiscoverScreenProps {
  onNavigate: (s: AppScreen) => void;
}

const DiscoverScreen: React.FC<DiscoverScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-navy-deep pb-32">
      <div className="sticky top-0 z-50 px-4 py-3 bg-navy-deep/80 backdrop-blur-md">
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-4 text-white/40">search</span>
          <input 
            className="w-full bg-charcoal border-none rounded-full py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary placeholder:text-white/30 text-white" 
            placeholder="Search movies, actors, directors..." 
            type="text" 
          />
        </div>
      </div>

      <main className="flex-1">
        <section className="relative w-full aspect-[4/5] mb-8">
          <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZyH_df-jjnY7mujTbNIDudn3UM-jsRKDKZ4yBiBg2-vYNw7YvTCDk6tHYPx0OikVw1VeFR7rhh_su58-BaG9bSrluKrxrmDu4VNGW40VEI7vtKBdklg3KOIKj0B7qvhmx6yhcjZR0T_rmEirS5cOW0evCEERdZPGBWVfOwDtfXuNhSnN2oBsa-XFMT3RCpDG8gwgH_sPvx1EaCFlcImPyk0G0zT5SH4bZtxHzkcozS0yXzfW-fiUZc2oyNAmiratKcC-nl07ZVW0h")' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-3">
              <span className="size-1.5 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase">Trending Today</span>
            </div>
            <h2 className="text-4xl font-bold mb-2 tracking-tight">Oppenheimer</h2>
            <p className="text-white/60 text-sm mb-6 max-w-[280px]">The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.</p>
            <div className="flex gap-3 w-full max-w-[300px]">
              <button className="flex-1 h-12 bg-primary rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-[20px] fill-1">play_arrow</span>
                Watch Trailer
              </button>
              <button className="size-12 rounded-xl glass flex items-center justify-center active:scale-95 transition-transform">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between px-6 mb-4">
            <h3 className="text-lg font-bold">Popular Now</h3>
            <span className="text-primary text-xs font-bold uppercase tracking-wider cursor-pointer">See All</span>
          </div>
          <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar">
            {[
                { title: 'Dune: Part Two', genre: 'Sci-Fi • Adventure', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBesTMViykeaRMbRpHHnfDP8NSrADOC6s2unkr8CQSUtRiZtKtgpuB137-HDuZT6F0OZeOkDcZGYFOLsllEPCJsZsMAWB7-wrQSENy3dAHy94TVwktaj6ossunydL3TbOxY2gvS-kksY8qfPENgdbh-LNc65Jdco1CWEEqNkzS2mhbK-DjT6Tej44PRaDETFDIvH-eQ_Z1hjPaUHcWHBSPBZGQNN2ZQIj-Vri5_VYE_XLH9RtL4rvIsd3x6H7Uw6o-wGMduKc7r6LNP' },
                { title: 'The Batman', genre: 'Action • Crime', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZyH_df-jjnY7mujTbNIDudn3UM-jsRKDKZ4yBiBg2-vYNw7YvTCDk6tHYPx0OikVw1VeFR7rhh_su58-BaG9bSrluKrxrmDu4VNGW40VEI7vtKBdklg3KOIKj0B7qvhmx6yhcjZR0T_rmEirS5cOW0evCEERdZPGBWVfOwDtfXuNhSnN2oBsa-XFMT3RCpDG8gwgH_sPvx1EaCFlcImPyk0G0zT5SH4bZtxHzkcozS0yXzfW-fiUZc2oyNAmiratKcC-nl07ZVW0h' }
            ].map((m, i) => (
                <div key={i} className="flex-none w-36">
                    <div className="aspect-[2/3] rounded-2xl overflow-hidden mb-3 bg-charcoal">
                        <img src={m.img} alt={m.title} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-bold text-sm truncate">{m.title}</h4>
                    <p className="text-xs text-white/40">{m.genre}</p>
                </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
            <div className="flex items-center justify-between px-6 mb-4">
                <h3 className="text-lg font-bold">Top ID Hits</h3>
                <span className="text-primary text-xs font-bold uppercase tracking-wider">Most Searched</span>
            </div>
            <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar">
                <div className="flex-none w-64 bg-charcoal/50 rounded-2xl p-3 flex gap-4 border border-white/5">
                    <div className="size-20 rounded-lg overflow-hidden bg-navy-deep shrink-0">
                        <img alt="Movie" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZyH_df-jjnY7mujTbNIDudn3UM-jsRKDKZ4yBiBg2-vYNw7YvTCDk6tHYPx0OikVw1VeFR7rhh_su58-BaG9bSrluKrxrmDu4VNGW40VEI7vtKBdklg3KOIKj0B7qvhmx6yhcjZR0T_rmEirS5cOW0evCEERdZPGBWVfOwDtfXuNhSnN2oBsa-XFMT3RCpDG8gwgH_sPvx1EaCFlcImPyk0G0zT5SH4bZtxHzkcozS0yXzfW-fiUZc2oyNAmiratKcC-nl07ZVW0h"/>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="text-[10px] font-bold text-primary mb-1 uppercase">98% Match Rate</div>
                        <h4 className="font-bold text-sm">Blade Runner 2049</h4>
                        <p className="text-[11px] text-white/40">Sci-Fi • 2017</p>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <button onClick={() => onNavigate(AppScreen.IDENTIFY)} className="fixed bottom-28 right-6 size-14 bg-primary text-white rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center z-40 active:scale-90 transition-transform">
        <span className="material-symbols-outlined text-3xl">graphic_eq</span>
      </button>
    </div>
  );
};

export default DiscoverScreen;
