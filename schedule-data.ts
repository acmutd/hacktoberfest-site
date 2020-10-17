interface Event {
  track: number
  offset: number
  length: number
  name: string
  timeStr: string
  wide?: boolean
  partner?: string
  description?: string
  doubled?: boolean
  id: string
}

const schedule: Event[] = [
  {
    track: 1,
    offset: 0,
    length: 60,
    name: 'Check-In',
    timeStr: '9:00–10:00 AM CST',
    id: 'checkin',
  },
  {
    track: 3,
    offset: 0,
    length: 30,
    name: 'Virtual Scavenger Hunt',
    partner: 'ACM Community',
    timeStr: '9:00–9:30 AM CST',
    id: 'scavenger-hunt',
  },
  {
    track: 2,
    offset: 2,
    length: 30,
    name: 'Chandini Portteus: Entrepreneurship Talk',
    partner: 'Chandini Portteus',
    timeStr: '9:30–10:00 AM CST',
    id: 'chandini-portteus-talk',
  },
  {
    track: 1,
    offset: 4,
    length: 30,
    name: 'Hacktoberfest Kickoff + Featured Speaker Talk',
    wide: true,
    timeStr: '10:00–10:30 AM CST',
    id: 'kickoff',
  },
  {
    track: 1,
    offset: 6,
    length: 30,
    name: 'Q & A with Rocio Montes',
    partner: 'Rocio Montes',
    timeStr: '10:30–11 AM CST',
    id: 'q-a-rocio-montes',
  },
  {
    track: 3,
    offset: 6,
    length: 30,
    name: 'Minecraft',
    partner: 'ACM Community',
    timeStr: '10:30–11:00 AM CST',
    id: 'minecraft',
  },
  {
    track: 1,
    offset: 8,
    length: 30,
    name: 'Women in Tech Panel',
    timeStr: '11:00–11:30 AM CST',
    id: 'women-tech-panel',
  },
  {
    track: 3,
    offset: 8,
    length: 30,
    name: 'Github Kahoot',
    partner: 'ACM Community',
    timeStr: '11:00–11:30 AM CST',
    id: 'github-kahoot',
  },
  {
    track: 1,
    offset: 10,
    length: 60,
    name: 'Personal Website Workshop',
    partner: 'ACM Education',
    timeStr: '11:30 AM CST–12:30 PM CST',
    id: 'personal-site-workshop',
  },
  {
    track: 2,
    offset: 12,
    length: 30,
    name: 'AI Is All You Need: A Showcase of Why AI Is Cool',
    partner: 'Artificial Intelligence Society',
    timeStr: '12:00–12:30 PM CST',
    id: 'ai-is-all-you-need',
  },
  {
    track: 1,
    offset: 14,
    length: 45,
    wide: true,
    name: 'Lunch Break and ECS Student Org Fair w/ ACM Community',
    timeStr: '12:30–1:15 PM CST',
    id: 'lunch-break-org-fair',
  },
  {
    track: 1,
    offset: 17,
    length: 60,
    name: 'Reaction-ary Business: React Workshop',
    partner: 'ACM Projects',
    timeStr: '1:15–2:15 PM CST',
    id: 'react-workshop',
  },
  {
    track: 2,
    offset: 19,
    length: 30,
    name: 'Spilling the Tea with WWC',
    partner: 'Women Who Compute',
    timeStr: '1:45–2:15 PM CST',
    id: 'wwc-spills-tea',
  },
  {
    track: 3,
    offset: 19,
    length: 30,
    name: 'Skribbl.io w/ oSTEM',
    partner: 'oSTEM',
    timeStr: '1:45–2:15 PM CST',
    id: 'skribbl-io-ostem',
  },
  {
    track: 1,
    offset: 21,
    length: 45,
    name: 'Ladders to Success: ACM Alumni Panel (Part 1)',
    timeStr: '2:15–3:00 PM CST',
    id: 'alum-panel-1',
  },
  {
    track: 3,
    offset: 22,
    length: 30,
    name: 'Jeopardy with SWE',
    partner: 'Society of Women Engineers & WEHack',
    timeStr: '2:30–3:00 PM CST',
    id: 'swe-jeopardy',
  },
  {
    track: 1,
    offset: 24,
    length: 60,
    name: 'Comets of Wall Street: Data Analysis Workshop',
    partner: 'ACM Research',
    timeStr: '3:00–4:00 PM CST',
    id: 'data-analysis-workshop',
  },
  {
    track: 2,
    offset: 26,
    length: 30,
    name: 'The Model Minority Myth',
    partner: 'SASE UTD',
    timeStr: '3:30–4:00 PM CST',
    id: 'model-minority',
  },
  {
    track: 3,
    offset: 26,
    length: 30,
    name: 'Virtual Murder Mystery #1',
    partner: 'ACM Community',
    timeStr: '3:30–4:00 PM CST',
    id: 'virtual-mystery-1',
  },
  {
    track: 1,
    offset: 28,
    length: 30,
    name: 'Tips & Tricks for Hackathons',
    partner: 'ACM Community',
    timeStr: '4:00–4:30 PM CST',
    id: 'hackathons-tips-tricks',
  },
  {
    track: 3,
    offset: 28,
    length: 60,
    name: 'Cooking w/ Willie',
    partner: 'Willie Chalmers III',
    timeStr: '4:00–5:00 PM CST',
    id: 'big-willie-cooks',
  },
  {
    track: 2,
    offset: 30,
    length: 30,
    name: 'Intro to Cloud & GCP',
    partner: 'Developer Student Clubs',
    timeStr: '4:30–5:00 PM CST',
    id: 'gcp-workshop',
  },
  {
    track: 1,
    offset: 32,
    length: 60,
    name: 'Build an API Workshop',
    partner: 'ACM Development',
    timeStr: '5:00–6:00 PM CST',
    id: 'build-api-workshop',
  },
  {
    track: 2,
    offset: 34,
    length: 30,
    name: 'Managing College Life',
    partner: 'WiCyS',
    timeStr: '5:30–6:00 PM CST',
    id: 'managing-college',
  },
  {
    track: 3,
    offset: 34,
    length: 30,
    name: 'Quarantine Bingo',
    timeStr: '5:30–6:00 PM CST',
    id: 'quarantine-bingo',
  },
  {
    track: 2,
    offset: 36,
    length: 30,
    name: 'WTF is DeFi?',
    partner: 'UTD Blockchain Club',
    timeStr: '6:00–6:30 PM CST',
    id: 'wtf-defi',
  },
  {
    track: 3,
    offset: 36,
    length: 30,
    name: 'MS Paint w/ Bob Ross',
    partner: 'ACM Community',
    timeStr: '6:00–6:30 PM CST',
    id: 'bob-ross-paint',
  },
  {
    track: 1,
    offset: 38,
    length: 60,
    name: 'Computer Graphics Workshop',
    partner: 'ACM Community',
    timeStr: '6:30–7:30 PM CST',
    id: 'comp-graphics-workshop',
  },
  {
    track: 2,
    offset: 40,
    length: 30,
    name: 'Bridging the Gap Between Software and Hardware',
    partner: 'IEEE UTD',
    timeStr: '7:00–7:30 PM CST',
    id: 'bridging-the-gap-software-hardware',
  },
  {
    track: 2,
    offset: 42,
    length: 15,
    name: 'Basics of Accessibility',
    partner: 'Girls Who Code',
    timeStr: '7:30–7:45 PM CST',
    id: 'accessibility-basics',
  },
  {
    track: 1,
    offset: 43,
    length: 15,
    name: 'MLH Fellowship Talk',
    timeStr: '7:45–8:00 PM CST',
    id: 'mlh-fellowship-talk',
  },
  {
    track: 3,
    offset: 42,
    length: 30,
    name: 'Virtual Murder Mystery #2',
    timeStr: '7:30–8:00 PM CST',
    id: 'virtual-mystery-2',
  },
  {
    track: 3,
    offset: 44,
    length: 30,
    name: 'Trivia with SkillsUSA',
    partner: 'SkillsUSA',
    timeStr: '8:00–8:30 PM CST',
    id: 'skillsusa-trivia',
  },
  {
    track: 1,
    offset: 44,
    length: 45,
    name: 'Ladders to Success: ACM Alumni Panel (Part 2)',
    timeStr: '8:00-8:45 PM CST',
    id: 'alum-panel-2',
  },
  {
    track: 1,
    offset: 47,
    length: 15,
    wide: true,
    name: 'ACM Hacktoberfest Wrap-Up',
    timeStr: '8:45–9:00 PM CST',
    id: 'wrap-up',
  },
  {
    track: 3,
    offset: 48,
    length: 90,
    name: 'ACM Community Among Us Afterparty',
    partner: 'ACM Community',
    timeStr: '9:00 PM CST onwards',
    id: 'after-party',
  },
]

export const scheduleMap: Record<string, Event> = {}

schedule.forEach(event => (scheduleMap[event.id] = event))

export default schedule
