interface Event {
  track: number
  offset: number
  length: number
  name: string
  timeStr: string
  wide?: boolean
  doubled?: boolean
}

const schedule: Event[] = [
  {
    track: 1,
    offset: 0,
    length: 60,
    name: 'Check-In',
    timeStr: '9–10 AM CST',
  },
  {
    track: 2,
    offset: 0,
    length: 90,
    name: 'ECS Student Org Fair',
    timeStr: '9–10:30 AM CST',
  },
  {
    track: 3,
    offset: 2,
    length: 30,
    name: 'Virtual Scavenger Hunt',
    timeStr: '9:30–10 AM CST',
  },
  {
    track: 1,
    offset: 6,
    length: 30,
    name: 'Hacktoberfest Kickoff',
    wide: true,
    timeStr: '10:30–11 AM CST',
  },
  // {
  //   track: 1,
  //   offset: 8,
  //   length: 30,
  //   name: 'UTD Grades Talk',
  //   timeStr: '11–11:30 AM CST',
  // },
  {
    track: 3,
    offset: 8,
    length: 30,
    name: 'Github Kahoot',
    timeStr: '11–11:30 AM CST',
  },
  {
    track: 1,
    offset: 10,
    length: 60,
    name: 'Personal Website Workshop',
    timeStr: '11:30 AM CST – 12:30 PM CST',
  },
  {
    track: 2,
    offset: 12,
    length: 30,
    name: 'AI Is All You Need: A Showcase of Why AI Is Cool',
    timeStr: '12:00–12:30 PM CST',
  },
  {
    track: 3,
    offset: 12,
    length: 30,
    name: 'Minecraft',
    timeStr: '12:00–12:30 PM CST',
  },
  {
    track: 1,
    offset: 14,
    length: 45,
    wide: true,
    name: 'Lunch Break w/ ACM Community',
    timeStr: '12:30–1:15 PM CST',
  },
  {
    track: 1,
    offset: 17,
    length: 60,
    name: 'ACM Projects Workshop',
    timeStr: '1:15–2:15 PM CST',
  },
  {
    track: 2,
    offset: 19,
    length: 30,
    name: 'Managing Mental Health & Imposter Syndrome',
    timeStr: '1:45–2:15 PM CST',
  },
  {
    track: 3,
    offset: 19,
    length: 30,
    name: 'Skribbl.io w/ oSTEM',
    timeStr: '1:45–2:15 PM CST',
  },
  {
    track: 1,
    offset: 21,
    length: 45,
    name: 'Ladders to Success: ACM Alumni Panel',
    timeStr: '2:15–3:00 PM CST',
  },
  {
    track: 1,
    offset: 24,
    length: 60,
    name: 'Comets of Wall Street: Data Analysis Workshop',
    timeStr: '3:00–4:00 PM CST',
  },
  {
    track: 2,
    offset: 26,
    length: 30,
    name: 'The Model Minority Myth',
    timeStr: '3:30–4:00 PM CST',
  },
  {
    track: 3,
    offset: 26,
    length: 30,
    name: 'Virtual Murder Mystery #1',
    timeStr: '3:30–4:00 PM CST',
  },
  {
    track: 1,
    offset: 28,
    length: 30,
    name: 'Tips & Tricks for Hackathons',
    timeStr: '4:00–4:30 PM CST',
  },
  {
    track: 2,
    offset: 28,
    length: 30,
    name: 'Hacking the Gender Gap',
    timeStr: '4:00–4:30 PM CST',
  },
  {
    track: 3,
    offset: 28,
    length: 60,
    name: 'Cooking w/ Willie',
    timeStr: '4:00–5:00 PM CST',
  },
  {
    track: 2,
    offset: 30,
    length: 30,
    name: 'Intro to Cloud & GCP',
    timeStr: '4:30–5:00 PM CST',
  },
  {
    track: 1,
    offset: 32,
    length: 60,
    name: 'ACM Development Workshop',
    timeStr: '5:00–6:00 PM CST',
  },
  {
    track: 2,
    offset: 34,
    length: 30,
    name: 'Managing College Life',
    timeStr: '5:30–6:00 PM CST',
  },
  {
    track: 3,
    offset: 34,
    length: 30,
    name: 'Quarantine Bingo',
    timeStr: '5:30–6:00 PM CST',
  },
  {
    track: 1,
    offset: 36,
    length: 30,
    name: 'Women in Tech Panel',
    timeStr: '6:00–6:30 PM CST',
  },
  // {
  //   track: 2,
  //   offset: 36,
  //   length: 30,
  //   name: 'SkillsUSA Guest Speaker',
  //   timeStr: '5:30–6:00 PM CST',
  // },
  {
    track: 3,
    offset: 36,
    length: 30,
    name: 'MS Paint w/ Bob Ross',
    timeStr: '6:00–6:30 PM CST',
  },
  {
    track: 1,
    offset: 38,
    length: 60,
    name: 'ACM Community Team Workshop',
    timeStr: '6:30–7:30 PM CST',
  },
  {
    track: 2,
    offset: 40,
    length: 30,
    name: 'IEEE Guest Speaker',
    timeStr: '7:00–7:30 PM CST',
  },
  {
    track: 2,
    offset: 42,
    length: 15,
    name: 'Basics of Accessibility',
    timeStr: '7:30–7:45 PM CST',
  },
  // {
  //   track: 1,
  //   offset: 42,
  //   length: 15,
  //   name: 'MLH Fellowship Talk',
  //   timeStr: '7:30–7:45 PM CST',
  // },
  // {
  //   track: 1,
  //   offset: 43,
  //   length: 45,
  //   name: 'Industry Panel',
  //   timeStr: '7:45–8:30 PM CST',
  // },
  {
    track: 3,
    offset: 44,
    length: 30,
    name: 'Virtual Murder Mystery #2',
    timeStr: '8:00–8:30 PM CST',
  },
  {
    track: 1,
    offset: 46,
    length: 30,
    wide: true,
    name: 'ACM Hacktoberfest Wrap-Up',
    timeStr: '8:30–9:00 PM CST',
  },
  {
    track: 3,
    offset: 48,
    length: 90,
    name: 'ACM Community Among Us Afterparty',
    timeStr: '9:00 PM CST onwards',
  },
]

export default schedule
