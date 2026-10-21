"use client"

import Image from 'next/image';

export default function Axelotle() {
  return (
    <div>
      <Image 
        src="/Images/minecraft-axelotle.gif" 
        alt="Minecraft axolotl" 
        width={300} 
        height={300} 
        unoptimized // 👈 Prevents Next.js from freezing the animation
      />
    </div>
  );
}