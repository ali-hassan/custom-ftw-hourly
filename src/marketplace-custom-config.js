/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'towels',
    label: 'Towels',
  },
  {
    key: 'bathroom',
    label: 'Bathroom',
  },
  {
    key: 'swimming_pool',
    label: 'Swimming pool',
  },
  {
    key: 'own_drinks',
    label: 'Own drinks allowed',
  },
  {
    key: 'jacuzzi',
    label: 'Jacuzzi',
  },
  {
    key: 'audiovisual_entertainment',
    label: 'Audiovisual entertainment',
  },
  {
    key: 'barbeque',
    label: 'Barbeque',
  },
  {
    key: 'own_food_allowed',
    label: 'Own food allowed',
  },
];

export const equipment_attachments = [
  {key: "buckets", label: "Buckets"},
  {key: "compactors", label: "Compactors"},
  {key: "couplers", label: "Couplers"},
  {key: "demolition", label: "Demolition"},
  {key: "drilling", label: "Drilling"},
  {key: "forestry", label: "Forestry"},
  {key: "grapples", label: "Grapples"},
  {key: "hammers", label: "Hammers"},
  {key: "hydrovac", label: "Hydrovac"},
  {key: "multi-processors", label: "Multi Processors"},
  {key: "rakes", label: "Rakes"},
  {key: "rippers", label: "Rippers"},
  {key: "screening-buckets", label: "Screening Buckets"},
  {key: "thumbs", label: "Thumbs"},
]

export const sizes = {
"excavators": [
    "10 - 20 Ton",
    "21 - 30 Ton",
    "31 - 40 Ton",
    "41 - 50 Ton",
    "51 Ton +"
  ],
"wheel-loaders": [
    "1 Yard",
    "2 Yard",
    "3 Yard",
    "4 Yard",
    "5 Yard",
    "6 Yard",
    "7 Yard"
  ],
"mini-excavators": [
    "1.5 Ton",
    "2 Ton",
    "3 Ton",
    "4 Ton",
    "5 Ton",
    "6 Ton",
    "7 Ton",
    "8 Ton",
    "9 Ton"
  ],
"skid-steers-wheeled": [
    "1,000+ lbs",
    "2,000+ lbs",
    "3,000+ lbs",
    "4,000+ lbs",
  ],
"skid-steers-tracked": [
    "1,000+ lbs",
    "2,000+ lbs",
    "3,000+ lbs",
    "4,000+ lbs",
  ],
"scissor-lifts-electric": [
    "15ft +",
    "20ft +",
    "30ft +",
    "40ft +",
    "50ft +",
  ],
"scissor-lifts-rough-terrain": [
    "15ft +",
    "20ft +",
    "30ft +",
    "40ft +",
    "50ft +",
  ],
"boom-lifts-straight": [
    "40ft +  - Electric",
    "50ft + - Electric",
    "60ft + - Electric",
    "40ft +- Dual Fuel",
    "50ft + - Dual Fuel",
    "60ft + - Dual Fuel",
    "70ft + - Dual Fuel",
    "80ft + - Dual Fuel",
    "90ft + - Dual Fuel",
    "100ft + - Dual Fuel",
    "110ft + - Dual Fuel",
    "120ft + - Dual Fuel",
    "130ft +  - Dual Fuel",
    "140 ft + - Dual Fuel",
    "150ft + - Dual Fuel",
    "160ft + - Dual Fuel",
    "170ft + - Dual Fuel",
    "180ft + - Dual Fuel",
  ],
"boom-lifts-articulated": [
    "30ft + - Electric",
    "45ft + - Electric",
    "50ft + - Electric ",
    "60ft + -  Electric ",
    "30ft + - Dual Fuel",
    "40ft + - Dual Fuel",
    "60ft + - Dual Fuel",
    "70ft + - Dual Fuel",
    "80ft + - Dual Fuel",
    "90ft + - Dual Fuel",
    "100ft + - Dual Fuel",
    "110ft + - Dual Fuel",
    "120ft + - Dual Fuel",
    "130ft + - Dual Fuel",
    "140ft + - Dual Fuel",
    "150ft + - Dual Fuel",
  ],
"bulldozers": [
    "15,000lbs",
    "20,000lbs",
    "30,000lbs",
    "40,000lbs",
    "50,000lbs",
    "80,000lbs",
    "100,000lbs",
    "200,000lbs",
  ],
"articulating-trucks": [
    "25 Ton +",
    "30 Ton +",
    "35 Ton +",
    "40 Ton +",
    "45 Ton +",
  ],
"backhoes": [
    "10,000 lbs +",
    "15,000 lbs +",
    "20,000 lbs +",
    "25,000 lbs +",
  ],
"telehandlers": [
    "5,000 lbs: 15 - 19 ft",
    "6,000 ibs: 32 - 42 ft",
    "8,000 lbs: 40 - 42 ft",
    "10,000 lbs: 42 - 50ft",
    "12,000 lbs: 50 - 55 ft",
    "15,000 lbs: 50 - 55ft"
  ],
"rough-terrain-forklifts": [
    "6,000 - 10,000 lbs - Lift Height 18 ft",
    "6,000 - 20,000 lbs - Lift Height 30 ft"
  ],
"industrial-forklifts-propane-cushion": [
    "4000 - 6,500 lbs",
    "6,500 - 10,000 lbs",
    "25,000 - 35,000 lbs",
    "40,000 - 60,000 lbs",
  ],
"industrial-forklifts-propane-pneumatic": [
    "3,000 - 6,000 lbs",
    "8,000 - 10,000 lbs",
    "13,000 - 17,000 lbs",
  ],
"industrial-forklifts-electric-cushion": [
    "3,000 - 4,000 lbs",
    "4,500 - 7,000 lbs",
    "8,000 - 12,000 lbs",
  ],
"industrial-forklifts-electric-pneumatic": [
    "3,000 lbs +",
    "4,000 lbs +",
    "6,000 lbs +",
    "7,000 lbs +",
    "8,000 lbs +",
    "9,000 lbs +",
    "10,000 lbs +",
    "11,000 lbs +",
    "12,000 lbs +",
  ],
"cranes-all-terrain": [
    "40 - 60 Ton",
    "70 - 100 Ton",
    "110 - 30 Ton",
    "140 - 160  Ton ",
    "170 - 200 Ton",
    "210 - 300 Ton",
    "310 - 500 Ton",
    "600 Ton +",
  ],
"cranes-rough-terrain": [
    "30 - 50 Ton",
    "60 - 80 Ton",
    "90 - 110 Ton",
    "120 - 140 Ton",
    "150 Ton +",
  ],
"cranes-crawler": [
    "40 - 70 Ton",
    "80 - 100 Ton",
    "110 - 130 Ton",
    "140 Ton +",
  ],
"cranes-hydraulic": [
    "30 - 40 Ton",
    "50 - 60 Ton",
    "70 - 80 Ton",
    "90 - 100 Ton",
    "110 - 120 Ton",
    "130 - 140 Ton",
    "150 Ton +",
  ],
"compaction": [
    "14 Inches +",
    "24 Inches +",
    "34 Inches +",
    "44 Inches +",
    "54 Inches +",
    "64 Inches +",
  ],
"generators-compressors-diesel-generator": [
    "10kw +",
    "50kw +",
    "80 kw +",
    "100 kw +",
    "200 kw +",
    "500 kw +",
    "1000 kw +",
  ],
"generators-compressors-portable-gas-generator": [
    "2000W +",
    "3000W +",
    "4000W +",
    "5000W +",
    "6000W +",
    "7000W +",
    "8000W +",
    "9000W +",
    "10000W +",
  ],
"generators-compressors-light-tower-generator": [
    "4 x 100w +",
    "4 x 300w +",
    "4 x  500w +",
    "4 x 800w +",
    "4 x 1000w +",
    "4 x 2000w +",
    "6 x 100w +",
    "6 x 300w +",
    "6 x  500w +",
    "6 x 800w +",
    "6 x 1000w +",
    "6 x 2000w +",
  ],
"generators-compressors-diesel-compressor": [
    "1 - 50 CFM",
    "60 - 90 CFM",
    "100  - 200 CFM",
    "300 - 500 CFM",
    "600 - 800 CFM",
    "900 - 1100 CFM",
    "1200 - 1400 CFM",
    "1500 - 1700 CFM",
    "1800 - 2000 CFM",
  ],
"generators-compressors-gas-compressor": [
    "1 - 50 CFM",
    "60 - 90 CFM",
    "100  - 200 CFM",
    "300 - 500  CFM",
    "600 - 800 CFM",
    "900 - 1100 CFM",
    "1200 - 1400  CFM",
    "1500 - 1700 CFM",
    "1800 - 2000 CFM",
  ],
}

export const sub_categories = {
  "skid-steers": [
    {key: "wheeled", label: "Wheeled"},
    {key: "tracked", label: "Tracked"}
  ],
  "scissor-lifts": [
    {key: "electric", label: "Electric"},
    {key: "rough-terrain", label: "Rough Terrain"}
  ],
  "boom-lifts": [
    {key: "straight", label: "Straight"},
    {key: "articulated", label: "Articulated"}
  ],
  "industrial-forklifts": [
    {key: "propane-cushion", label: "Propane / Cushion"},
    {key: "propane-pneumatic", label: "Propane / Pneumatic"},
    {key: "electric-cushion", label: "Electric / Cushion"},
    {key: "electric-pneumatic", label: "Electric / Pneumatic"}
  ],
  "cranes":[
    {key: "all-terrain", label: "All Terrain"},
    {key: "rough-terrain", label: "Rough Terrain"},
    {key: "crawler", label: "Crawler"},
    {key: "hydraulic", label: "Hydraulic"}
  ],
  "generators-compressors": [
    {key: "diesel-generator", label: "Diesel Generator"},
    {key: "portable-gas-generator", label: "Portable Gas Generator"},
    {key: "light-tower-generator", label: "Light Tower"},
    {key: "diesel-compressor", label: "Diesel Compressor"},
    {key: "gas-compressor", label: "Gas Compressor"}
  ],
  "attachments": equipment_attachments,
}

export const categories = [
  {key: "excavators", label: "Excavators"},
  {key: "wheel-loaders", label: "Wheel Loaders"},
  {key: "mini-excavators", label: "Mini Excavators"},
  {key: "skid-steers", label: "Skid Steers", extensions: [
      {
        question: "Is your Skid Steer Wheeled or Tracked?",
        options: [{key: "wheeled", label: "Wheeled"}, {key: "tracked", label: "Tracked"}]
      }
    ]
  },
  {key: "scissor-lifts", label: "Scissor Lifts", extensions: [
      {
        question: "Is your lift electric or rough terrain?",
        options: [{key: "electric", label: "Electric"}, {key: "rough-terrain", label: "Rough Terrain"}]
      }
    ]
  },
  {key: "boom-lifts", label: "Boom Lifts", extensions: [
      {
        question: "Is your boom lift straight or articulated?",
        options: [{key: "straight", label: "Straight"}, {key: "articulated", label: "Articulated"}]
      }
    ]
  },
  {key: "telehandlers", label: "Telehandlers"},
  {key: "rough-terrain-forklifts", label: "Rough Terrain Forklifts"},
  {key: "industrial-forklifts", label: "Industrial Forklifts", extensions: [
      {
        question: "Which type of Forklift would you like to onboard?",
        options: [{key: "propane-cushion", label: "Propane / Cushion"}, {key: "propane-pneumatic", label: "Propane / Pneumatic"}, {key: "electric-cushion", label: "Electric / Cushion"}, {key: "electric-pneumatic", label: "Electric / Pneumatic"}]
      }
    ]
  },
  {key: "bulldozers", label: "Bulldozers"},
  {key: "backhoes", label: "Backhoes"},
  {key: "articulating-trucks", label: "Articulating Trucks"},
  {key: "cranes", label: "Cranes", extensions: [
      {
        question: "Which type of crane would you like to onboard?",
        options: [{key: "all-terrain", label: "All Terrain"}, {key: "rough-terrain", label: "Rough Terrain"}, {key: "crawler", label: "Crawler"}, {key: "hydraulic", label: "Hydraulic"}]
      }
    ]
  },
  {key: "compaction", label: "Compaction"},
  {key: "generators-compressors", label: "Generators & Compressors", extensions: [
      {
        question: "Which type of crane would you like to onboard?",
        options: [
          {key: "diesel-generator", label: "Diesel Generator"},
          {key: "portable-gas-generator", label: "Portable Gas Generator"},
          {key: "light-tower-generator", label: "Light Tower"},
          {key: "diesel-compressor", label: "Diesel Compressor"},
          {key: "gas-compressor", label: "Gas Compressor"}
        ]
      }
    ]
  },
  {key: "attachments", label: "Attachments", extensions: [
      {
        question: "Which type of attachement would you like to onboard?",
        options: equipment_attachments
      }
    ]
  },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,
};
