
import React, { useState, useEffect, useCallback } from 'react';
import { AppScreen, MovieResult, IdentificationHistory } from './types';
import { MOCK_MOVIES } from './constants';
import IdentificationScreen from './components/IdentificationScreen';
import ResultScreen from './components/ResultScreen';
import HistoryScreen from './components/HistoryScreen';
import DiscoverScreen from './components/DiscoverScreen';
import ProfileScreen from './components/ProfileScreen';
import NoMatchScreen from './components/NoMatchScreen';
import ManualSearchScreen from './components/ManualSearchScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.IDENTIFY);
  const [lastResult, setLastResult] = useState<MovieResult | null>(null);
  const [history, setHistory] = useState<IdentificationHistory[]>([]);

  // Simulation of audio identification
  const startIdentification = useCallback(() => {
    setCurrentScreen(AppScreen.IDENTIFYING);
    
    // Simulate API delay
    setTimeout(() => {
      const shouldFail = Math.random() < 0.2; // 20% fail rate for demo
      if (shouldFail) {
        setCurrentScreen(AppScreen.NO_MATCH);
      } else {
        const randomMovie = MOCK_MOVIES[Math.floor(Math.random() * MOCK_MOVIES.length)];
        setLastResult(randomMovie);
        
        // Add to history
        const newEntry: IdentificationHistory = {
          id: Date.now().toString(),
          movie: randomMovie,
          timestamp: new Date().toLocaleString([], { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
          })
        };
        setHistory(prev => [newEntry, ...prev]);
        setCurrentScreen(AppScreen.RESULT);
      }
    }, 4000);
  }, []);

  const navigateTo = (screen: AppScreen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen max-w-md mx-auto relative overflow-x-hidden bg-background-dark text-white shadow-2xl">
      {currentScreen === AppScreen.IDENTIFY && (
        <IdentificationScreen 
          onStart={startIdentification} 
          onNavigate={navigateTo} 
        />
      )}

      {currentScreen === AppScreen.IDENTIFYING && (
        <IdentifyingState onCancel={() => setCurrentScreen(AppScreen.IDENTIFY)} />
      )}

      {currentScreen === AppScreen.RESULT && lastResult && (
        <ResultScreen 
          movie={lastResult} 
          onBack={() => setCurrentScreen(AppScreen.IDENTIFY)} 
        />
      )}

      {currentScreen === AppScreen.NO_MATCH && (
        <NoMatchScreen 
          onTryAgain={startIdentification} 
          onSearchManual={() => setCurrentScreen(AppScreen.SEARCH)}
          onBack={() => setCurrentScreen(AppScreen.IDENTIFY)}
        />
      )}

      {currentScreen === AppScreen.HISTORY && (
        <HistoryScreen 
          history={history} 
          onNavigate={navigateTo}
          onSelectMovie={(movie) => {
            setLastResult(movie);
            setCurrentScreen(AppScreen.RESULT);
          }}
        />
      )}

      {currentScreen === AppScreen.DISCOVER && (
        <DiscoverScreen onNavigate={navigateTo} />
      )}

      {currentScreen === AppScreen.PROFILE && (
        <ProfileScreen onNavigate={navigateTo} />
      )}

      {currentScreen === AppScreen.SEARCH && (
        <ManualSearchScreen onBack={() => setCurrentScreen(AppScreen.IDENTIFY)} onSelectMovie={(m) => {
            setLastResult(m);
            setCurrentScreen(AppScreen.RESULT);
        }} />
      )}

      {/* Persistent Bottom Nav for main tabs */}
      {[AppScreen.IDENTIFY, AppScreen.HISTORY, AppScreen.DISCOVER, AppScreen.PROFILE].includes(currentScreen) && (
        <BottomNav activeScreen={currentScreen} onNavigate={navigateTo} />
      )}
    </div>
  );
};

const IdentifyingState: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 bg-background-dark flex flex-col items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-background-dark to-background-dark"></div>
        <div className="relative flex items-center justify-center mb-16">
            <div className="absolute w-48 h-48 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute w-64 h-64 border border-primary/20 rounded-full"></div>
            <div className="relative z-10 w-32 h-32 rounded-full bg-primary flex items-center justify-center glow-effect shadow-primary/50">
                <span className="material-symbols-outlined text-white text-5xl fill-1">graphic_eq</span>
            </div>
            {/* Animated Waveform Bars */}
            <div className="absolute inset-0 flex items-center justify-center gap-1.5 opacity-60">
                {[12, 20, 16, 24, 16, 20, 12].map((h, i) => (
                    <div key={i} className={`w-1.5 bg-primary rounded-full animate-bounce`} style={{ height: `${h * 4}px`, animationDelay: `${i * 0.1}s` }}></div>
                ))}
            </div>
        </div>
        <div className="text-center space-y-3 relative z-10">
            <h1 className="text-2xl font-bold tracking-tight text-white/90">Listening to the scene...</h1>
            <div className="flex items-center justify-center gap-2">
                <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
                <p className="text-sm font-medium text-white/40 tracking-wide uppercase">Analyzing audio fingerprints</p>
            </div>
        </div>
        <button 
          onClick={onCancel}
          className="mt-20 px-8 py-3 rounded-full glass text-white/50 text-sm font-medium hover:text-white transition-colors active:scale-95"
        >
            Cancel
        </button>
    </div>
  );
};

const BottomNav: React.FC<{ activeScreen: AppScreen, onNavigate: (s: AppScreen) => void }> = ({ activeScreen, onNavigate }) => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-navy-deep/95 backdrop-blur-xl border-t border-white/10 z-40 h-20 pb-4">
            <div className="flex justify-around items-center h-full">
                <button onClick={() => onNavigate(AppScreen.DISCOVER)} className={`flex flex-col items-center gap-1 ${activeScreen === AppScreen.DISCOVER ? 'text-primary' : 'text-white/40'}`}>
                    <span className={`material-symbols-outlined text-[26px] ${activeScreen === AppScreen.DISCOVER ? 'fill-1' : ''}`}>explore</span>
                    <span className="text-[10px] font-medium">Discover</span>
                </button>
                <button onClick={() => onNavigate(AppScreen.IDENTIFY)} className={`flex flex-col items-center gap-1 -mt-8`}>
                    <div className={`size-14 rounded-full flex items-center justify-center shadow-lg transition-all ${activeScreen === AppScreen.IDENTIFY ? 'bg-primary shadow-primary/40' : 'bg-gray-700 shadow-black/40'}`}>
                        <span className="material-symbols-outlined text-white text-3xl">mic</span>
                    </div>
                    <span className={`text-[10px] font-bold ${activeScreen === AppScreen.IDENTIFY ? 'text-primary' : 'text-white/40'}`}>Identify</span>
                </button>
                <button onClick={() => onNavigate(AppScreen.HISTORY)} className={`flex flex-col items-center gap-1 ${activeScreen === AppScreen.HISTORY ? 'text-primary' : 'text-white/40'}`}>
                    <span className={`material-symbols-outlined text-[26px] ${activeScreen === AppScreen.HISTORY ? 'fill-1' : ''}`}>history</span>
                    <span className="text-[10px] font-medium">History</span>
                </button>
                <button onClick={() => onNavigate(AppScreen.PROFILE)} className={`flex flex-col items-center gap-1 ${activeScreen === AppScreen.PROFILE ? 'text-primary' : 'text-white/40'}`}>
                    <span className={`material-symbols-outlined text-[26px] ${activeScreen === AppScreen.PROFILE ? 'fill-1' : ''}`}>person</span>
                    <span className="text-[10px] font-medium">Profile</span>
                </button>
            </div>
        </nav>
    );
};

export default App;
