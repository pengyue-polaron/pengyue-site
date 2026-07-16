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
  venue: string;
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
    image: '/media/publications/tfp-overview.png',
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
    image: '/media/publications/g3vla-overview.png',
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
    image: '/media/publications/novelapibench-overview.png',
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
    venue: 'No public paper currently available',
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
      'Operations, web engineering, media, and community work for a long-running Minecraft network.',
    introduction:
      'I joined EaseCation in 2018 and now lead internal operations and web engineering. My work covers releases, internal tooling, websites, and coordination across the network.',
    sections: [
      {
        title: 'Open-source infrastructure',
        description:
          'Public server software and tools are maintained by the EaseCation organization.',
        links: [
          {
            label: 'GitHub organization',
            href: 'https://github.com/EaseCation',
          },
        ],
      },
      {
        title: 'Community and production',
        description:
          'I have supported community events and contributed to Bilibili Games’ 2023 Minecraft Spring Festival program.',
      },
      {
        title: 'Public record',
        description:
          'The official site and community-maintained Wiki document the server’s games, history, and culture.',
        links: [
          { label: 'Official website', href: 'https://www.easecation.net/' },
          { label: 'Wiki', href: 'https://wiki.easecation.net/' },
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
      'FLL and FRC teams: competing, captaining, founding, mentoring, and volunteering.',
    introduction:
      'My FIRST experience began with FIRST LEGO League in 2017 and continued through FRC Teams 6386 and 8811.',
    sections: [
      {
        title: 'FIRST LEGO League',
        period: '2017–2018',
        description:
          'FLL was my first experience building a competition robot as part of a team.',
      },
      {
        title: 'FRC Team 6386',
        period: '2018–2019',
        description:
          'I served as captain of Team 6386. In 2019, we won the South Pacific Regional in Sydney and qualified for the FIRST Championship in Houston.',
        links: [
          {
            label: 'Official result',
            href: 'https://frc-events.firstinspires.org/team/6386',
          },
          {
            label: 'Contemporary report',
            href: 'https://ycpai.ycwb.com/ycppad/content/2019-04/03/content_367146.html',
          },
        ],
      },
      {
        title: 'Qianjiang International Robotics Open',
        period: 'August 2019',
        description:
          'Team 6386 was part of the China Division Finalist Alliance at the Qianjiang International Robotics Open.',
      },
      {
        title: 'FRC Team 8811',
        period: '2022–2024',
        description:
          'I founded Team 8811 at Guangzhou No. 2 High School, raised more than US$14,000, delivered more than 60 technical training sessions, and continued as a youth mentor.',
      },
      {
        title: 'Shanghai Regional',
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
      'Electrical, control, and systems work for NYU Shanghai’s competition robots.',
    introduction:
      'I co-founded the NYU Shanghai RoboMaster Team and serve as vice captain and electrical and control systems lead.',
    sections: [
      {
        title: 'Embedded control',
        description:
          'I lead embedded control and sensor integration across the team’s competition robots.',
      },
      {
        title: 'System integration',
        description:
          'Current work includes custom omnidirectional chassis and the integration of electrical, control, and mechanical subsystems.',
      },
    ],
  },
  {
    slug: 'robotics-lab-infrastructure',
    period: '2025–present',
    category: 'Robot learning infrastructure',
    title: 'Robotics Lab Infrastructure',
    shortTitle: 'Lab Infrastructure',
    summary:
      'Teleoperation, synchronized data capture, calibration, dataset conversion, and deployment tooling for real-robot experiments.',
    introduction:
      'At NYU Shanghai, I build the infrastructure that moves robot-learning experiments from setup to reproducible runs and deployment.',
    sections: [
      {
        title: 'NYU Shanghai DURF',
        period: '2025–present',
        description:
          'Undergraduate researcher in the Dean’s Undergraduate Research Fund, working across robot learning and learning systems.',
      },
      {
        title: 'Galaxea A1 Research Runtime',
        period: '2026',
        description:
          'An end-to-end runtime for Galaxea A1 teleoperation, synchronized multimodal capture, LeRobot dataset conversion, and policy deployment.',
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/pengyue-polaron/galaxea-a1-runtime',
          },
        ],
      },
      {
        title: 'Quest Trajectory Recorder',
        period: '2026',
        description:
          'A simulator-neutral toolkit for controller calibration, trajectory recording, live visualization, and teleoperation across LIBERO, Isaac Sim, and other backends.',
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/pengyue-polaron/quest-trajectory-recorder',
          },
        ],
      },
    ],
    links: [{ label: 'Related research', href: '/research' }],
  },
  {
    slug: 'kiwi-codeshin',
    period: '2025',
    category: 'Learning systems',
    title: 'Kiwi & CodeShin',
    shortTitle: 'Kiwi & CodeShin',
    summary:
      'An AI-assisted coding-practice workflow developed at NYU Shanghai.',
    introduction:
      'At NYU Shanghai, I developed an AI-assisted coding-practice module for Kiwi and built CodeShin as its full-stack practice environment.',
    sections: [
      {
        title: 'Practice environment',
        description:
          'CodeShin combines an interactive editor with solution analysis and AI guidance for coding exercises.',
      },
      {
        title: 'Personalized learning',
        description:
          'The system recommends exercises and adapts practice paths using a learner’s progress and prior work.',
      },
      {
        title: 'NYU Shanghai deployment',
        description:
          'The module was integrated into Kiwi and later used in NYU Shanghai computer science courses.',
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/pengyue-polaron/CodeShin',
          },
        ],
      },
    ],
  },
  {
    slug: 'earlier-projects',
    period: '2021–2023',
    category: 'School systems and production',
    title: 'Earlier Projects',
    shortTitle: 'School Projects',
    summary:
      'A book recommender, campus ticketing software, and live-event technology built around school needs.',
    introduction:
      'These projects were smaller in scope and built for specific users at school.',
    sections: [
      {
        title: 'Intelligent Book Recommendation and User-Interest Analysis',
        period: '2023',
        description:
          'I managed a factorization-machine recommendation project for school libraries and designed its front end. The work received an Excellent Award through the Rhino-Bird research program.',
        links: [
          {
            label: 'Archive',
            href: 'https://github.com/frc8811/Yuan-Library',
          },
        ],
      },
      {
        title: 'Campus Ticketing System',
        period: '2022–2023',
        description:
          'I worked on front-end implementation and user research for a campus concert ticketing system. The software later received a Chinese software copyright registration.',
      },
      {
        title: 'Event technology',
        period: '2021–2023',
        description:
          'I coordinated a student IT team supporting school events, livestreaming, technical support, and outreach.',
      },
    ],
  },
];
