// Jihad Akbar | Portfolio Engine (ESM Vanilla JavaScript)

const PROJECTS_DATA = [
  {
    id: "logo-3d-design",
    title: "Logo 3D Design",
    category: "CAD",
    image: "https://i.imgur.com/C8vr40r.jpeg",
    software: ["Inventor"],
    methodology: [
      "Creating a rough 2D design using Line, Circle and Arc.",
      "3D creation using the extrude feature in Inventor.",
      "Improve the initial design by using some features that are only available in 3D.",
      "Converts .ipt file format to .Gcode to be ready for use in 3D printing."
    ],
    description: "High-contrast 3D extrusions of geometric elements of the school's department brand, optimized for two-state aesthetic representation, 3D Print preparation, and digital assets.",
    date: "November 2024"
  },
  {
    id: "excava-200-fixture",
    title: "Bucket Excava 200 Fixture Weld Design",
    category: "CAD",
    image: "https://i.imgur.com/CSPLb9H.jpeg",
    software: ["SolidWorks", "Inventor"],
    methodology: [
      "Defined technical specifications based on industrial standards.",
      "Performed 3D modeling and assembly simulation.",
      "Generated detailed 2D technical drawings for the manufacturing floor.",
      "Applied weldment features for structural integrity optimization."
    ],
    description: "Heavy-duty industrial welding welding fixture custom-designed to lock down and align the complex plate geometries of the Excavator 200 bucket assembly. Limits structural displacement to guarantee exceptional repeatable robotic joining tolerances.",
    date: "May 2025"
  },
  {
    id: "bucket-excava-full-weld",
    title: "Bucket Excava 200 Full Weld Design",
    category: "CAD",
    image: "https://i.imgur.com/2kbxPwD.jpeg",
    software: ["SolidWorks", "Inventor"],
    methodology: [
      "Analyzed extreme load targets along key excavator connection brackets.",
      "Engineered precision chamfer and groove paths to maximize backing weld penetration.",
      "Compiled 2D manufacturing blueprint sets specifying localized weld volume targets.",
      "Modeled structural gussets to reduce heat distortion across joining planes."
    ],
    description: "A fully developed 3D structural weldment design of the Excava 200 excavator bucket. This project incorporates rigorous analysis of cyclic joint fatigue, strategic stiffener distribution, and compliance with heavy machinery assembly standards.",
    date: "April 2025"
  },
  {
    id: "sunset-beach",
    title: "Sunset in the Beach",
    category: "Photography",
    image: "https://i.imgur.com/Mn3ZJS6.png",
    software: ["Adobe"],
    methodology: [
      "Calculated celestial coordinates and golden-hour windows for horizon sunset alignment.",
      "Utilized physically high-density neutral density (ND) glass to regulate early rays.",
      "Stabilized aperture controls using structural support rings to mitigate marine wind vibration.",
      "Executed tonal correction and chromatic restoration inside Adobe CC RAW processors."
    ],
    description: "A dramatic, atmospheric fine art landscape print capturing the contrast of coastal waters, rock formations, and gradient skies during late-stage golden-hour horizons.",
    date: "March 2025"
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform Layout",
    category: "Programming",
    image: "https://picsum.photos/seed/project5/500/400",
    software: ["Visual Studio Code", "Adobe"],
    methodology: [
      "Designed clean, elegant grid patterns and touch targets aligned with modern UX benchmarks.",
      "Constructed secure relational object maps mapping inventory items to shopping carts.",
      "Enabled lightning-fast indexation on queries using advanced browser data managers.",
      "Polished interfaces into responsive flex structures looking stunning on desktop and mobile alike."
    ],
    description: "A highly intuitive, desktop-first and mobile-responsive online retail store system featuring fluid layouts, interactive item filtering, and customized product galleries.",
    date: "January 2025"
  },
  {
    id: "programmer-portfolio",
    title: "Programmer Personal Portfolio",
    category: "Programming",
    image: "https://i.imgur.com/0IqWET4.png",
    software: ["Visual Studio Code", "Adobe"],
    methodology: [
      "Optimized DOM structuring and decoupled JavaScript logic into robust ES Modules.",
      "Integrated dynamic responsive grids to serve display assets universally across devices.",
      "Engineered real-time visual simulation physics on HTML5 graphics canvas.",
      "Established clientside modular routes conforming to standard link compliance."
    ],
    description: "A high-performance, single-page application portfolio engineered with modern styling, fluid grid layouts, and active interactive canvases. The design prioritizes lightweight assets, strict security, and dynamic micro-interactions.",
    date: "June 2025"
  },
  {
    id: "3d-printing-logo",
    title: "3D Printing Logo Design",
    category: "CAD",
    image: "https://i.imgur.com/9InyuCg.jpeg",
    software: ["SolidWorks", "Inventor"],
    methodology: [
      "Constructed precise additive manufacturing templates featuring lightweight grid patterns.",
      "Tested snap-fit tolerances down to 0.15mm using solid design clearance sweeps.",
      "Configured toolpath slice directions to bypass structural overhang droops.",
      "Constructed standard assembly schematics detailing interlocking plate order."
    ],
    description: "Custom corporate logo optimized for industrial additive rapid prototyping (FDM/SLA) featuring snap-fit connectors, tailored structural wall thickness, and minimized thermal warp corners.",
    date: "September 2024"
  },
  {
    id: "mech-confidential-valve",
    title: "Pneumatic Valve Linkage Optimization",
    category: "Mechanical Engineering",
    image: null,
    software: ["Inventor", "SolidWorks"],
    methodology: [
      "Calculated structural kinematics matching rigorous industrial pneumatic specifications.",
      "Simulated pivot joint friction under localized thermal stress load variations.",
      "Realigned linkage lengths to bypass secondary geometric structural dead-points.",
      "Compiled secured technical documentation strictly protected under NDA."
    ],
    description: "Analysis, modeling, and physical kinematics calibration of a pneumatic actuator linkages array. The documentation and blueprints are completely confidential and cannot be published due to strict trade NDA rules.",
    date: "July 2024"
  },
  {
    id: "mech-confidential-gear",
    title: "High-Torque Planetary Gear Drive",
    category: "Mechanical Engineering",
    image: null,
    software: ["SolidWorks", "Inventor"],
    methodology: [
      "Executed AGMA standard rating metrics for tooth surface durability.",
      "Simulated heat generation cycles under continuous torque load stress.",
      "Specified interference shaft fits ensuring robust retention with zero slip.",
      "Enforced industrial guidelines to encrypt engineering documents securely."
    ],
    description: "Compact, multi-stage planetary transmission unit optimized for rugged physical power transfer. Built for premium efficiency and completely covered under active corporate NDA protocols.",
    date: "May 2024"
  },
  {
    id: "photography-mountain",
    title: "Alpine Ridge Dawn Composition",
    category: "Photography",
    image: "https://picsum.photos/seed/alpine/500/400",
    software: ["Adobe"],
    methodology: [
      "Coordinated temporal and light trajectories to capture pristine ridge contrast.",
      "Equipped wide-angle glass sets to draw maximum dynamic landscape range.",
      "Applied bracketed RAW captures to retain dark shadows and morning cloud values.",
      "Balanced spatial hues to maintain stunning natural chromatic palettes."
    ],
    description: "A masterfully shot alpine landscape capturing the first rays of morning light reflecting on glacial valley surfaces. Edited for maximum fine-detail structure and contrast.",
    date: "March 2024"
  },
  {
    id: "programming-cnc-parser",
    title: "Embedded CNC G-code Parser Engine",
    category: "Programming",
    image: "https://picsum.photos/seed/embedded/500/400",
    software: ["Visual Studio Code"],
    methodology: [
      "Engineered linear step generators in highly optimized, lightweight C++ loops.",
      "Smoothed physical acceleration profiles to curb machinery vibration.",
      "Constructed fast communication interfaces linking controller boards with laptops.",
      "Optimized SRAM footprint to run flawlessly on low-tier microprocessors."
    ],
    description: "A high-performance controller parsing kernel translating linear and rotational coordinates into step timing streams. Built to deliver exceptional machining surface finishes.",
    date: "January 2024"
  }
];

// Helper: Vector Blueprint SVG Generator (Exclusively for CAD tag projects)
function getBlueprintSVG(projectId) {
  let drawingElements = "";
  let titleText = "ENGINEERING COMPONENT";
  let dwgNo = "DWG-2025-001";
  let scale = "1:10";

  if (projectId === "excava-200-fixture") {
    titleText = "EXCAVA 200 FIXTURE ASM";
    dwgNo = "CAD-EX200-FIX-04";
    scale = "1:15";
    drawingElements = `
      <!-- Hex brackets and clamp fixture -->
      <rect x="150" y="120" width="300" height="160" rx="4" fill="none" stroke="#22D3EE" stroke-width="1.5" />
      <rect x="170" y="140" width="260" height="120" fill="none" stroke="#22D3EE" stroke-dasharray="4 2" stroke-width="1" />
      
      <!-- Cylinders & concentric circles -->
      <circle cx="200" cy="200" r="45" fill="none" stroke="#22D3EE" stroke-width="1.5" />
      <circle cx="200" cy="200" r="25" fill="none" stroke="#22D3EE" stroke-width="1" />
      <circle cx="400" cy="200" r="45" fill="none" stroke="#22D3EE" stroke-width="1.5" />
      <circle cx="400" cy="200" r="25" fill="none" stroke="#22D3EE" stroke-width="1" />
      
      <!-- Connective bar -->
      <line x1="200" y1="200" x2="400" y2="200" stroke="#22D3EE" stroke-width="2" />
      <line x1="150" y1="200" x2="450" y2="200" stroke="#22D3EE" stroke-dasharray="12 4 2 4" stroke-width="1" />
      <line x1="300" y1="100" x2="300" y2="300" stroke="#22D3EE" stroke-dasharray="12 4 2 4" stroke-width="1" />
      
      <!-- Dimension lines and tags -->
      <line x1="150" y1="80" x2="450" y2="80" stroke="#F1F5F9" stroke-width="1" />
      <line x1="150" y1="75" x2="150" y2="85" stroke="#F1F5F9" stroke-width="1" />
      <line x1="450" y1="75" x2="450" y2="85" stroke="#F1F5F9" stroke-width="1" />
      <path d="M 150 80 L 160 77 L 160 83 Z M 450 80 L 440 77 L 440 83 Z" fill="#F1F5F9" />
      <text x="300" y="72" font-family="monospace" font-size="11" fill="#F1F5F9" text-anchor="middle">300.00 mm (REF)</text>
      
      <line x1="100" y1="120" x2="100" y2="280" stroke="#F1F5F9" stroke-width="1" />
      <line x1="95" y1="120" x2="105" y2="120" stroke="#F1F5F9" stroke-width="1" />
      <line x1="95" y1="280" x2="105" y2="280" stroke="#F1F5F9" stroke-width="1" />
      <path d="M 100 120 L 97 130 L 103 130 Z M 100 280 L 97 270 L 103 270 Z" fill="#F1F5F9" />
      <text x="85" y="204" font-family="monospace" font-size="11" fill="#F1F5F9" text-anchor="middle" transform="rotate(-90 85 204)">160.00 mm</text>
      
      <line x1="400" y1="200" x2="435" y2="165" stroke="#38BDF8" stroke-width="1" />
      <path d="M 435 165 L 426 167 L 431 172 Z" fill="#38BDF8" />
      <text x="442" y="162" font-family="monospace" font-size="10" fill="#38BDF8" text-anchor="start">R45.00</text>
      
      <path d="M 300 200 L 260 160 L 230 160" fill="none" stroke="#F43F5E" stroke-width="1.2" />
      <path d="M 300 200 L 293 191 L 291 197 Z" fill="#F43F5E" />
      <text x="245" y="153" font-family="monospace" font-size="10" fill="#F43F5E" text-anchor="middle">◤ a4 = 6</text>
    `;
  } else if (projectId === "bucket-excava-full-weld") {
    titleText = "EXCAVA 200 BUCKET ASM";
    dwgNo = "CAD-EX200-WLD-12";
    scale = "1:20";
    drawingElements = `
      <!-- Excavator Bucket outlines -->
      <path d="M150,150 L350,130 L450,220 L400,310 L200,310 L150,150 Z" fill="none" stroke="#22D3EE" stroke-width="1.8" />
      <path d="M150,150 L190,170 L350,160" fill="none" stroke="#22D3EE" stroke-width="1" stroke-dasharray="4 2" />
      
      <!-- Hinge support circles -->
      <circle cx="280" cy="180" r="28" fill="none" stroke="#22D3EE" stroke-width="1.5" />
      <circle cx="280" cy="180" r="16" fill="none" stroke="#22D3EE" stroke-width="1" />
      <circle cx="340" cy="220" r="28" fill="none" stroke="#22D3EE" stroke-width="1.5" />
      <circle cx="340" cy="220" r="16" fill="none" stroke="#22D3EE" stroke-width="1" />
      
      <!-- Centerlines -->
      <line x1="280" y1="130" x2="280" y2="230" stroke="#22D3EE" stroke-dasharray="10 4 2 4" stroke-width="0.8" />
      <line x1="230" y1="180" x2="390" y2="180" stroke="#22D3EE" stroke-dasharray="10 4 2 4" stroke-width="0.8" />
      
      <!-- Teeth outlines -->
      <path d="M450,220 L480,215 L450,230 L480,235 L445,245 L480,255 L440,265" fill="none" stroke="#22D3EE" stroke-width="1.5" />
      
      <!-- Dimension: Bucket mouth opening -->
      <line x1="150" y1="110" x2="350" y2="90" stroke="#F1F5F9" stroke-width="1" />
      <line x1="150" y1="105" x2="150" y2="115" stroke="#F1F5F9" stroke-width="1" />
      <line x1="350" y1="85" x2="350" y2="95" stroke="#F1F5F9" stroke-width="1" />
      <path d="M 150 110 L 160 108 L 159 114 Z M 350 90 L 340 86 L 341 92 Z" fill="#F1F5F9" />
      <text x="250" y="86" font-family="monospace" font-size="11" fill="#F1F5F9" text-anchor="middle" transform="rotate(-5 250 86)">W = 850.00 mm</text>
      
      <!-- Angle callout -->
      <path d="M 400 310 A 110 110 0 0 0 450 220" fill="none" stroke="#38BDF8" stroke-width="1" stroke-dasharray="3 3" />
      <text x="430" y="270" font-family="monospace" font-size="10" fill="#38BDF8">68.0°</text>
    `;
  } else if (projectId === "logo-3d-design") {
    titleText = "LOGO 3D EXTRUSION LAYOUT";
    dwgNo = "CAD-LOG-3D-01";
    scale = "1:1";
    drawingElements = `
      <!-- Concentric circles for badge logo -->
      <circle cx="300" cy="200" r="90" fill="none" stroke="#22D3EE" stroke-width="2" />
      <circle cx="300" cy="200" r="82" fill="none" stroke="#22D3EE" stroke-width="0.8" stroke-dasharray="5 2" />
      <circle cx="300" cy="200" r="50" fill="none" stroke="#22D3EE" stroke-width="1.2" />
      
      <!-- Triangular logo element inside -->
      <path d="M300,140 L350,225 L250,225 Z" fill="none" stroke="#22D3EE" stroke-width="1.8" />
      
      <!-- Symmetry coordinates -->
      <line x1="300" y1="80" x2="300" y2="320" stroke="#22D3EE" stroke-dasharray="12 4 2 4" stroke-width="0.8" />
      <line x1="180" y1="200" x2="420" y2="200" stroke="#22D3EE" stroke-dasharray="12 4 2 4" stroke-width="0.8" />
      
      <!-- Outer diam callout -->
      <line x1="300" y1="200" x2="385" y2="135" stroke="#F1F5F9" stroke-width="1" />
      <path d="M 385 135 L 376 137 L 381 142 Z" fill="#F1F5F9" />
      <text x="392" y="132" font-family="monospace" font-size="10" fill="#F1F5F9">Ø 180.00 mm</text>
    `;
  } else if (projectId === "3d-printing-logo") {
    titleText = "3D PRINTING LOGO TOL";
    dwgNo = "CAD-3DP-07";
    scale = "1.5:1";
    drawingElements = `
      <!-- snap-fit structure -->
      <path d="M180,160 L240,160 L240,145 L250,145 L250,175 L240,175 L240,170 L180,170 Z" fill="none" stroke="#22D3EE" stroke-width="1.5" />
      <circle cx="210" cy="165" r="3" fill="#22D3EE" />
      
      <!-- main ring template -->
      <path d="M250,165 A 80 80 0 0 1 370,240" fill="none" stroke="#22D3EE" stroke-width="2" />
      <path d="M250,165 A 72 72 0 0 1 358,232" fill="none" stroke="#22D3EE" stroke-width="1" stroke-dasharray="3 3" />
      
      <!-- Dimension -->
      <line x1="240" y1="125" x2="250" y2="125" stroke="#F1F5F9" stroke-width="1" />
      <line x1="240" y1="120" x2="240" y2="130" stroke="#F1F5F9" stroke-width="1" />
      <line x1="250" y1="120" x2="250" y2="130" stroke="#F1F5F9" stroke-width="1" />
      <path d="M 240 125 L 246 123 L 246 127 Z M 250 125 L 244 123 L 244 127 Z" fill="#F1F5F9" />
      <text x="245" y="115" font-family="monospace" font-size="9" fill="#F1F5F9" text-anchor="middle">0.25 ± 0.05</text>
    `;
  } else {
    // Standard component blueprint
    drawingElements = `
      <rect x="200" y="150" width="200" height="100" fill="none" stroke="#22D3EE" stroke-width="1.5" />
      <line x1="180" y1="200" x2="420" y2="200" stroke="#22D3EE" stroke-dasharray="8 4 2 4" stroke-width="1" />
      <circle cx="300" cy="200" r="30" fill="none" stroke="#22D3EE" stroke-width="1.5" />
    `;
  }

  return `
    <svg viewBox="0 0 600 400" width="100%" height="100%" class="font-mono select-none" xmlns="http://www.w3.org/2000/svg" style="background-color: #0c182c;">
      <!-- Grid Background -->
      <defs>
        <pattern id="blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#102d4f" stroke-width="0.8" />
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#163963" stroke-width="1.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
      
      <!-- Frame -->
      <rect x="15" y="15" width="570" height="370" fill="none" stroke="#1e40af" stroke-width="2" />
      <rect x="20" y="20" width="560" height="360" fill="none" stroke="#1d4ed8" stroke-width="1" />
      
      <!-- Elements -->
      ${drawingElements}
      
      <!-- Title Block -->
      <g transform="translate(365, 290)">
        <rect width="210" height="85" fill="#0B1A30" stroke="#1e40af" stroke-width="1.5" />
        <line x1="0" y1="20" x2="210" y2="20" stroke="#1e40af" stroke-width="1" />
        <line x1="0" y1="45" x2="210" y2="45" stroke="#1e40af" stroke-width="1" />
        <line x1="120" y1="45" x2="120" y2="85" stroke="#1e40af" stroke-width="1" />
        
        <text x="105" y="14" font-size="8" fill="#60A5FA" text-anchor="middle" font-weight="bold">JIHAD AKBAR ENGINEERING</text>
        <text x="6" y="30" font-size="6" fill="#3B82F6">TITLE / DESIGN DESCRIPTION:</text>
        <text x="6" y="40" font-size="8" fill="#F1F5F9" font-weight="bold">${titleText}</text>
        <text x="6" y="55" font-size="6" fill="#3B82F6">DRAWING NO:</text>
        <text x="6" y="66" font-size="8" fill="#F1F5F9" font-weight="bold">${dwgNo}</text>
        <text x="6" y="76" font-size="5" fill="#60A5FA">NDA SECURITY GUARANTEED</text>
        
        <text x="126" y="55" font-size="6" fill="#3B82F6">SCALE:</text>
        <text x="126" y="66" font-size="8" fill="#F1F5F9" font-weight="bold">${scale}</text>
        <text x="126" y="76" font-size="6" fill="#3B82F6">UNIT: mm</text>
      </g>
    </svg>
  `;
}

// Helper: Custom Software Badges
function getSoftwareBadge(softwareName) {
  let icon = "";
  let colorClass = "bg-gray-800 text-gray-200 border-gray-700";

  if (softwareName === "SolidWorks") {
    colorClass = "bg-red-500/10 border-red-500/30 text-red-300";
    icon = `<span class="w-2 h-2 rounded-full bg-red-500"></span>`;
  } else if (softwareName === "Inventor") {
    colorClass = "bg-amber-500/10 border-amber-500/30 text-amber-300";
    icon = `<span class="w-2 h-2 rounded-full bg-amber-500"></span>`;
  } else if (softwareName === "Visual Studio Code" || softwareName === "VS Code") {
    colorClass = "bg-blue-500/10 border-blue-500/30 text-blue-300";
    icon = `<span class="w-2 h-2 rounded-full bg-blue-400"></span>`;
  } else if (softwareName === "Adobe") {
    colorClass = "bg-red-600/10 border-red-600/30 text-red-400";
    icon = `<span class="w-2 h-2 rounded-full bg-red-600"></span>`;
  }

  return `
    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${colorClass}">
      ${icon}
      <span>${softwareName}</span>
    </span>
  `;
}

// Template Generator: HTML Portfolio Card
function createProjectCardHtml(project) {
  if (project.category === "Mechanical Engineering") {
    return `
      <div onclick="window.location.hash = '#/project/${project.id}'" class="project-card group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 shadow-lg cursor-pointer p-8 flex flex-col justify-center items-center text-center h-64 transition-all duration-300 transform hover:-translate-y-1 block hover:border-red-900/65" data-category="Mechanical Engineering">
        <div class="mb-4 text-red-500 group-hover:scale-110 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h3 class="text-lg font-bold font-poppins text-white mb-2 transition-colors duration-200 group-hover:text-red-400">${project.title}</h3>
        <p class="text-gray-400 text-sm max-w-xs mb-3">Limited documentation, cannot be published.</p>
        <span class="text-[10px] text-red-400 font-mono font-bold tracking-wider bg-red-950/40 border border-red-900/30 px-3 py-1 rounded-full uppercase">Confidential NDA Secure</span>
      </div>
    `;
  }

  return `
    <div onclick="window.location.hash = '#/project/${project.id}'" class="project-card group relative overflow-hidden rounded-lg bg-gray-900 shadow-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1 block" data-category="${project.category}">
      <img src="${project.image || "https://picsum.photos/500/400"}" alt="${project.title}" class="w-full h-64 object-cover transform group-hover:scale-103 transition-transform duration-500">
      <div class="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 project-overlay">
        <h3 class="text-lg font-bold font-poppins text-white mb-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">${project.title}</h3>
        
        <div class="flex flex-wrap gap-1.5 mt-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300" style="transition-delay: 50ms;">
          <span class="text-[10px] font-bold font-mono text-white bg-indigo-600 px-2.5 py-0.5 rounded uppercase">
            ${project.category}
          </span>
          ${project.software.map(s => `
            <span class="text-[10px] font-bold font-mono text-gray-300 bg-gray-800 px-2 py-0.5 rounded border border-gray-700">
              ${s === "Visual Studio Code" ? "VS Code" : s}
            </span>
          `).join("")}
        </div>
        
        <p class="text-xs text-indigo-400 font-semibold font-mono mt-3 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300" style="transition-delay: 100ms;">
          Inspect project specifications & drawing panels →
        </p>
      </div>
      <div class="absolute inset-0 border-2 border-transparent group-hover:border-[#6366F1] transition-all duration-300 rounded-lg"></div>
    </div>
  `;
}

// Global Routing Tracker
let previousHash = "#portfolio";

window.addEventListener("hashchange", () => {
  const current = window.location.hash;
  if (current !== "" && !current.startsWith("#/project/")) {
    previousHash = current;
  }
});

// Main Page (Home) Capped Generator - maximum 6 photos per active category selector
function renderMainPortfolio(filter) {
  const grid = document.getElementById("portfolio-grid");
  const banner = document.getElementById("capped-portfolio-banner");
  if (!grid) return;

  const filtered = filter === "All" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  // Apply absolute limits (max 6 photos per criteria)
  const sliced = filtered.slice(0, 6);
  grid.innerHTML = sliced.map(createProjectCardHtml).join("");

  // Control showcase see-all prompt banner visibility based on total assets matching selection
  if (filtered.length > 6 && banner) {
    banner.classList.remove("hidden");
  } else if (banner) {
    banner.classList.add("hidden");
  }

  // Re-observe dynamic entries
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  grid.querySelectorAll(".project-card").forEach((c) => observer.observe(c));
}

// Dedicated Gallery Page Generator - displays ALL items without any volume limits
function renderFullPortfolio(filter, searchPhrase = "") {
  const grid = document.getElementById("full-portfolio-grid");
  if (!grid) return;

  let filtered = filter === "All" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  if (searchPhrase.trim() !== "") {
    const query = searchPhrase.toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query) || 
      p.software.some(s => s.toLowerCase().includes(query))
    );
  }

  grid.innerHTML = filtered.map(createProjectCardHtml).join("");

  // Observe entries
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  }, { threshold: 0.05 });

  grid.querySelectorAll(".project-card").forEach((c) => observer.observe(c));
}

// Router Event Processor
function handleRouting() {
  const hash = window.location.hash;
  const mainView = document.getElementById("main-landing-view");
  const fullView = document.getElementById("full-portfolio-view");
  const detailView = document.getElementById("project-detail-view");

  if (!mainView || !fullView || !detailView) return;

  // Toggle visible layers
  mainView.classList.add("hidden");
  fullView.classList.add("hidden");
  detailView.classList.add("hidden");

  window.scrollTo(0, 0);

  if (!hash || hash === "" || hash === "#/" || hash.startsWith("#home") || hash === "#about" || hash === "#portfolio" || hash === "#contact") {
    mainView.classList.remove("hidden");
    
    // Sync filter tab active states on native homepage
    const homepageActiveBtn = document.querySelector("#portfolio-filters button.active");
    const filterTerm = homepageActiveBtn ? homepageActiveBtn.getAttribute("data-filter") || "All" : "All";
    renderMainPortfolio(filterTerm);

    if (hash && hash !== "#/" && !hash.startsWith("#home")) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
    }
  } else if (hash === "#/portfolio" || hash === "#/all-projects") {
    fullView.classList.remove("hidden");
    const activeFilterBtn = document.querySelector("#full-portfolio-filters button.active");
    const filterTerm = activeFilterBtn ? activeFilterBtn.getAttribute("data-full-filter") || "All" : "All";
    const searchInput = document.getElementById("full-portfolio-search");
    const phrase = searchInput ? searchInput.value : "";
    renderFullPortfolio(filterTerm, phrase);
  } else if (hash.startsWith("#/project/")) {
    detailView.classList.remove("hidden");
    const projectId = hash.replace("#/project/", "");
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    
    if (project) {
      renderProjectDetails(project);
    } else {
      // Fallback
      window.location.hash = "#portfolio";
    }
  } else {
    mainView.classList.remove("hidden");
    renderMainPortfolio("All");
  }
}

// Interactive Project Details Page Generator
function renderProjectDetails(project) {
  const view = document.getElementById("project-detail-view");
  if (!view) return;

  const isCAD = project.category === "CAD";

  view.innerHTML = `
    <div class="container mx-auto max-w-6xl">
      <!-- Top Action Ribbon -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-8 pb-5 border-b border-gray-800">
        <button id="detail-back-button" class="inline-flex items-center gap-2 text-indigo-400 hover:text-white transition-colors duration-200 font-semibold font-poppins">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          <span>Back</span>
        </button>
        
        <div class="text-xs text-gray-500 flex items-center gap-1.5 font-mono">
          <span>PORTFOLIO</span>
          <span class="text-gray-700">/</span>
          <span class="text-indigo-400 uppercase">${project.category}</span>
          <span class="text-gray-700">/</span>
          <span class="text-gray-300 uppercase">${project.title}</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <!-- Left Column: Media Renderer -->
        <div class="lg:col-span-7 space-y-6">
          ${isCAD ? `
            <!-- Media Tab Toggle Controllers -->
            <div class="flex bg-gray-950 p-1 rounded-md border border-gray-800 w-full max-w-xs ring-1 ring-white/5">
              <button id="tab-visual" class="flex-1 text-center py-2 text-xs font-semibold rounded transition-all bg-[#6366F1] text-white">
                📷 Rendering Frame
              </button>
              <button id="tab-blueprint" class="flex-1 text-center py-2 text-xs font-semibold rounded text-gray-400 hover:text-white transition-all">
                📐 Tech Blueprint
              </button>
            </div>
          ` : ""}

          <div class="relative overflow-hidden rounded-xl border border-gray-800 bg-gray-950 shadow-2xl transition-all duration-300 min-h-[300px] md:min-h-[400px] flex items-center justify-center">
            
            <!-- Standard Visual Container -->
            <div id="detail-visual-container" class="w-full h-full max-h-[500px]">
              ${project.image ? `
                <img src="${project.image}" alt="${project.title}" class="w-full h-full max-h-[500px] object-cover object-center transform hover:scale-101 transition-transform duration-500" />
              ` : `
                <div class="p-8 text-center flex flex-col justify-center items-center py-24 bg-gray-900/40">
                  <div class="mb-4 text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold font-poppins text-white mb-2">Confidential mechanical engineering work</h3>
                  <p class="text-sm text-gray-400 max-w-sm">Limited documentation, cannot be published due to proprietary NDA regulations.</p>
                </div>
              `}
            </div>

            <!-- Dynamic Interactive Blueprint SVG container -->
            ${isCAD ? `
              <div id="detail-blueprint-container" class="hidden w-full h-full">
                ${getBlueprintSVG(project.id)}
              </div>
            ` : ""}
          </div>

          ${isCAD ? `
            <p class="text-xs text-gray-500 flex items-center justify-center gap-2 italic">
              <span>📐 Interactive CAD Drawing preview generated under standard ISO rules.</span>
            </p>
          ` : ""}
        </div>

        <!-- Right Column: Specs & Chronological Methodology panel -->
        <div class="lg:col-span-5 space-y-8">
          <div>
            <span class="px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 uppercase">
              ${project.category}
            </span>
            <h1 class="text-3xl md:text-4xl font-poppins font-bold text-white mt-3">${project.title}</h1>
            <p class="text-xs text-gray-400 font-mono mt-1">Project Logged: ${project.date}</p>
          </div>

          <div class="p-6 bg-gray-900/30 rounded-lg border border-gray-800">
            <h4 class="text-xs font-bold font-poppins text-gray-400 uppercase tracking-wider mb-2">Project Overview</h4>
            <p class="text-gray-300 leading-relaxed text-sm">${project.description}</p>
          </div>

          <div>
            <h4 class="text-xs font-bold font-poppins text-gray-400 uppercase tracking-widest mb-3">Software Stack Used</h4>
            <div class="flex flex-wrap gap-2">
              ${project.software.map(getSoftwareBadge).join("")}
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-xs font-bold font-poppins text-gray-400 uppercase tracking-widest">Work Methodology</h4>
            <div class="relative pl-6 border-l-2 border-[#1E40AF]/60 space-y-6 py-2">
              ${project.methodology.map((step, idx) => `
                <div class="relative">
                  <div class="absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full bg-[#6366F1] border border-[#0D0D0D] flex items-center justify-center">
                    <span class="text-[9px] font-bold text-white font-mono">${idx + 1}</span>
                  </div>
                  <p class="text-sm text-gray-300 leading-relaxed font-sans">
                    ${step}
                  </p>
                </div>
              `).join("")}
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  // Bind Dynamic click events to Back buttons
  const backBtn = document.getElementById("detail-back-button");
  if (backBtn) {
    backBtn.onclick = () => {
      window.location.hash = previousHash;
    };
  }

  // Bind Switch Actions for CAD Tabs
  if (isCAD) {
    const tabVisual = document.getElementById("tab-visual");
    const tabBlueprint = document.getElementById("tab-blueprint");
    const visualBox = document.getElementById("detail-visual-container");
    const blueprintBox = document.getElementById("detail-blueprint-container");

    if (tabVisual && tabBlueprint && visualBox && blueprintBox) {
      tabVisual.onclick = () => {
        tabVisual.className = "flex-1 text-center py-2 text-xs font-semibold rounded transition-all bg-[#6366F1] text-white";
        tabBlueprint.className = "flex-1 text-center py-2 text-xs font-semibold rounded text-gray-400 hover:text-white transition-all";
        visualBox.classList.remove("hidden");
        blueprintBox.classList.add("hidden");
      };

      tabBlueprint.onclick = () => {
        tabBlueprint.className = "flex-1 text-center py-2 text-xs font-semibold rounded transition-all bg-[#6366F1] text-white";
        tabVisual.className = "flex-1 text-center py-2 text-xs font-semibold rounded text-gray-400 hover:text-white transition-all";
        blueprintBox.classList.remove("hidden");
        visualBox.classList.add("hidden");
      };
    }
  }
}

// Initializer Event
document.addEventListener("DOMContentLoaded", () => {
  // --- Loading Screen Fade Away ---
  const screen = document.getElementById("loading-screen");
  if (screen) {
    setTimeout(() => {
      screen.style.opacity = "0";
      screen.addEventListener("transitionend", () => {
        screen.style.display = "none";
      });
    }, 1500); // Decelerated visual load for clean entry rhythm
  }

  // --- Particle Moving Background System ---
  const canvas = document.getElementById("particle-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let particlesArray = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight || document.body.scrollHeight;
    };

    window.addEventListener("resize", () => {
      resizeCanvas();
      init();
    });
    resizeCanvas();

    class Particle {
      constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }
      update() {
        if (canvas) {
          if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
          if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
      }
      draw() {
        if (ctx) {
          ctx.fillStyle = "rgba(99, 102, 241, 0.25)";
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function init() {
      if (!canvas) return;
      particlesArray = [];
      let total = (canvas.height * canvas.width) / 10000;
      if (total > 120) total = 120; // Soft visual cap for frame optimization
      for (let i = 0; i < total; i++) {
        let size = Math.random() * 1.5 + 1;
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let speedX = Math.random() * 0.3 - 0.15;
        let speedY = Math.random() * 0.3 - 0.15;
        particlesArray.push(new Particle(x, y, size, speedX, speedY));
      }
    }

    function animate() {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          particlesArray[i].draw();
        }
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    // Trigger canvas resizing on state or routing changes to align particles perfectly
    window.addEventListener("hashchange", () => {
      setTimeout(() => {
        resizeCanvas();
        init();
      }, 350);
    });
  }

  // --- Scroll Visual Observators ---
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".fade-in").forEach((el) => scrollObserver.observe(el));

  // --- Animated Typing Effect ---
  const typeSpan = document.getElementById("typed-text");
  const professions = ["Programmer", "Drafter Engineering", "Mechanical Engineering", "Photographer"];
  let arrayIdx = 0;
  let charIdx = 0;

  function runTyping() {
    if (!typeSpan) return;
    if (charIdx < professions[arrayIdx].length) {
      typeSpan.textContent += professions[arrayIdx].charAt(charIdx);
      charIdx++;
      setTimeout(runTyping, 120);
    } else {
      setTimeout(runErasing, 1800);
    }
  }

  function runErasing() {
    if (!typeSpan) return;
    if (charIdx > 0) {
      typeSpan.textContent = professions[arrayIdx].substring(0, charIdx - 1);
      charIdx--;
      setTimeout(runErasing, 80);
    } else {
      arrayIdx = (arrayIdx + 1) % professions.length;
      setTimeout(runTyping, 800);
    }
  }

  if (typeSpan && professions.length) {
    setTimeout(runTyping, 2000);
  }

  // --- Homepage Capped filter triggers ---
  const filtersTabContainer = document.getElementById("portfolio-filters");
  if (filtersTabContainer) {
    filtersTabContainer.onclick = (e) => {
      const btn = e.target;
      if (btn && btn.tagName === "BUTTON") {
        const activeBtn = filtersTabContainer.querySelector("button.active");
        if (activeBtn) {
          activeBtn.classList.remove("active", "bg-[#6366F1]", "text-white");
          activeBtn.classList.add("bg-gray-800", "text-gray-300");
        }
        btn.classList.add("active", "bg-[#6366F1]", "text-white");
        btn.classList.remove("bg-gray-800", "text-gray-300");

        const term = btn.getAttribute("data-filter") || "All";
        renderMainPortfolio(term);
      }
    };
  }

  // --- Dedicated Page filter & search triggers ---
  const fullFiltersBox = document.getElementById("full-portfolio-filters");
  const fullSearchField = document.getElementById("full-portfolio-search");

  if (fullFiltersBox) {
    fullFiltersBox.onclick = (e) => {
      const btn = e.target;
      if (btn && btn.tagName === "BUTTON") {
        const activeBtn = fullFiltersBox.querySelector("button.active");
        if (activeBtn) {
          activeBtn.classList.remove("active", "bg-[#6366F1]", "text-white");
          activeBtn.classList.add("bg-gray-800", "text-gray-300");
        }
        btn.classList.add("active", "bg-[#6366F1]", "text-white");
        btn.classList.remove("bg-gray-800", "text-gray-300");

        const term = btn.getAttribute("data-full-filter") || "All";
        const phrase = fullSearchField ? fullSearchField.value : "";
        renderFullPortfolio(term, phrase);
      }
    };
  }

  if (fullSearchField) {
    fullSearchField.addEventListener("input", () => {
      const activeBtn = document.querySelector("#full-portfolio-filters button.active");
      const term = activeBtn ? activeBtn.getAttribute("data-full-filter") || "All" : "All";
      renderFullPortfolio(term, fullSearchField.value);
    });
  }

  // --- Establish Routing triggers on initial load & updates ---
  handleRouting();
  window.addEventListener("hashchange", handleRouting);
});
