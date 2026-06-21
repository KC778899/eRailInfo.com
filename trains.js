// ─────────────────────────────────────────────────────────────────
// trains.js — SINGLE SOURCE OF TRUTH
// Edit trains here and ALL pages update automatically.
// ─────────────────────────────────────────────────────────────────

const trains = [
  { number: "12951", name: "Mumbai Rajdhani Express",        from: "Mumbai Central",    to: "New Delhi",           category: "Rajdhani",         revised: true  },
  { number: "12295", name: "Bengaluru Duronto",              from: "KSR Bengaluru",     to: "Hazrat Nizamuddin",   category: "Duronto",          revised: false },
  { number: "12049", name: "Gatimaan Express",               from: "Hazrat Nizamuddin", to: "Jhansi",              category: "Shatabdi",         revised: true  },
  { number: "12002", name: "Bhopal Shatabdi",                from: "New Delhi",         to: "Habibganj",           category: "Shatabdi",         revised: false },
  { number: "22439", name: "New Delhi–Bihar Sampark Kranti", from: "New Delhi",         to: "Rajgir",              category: "Sampark Kranti",   revised: false },
  { number: "20901", name: "Mumbai Vande Bharat",            from: "Mumbai Central",    to: "Gandhinagar Capital", category: "Vande Bharat",     revised: true  },
  // ← ADD MORE TRAINS HERE. All 21 pages will update automatically.
];

const trainCategories = [
  "AC Express", "AC Superfast", "Amrit Bharat", "Antyodaya",
  "Double Decker", "Duronto", "Garib Rath", "Humsafar",
  "Jan Shatabdi", "Namo Bharat", "Rajdhani", "Sampark Kranti",
  "Shatabdi", "Suvidha", "Tejas", "Toy Train",
  "Uday", "Vande Bharat", "Vande Bharat Sleeper",
  "Mail/Express", "Superfast"
];
