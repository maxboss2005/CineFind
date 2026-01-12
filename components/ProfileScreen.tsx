
import React from 'react';
import { AppScreen } from '../types';

interface ProfileScreenProps {
  onNavigate: (s: AppScreen) => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark pb-32">
      <div className="sticky top-0 z-50 backdrop-blur-md bg-background-dark/80 flex items-center p-4 justify-between border-b border-gray-800">
        <button onClick={() => onNavigate(AppScreen.IDENTIFY)} className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display pr-10">Profile</h2>
      </div>

      <div className="flex flex-col p-6 mt-2 items-center">
        <div className="relative mb-4">
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-primary/20 shadow-xl shadow-primary/10" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgfkv1ymjkYo1Ql0UoO__pXrdqPjlxeq-kl4ukXWEEuar7hGnZGlzF0Jp6-KDdmGQ5ymC3D0yjstcCvs3WjzCRFXeQVhZ7yITeC8LTyCqSBx2K868IfwEkON7_rtI3Op6kHGzmtf_HnDT2yKRMeBmzeq_wbKJa49dVXDdOhd0no9gTklpM7gRjwbB9DG1tvYnTI08u___GSN9Ngt3zHUeyYfQ9_ndo0KQppSO7JwWqDtp9kvdV6Ps5qMQRUkMyYeDRr3q5lw-uiNuX")' }}
          ></div>
          <div className="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full border-2 border-background-dark">
            <span className="material-symbols-outlined text-sm">edit</span>
          </div>
        </div>
        <p className="text-white text-2xl font-bold tracking-tight">Alex Cinephile</p>
        <p className="text-gray-500 text-sm">Elite Member since Oct 2023</p>
      </div>

      <div className="flex gap-3 px-6 py-2">
        {[
          { label: 'Matches', val: '42', highlight: true },
          { label: 'Watchlist', val: '15' },
          { label: 'Reviews', val: '128' }
        ].map((stat, i) => (
          <div key={i} className="flex-1 flex flex-col gap-1 rounded-xl border border-gray-800 bg-transparent p-4 items-center text-center">
            <p className={`${stat.highlight ? 'text-primary' : 'text-white'} text-2xl font-bold`}>{stat.val}</p>
            <p className="text-gray-500 text-[10px] font-medium uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 px-6 space-y-6">
        <div>
          <h3 className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3 opacity-70">Account Settings</h3>
          <div className="bg-charcoal/50 rounded-2xl overflow-hidden border border-gray-800">
            <div className="flex items-center gap-4 px-4 h-14 justify-between border-b border-gray-800 hover:bg-white/5 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 size-9"><span className="material-symbols-outlined text-[20px]">shield_person</span></div>
                <p className="text-sm font-medium">Account Security</p>
              </div>
              <span className="material-symbols-outlined text-gray-600 text-[20px]">chevron_right</span>
            </div>
            <div className="flex items-center gap-4 px-4 h-14 justify-between hover:bg-white/5 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="text-orange-500 flex items-center justify-center rounded-lg bg-orange-500/10 size-9"><span className="material-symbols-outlined text-[20px]">notifications</span></div>
                <p className="text-sm font-medium">Notifications</p>
              </div>
              <span className="material-symbols-outlined text-gray-600 text-[20px]">chevron_right</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3 opacity-70">App Permissions</h3>
          <div className="bg-charcoal/50 rounded-2xl overflow-hidden border border-gray-800">
            <div className="flex items-center gap-4 px-4 h-16 justify-between border-b border-gray-800">
              <div className="flex items-center gap-4">
                <div className="text-green-500 flex items-center justify-center rounded-lg bg-green-500/10 size-9"><span className="material-symbols-outlined text-[20px]">mic</span></div>
                <div className="flex flex-col"><p className="text-sm font-medium">Microphone Access</p><p className="text-[10px] text-gray-500">For sound matching</p></div>
              </div>
              <div className="w-10 h-5 bg-primary rounded-full relative"><div className="absolute right-0.5 top-0.5 size-4 bg-white rounded-full"></div></div>
            </div>
            <div className="flex items-center gap-4 px-4 h-16 justify-between">
              <div className="flex items-center gap-4">
                <div className="text-purple-500 flex items-center justify-center rounded-lg bg-purple-500/10 size-9"><span className="material-symbols-outlined text-[20px]">dark_mode</span></div>
                <p className="text-sm font-medium">Cinema Mode (Dark)</p>
              </div>
              <div className="w-10 h-5 bg-primary rounded-full relative"><div className="absolute right-0.5 top-0.5 size-4 bg-white rounded-full"></div></div>
            </div>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 font-bold py-4 rounded-2xl border border-red-500/30 transition-all active:scale-[0.98]">
          <span className="material-symbols-outlined text-[20px]">logout</span>
          <span>Log Out</span>
        </button>

        <div className="flex flex-col items-center opacity-40 pb-10">
          <p className="text-[10px] font-medium tracking-widest uppercase">CineFind v2.4.0</p>
          <p className="text-[9px] mt-1">Made for cinema lovers</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
