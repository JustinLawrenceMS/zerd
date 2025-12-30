// Scene SVG illustrations
export const sceneImages = {
  1: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Night sky -->
  <rect width="800" height="600" fill="#0a1428"/>
  
  <!-- Stars -->
  <circle cx="100" cy="50" r="1.5" fill="#ffffff"/>
  <circle cx="200" cy="80" r="1" fill="#ffffff"/>
  <circle cx="350" cy="40" r="1.5" fill="#ffffff"/>
  <circle cx="500" cy="70" r="1" fill="#ffffff"/>
  <circle cx="650" cy="50" r="1.5" fill="#ffffff"/>
  <circle cx="750" cy="90" r="1" fill="#ffffff"/>
  <circle cx="150" cy="120" r="1" fill="#ffffff"/>
  <circle cx="600" cy="100" r="1" fill="#ffffff"/>
  <circle cx="700" cy="150" r="1" fill="#ffffff"/>
  
  <!-- Moon -->
  <circle cx="700" cy="100" r="50" fill="#e8d4a0"/>
  
  <!-- Forest trees (silhouettes) -->
  <polygon points="50,600 100,350 150,600" fill="#1a3a1a"/>
  <polygon points="120,600 180,300 240,600" fill="#0d2e0d"/>
  <polygon points="280,600 350,280 420,600" fill="#1a3a1a"/>
  <polygon points="500,600 570,320 640,600" fill="#0d2e0d"/>
  <polygon points="650,600 730,300 810,600" fill="#1a3a1a"/>
  
  <!-- Shorter trees -->
  <polygon points="30,600 60,400 90,600" fill="#0d2e0d"/>
  <polygon points="450,600 490,380 530,600" fill="#1a3a1a"/>
  
  <!-- Dungeon door -->
  <rect x="320" y="380" width="160" height="220" fill="#3d2817" stroke="#5c4a2e" stroke-width="3"/>
  <circle cx="450" cy="490" r="8" fill="#8b7355"/>
  
  <!-- Door details -->
  <line x1="340" y1="380" x2="340" y2="600" stroke="#5c4a2e" stroke-width="2"/>
  <line x1="360" y1="380" x2="360" y2="600" stroke="#5c4a2e" stroke-width="1"/>
  <line x1="380" y1="380" x2="380" y2="600" stroke="#5c4a2e" stroke-width="1"/>
  <line x1="400" y1="380" x2="400" y2="600" stroke="#5c4a2e" stroke-width="1"/>
  <line x1="420" y1="380" x2="420" y2="600" stroke="#5c4a2e" stroke-width="1"/>
  <line x1="440" y1="380" x2="440" y2="600" stroke="#5c4a2e" stroke-width="1"/>
  <line x1="460" y1="380" x2="460" y2="600" stroke="#5c4a2e" stroke-width="1"/>
  
  <!-- Glow around door -->
  <circle cx="400" cy="490" r="80" fill="#4a3a2a" opacity="0.3"/>
  
  <!-- Text -->
  <text x="400" y="550" font-size="24" fill="#90ee90" text-anchor="middle" font-family="Arial">
    Dark Dungeon Entrance
  </text>
</svg>`,

  3: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Sky background -->
  <rect width="800" height="600" fill="#1a1a2e"/>
  
  <!-- Forest canopy -->
  <ellipse cx="400" cy="150" rx="350" ry="120" fill="#0d2817" opacity="0.8"/>
  
  <!-- Wizard's hut -->
  <rect x="300" y="280" width="200" height="150" fill="#8b6f47"/>
  <polygon points="300,280 400,150 500,280" fill="#6b4423"/>
  
  <!-- Roof details -->
  <line x1="300" y1="280" x2="400" y2="150" stroke="#5c3a1f" stroke-width="2"/>
  <line x1="500" y1="280" x2="400" y2="150" stroke="#5c3a1f" stroke-width="2"/>
  
  <!-- Door -->
  <rect x="370" y="350" width="60" height="80" fill="#3d2817"/>
  <circle cx="420" cy="390" r="4" fill="#c9a876"/>
  
  <!-- Window -->
  <rect x="320" y="310" width="40" height="40" fill="#ffd700" opacity="0.8"/>
  <line x1="340" y1="310" x2="340" y2="350" stroke="#8b6f47" stroke-width="1"/>
  <line x1="320" y1="330" x2="360" y2="330" stroke="#8b6f47" stroke-width="1"/>
  
  <!-- Light glow from window -->
  <circle cx="340" cy="330" r="60" fill="#ffd700" opacity="0.15"/>
  
  <!-- Mushrooms around hut -->
  <circle cx="250" cy="420" r="15" fill="#d41159"/>
  <polygon points="250,420 240,400 260,400" fill="#8b0000"/>
  
  <circle cx="520" cy="430" r="12" fill="#d41159"/>
  <polygon points="520,430 512,415 528,415" fill="#8b0000"/>
  
  <!-- Gnome silhouette in window -->
  <circle cx="340" cy="315" r="8" fill="#333333"/>
  
  <!-- Ground -->
  <ellipse cx="400" cy="600" rx="400" ry="30" fill="#0a0a14"/>
  
  <!-- Text -->
  <text x="400" y="550" font-size="24" fill="#90ee90" text-anchor="middle" font-family="Arial">
    Wizard Siamor's Dwelling
  </text>
</svg>`,

  4: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Dark cavern background -->
  <rect width="800" height="600" fill="#0a0a0a"/>
  
  <!-- Rock formations -->
  <polygon points="0,600 50,500 100,600" fill="#2a2a2a"/>
  <polygon points="150,600 200,480 250,600" fill="#1a1a1a"/>
  <polygon points="350,600 400,450 450,600" fill="#2a2a2a"/>
  <polygon points="550,600 600,470 650,600" fill="#1a1a1a"/>
  <polygon points="700,600 750,500 800,600" fill="#2a2a2a"/>
  
  <!-- Lava flows -->
  <ellipse cx="200" cy="500" rx="80" ry="40" fill="#ff4500" opacity="0.7"/>
  <ellipse cx="600" cy="520" rx="100" ry="45" fill="#ff6347" opacity="0.6"/>
  
  <!-- Lava glow -->
  <ellipse cx="200" cy="500" rx="120" ry="60" fill="#ff4500" opacity="0.2"/>
  <ellipse cx="600" cy="520" rx="140" ry="70" fill="#ff6347" opacity="0.15"/>
  
  <!-- Stone bridge -->
  <rect x="280" y="350" width="240" height="20" fill="#5c5c5c"/>
  <rect x="290" y="360" width="220" height="8" fill="#4a4a4a"/>
  
  <!-- Bridge supports -->
  <rect x="300" y="370" width="15" height="100" fill="#4a4a4a"/>
  <rect x="485" y="370" width="15" height="100" fill="#4a4a4a"/>
  
  <!-- Orb of light on bridge -->
  <circle cx="400" cy="340" r="25" fill="#87ceeb" opacity="0.8"/>
  <circle cx="400" cy="340" r="20" fill="#90ee90" opacity="0.6"/>
  
  <!-- Glow from orb -->
  <circle cx="400" cy="340" r="80" fill="#87ceeb" opacity="0.1"/>
  
  <!-- Stalactites -->
  <polygon points="150,0 140,80 160,80" fill="#3a3a3a"/>
  <polygon points="350,0 335,100 365,100" fill="#2a2a2a"/>
  <polygon points="600,0 580,90 620,90" fill="#3a3a3a"/>
  <polygon points="750,0 735,70 765,70" fill="#2a2a2a"/>
  
  <!-- Text -->
  <text x="400" y="300" font-size="24" fill="#90ee90" text-anchor="middle" font-family="Arial">
    Underground Cavern
  </text>
</svg>`,

  5: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Magma background -->
  <rect width="800" height="600" fill="#660000"/>
  
  <!-- Lava waves -->
  <path d="M 0 400 Q 100 380 200 400 T 400 400 T 600 400 T 800 400 L 800 600 L 0 600 Z" 
        fill="#ff4500" opacity="0.8"/>
  <path d="M 0 420 Q 150 400 300 420 T 600 420 T 800 420 L 800 600 L 0 600 Z" 
        fill="#ff6347" opacity="0.6"/>
  
  <!-- Lava particles -->
  <circle cx="150" cy="380" r="8" fill="#ffaa00" opacity="0.7"/>
  <circle cx="350" cy="400" r="6" fill="#ffaa00" opacity="0.5"/>
  <circle cx="550" cy="390" r="7" fill="#ffaa00" opacity="0.6"/>
  <circle cx="700" cy="410" r="5" fill="#ffaa00" opacity="0.4"/>
  
  <!-- Black rock island -->
  <polygon points="300,300 250,380 350,390 450,380 400,300" fill="#1a1a1a"/>
  <polygon points="320,320 280,370 360,375 380,330" fill="#2a2a2a"/>
  
  <!-- Dragon body on rock -->
  <ellipse cx="350" cy="310" rx="70" ry="50" fill="#8b0000"/>
  
  <!-- Dragon head -->
  <circle cx="430" cy="280" r="35" fill="#a00000"/>
  
  <!-- Dragon horns -->
  <polygon points="415,250 410,200 420,250" fill="#a00000"/>
  <polygon points="445,250 450,200 440,250" fill="#a00000"/>
  
  <!-- Dragon eyes -->
  <circle cx="440" cy="270" r="6" fill="#ffff00"/>
  <circle cx="450" cy="270" r="6" fill="#ffff00"/>
  
  <!-- Dragon mouth -->
  <path d="M 460 280 Q 480 285 470 295 Z" fill="#ff4500"/>
  
  <!-- Dragon tail -->
  <path d="M 280 310 Q 200 290 180 320 Q 160 340 200 360" 
        stroke="#8b0000" stroke-width="30" fill="none"/>
  
  <!-- Treasure -->
  <circle cx="300" cy="340" r="8" fill="#ffd700"/>
  <circle cx="320" cy="345" r="7" fill="#ffd700"/>
  <circle cx="340" cy="342" r="6" fill="#ffd700"/>
  
  <!-- Glow from dragon -->
  <circle cx="350" cy="310" r="120" fill="#ff4500" opacity="0.1"/>
  
  <!-- Text -->
  <text x="400" y="550" font-size="24" fill="#ffff00" text-anchor="middle" font-family="Arial">
    Lava Chamber - The Red Drake
  </text>
</svg>`,

  6: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Water background -->
  <rect width="800" height="400" fill="#001a4d"/>
  <rect y="400" width="800" height="200" fill="#003d99"/>
  
  <!-- Water ripples -->
  <circle cx="200" cy="200" r="40" fill="none" stroke="#0066cc" stroke-width="2" opacity="0.4"/>
  <circle cx="200" cy="200" r="60" fill="none" stroke="#0066cc" stroke-width="1" opacity="0.2"/>
  <circle cx="600" cy="250" r="35" fill="none" stroke="#0066cc" stroke-width="2" opacity="0.3"/>
  
  <!-- Stone bridge -->
  <rect x="200" y="320" width="400" height="25" fill="#5c5c5c"/>
  <line x1="220" y1="345" x2="220" y2="450" stroke="#4a4a4a" stroke-width="12"/>
  <line x1="580" y1="345" x2="580" y2="450" stroke="#4a4a4a" stroke-width="12"/>
  
  <!-- Bridge details -->
  <rect x="210" y="320" width="380" height="10" fill="#6b6b6b" opacity="0.6"/>
  
  <!-- Bioluminescent plants on walls -->
  <circle cx="150" cy="150" r="8" fill="#00ff00" opacity="0.7"/>
  <circle cx="200" cy="100" r="6" fill="#00ff00" opacity="0.6"/>
  <circle cx="650" cy="180" r="7" fill="#00ff00" opacity="0.7"/>
  <circle cx="700" cy="120" r="5" fill="#00ff00" opacity="0.5"/>
  <circle cx="100" cy="250" r="7" fill="#00ff00" opacity="0.6"/>
  <circle cx="750" cy="300" r="6" fill="#00ff00" opacity="0.6"/>
  
  <!-- Glowing vines -->
  <path d="M 150 150 Q 160 180 140 210" stroke="#00ff00" stroke-width="3" opacity="0.5" fill="none"/>
  <path d="M 650 180 Q 670 220 640 260" stroke="#00ff00" stroke-width="3" opacity="0.5" fill="none"/>
  
  <!-- River/water below bridge -->
  <path d="M 0 400 Q 100 380 200 400 T 400 400 T 600 400 T 800 400 L 800 600 L 0 600 Z" 
        fill="#0052cc" opacity="0.8"/>
  
  <!-- Serpent head emerging from water -->
  <ellipse cx="400" cy="420" rx="45" ry="35" fill="#4a9eff"/>
  <circle cx="430" cy="410" r="15" fill="#4a9eff"/>
  
  <!-- Serpent eye -->
  <circle cx="435" cy="408" r="5" fill="#ffff00"/>
  
  <!-- Serpent scales shimmer -->
  <circle cx="380" cy="430" r="6" fill="#66ccff" opacity="0.7"/>
  <circle cx="390" cy="440" r="5" fill="#66ccff" opacity="0.6"/>
  <circle cx="410" cy="445" r="5" fill="#66ccff" opacity="0.6"/>
  <circle cx="425" cy="440" r="6" fill="#66ccff" opacity="0.7"/>
  
  <!-- Text -->
  <text x="400" y="550" font-size="24" fill="#90ee90" text-anchor="middle" font-family="Arial">
    Underground River - Ancient Guardian
  </text>
</svg>`,

  7: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Sacred chamber - light background -->
  <rect width="800" height="600" fill="#1a1a3e"/>
  
  <!-- Magical glowing walls -->
  <rect x="50" y="50" width="700" height="500" fill="#2d2d5f" stroke="#6699ff" stroke-width="3"/>
  
  <!-- Wall glow -->
  <rect x="50" y="50" width="700" height="500" fill="#6699ff" opacity="0.05"/>
  
  <!-- Starlight runes on walls -->
  <text x="100" y="150" font-size="30" fill="#6699ff" opacity="0.6">✦</text>
  <text x="700" y="200" font-size="30" fill="#6699ff" opacity="0.6">✦</text>
  <text x="150" y="450" font-size="30" fill="#6699ff" opacity="0.6">✦</text>
  <text x="650" y="500" font-size="30" fill="#6699ff" opacity="0.6">✦</text>
  
  <!-- Floating pedestals/pillars -->
  <rect x="150" y="300" width="40" height="200" fill="#4a4a6b"/>
  <rect x="610" y="320" width="40" height="180" fill="#4a4a6b"/>
  
  <!-- The Crystal of Starlight - center stage -->
  <g transform="translate(400, 250)">
    <!-- Crystal body -->
    <polygon points="0,-80 40,-30 30,40 -30,40 -40,-30" fill="#ffffff"/>
    <polygon points="0,-80 -40,-30 -30,40 30,40 40,-30" fill="#e6f3ff" opacity="0.7"/>
    
    <!-- Inner glow -->
    <polygon points="0,-70 30,-20 20,35 -20,35 -30,-20" fill="#99ccff" opacity="0.5"/>
    
    <!-- Radiant shine -->
    <line x1="0" y1="-85" x2="0" y2="50" stroke="#ffffff" stroke-width="2" opacity="0.6"/>
    <line x1="-45" y1="0" x2="45" y2="0" stroke="#ffffff" stroke-width="2" opacity="0.6"/>
    
    <!-- Particle effects around crystal -->
    <circle cx="60" cy="-40" r="3" fill="#99ccff" opacity="0.8"/>
    <circle cx="-55" cy="20" r="2" fill="#99ccff" opacity="0.7"/>
    <circle cx="50" cy="50" r="2.5" fill="#99ccff" opacity="0.8"/>
    <circle cx="-60" cy="-50" r="2" fill="#99ccff" opacity="0.6"/>
  </g>
  
  <!-- Energy waves radiating from crystal -->
  <circle cx="400" cy="250" r="80" fill="none" stroke="#6699ff" stroke-width="2" opacity="0.3"/>
  <circle cx="400" cy="250" r="120" fill="none" stroke="#6699ff" stroke-width="1" opacity="0.2"/>
  <circle cx="400" cy="250" r="160" fill="none" stroke="#6699ff" stroke-width="1" opacity="0.1"/>
  
  <!-- Light rays -->
  <line x1="400" y1="250" x2="700" y2="100" stroke="#99ccff" stroke-width="1" opacity="0.3"/>
  <line x1="400" y1="250" x2="100" y2="150" stroke="#99ccff" stroke-width="1" opacity="0.3"/>
  <line x1="400" y1="250" x2="650" y2="500" stroke="#99ccff" stroke-width="1" opacity="0.3"/>
  <line x1="400" y1="250" x2="150" y2="480" stroke="#99ccff" stroke-width="1" opacity="0.3"/>
  
  <!-- Text -->
  <text x="400" y="550" font-size="24" fill="#90ee90" text-anchor="middle" font-family="Arial">
    The Crystal of Starlight
  </text>
</svg>`
};
