export type Link = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: string[];
  year: number;
  date: string;
  type: 'Published and accepted' | 'Preprints and manuscripts';
  status: string;
  venue?: string;
  summary: string;
  links: Link[];
  equalContribution?: string[];
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export type StorySection = {
  title: string;
  period?: string;
  description: string;
  links?: Link[];
  items?: Array<{
    title: string;
    description: string;
  }>;
  images?: StoryImage[];
};

export type StoryImage = {
  src: string;
  alt: string;
  altZh?: string;
  width: number;
  height: number;
  caption?: string;
  captionZh?: string;
  href?: string;
};

export type Story = {
  slug: string;
  period: string;
  category: string;
  title: string;
  shortTitle: string;
  summary: string;
  introduction: string;
  sections: StorySection[];
  links?: Link[];
  coverImage?: StoryImage;
  heroImages?: StoryImage[];
  coverPosition?: string;
};

export const profile = {
  name: 'Yue Peng',
  chineseName: '彭越',
  degree: 'B.S. Computer Science',
  institution: 'NYU Shanghai',
  graduationYear: '2028',
  email: 'yp2841@nyu.edu',
};

export const externalLinks: Link[] = [
  { label: 'Email', href: 'mailto:yp2841@nyu.edu' },
  {
    label: 'Scholar',
    href: 'https://scholar.google.com/citations?user=8_NoHUEAAAAJ&hl=en',
  },
  { label: 'GitHub', href: 'https://github.com/pengyue-polaron' },
  { label: 'Hugging Face', href: 'https://huggingface.co/pengyue-polaron' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yue-peng-a16015305/',
  },
];

export const researchQuestions = [
  {
    label: 'Geometry',
    title: 'Geometry in robot policies',
    description:
      'How can camera calibration and 3D structure be introduced into pretrained visual representations without discarding what they already know?',
  },
  {
    label: 'Memory',
    title: 'Temporal memory',
    description:
      'How should a policy retain task progress and update its state around contact, release, and subgoal transitions?',
  },
  {
    label: 'Prediction',
    title: 'Predictive supervision',
    description:
      'Can compact features of future observations provide useful training signals without requiring explicit video generation?',
  },
];

export const currentResearch = {
  title: 'Generation-free supervision for world-action models',
  status: 'NYU Shanghai DURF · 2026–present',
  description:
    'My current project studies whether intermediate policy representations can be trained to predict compact features of future observations rather than pixels or video.',
};

export const publications: Publication[] = [
  {
    title:
      'FDB&FragLinker: A Large Fragment Database for Rapid Ligand Optimization Within Protein-Ligand Complex',
    authors: [
      'Lei Zheng',
      'Qisheng Zhou',
      'Tianxiang Fu',
      'Yue Peng',
      'Yizhe Dai',
      'Rong Chen',
      'Zhaoxi Sun',
      'John Z. H. Zhang',
    ],
    year: 2026,
    date: 'Mar 2026',
    type: 'Published and accepted',
    status: 'Journal article',
    venue: 'Journal of Molecular Biology, 169741',
    summary:
      'An integrated fragment database and covalent docking framework for constructing protein-optimized 3D ligand complexes from selected fragments.',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1016/j.jmb.2026.169741' },
      { label: 'PubMed', href: 'https://pubmed.ncbi.nlm.nih.gov/41802458/' },
    ],
  },
  {
    title:
      'TFP: Temporally Conditioned Memory-Fusion Policies for Visuomotor Learning',
    authors: [
      'Yushen Liang',
      'Yue Peng',
      'Baosheng Jin',
      'Tianluo Zhang',
      'Xinyu Zhang',
      'Shuyi Zhou',
      'Zhuoran Chen',
      'Xinqi Liu',
      'Shenji Wan',
    ],
    year: 2026,
    date: 'Jul 2026',
    type: 'Published and accepted',
    status: 'Accepted workshop paper',
    venue: 'SemRob Workshop at Robotics: Science and Systems 2026',
    summary:
      'A lightweight memory-action framework in which an event-sensitive task belief modulates flow-matching action generation for long-horizon manipulation.',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2607.08283' },
      {
        label: 'Code',
        href: 'https://github.com/Mirage415/TFP-Temporally-conditioned-Memory-Fusion-Policies-for-Visuomotor-Learning',
      },
    ],
    equalContribution: ['Yushen Liang', 'Yue Peng', 'Baosheng Jin'],
    image: '/media/publications/tfp-overview.webp',
    imageAlt:
      'TFP overview showing why memory is needed, a liquid memory belief, benchmark gains, and real-world tasks.',
    imageWidth: 1200,
    imageHeight: 647,
  },
  {
    title: 'G³VLA: Geometric Inductive Bias for Vision-Language-Action Models',
    authors: [
      'Yue Peng',
      'Yongzhe Zhao',
      'Artur Habuda',
      'Khuyen Pham',
      'Yanheng Zhu',
      'Tran Nguyen Le',
      'Fares Abu-Dakka',
      'Li Guo',
    ],
    year: 2026,
    date: 'Jun 2026',
    type: 'Preprints and manuscripts',
    status: 'Public preprint · under review at CoRL 2026',
    venue: 'arXiv:2606.24472',
    summary:
      'A camera-aware module that adds ray geometry, projective positional encoding, and cross-view fusion to pretrained VLA visual tokens.',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2606.24472' },
      { label: 'Project', href: 'https://sites.google.com/view/g3vla' },
    ],
    image: '/media/publications/g3vla-overview.webp',
    imageAlt:
      'G3VLA architecture showing camera-aware ray embeddings, cross-view fusion, and two-stage geometry distillation.',
    imageWidth: 955,
    imageHeight: 475,
  },
  {
    title:
      'Diagnosing Knowledge Gaps in LLM Tool Use: An Agentic Benchmark for Novel API Acquisition',
    authors: ['Jinnuo Liu', 'Yue Peng', 'Jinhan Niu', 'Hongyi Wen'],
    year: 2026,
    date: 'Jun 2026',
    type: 'Preprints and manuscripts',
    status: 'Public preprint · under review at NeurIPS 2026',
    venue: 'arXiv:2606.03657',
    summary:
      'NovelAPIBench generates executable tasks for previously unseen APIs and diagnoses failures across six categories of API knowledge.',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2606.03657' },
      { label: 'Code', href: 'https://github.com/JimmmmmL/NovelAPIBench' },
    ],
    equalContribution: ['Yue Peng', 'Jinhan Niu'],
    image: '/media/publications/novelapibench-overview.webp',
    imageAlt:
      'NovelAPIBench pipeline from API discovery and knowledge extraction through task generation, filtering, and failure diagnosis.',
    imageWidth: 935,
    imageHeight: 585,
  },
  {
    title: 'EvoGenUI-Bench: Evaluating LLMs as Multi-Turn Generative UI Assistants',
    authors: ['Yue Peng', 'Lanke Xia', 'Zihan Wang', 'Jiahao Ye', 'Ke Ning', 'Hongyi Wen'],
    year: 2026,
    date: 'Jul 2026',
    type: 'Preprints and manuscripts',
    status: 'Unpublished manuscript · under review at EMNLP 2026',
    summary:
      'A benchmark for testing whether generative UI assistants preserve executable requirements, tool grounding, and text-interface alignment across successive revisions.',
    links: [],
  },
];

export const stories: Story[] = [
  {
    slug: 'easecation',
    period: '2018–present',
    category: 'Community systems',
    title: 'EaseCation',
    shortTitle: 'EaseCation',
    summary:
      'Internal systems, web engineering, and community traditions inside a long-running Minecraft network.',
    introduction:
      'EaseCation is a Minecraft mini-game server founded in 2015. Across competitive, story-driven, and social games, it has grown into a long-running community with more than 70,000 daily active players.',
    heroImages: [
      {
        src: '/media/stories/easecation/server-city.webp',
        alt: 'A neon-lit Minecraft city built for EaseCation.',
        width: 768,
        height: 432,
        href: 'https://www.easecation.net/',
      },
      {
        src: '/media/stories/easecation/bed-wars.webp',
        alt: 'Official artwork for EaseCation Bed Wars.',
        width: 768,
        height: 402,
        href: 'https://www.easecation.net/',
      },
      {
        src: '/media/stories/easecation/rune-legend.webp',
        alt: 'Official artwork for EaseCation Rune Legend.',
        width: 500,
        height: 313,
        href: 'https://www.easecation.net/',
      },
    ],
    sections: [
      {
        title: 'My role',
        period: '2018–present',
        description:
          'I joined EaseCation in 2018. Today I serve as a super administrator and lead internal operations and web engineering. My work spans internal systems, game-server development, release coordination, and the Aliyun operations behind the entire web engineering stack.',
      },
      {
        title: 'Internal systems',
        description:
          'Most of the software I build here consists of internal OA applications shaped around EaseCation’s own operating processes. Because these tools handle private workflows and infrastructure, very little of this work is open source.',
        items: [
          {
            title: 'Internal OA applications',
            description:
              'OA tools for recurring operational processes, reviews, handoffs, and cross-team coordination.',
          },
          {
            title: 'Game-server development',
            description:
              'Development and maintenance work for EaseCation’s main Minecraft server and its surrounding services.',
          },
          {
            title: 'Web engineering and cloud operations',
            description:
              'Public-facing and internal web platforms, together with deployment and Aliyun operations for the full web stack.',
          },
        ],
      },
      {
        title: 'Open User Center',
        description:
          'The main public exception is EaseCation Open User Center, our first formally released web-platform project. It opens the player and administrator frontends, shared packages, and a local mock backend for account binding, support tickets, reviews, and operational workflows under the AGPL-3.0 license.',
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/EaseCation/easecation-open-user-center',
          },
        ],
        images: [
          {
            src: '/media/stories/easecation/open-user-center.webp',
            alt: 'Screens from the EaseCation Open User Center for players and administrators.',
            width: 1200,
            height: 675,
            caption: 'EaseCation Open User Center.',
            href: 'https://github.com/EaseCation/easecation-open-user-center',
          },
        ],
      },
      {
        title: 'Potato Spring Gala',
        period: '2022–present',
        description:
          'I am also deeply involved in EaseCation’s community traditions. The Potato Spring Gala is a player-driven New Year show built from songs, performances, machinima, and other community submissions. I directed the 2022, 2024, and 2025 editions; the 2025 production was our most accomplished yet and became a particularly memorable celebration of EaseCation’s tenth anniversary.',
        links: [
          {
            label: 'Potato Spring Gala Wiki',
            href: 'https://wiki.easecation.net/%E5%9C%9F%E8%B1%86%E6%98%A5%E6%99%9A',
          },
          {
            label: '2025 tenth-anniversary show',
            href: 'https://www.bilibili.com/video/BV17DFHeEEcQ/',
          },
        ],
        images: [
          {
            src: '/media/stories/easecation/potato-gala-2025.webp',
            alt: 'Official cover for the 2025 EaseCation Potato Spring Gala.',
            width: 1920,
            height: 1080,
            caption: '2025 tenth-anniversary Potato Spring Gala.',
            href: 'https://www.bilibili.com/video/BV17DFHeEEcQ/',
          },
        ],
      },
      {
        title: 'Learn more',
        description:
          'The official website introduces EaseCation’s games and services, while the community-maintained Wiki records its history, systems, events, and culture in much greater depth.',
        links: [
          { label: 'Official website', href: 'https://www.easecation.net/' },
          { label: 'EaseCation Wiki', href: 'https://wiki.easecation.net/' },
        ],
      },
    ],
  },
  {
    slug: 'first-robotics',
    period: '2017–2025',
    category: 'Competition robotics',
    title: 'FIRST Robotics',
    shortTitle: 'FIRST Robotics',
    summary:
      'Competition leadership, team building, mentorship, and scouting software across FLL and FRC.',
    introduction:
      'My FIRST journey began with FLL in 2017, then grew from competing with Team 6386 and later captaining the team across Australia, the United States, and China to founding Team 8811, mentoring students, and building open-source tools for competition scouting.',
    heroImages: [
      {
        src: '/media/stories/first-robotics/team-6386-robot.webp',
        alt: 'Team 6386’s robot on the competition field in 2019.',
        altZh: '6386 队机器人在 2019 年赛场上。',
        width: 1400,
        height: 934,
      },
      {
        src: '/media/stories/first-robotics/team-6386-field.webp',
        alt: 'Team 6386 working beside the competition field in 2019.',
        altZh: '6386 队成员在 2019 年赛场边工作。',
        width: 1400,
        height: 934,
      },
      {
        src: '/media/stories/first-robotics/team-8811.webp',
        alt: 'The founding members and mentors of FRC Team 8811.',
        altZh: 'FRC 8811 队创队成员与导师合影。',
        width: 1400,
        height: 787,
      },
    ],
    sections: [
      {
        title: 'FIRST LEGO League',
        period: '2017–2018',
        description:
          'FLL was my first experience building a competition robot as part of a team.',
      },
      {
        title: 'Team 6386: Shenzhen',
        period: '2018',
        description:
          'I joined Team 6386 and competed at the Shenzhen Regional, my first FRC event.',
        images: [
          {
            src: '/media/stories/first-robotics/team-6386-shenzhen.webp',
            alt: 'Team 6386 at the 2018 Shenzhen Regional.',
            altZh: '6386 队在 2018 年深圳区域赛合影。',
            width: 1080,
            height: 635,
            caption: 'Team 6386 at the Shenzhen Regional.',
            captionZh: '6386 队参加深圳区域赛。',
          },
        ],
      },
      {
        title: 'Team 6386: Sydney, Houston, and Qianjiang',
        period: '2019',
        description:
          'As captain, I led Team 6386 to win the South Pacific Regional in Sydney and qualify for the FIRST Championship in Houston. Later that year, we joined the China Division Finalist Alliance at the Qianjiang International Robotics Open.',
        links: [
          {
            label: 'Official result',
            href: 'https://frc-events.firstinspires.org/2019/AUSP',
          },
          {
            label: 'Media feature',
            href: 'https://news.ycwb.com/2019-04/02/content_30232008.htm',
          },
          {
            label: 'Media report',
            href: 'https://ycpai.ycwb.com/ycppad/content/2019-04/03/content_367146.html',
          },
        ],
        images: [
          {
            src: '/media/stories/first-robotics/team-6386-sydney.webp',
            alt: 'Team 6386 after winning the 2019 South Pacific Regional in Sydney.',
            altZh: '6386 队在悉尼赢得 2019 South Pacific Regional 后合影。',
            width: 1080,
            height: 810,
            caption: 'South Pacific Regional, Sydney.',
            captionZh: '悉尼 South Pacific Regional。',
          },
          {
            src: '/media/stories/first-robotics/team-6386-houston.webp',
            alt: 'Team 6386 at the 2019 FIRST Championship in Houston.',
            altZh: '6386 队参加 2019 年休斯顿 FIRST Championship。',
            width: 1080,
            height: 510,
            caption: 'FIRST Championship, Houston.',
            captionZh: '休斯顿 FIRST Championship。',
          },
          {
            src: '/media/stories/first-robotics/team-6386-qianjiang.webp',
            alt: 'Team 6386 at the 2019 Qianjiang International Robotics Open.',
            altZh: '6386 队参加 2019 年钱江国际机器人公开赛。',
            width: 1080,
            height: 739,
            caption: 'Qianjiang International Robotics Open.',
            captionZh: '钱江国际机器人公开赛。',
          },
        ],
      },
      {
        title: 'FRC Team 8811',
        period: '2022–2024',
        description:
          'I founded Team 8811 at Guangzhou No. 2 High School, raised more than US$14,000, delivered more than 60 technical training sessions, and served as the team’s youth mentor. In 2023, I competed with Team 8811 at an FRC China postseason event in Shanghai.',
        images: [
          {
            src: '/media/stories/first-robotics/team-8811-training.webp',
            alt: 'FRC Team 8811 members during a winter training session.',
            altZh: 'FRC 8811 队成员在寒假集训期间合影。',
            width: 1400,
            height: 796,
            caption: 'Team 8811 winter training.',
            captionZh: '8811 队寒假集训。',
          },
          {
            src: '/media/stories/first-robotics/team-8811-shanghai.webp',
            alt: 'Team 8811 at a 2023 FRC China postseason event in Shanghai.',
            altZh: '8811 队参加 2023 年在上海举行的 FRC 中国区季后赛活动。',
            width: 1080,
            height: 720,
            caption: 'Team 8811 in Shanghai, 2023.',
            captionZh: '8811 队于 2023 年在上海参赛。',
          },
        ],
      },
      {
        title: 'Yuan Scout',
        period: '2021–2025',
        description:
          'I co-developed Yuan Scout with Zirui Zhang: an open-source WeChat mini program that gave FRC teams separate accounts to collect, compare, analyze, and export match scouting data. The first version launched in 2022, and the project received a Chinese software copyright registration in 2023.',
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/frc8811/Yuan-Scout',
          },
        ],
        images: [
          {
            src: '/media/stories/first-robotics/yuan-scout.webp',
            alt: 'A collection of mobile interfaces from the Yuan Scout FRC scouting mini program.',
            altZh: 'Yuan Scout FRC 赛场数据收集小程序的多个移动端界面。',
            width: 1400,
            height: 604,
            caption: 'Yuan Scout interface.',
            captionZh: 'Yuan Scout 界面。',
            href: 'https://github.com/frc8811/Yuan-Scout',
          },
        ],
      },
      {
        title: 'Shanghai Regional volunteering',
        period: '2025',
        description:
          'I returned to FRC as a competition volunteer for the REEFSCAPE season.',
      },
    ],
  },
  {
    slug: 'robomaster',
    period: '2025–present',
    category: 'Competition robotics',
    title: 'NYU Shanghai RoboMaster',
    shortTitle: 'RoboMaster',
    summary:
      'Electrical control, vision integration, and club leadership for NYU Shanghai’s RoboMaster program.',
    introduction:
      'I co-founded NYU Shanghai’s RoboMaster program and served as president of the NYU Shanghai Robotics Club for 2025–2026. My main technical responsibility is electrical and embedded control, alongside work in vision integration, club operations, and media.',
    coverPosition: 'center 85%',
    heroImages: [
      {
        src: '/media/stories/robomaster/competition-robots.webp',
        alt: 'NYU Shanghai RoboMaster robots at a competition venue.',
        altZh: '上海纽约大学 RoboMaster 机器人在赛事场地内。',
        width: 1200,
        height: 1600,
      },
      {
        src: '/media/stories/robomaster/team-2025.webp',
        alt: 'NYU Shanghai Robotics Club members with their RoboMaster robots.',
        altZh: '上海纽约大学机器人社成员与 RoboMaster 机器人合影。',
        width: 1400,
        height: 1050,
      },
      {
        src: '/media/stories/robomaster/pit-repair.webp',
        alt: 'Team members troubleshooting a RoboMaster robot in the pit.',
        altZh: '队员们在备场区检修 RoboMaster 机器人。',
        width: 1400,
        height: 933,
      },
    ],
    sections: [
      {
        title: 'Electrical and embedded control',
        period: '2025–present',
        description:
          'My core work is the control stack for our competition robots: STM32 and FreeRTOS firmware, chassis, gimbal, and shooter control, CAN motor communication, sensor integration, remote control, and referee-system interfaces. I also work across robot-specific configuration, power control, vision telemetry, and the build, flashing, and RTT dashboard tools that make field debugging faster.',
        images: [
          {
            src: '/media/stories/robomaster/overnight-debugging.webp',
            alt: 'The team debugging multiple RoboMaster robots late at night.',
            altZh: '队伍在深夜同时调试多台 RoboMaster 机器人。',
            width: 1400,
            height: 1050,
            caption: 'A late-night robot debugging session.',
            captionZh: '一次深夜机器人调试。',
          },
        ],
      },
      {
        title: 'Vision and navigation',
        description:
          'I also integrate vision data into the control loop, including communication, target tracking, and gimbal commands. Through the team’s broader autonomy work, I have also explored perception and navigation concepts beyond my primary electrical-control role.',
      },
      {
        title: 'Jiangyin competition',
        period: '2026',
        description:
          'At a RoboMaster university alliance event in Jiangyin, I was primarily responsible for our infantry robot. The team received second prize.',
      },
      {
        title: 'Robotics Club president',
        period: '2025–2026',
        description:
          'Alongside engineering, I served as president of the NYU Shanghai Robotics Club, coordinating team operations while contributing to recruitment, outreach, and media work.',
        links: [
          {
            label: 'Robotics Club website',
            href: 'https://www.nyushrobotics.club/',
          },
        ],
      },
    ],
  },
  {
    slug: 'kiwi-codeshin',
    period: '2025–2026',
    category: 'Learning systems',
    title: 'Kiwi & CodeShin',
    shortTitle: 'Kiwi & CodeShin',
    summary:
      'From a Digital Innovation Challenge prototype to an AI-supported course platform at NYU Shanghai.',
    introduction:
      'CodeShin began as a prototype for NYU Shanghai’s 2025 Digital Innovation Challenge. That first demo later became the starting point for features integrated into Kiwi, where I continued developing the course platform from summer 2025 into January 2026.',
    coverImage: {
      src: '/media/stories/kiwi-codeshin/kiwi-interface.webp',
      alt: 'Kiwi course interface showing lecture materials alongside an AI-assisted explanation.',
      altZh: 'Kiwi 课程界面，同时展示课程资料与 AI 辅助讲解。',
      width: 1400,
      height: 933,
    },
    heroImages: [
      {
        src: '/media/stories/kiwi-codeshin/kiwi-demo.webp',
        alt: 'Presenting Kiwi’s lecture materials and AI chat workflow at NYU Shanghai.',
        altZh: '在上海纽约大学展示 Kiwi 的课程资料与 AI 对话流程。',
        width: 1400,
        height: 1050,
        caption: 'Presenting Kiwi’s lecture and AI chat experience.',
        captionZh: '展示 Kiwi 的课程资料与 AI 对话体验。',
      },
    ],
    sections: [
      {
        title: 'CodeShin at DIC',
        period: 'Spring 2025',
        description:
          'For NYU Shanghai’s fourth Digital Innovation Challenge—whose theme was AI-powered personalized education—I built CodeShin as an early demo for interactive programming practice. The open-source prototype combined coding problems, solution analysis, and an AI assistant in a React and Monaco Editor frontend with a Django backend.',
        links: [
          {
            label: 'NYU Shanghai DIC',
            href: 'https://datascience.shanghai.nyu.edu/news/empowering-education-ai-nyu-shanghais-digital-innovation-challenge-concludes-successfully',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/pengyue-polaron/CodeShin',
          },
        ],
      },
      {
        title: 'From prototype to Kiwi',
        period: 'Summer 2025',
        description:
          'After DIC, we carried the prototype’s exercise and AI-assisted learning ideas into Kiwi rather than treating CodeShin as a separate finished product. This connected the demo to a real course platform with students, instructors, and an existing teaching workflow.',
      },
      {
        title: 'Building Kiwi',
        period: 'Summer 2025 – January 2026',
        description:
          'I then worked across Kiwi’s NestJS backend and React frontend, developing targeted exercise assignment, AI-assisted evaluation, student feedback collection, instructor dashboards, and data-export workflows. Kiwi brings course materials, lectures and recitations, AI chat, exercises, and evaluation into one system used for Introduction to Computer Programming at NYU Shanghai.',
      },
    ],
  },
  {
    slug: 'high-school-projects',
    period: '2021–2023',
    category: 'School technology',
    title: 'High School Projects',
    shortTitle: 'High School Projects',
    summary:
      'Software and media systems built around everyday needs at Guangzhou No. 2 High School.',
    introduction:
      'At Guangzhou No. 2 High School, I worked with the Student Union’s Information Technology Department on practical systems for school life—from personalized library recommendations and event ticketing to a low-cost mobile livestream setup for the annual sports meet.',
    coverImage: {
      src: '/media/stories/high-school-projects/library-recommendation.webp',
      alt: 'The Yuan Library recommendation system displayed on a tablet and phone among books.',
      altZh: '在书籍之间用平板电脑和手机展示 Yuan Library 图书推荐系统。',
      width: 1302,
      height: 1001,
    },
    heroImages: [
      {
        src: '/media/stories/high-school-projects/library-recommendation.webp',
        alt: 'The Yuan Library recommendation system displayed on a tablet and phone among books.',
        altZh: '在书籍之间用平板电脑和手机展示 Yuan Library 图书推荐系统。',
        width: 1302,
        height: 1001,
        caption: 'Yuan Library on desktop and mobile.',
        captionZh: 'Yuan Library 的桌面端与移动端界面。',
      },
    ],
    sections: [
      {
        title: 'Intelligent book recommendation',
        period: '2023',
        description:
          'Together with Zirui Zhang, I developed Yuan Library, a system that used factorization machines to analyze reader interests and generate personalized book recommendations. I managed the project and designed its front end. Built through the 2023 Tencent Rhino-Bird Middle School Science Research Training Program, it received an Excellent Award.',
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/frc8811/Yuan-Library',
          },
        ],
      },
      {
        title: 'Campus Ticketing System',
        period: '2022',
        description:
          'I worked on front-end implementation and user research for a student-built event ticketing system. It moved seat selection online with real-time availability, order records, and unique verification codes, reducing the long queues that had formed around in-person ticket sales. The software later received a Chinese software copyright registration.',
        links: [
          {
            label: 'Project story',
            href: 'https://mp.weixin.qq.com/s/nbP3uxBOmxOUnBTe0e6gGA',
          },
        ],
        images: [
          {
            src: '/media/stories/high-school-projects/campus-ticketing.webp',
            alt: 'Official visual for the Guangzhou No. 2 High School campus ticketing system.',
            altZh: '广州市第二中学校园购票系统的官方视觉图。',
            width: 1280,
            height: 544,
            caption: 'The campus ticketing system announcement.',
            captionZh: '校园购票系统上线视觉图。',
            href: 'https://mp.weixin.qq.com/s/nbP3uxBOmxOUnBTe0e6gGA',
          },
        ],
      },
      {
        title: 'Mobile sports-meet broadcasting',
        period: '2021–2023',
        description:
          'I was responsible for livestream production at the school sports meet and helped build a low-cost, portable production and uplink system that could move with events around the stadium. It supported a full opening-ceremony broadcast, selected live competitions, replay, and timely result updates for viewers on and off campus.',
        links: [
          {
            label: 'Livestream article',
            href: 'https://mp.weixin.qq.com/s/2VL9oUFE5xBUlhH_fjH2RQ',
          },
        ],
        images: [
          {
            src: '/media/stories/high-school-projects/sports-meet-livestream.webp',
            alt: 'Poster for the 2022 Guangzhou No. 2 High School sports-meet livestream.',
            altZh: '2022 年广州二中高中部校运会直播海报。',
            width: 1080,
            height: 608,
            caption: 'The 2022 school sports-meet livestream.',
            captionZh: '2022 年高中部校运会直播。',
            href: 'https://mp.weixin.qq.com/s/2VL9oUFE5xBUlhH_fjH2RQ',
          },
        ],
      },
    ],
  },
];
