import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BrutalistIconProps {
  icon: LucideIcon;
  size?: number;
  containerSize?: string;
  className?: string;
  bgColor?: string;
  shadowColor?: string;
  iconColor?: string;
  rounded?: string;
}

export default function BrutalistIcon({ 
  icon: Icon, 
  size = 18, 
  containerSize = "w-9 h-9",
  className = "",
  bgColor = "bg-white",
  shadowColor = "bg-[#00AEEF]",
  iconColor = "text-black",
  rounded = "rounded-lg"
}: BrutalistIconProps) {
  return (
    <div className={`relative ${containerSize} shrink-0 ${className}`}>
      {/* Offset Shadow */}
      <div className={`absolute inset-0 ${shadowColor} translate-x-0.5 translate-y-0.5 ${rounded} border-2 border-black`} />
      
      {/* Main Card */}
      <div className={`absolute inset-0 ${bgColor} border-2 border-black ${rounded} flex items-center justify-center overflow-hidden`}>
        <Icon size={size} className={iconColor} />
      </div>
    </div>
  );
}
