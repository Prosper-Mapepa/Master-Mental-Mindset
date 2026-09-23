export const team = {
  school: "Lincoln High",
  name: "Varsity Basketball",
  code: "LNK-BB-8K2",
  week: 5,
  seasonWeeks: 12,
  athletes: 21,
};

export const athlete = {
  firstName: "Jordan",
  lastName: "Reyes",
  grade: 11,
  position: "Guard",
};

export const coach = {
  firstName: "Maya",
  lastName: "Chen",
  title: "Head Coach",
};

export const admin = {
  firstName: "Alex",
  lastName: "Ward",
  title: "MMM Admin",
};

export const topics = [
  { id: "confidence", label: "Confidence" },
  { id: "communication", label: "Communication" },
  { id: "pressure", label: "Handling Pressure" },
  { id: "resilience", label: "Resilience" },
  { id: "leadership", label: "Leadership" },
  { id: "selftalk", label: "Self-Talk" },
  { id: "injury", label: "Fear or Injury" },
  { id: "identity", label: "Identity Beyond Sport" },
];

export const recommendedSeason = [
  { week: 1, title: "Building Confidence", category: "Confidence" },
  { week: 2, title: "Self-Talk", category: "Self-Talk" },
  { week: 3, title: "Teammate Communication", category: "Communication" },
  { week: 4, title: "Handling Mistakes", category: "Resilience" },
  { week: 5, title: "Managing Pressure", category: "Pressure" },
  { week: 6, title: "Control the Controllables", category: "Pressure" },
  { week: 7, title: "Next Play Mentality", category: "Resilience" },
  { week: 8, title: "Identity Beyond Sport", category: "Personal" },
  { week: 9, title: "Being a Great Teammate", category: "Team" },
  { week: 10, title: "Difficult Conversations", category: "Communication" },
  { week: 11, title: "Leadership", category: "Personal" },
  { week: 12, title: "Purpose", category: "Personal" },
];

export const currentRep = {
  number: 5,
  title: "Managing Pressure",
  minutes: 8,
  category: "Pressure",
  question: "When pressure rises in a game, what usually happens first?",
  options: [
    "My mind speeds up and I rush",
    "I get tight and play smaller",
    "I lock in and get clearer",
    "It depends on the moment",
  ],
  learn: {
    title: "Control the controllables",
    body: "Pressure is normal. The skill is shrinking the moment to the next action you can actually take — breath, stance, phrase — then playing that.",
    videoSrc: "/video.mp4",
    videoTitle: "3 Mental Game Tools That Stop Pre-Game Nerves",
  },
  scenario: {
    prompt: "You missed two free throws. The gym is loud. Next possession is yours. What do you do first?",
    options: [
      "Replay the misses and try to make up for them",
      "One breath, next-play phrase, eyes up",
      "Look at the bench and wait to be taken out",
      "Force a tough shot to prove you’re fine",
    ],
    good: 1,
  },
  applyLabel: "Your reset phrase",
  challenge: "This week, use your reset phrase once after a mistake — in practice or a game.",
};

export const pulseMetrics = [
  { id: "energy", label: "Energy", value: 3.2, prev: 3.5 },
  { id: "confidence", label: "Confidence", value: 4.1, prev: 3.8 },
  { id: "motivation", label: "Motivation", value: 3.8, prev: 3.8 },
  { id: "pressure", label: "Pressure / Stress", value: 4.4, prev: 3.9 },
  { id: "connection", label: "Team Connection", value: 4.5, prev: 4.3 },
  { id: "enjoyment", label: "Enjoyment", value: 3.9, prev: 4.0 },
];

export const checkInScales = [
  { id: "energy", label: "Energy" },
  { id: "confidence", label: "Confidence" },
  { id: "motivation", label: "Motivation" },
  { id: "pressure", label: "Pressure / Stress" },
  { id: "connection", label: "Team Connection" },
  { id: "enjoyment", label: "Enjoyment" },
];

export const roster = [
  { name: "Avery Brooks", done: true },
  { name: "Cam Diaz", done: true },
  { name: "Devon Hale", done: true },
  { name: "Ellis Park", done: true },
  { name: "Finley Ortiz", done: true },
  { name: "Harper Quinn", done: true },
  { name: "Indigo West", done: true },
  { name: "Jordan Reyes", done: false, you: true },
  { name: "Kai Singh", done: true },
  { name: "Lane Cooper", done: false },
  { name: "Morgan Ellis", done: true },
  { name: "Noor Patel", done: true },
  { name: "Oakley Grant", done: true },
  { name: "Parker James", done: true },
  { name: "Quinn Blake", done: true },
  { name: "Riley Cho", done: true },
  { name: "Sam Rivera", done: false },
  { name: "Tatum Cole", done: true },
  { name: "Uma Shah", done: true },
  { name: "Val Monroe", done: true },
  { name: "Wren Adler", done: true },
];

export const completedReps = [
  { week: 1, title: "Building Confidence", done: true },
  { week: 2, title: "Self-Talk", done: true },
  { week: 3, title: "Teammate Communication", done: true },
  { week: 4, title: "Handling Mistakes", done: true },
  { week: 5, title: "Managing Pressure", done: false },
  { week: 6, title: "Control the Controllables", done: false },
  { week: 7, title: "Next Play Mentality", done: false },
  { week: 8, title: "Identity Beyond Sport", done: false },
  { week: 9, title: "Being a Great Teammate", done: false },
  { week: 10, title: "Difficult Conversations", done: false },
  { week: 11, title: "Leadership", done: false },
  { week: 12, title: "Purpose", done: false },
];

export const toolbox = [
  { id: "gameday", title: "Before competition", use: "Settle the body. Pick one cue.", tags: ["Game Day"] },
  { id: "after", title: "After a bad performance", use: "Separate the result from the next hour.", tags: ["Reset"] },
  { id: "confidence", title: "Confidence", use: "Stack evidence, not mood.", tags: ["Confidence"] },
  { id: "pressure", title: "Pressure", use: "Shrink the moment to the next action.", tags: ["Pressure"] },
  { id: "mistakes", title: "Mistakes", use: "Next-play phrase. Eyes up.", tags: ["Resilience"] },
  { id: "talk", title: "Communication", use: "Say the useful thing, not the loud thing.", tags: ["Team"] },
  { id: "motivation", title: "Motivation", use: "Return to the job of this practice.", tags: ["Drive"] },
  { id: "overthink", title: "Overthinking", use: "Name it, then pick a physical cue.", tags: ["Focus"] },
];

export const helpTopics = [
  { id: "nerves", title: "Game-day nerves" },
  { id: "mistake", title: "I just made a mistake" },
  { id: "compare", title: "I’m comparing myself" },
  { id: "parents", title: "Pressure from parents" },
  { id: "bench", title: "I lost my starting spot" },
  { id: "tired", title: "I’m not enjoying it" },
];

export const coachTool = {
  week: 5,
  module: "Managing Pressure",
  starter: "What does good communication look like when we’re frustrated?",
  activity: "5-minute pressure reset — box breath, next-play phrase, one controllable.",
  why: "Team pressure is up two weeks in a row. Keep this short and in the locker room, not a lecture.",
};

export const schools = [
  { school: "Lincoln High", teams: 3, athletes: 64, code: "LNK-BB-8K2", status: "Active" },
  { school: "Ridgeway Academy", teams: 2, athletes: 41, code: "RDG-VB-4M1", status: "Active" },
  { school: "Eastfield Prep", teams: 4, athletes: 88, code: "EST-SC-9P3", status: "Active" },
  { school: "Northside HS", teams: 1, athletes: 22, code: "NTH-BB-2Q7", status: "Ending soon" },
  { school: "Harbor Collegiate", teams: 2, athletes: 37, code: "HBR-TN-6L4", status: "Active" },
];

export const contentLibrary = [
  { category: "Confidence", items: ["Building Confidence", "Comparison", "Self-Doubt", "Evidence Over Emotion"] },
  { category: "Pressure", items: ["Managing Pressure", "Expectations", "Game-Day Nerves", "Control the Controllables"] },
  { category: "Resilience", items: ["Handling Mistakes", "Failure", "Next Play Mentality", "Bouncing Back"] },
  { category: "Communication", items: ["Teammates", "Coaches", "Parents", "Difficult Conversations"] },
  { category: "Personal development", items: ["Identity Beyond Sport", "Leadership", "Life Balance", "Character", "Purpose"] },
  { category: "Team", items: ["Culture", "Support", "Accountability", "Being a Great Teammate"] },
];

export const notifications = {
  athlete: [
    { title: "Your Mental Rep for this week is ready", time: "Monday 7:00 AM", to: "/athlete/rep" },
    { title: "Don’t forget your weekly check-in", time: "Yesterday", to: "/athlete/check-in" },
  ],
  coach: [
    { title: "86% of your team completed this week’s Mental Rep", time: "Today", to: "/coach/completion" },
    { title: "Team pressure has risen for two weeks", time: "This morning", to: "/coach/tool" },
  ],
};
