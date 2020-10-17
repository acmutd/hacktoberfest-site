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
  joinLink?: string
}

const schedule: Event[] = [
  {
    track: 1,
    offset: 0,
    length: 60,
    name: 'Check-In',
    timeStr: '9:00–10:00 AM CST',
    id: 'checkin',
    joinLink: 'https://acmutd.co/discord',
    description: "This isn't a real event, it's a reminder for you to wake up :)",
  },
  {
    track: 3,
    offset: 0,
    length: 30,
    name: 'Virtual Scavenger Hunt',
    partner: 'ACM Community',
    timeStr: '9:00–9:30 AM CST',
    id: 'scavenger-hunt',
    description:
      'Join us for a virtual scavenger hunt and win great prizes! Show off your teamwork and observational skills to other participants as you race to find all the items in the list or complete all the challenges! A guaranteed fun event to de-stress with friends, or make new ones.',
    joinLink: 'https://acmutd.co/discord',
  },
  {
    track: 2,
    offset: 2,
    length: 30,
    name: 'Chandini Portteus: Entrepreneurship Talk',
    partner: 'Chandini Portteus',
    timeStr: '9:30–10:00 AM CST',
    id: 'chandini-portteus-talk',
    description:
      'Join Chandini Portteus, the Principal and CEO at Portteus Consulting, as she speaks about entrepreneurship. A woman with numerous titles, her talk will certainly be valuable to everyone who chooses to listen, so don’t miss out! Here’s your chance to build a connection and have your questions answered by someone who is experienced enough to give you the right responses.',
    joinLink: 'https://hack.acmutd.co/chandini',
  },
  {
    track: 1,
    offset: 4,
    length: 30,
    name: 'Hacktoberfest Kickoff + Featured Speaker Talk',
    wide: true,
    timeStr: '10:00–10:30 AM CST',
    id: 'kickoff',
    description:
      'Kick off an amazing day of talks and workshops by hearing from the ACM Hacktoberfest organizer team and from Rocio Montes!',
    joinLink: 'https://hack.acmutd.co/kickoff',
  },
  {
    track: 1,
    offset: 6,
    length: 30,
    name: 'Q & A with Rocio Montes',
    partner: 'Rocio Montes',
    timeStr: '10:30–11 AM CST',
    id: 'q-a-rocio-montes',
    joinLink: 'https://hack.acmutd.co/rocio',
  },
  {
    track: 3,
    offset: 6,
    length: 30,
    name: 'Minecraft',
    partner: 'ACM Community',
    timeStr: '10:30–11:00 AM CST',
    id: 'minecraft',
    description:
      'Come join Neal on the ACM Minecraft server for a bit to de-stress and hang out with other participants!',
    joinLink: 'https://acmutd.co/discord',
  },
  {
    track: 1,
    offset: 8,
    length: 30,
    name: 'Women in Tech Panel',
    timeStr: '11:00–11:30 AM CST',
    id: 'women-tech-panel',
    description:
      'This event has six women in tech speak about their experiences and share advice to on how to be successful in a male-dominated field. Everyone is welcome to attend this useful event and get to know more about some wonderful ladies who are killing it in this field!',
    joinLink: 'https://hack.acmutd.co/empower',
  },
  {
    track: 3,
    offset: 8,
    length: 30,
    name: 'Github Kahoot',
    partner: 'ACM Community',
    timeStr: '11:00–11:30 AM CST',
    id: 'github-kahoot',
    description:
      'Think you know everything there is to know about GitHub? Test out your knowledge by competing with others on Kahoot! (All the relevant information to win this Kahoot will be present in one of our packets.)',
    joinLink: 'https://acmutd.co/discord',
  },
  {
    track: 1,
    offset: 10,
    length: 60,
    name: 'Personal Website Workshop',
    partner: 'ACM Education',
    timeStr: '11:30 AM CST–12:30 PM CST',
    id: 'personal-site-workshop',
    description:
      'Learn how to make your own personal website in this amazing workshop hosted by ACM Education! After this event, you’ll take home a customizable portfolio website that showcases all your projects - and if you already have a personal website, learn how to integrate dark mode! No prior skills or knowledge required, and this is definitely something to add to your resume or GitHub! No prior skill or knowledge required, there’ll be people to help you every step of the way.',
    joinLink: 'https://hack.acmutd.co/education',
  },
  {
    track: 2,
    offset: 12,
    length: 30,
    name: 'AI Is All You Need: A Showcase of Why AI Is Cool',
    partner: 'Artificial Intelligence Society',
    timeStr: '12:00–12:30 PM CST',
    id: 'ai-is-all-you-need',
    description:
      'Have a coffee chat with Willie Chalmers III, an AIS speaker who is prepared to convince everyone that AI is awesome and (probably) everything you need. Join him to learn more about what AI is and what the hype is about.',
    joinLink: 'https://hack.acmutd.co/ais',
  },
  {
    track: 1,
    offset: 14,
    length: 45,
    wide: true,
    name: 'Lunch Break and ECS Student Org Fair w/ ACM Community',
    timeStr: '12:30–1:15 PM CST',
    id: 'lunch-break-org-fair',
    description:
      'Looking for CS-related organizations to join this semester? Attend this organization fair to find out more information about the wonderful groups here at UTD. The organizations attending this event include ACM, SWE (Society of Women Engineers), CSG (Computer Security Group), and DSC (Developer Student Club).',
    joinLink: 'https://acmutd.co/discord',
  },
  {
    track: 1,
    offset: 17,
    length: 60,
    name: 'Reaction-ary Business: React Workshop',
    partner: 'ACM Projects',
    timeStr: '1:15–2:15 PM CST',
    id: 'react-workshop',
    description:
      "In this workshop hosted by ACM Projects, you’ll get hands-on experience working with ReactJS while contributing to open source software by creating your very own virtual business cards! No prior skills or knowledge required, this could be an amazing thing to add to your resume or to a website so that it can be shown to friends and family. You'll kill two birds with one stone: you learn ReactJS, and get your own virtual business card!",
    joinLink: 'https://hack.acmutd.co/projects',
  },
  {
    track: 2,
    offset: 19,
    length: 30,
    name: 'Spilling the Tea with WWC',
    partner: 'Women Who Compute',
    timeStr: '1:45–2:15 PM CST',
    id: 'wwc-spills-tea',
    description:
      'Feeling a bit down mentally? Join Sahana Belatur and Olivia Castro for a talk on Mental Health and Imposter Syndrome! With the current pandemic, there’s more need to discuss these topics and learn how to cope with them. Imposter syndrome strikes everyone, and is almost impossible to get rid of, so be sure to make it to this event to learn new techniques to gain more confidence in your abilities.',
    joinLink: 'https://hack.acmutd.co/wwc',
  },
  {
    track: 3,
    offset: 19,
    length: 30,
    name: 'Skribbl.io w/ oSTEM',
    partner: 'oSTEM',
    timeStr: '1:45–2:15 PM CST',
    id: 'skribbl-io-ostem',
    description:
      'Play Skribbl.io with other participants in this community event hosted by oSTEM! This is a great opportunity to relax, meet new people, and have fun! Show off your art skills and guessing techniques in this fun event hosted by Alex V.',
    joinLink: 'https://acmutd.co/discord',
  },
  {
    track: 1,
    offset: 21,
    length: 45,
    name: 'Ladders to Success: ACM Alumni Career Panel',
    timeStr: '2:15–3:00 PM CST',
    id: 'alum-panel-1',
    description:
      'Join ACM alums Krithika Suresh, Kelley Hoang, Reena Suh, Saman Attar, Izu Elechi, and Matthew Bierman and take home some great advice from some very successful people! For those looking to build connections, this event is for you.',
    joinLink: 'https://hack.acmutd.co/alumni1',
  },
  {
    track: 3,
    offset: 22,
    length: 30,
    name: 'Jeopardy with SWE',
    partner: 'Society of Women Engineers & WEHack',
    timeStr: '2:30–3:00 PM CST',
    id: 'swe-jeopardy',
    description:
      'Join SWE (Society of Women Engineers) for a game of Jeopardy to learn more about engineering, female STEM leaders, and SWE! Everyone is welcome to participate and learn more about this major organization at UTD! Attend to show off your skills, or de-stress with fellow participants while learning new things.',
    joinLink: 'https://acmutd.co/discord',
  },
  {
    track: 1,
    offset: 24,
    length: 60,
    name: 'Comets of Wall Street: Data Analysis Workshop',
    partner: 'ACM Research',
    timeStr: '3:00–4:00 PM CST',
    id: 'data-analysis-workshop',
    description:
      'Learn how to analyse and visualize a stock’s data and metrics in this Python data analysis workshop hosted by ACM Research at 3 - 4 pm CST! You’ll be able to determine at a high level if a stock is overrated, so don’t miss it! ',
    joinLink: 'https://hack.acmutd.co/research',
  },
  {
    track: 2,
    offset: 26,
    length: 30,
    name: 'The Model Minority Myth',
    partner: 'SASE UTD',
    timeStr: '3:30–4:00 PM CST',
    id: 'model-minority',
    description:
      'Learn more about the model minority myth in this talk hosted by Long Le from SASE.',
    joinLink: 'https://hack.acmutd.co/sase',
  },
  {
    track: 3,
    offset: 26,
    length: 30,
    name: 'Virtual Murder Mystery #1',
    partner: 'ACM Community',
    timeStr: '3:30–4:00 PM CST',
    id: 'virtual-mystery-1',
    description: "Play a cooperative, virtual murder mystery with ACM Community's Hamzah!",
    joinLink: 'https://acmutd.co/discord',
  },
  {
    track: 1,
    offset: 28,
    length: 30,
    name: 'Tips & Tricks for Hackathons',
    partner: 'ACM Community',
    timeStr: '4:00–4:30 PM CST',
    id: 'hackathons-tips-tricks',
    description:
      'Don’t know what you’re supposed to do in hackathons? Don’t worry, after this event you’ll be a pro at them! Join us as we discuss advice and strategies to get the most out of hackathons, especially ones in the current virtual setting!',
    joinLink: 'https://acmutd.co/discord',
  },
  {
    track: 3,
    offset: 28,
    length: 60,
    name: 'Cooking w/ Willie',
    partner: 'Willie Chalmers III',
    timeStr: '4:00–5:00 PM CST',
    id: 'big-willie-cooks',
    description:
      '6 Items. 60 minutes. A race against the clock. Join Willie Chalmers III as he takes meal prep to the next level.',
    joinLink: 'https://hack.acmutd.co/cooking',
  },
  {
    track: 2,
    offset: 30,
    length: 30,
    name: 'Intro to Cloud & GCP',
    partner: 'Developer Student Clubs',
    timeStr: '4:30–5:00 PM CST',
    id: 'gcp-workshop',
    description:
      'Join Sayan Guha to get an introduction to cloud computing and GCP (Google Cloud Platform). No prior skills or knowledge required, so there’s no reason not to attend and learn about this popular skill! Ask any questions you might have and get insight on how to improve your skills and knowledge about the industry!',
    joinLink: 'https://hack.acmutd.co/dsc',
  },
  {
    track: 1,
    offset: 32,
    length: 60,
    name: 'Build an API Workshop',
    partner: 'ACM Development',
    timeStr: '5:00–6:00 PM CST',
    id: 'build-api-workshop',
    description:
      'Learn how to build an API in this workshop hosted by ACM Development! At the end of this workshop, you’ll be able to create your own sample API endpoint that accepts your email and returns your name and Discord tag. No prior skills required, so make sure to make it to this event hosted by Harsha Srikara & Eric Zhang! This is a great opportunity for beginners interested in APIs and backend development!',
    joinLink: 'https://hack.acmutd.co/dev',
  },
  {
    track: 2,
    offset: 34,
    length: 30,
    name: 'Managing College Life',
    partner: 'WiCyS',
    timeStr: '5:30–6:00 PM CST',
    id: 'managing-college',
    description:
      'Managing your life in college can be hard, especially in the first years. For most people, transitioning from high school to college is going to a new place with no friends and it’s filled with lots of work. It’s not an easy process for most, so attend this informative event to learn more about how to be a successful college student! Ask any questions you might have and receive useful insight from someone successful who’s been in your shoes before.',
    joinLink: 'https://hack.acmutd.co/wicys',
  },
  {
    track: 3,
    offset: 34,
    length: 30,
    name: 'Quarantine Bingo',
    timeStr: '5:30–6:00 PM CST',
    id: 'quarantine-bingo',
    description:
      'Try your luck at ACM’s unique bingo game. Be the first to get a bingo and win a prize! Don’t miss out, this might be one of the easiest ways to win something and hang out with others!',
    joinLink: 'https://acmutd.co/discord',
  },
  {
    track: 2,
    offset: 36,
    length: 30,
    name: 'WTF is DeFi?',
    partner: 'UTD Blockchain Club',
    timeStr: '6:00–6:30 PM CST',
    id: 'wtf-defi',
    description:
      "WTF is DeFi? Blockchain Club's got you covered. Learn more about this emerging field of finance, backed by the crypto revolution.",
    joinLink: 'https://hack.acmutd.co/blockchain',
  },
  {
    track: 3,
    offset: 36,
    length: 30,
    name: 'MS Paint w/ Bob Ross',
    partner: 'ACM Community',
    timeStr: '6:00–6:30 PM CST',
    id: 'bob-ross-paint',
    description:
      'If you’re an artist or someone who loves watching people make art, make sure to attend this painting event where everyone paints on Microsoft Paint! Share your art, watch a relaxing video, meet other artists and possibly gain new friends! A must-attend event for Bob Ross lovers and aspiring artists!',
    joinLink: 'https://acmutd.co/discord',
  },
  {
    track: 1,
    offset: 38,
    length: 60,
    name: 'Computer Graphics Workshop',
    partner: 'ACM Community',
    timeStr: '6:30–7:30 PM CST',
    id: 'comp-graphics-workshop',
    description:
      'Attend this Computer Graphics workshop to learn how to use WebGL, a powerful Javascript API for high-performance graphics. You’ll learn how to make your own fancy 3D shapes and visuals! No prior skills or knowledge required.',
    joinLink: 'https://hack.acmutd.co/community',
  },
  {
    track: 2,
    offset: 40,
    length: 30,
    name: 'Bridging the Gap Between Software and Hardware',
    partner: 'IEEE UTD',
    timeStr: '7:00–7:30 PM CST',
    id: 'bridging-the-gap-software-hardware',
    description:
      'Do you like both hardware and software and are finding it hard to choose just one? Join Saravanan Narayanan, as he discusses bridging the gap between software and hardware.',
    joinLink: 'https://hack.acmutd.co/ieee',
  },
  {
    track: 2,
    offset: 42,
    length: 15,
    name: 'Basics of Accessibility',
    partner: 'Girls Who Code',
    timeStr: '7:30–7:45 PM CST',
    id: 'accessibility-basics',
    description: '',
    joinLink: 'https://hack.acmutd.co/gwc',
  },
  {
    track: 1,
    offset: 43,
    length: 15,
    name: 'MLH Fellowship Talk',
    timeStr: '7:45–8:00 PM CST',
    id: 'mlh-fellowship-talk',
    description:
      'Join Anirudh Emmadi as he speaks about his experience contributing to open source through the MLH Fellowship. Attend this short event to gain valuable information about an amazing program!',
    joinLink: 'https://acmutd.co/discord',
  },
  {
    track: 3,
    offset: 42,
    length: 30,
    name: 'Virtual Murder Mystery #2',
    timeStr: '7:30–8:00 PM CST',
    id: 'virtual-mystery-2',
    description: "Play a cooperative, virtual murder mystery with ACM Community's Hamzah!",
    joinLink: 'https://acmutd.co/discord',
  },
  {
    track: 3,
    offset: 44,
    length: 30,
    name: 'Soft Skills Trivia with SkillsUSA',
    partner: 'SkillsUSA',
    timeStr: '8:00–8:30 PM CST',
    id: 'skillsusa-trivia',
    description: 'Play a soft skills trivia game with SkillsUSA!',
    joinLink: 'https://acmutd.co/discord',
  },
  {
    track: 1,
    offset: 44,
    length: 45,
    name: 'Ladders to Success: ACM Alumni College Panel',
    timeStr: '8:00-8:45 PM CST',
    id: 'alum-panel-2',
    description:
      'Join ACM alums Matthew Bierman, Aneesh Saripalli, and Bharat Arimilli to learn about their experiences in ACM and take home some great advice from successful people! For those looking to build connections, this event is for you.',
    joinLink: 'https://hack.acmutd.co/alumni2',
  },
  {
    track: 1,
    offset: 47,
    length: 15,
    wide: true,
    name: 'ACM Hacktoberfest Wrap-Up',
    timeStr: '8:45–9:00 PM CST',
    id: 'wrap-up',
    description: 'Wrap up an amazing day of talks and workshops with us!',
    joinLink: 'https://hack.acmutd.co/closing',
  },
  {
    track: 3,
    offset: 48,
    length: 90,
    name: 'ACM Community Among Us Afterparty',
    partner: 'ACM Community',
    timeStr: '9:00 PM CST onwards',
    id: 'after-party',
    description: 'End the day by playing Among Us with the ACM Community team!',
    joinLink: 'https://acmutd.co/discord',
  },
]

export const scheduleMap: Record<string, Event> = {}

schedule.forEach(event => (scheduleMap[event.id] = event))

export default schedule
