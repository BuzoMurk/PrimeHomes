import React from 'react';

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Offset Shadow (Blue) */}
      <div className="absolute inset-0 bg-[#00AEEF] translate-x-1 translate-y-1 rounded-lg border-2 border-black" />
      
      {/* Main Card (White) */}
      <div className="absolute inset-0 bg-white border-2 border-black rounded-lg flex items-center justify-center overflow-hidden">
        {/* House Shape (Orange) */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="black" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-5 h-5 text-[#FF6321]"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="currentColor" />
          <polyline points="9 22 9 12 15 12 15 22" fill="white" />
        </svg>
        
        {/* Small Accent (Yellow) */}
        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#FFD700] rounded-full border border-black" />
      </div>
    </div>
  );
}
