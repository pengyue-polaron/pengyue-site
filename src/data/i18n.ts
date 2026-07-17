import type { Link, Publication, Story } from './site';

export type Language = 'en' | 'zh';

export const ui = {
  en: {
    about: 'About',
    research: 'Research',
    stories: 'Stories',
    profile: 'Profile',
    externalProfiles: 'External profiles',
    primaryNavigation: 'Primary navigation',
    skipToContent: 'Skip to content',
    switchLanguage: '切换至中文',
    switchLanguageShort: '中文',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
    publications: 'Publications',
    published: 'Published and accepted',
    preprints: 'Preprints and manuscripts',
    storiesDescription:
      'Selected communities, teams, and systems I have helped build.',
    selectedStories: 'Selected stories',
    imageForthcoming: 'Image forthcoming',
    allStories: 'All stories',
    pageNotFound: 'Page not found',
    pageNotFoundDescription: 'The page you requested does not exist.',
    returnHome: 'Return home',
    lastUpdated: 'Last updated: July 17, 2026',
    homeLabel: 'Yue Peng home',
    storyDetails: (title: string) => `${title} details`,
    siteDescription:
      'Computer Science undergraduate at NYU Shanghai working across robot learning, community systems, and long-running technical projects.',
  },
  zh: {
    about: '关于',
    research: '研究',
    stories: '故事',
    profile: '个人信息',
    externalProfiles: '个人链接',
    primaryNavigation: '主导航',
    skipToContent: '跳至正文',
    switchLanguage: 'Switch to English',
    switchLanguageShort: 'EN',
    switchToLight: '切换至浅色模式',
    switchToDark: '切换至深色模式',
    publications: '论文',
    published: '已发表与已接收',
    preprints: '预印本与手稿',
    storiesDescription: '一些我曾参与建设的社区、团队与系统。',
    selectedStories: '故事列表',
    imageForthcoming: '图片待补',
    allStories: '返回全部故事',
    pageNotFound: '页面不存在',
    pageNotFoundDescription: '没有找到你访问的页面。',
    returnHome: '返回首页',
    lastUpdated: '最后更新：2026 年 7 月 17 日',
    homeLabel: '彭越的主页',
    storyDetails: (title: string) => `${title}详情`,
    siteDescription:
      '彭越是上海纽约大学计算机科学本科生，关注机器人学习、社区系统与长期技术项目。',
  },
} as const;

export const profileText = {
  en: {
    primaryName: 'Yue Peng',
    secondaryName: '彭越',
    degree: 'B.S. Computer Science',
    institution: 'NYU Shanghai',
    graduationYear: '2028',
  },
  zh: {
    primaryName: '彭越',
    secondaryName: 'Yue Peng',
    degree: '计算机科学本科生',
    institution: '上海纽约大学',
    graduationYear: '2028 届',
  },
} as const;

const linkLabels: Record<string, string> = {
  Email: '邮箱',
  Scholar: 'Google Scholar',
  'GitHub organization': 'GitHub 组织',
  'Official website': '官方网站',
  'EaseCation Wiki': 'EaseCation Wiki',
  'Potato Spring Gala Wiki': '土豆春晚 Wiki',
  '2025 tenth-anniversary show': '2025 十周年晚会回放',
  'Robotics Club website': '机器人社官网',
  'NYU Shanghai DIC': '上海纽约大学 DIC',
  'Official result': '官方赛果',
  'Contemporary report': '当年报道',
  'Related research': '相关研究',
  Paper: '论文',
  Project: '项目主页',
  Code: '代码',
  Archive: '项目存档',
};

export function localizedLinkLabel(link: Link, language: Language) {
  return language === 'zh' ? linkLabels[link.label] || link.label : link.label;
}

type PublicationTranslation = Pick<
  Publication,
  'status' | 'summary'
> & {
  imageAlt?: string;
};

export const publicationTranslations: Record<string, PublicationTranslation> = {
  'FDB&FragLinker: A Large Fragment Database for Rapid Ligand Optimization Within Protein-Ligand Complex': {
    status: '期刊论文',
    summary:
      '一个集成的片段数据库与共价对接框架，用于从选定片段构建面向蛋白环境优化的三维配体复合物。',
  },
  'TFP: Temporally Conditioned Memory-Fusion Policies for Visuomotor Learning': {
    status: '已接收的研讨会论文',
    summary:
      '一种轻量级记忆—动作框架，以事件敏感的任务信念调制基于流匹配的动作生成，用于长时程操作任务。',
    imageAlt:
      'TFP 方法概览：记忆的作用、液态记忆任务信念、基准测试结果与真实机器人任务。',
  },
  'G³VLA: Geometric Inductive Bias for Vision-Language-Action Models': {
    status: '公开预印本 · CoRL 2026 审稿中',
    summary:
      '一种相机感知模块，通过射线几何、投影位置编码与跨视角融合，为预训练 VLA 视觉 token 注入几何先验。',
    imageAlt:
      'G³VLA 架构：相机感知射线嵌入、跨视角融合与两阶段几何蒸馏。',
  },
  'Diagnosing Knowledge Gaps in LLM Tool Use: An Agentic Benchmark for Novel API Acquisition': {
    status: '公开预印本 · NeurIPS 2026 审稿中',
    summary:
      'NovelAPIBench 为模型从未见过的 API 自动生成可执行任务，并从六类 API 知识缺口诊断失败原因。',
    imageAlt:
      'NovelAPIBench 流程：从 API 发现与知识提取，到任务生成、筛选和失败诊断。',
  },
  'EvoGenUI-Bench: Evaluating LLMs as Multi-Turn Generative UI Assistants': {
    status: '未公开手稿 · EMNLP 2026 审稿中',
    summary:
      '一个用于评估生成式 UI 助手的基准，检验其在多轮修改中能否保持可执行需求、工具调用依据，以及文本与界面的一致性。',
  },
};

export function publicationText(
  publication: Publication,
  language: Language,
) {
  if (language === 'en') return publication;
  const translation = publicationTranslations[publication.title];
  return {
    ...publication,
    status: translation?.status || publication.status,
    summary: translation?.summary || publication.summary,
    imageAlt: translation?.imageAlt || publication.imageAlt,
  };
}

type StoryTranslation = {
  period: string;
  category: string;
  title: string;
  shortTitle: string;
  summary: string;
  introduction: string;
  sections: Array<{
    title: string;
    period?: string;
    description: string;
    items?: Array<{
      title: string;
      description: string;
    }>;
  }>;
};

export const storyTranslations: Record<string, StoryTranslation> = {
  easecation: {
    period: '2018–至今',
    category: '社区与系统',
    title: 'EaseCation',
    shortTitle: 'EaseCation',
    summary:
      '一个长期运行的 Minecraft 网络中的内部系统、Web 工程与社区传统。',
    introduction:
      'EaseCation 是一个创立于 2015 年的 Minecraft 小游戏服务器。从竞技、剧情到社交类玩法，它逐渐成长为一个长期运行的社区，日活跃玩家超过七万。',
    sections: [
      {
        title: '我的职责',
        period: '2018–至今',
        description:
          '我于 2018 年加入 EaseCation。现在，我担任超级管理员，负责内部运营与 Web 工程。我的工作涵盖内部系统、游戏主服开发、版本发布协调，以及整个 Web 工程在阿里云上的运维。',
      },
      {
        title: '内部系统',
        description:
          '我在 EaseCation 开发的软件大多是围绕内部实际流程设计的 OA 应用。因为它们涉及私有工作流与基础设施，所以绝大部分项目都不会开源。',
        items: [
          {
            title: '内部 OA 应用',
            description:
              '用于日常运营、审核、交接与跨团队协作的 OA 工具。',
          },
          {
            title: '游戏主服开发',
            description:
              '参与 EaseCation Minecraft 主服及其周边服务的开发与维护。',
          },
          {
            title: 'Web 工程与云运维',
            description:
              '负责对外与内部 Web 平台，以及整套 Web 服务的部署和阿里云运维。',
          },
        ],
      },
      {
        title: '开源用户中心',
        description:
          '最主要的公开例外是 EaseCation Open User Center，它是我们第一个正式公开的 Web 平台项目。仓库以 AGPL-3.0 许可证开放玩家端、管理端、共享包与本地 Mock 后端，覆盖账号绑定、工单、审核与运营流程。',
      },
      {
        title: '土豆春晚',
        period: '2022–至今',
        description:
          '除了技术与运营，我也非常在意 EaseCation 的社区传统。土豆春晚是一场由玩家共同创作的新年节目，涵盖歌曲、表演、Minecraft 剧情影片与各类社区投稿。我担任了 2022、2024 和 2025 三届晚会的导演；其中 2025 年的制作质量最高，也成为 EaseCation 十周年中格外精彩的一次庆祝。',
      },
      {
        title: '了解更多',
        description:
          '官方网站介绍了 EaseCation 的游戏与服务；由社区共同维护的 Wiki 则更细致地记录了它的历史、系统、活动与文化。',
      },
    ],
  },
  'first-robotics': {
    period: '2017–2025',
    category: '竞赛机器人',
    title: 'FIRST 机器人',
    shortTitle: 'FIRST 机器人',
    summary:
      '横跨 FLL 与 FRC 的竞赛领导、队伍建设、学生指导与赛场数据工具开发。',
    introduction:
      '我的 FIRST 经历始于 2017 年的 FLL。此后，我从随 6386 队参赛，到担任队长并带队征战澳大利亚、美国和中国，再一路走到创立 8811 队、指导学生，并开发开源赛场数据工具。',
    sections: [
      {
        title: 'FIRST LEGO League',
        period: '2017–2018',
        description:
          'FLL 是我第一次以团队成员的身份设计并搭建竞赛机器人。',
      },
      {
        title: '6386 队：深圳',
        period: '2018',
        description:
          '我加入 6386 队并参加深圳区域赛，这是我的第一场 FRC 赛事。',
      },
      {
        title: '6386 队：悉尼、休斯顿与钱江',
        period: '2019',
        description:
          '我以队长身份带领 6386 队赢得悉尼 South Pacific Regional，并晋级在休斯顿举行的 FIRST Championship。同年稍后，我们在钱江国际机器人公开赛中成为中国区亚军联盟队伍。',
      },
      {
        title: 'FRC 8811 队',
        period: '2022–2024',
        description:
          '我在广州市第二中学创立 8811 队，筹集超过 14,000 美元经费，开展 60 余次技术培训，并曾担任队伍的青年导师。2023 年，我随 8811 队参加了在上海举行的 FRC 中国区季后赛活动。',
      },
      {
        title: 'Yuan Scout',
        period: '2021–2025',
        description:
          '我与张子睿共同开发了 Yuan Scout：一款开源微信小程序，为 FRC 队伍提供独立账户，用于收集、对比、分析与导出赛场侦察数据。项目于 2022 年发布首个版本，并于 2023 年取得中国计算机软件著作权登记。',
      },
      {
        title: '上海区域赛志愿服务',
        period: '2025',
        description:
          '我在 REEFSCAPE 赛季以赛事志愿者的身份回到 FRC。',
      },
    ],
  },
  robomaster: {
    period: '2025–至今',
    category: '竞赛机器人',
    title: '上海纽约大学 RoboMaster',
    shortTitle: 'RoboMaster',
    summary: '围绕上海纽约大学 RoboMaster 项目开展电控、视觉集成与社团领导工作。',
    introduction:
      '我共同创立了上海纽约大学 RoboMaster 项目，并于 2025–2026 年担任上海纽约大学机器人社社长。我的主要技术工作是电气与嵌入式控制，同时也参与视觉集成、社团运营与媒体工作。',
    sections: [
      {
        title: '电气与嵌入式控制',
        period: '2025–至今',
        description:
          '我的核心工作是竞赛机器人的控制栈，包括 STM32 与 FreeRTOS 固件、底盘、云台和发射机构控制、CAN 电机通信、传感器集成，以及遥控器和裁判系统接口。我也参与机器人参数配置、功率控制、视觉遥测，以及构建、烧录和 RTT Dashboard 等现场调试工具的开发。',
      },
      {
        title: '视觉与导航',
        description:
          '我也参与将视觉数据接入控制闭环，包括通信、目标跟踪与云台控制；在队伍更广泛的自主机器人工作中，我还学习并探索了感知与导航相关知识。',
      },
      {
        title: '江阴比赛',
        period: '2026',
        description:
          '在江阴举行的 RoboMaster 高校联盟赛中，我主要负责步兵机器人。队伍最终获得二等奖。',
      },
      {
        title: '机器人社社长',
        period: '2025–2026',
        description:
          '在技术工作之外，我担任上海纽约大学机器人社社长，协调社团与队伍运营，并负责招新、对外展示和媒体等工作。',
      },
    ],
  },
  'kiwi-codeshin': {
    period: '2025–2026',
    category: '学习系统',
    title: 'Kiwi 与 CodeShin',
    shortTitle: 'Kiwi 与 CodeShin',
    summary: '从 DIC 的早期原型，逐步走向服务上海纽约大学课程的 AI 辅助教学平台。',
    introduction:
      'CodeShin 最初是我为上海纽约大学 2025 年 Digital Innovation Challenge 制作的原型。这个 Demo 随后成为相关功能整合进 Kiwi 的起点；从 2025 年暑假开始，我继续参与 Kiwi 的开发，一直做到 2026 年 1 月。',
    sections: [
      {
        title: 'DIC 中的 CodeShin',
        period: '2025 年春季',
        description:
          '2025 年第四届 DIC 以“AI 赋能个性化教育”为主题。我在活动中先完成了 CodeShin Demo：一个开源的交互式编程练习原型，由 React、Monaco Editor 与 Django 构建，将编程题、解答分析和 AI 助手引导放进同一套体验。',
      },
      {
        title: '从原型到 Kiwi',
        period: '2025 年暑假',
        description:
          'DIC 结束后，我们没有把 CodeShin 当作一个彼此独立的成品继续发展，而是将其中关于编程练习与 AI 辅助学习的思路整合进 Kiwi，让早期 Demo 进入一套真正连接学生、教师与课程流程的平台。',
      },
      {
        title: '继续建设 Kiwi',
        period: '2025 年暑假–2026 年 1 月',
        description:
          '此后，我继续参与 Kiwi 的 NestJS 后端与 React 前端开发，完成面向特定学生的练习分配、AI 辅助评测、学生反馈收集、教师面板与数据导出等流程。Kiwi 将课程资料、讲座与习题课、AI 对话、练习和评测整合在一起，并服务于上海纽约大学 Introduction to Computer Programming 课程。',
      },
    ],
  },
  'earlier-projects': {
    period: '2021–2023',
    category: '校园系统与内容制作',
    title: '早期项目',
    shortTitle: '校园项目',
    summary:
      '围绕校园实际需求完成的图书推荐、购票软件与活动技术支持。',
    introduction: '这些项目规模不大，但都面向校园里具体的人与具体的需求。',
    sections: [
      {
        title: '智能图书推荐与用户兴趣分析',
        period: '2023',
        description:
          '我负责一个面向校园图书馆的因子分解机推荐项目，并设计其前端。项目获得“犀牛鸟”科研计划优秀奖。',
      },
      {
        title: '校园购票系统',
        period: '2022–2023',
        description:
          '我为校园音乐会购票系统完成前端实现与用户调研；该软件后来取得中国计算机软件著作权登记。',
      },
      {
        title: '活动技术支持',
        period: '2021–2023',
        description:
          '我协调学生 IT 团队，为校园活动提供直播、技术保障与宣传支持。',
      },
    ],
  },
};

export function storyText(story: Story, language: Language): Story {
  if (language === 'en') return story;
  const translation = storyTranslations[story.slug];
  if (!translation) return story;

  const localizeImage = (image: NonNullable<Story['heroImages']>[number]) => ({
    ...image,
    alt: image.altZh || image.alt,
    caption: image.captionZh || image.caption,
  });

  return {
    ...story,
    ...translation,
    coverImage: story.coverImage ? localizeImage(story.coverImage) : undefined,
    heroImages: story.heroImages?.map(localizeImage),
    sections: story.sections.map((section, index) => {
      const localizedSection = {
        ...section,
        ...(translation.sections[index] || {}),
      };
      return {
        ...localizedSection,
        images: localizedSection.images?.map(localizeImage),
      };
    }),
  };
}
