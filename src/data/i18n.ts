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
    researchDescription: 'Publications and manuscripts.',
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
    researchDescription: '论文与手稿。',
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
  }>;
};

export const storyTranslations: Record<string, StoryTranslation> = {
  easecation: {
    period: '2018–至今',
    category: '社区与系统',
    title: 'EaseCation',
    shortTitle: 'EaseCation',
    summary:
      '围绕一个长期运行的 Minecraft 网络所做的运营、Web 工程、内容制作与社区工作。',
    introduction:
      '我于 2018 年加入 EaseCation，目前负责内部运营与 Web 工程。工作涵盖版本发布、内部工具、网站建设，以及网络内各团队的协作。',
    sections: [
      {
        title: '开源基础设施',
        description: 'EaseCation 组织持续维护并公开服务器软件与相关工具。',
      },
      {
        title: '社区与内容制作',
        description:
          '我参与过社区活动的组织，也参与制作了哔哩哔哩游戏 2023 年 Minecraft 新春节目。',
      },
      {
        title: '公开记录',
        description:
          '官方网站与社区维护的 Wiki 记录了服务器的玩法、历史与文化。',
      },
    ],
  },
  'first-robotics': {
    period: '2017–2025',
    category: '竞赛机器人',
    title: 'FIRST 机器人',
    shortTitle: 'FIRST 机器人',
    summary:
      '从 FLL 到 FRC：参赛、担任队长、创立队伍、指导学生与赛事志愿服务。',
    introduction:
      '我的 FIRST 经历始于 2017 年的 FIRST LEGO League，后来延续到 FRC 6386 队与 8811 队。',
    sections: [
      {
        title: 'FIRST LEGO League',
        period: '2017–2018',
        description:
          'FLL 是我第一次以团队成员的身份设计并搭建竞赛机器人。',
      },
      {
        title: 'FRC 6386 队',
        period: '2018–2019',
        description:
          '我曾任 6386 队队长。2019 年，队伍在悉尼赢得 South Pacific Regional，并晋级在休斯敦举行的 FIRST Championship。',
      },
      {
        title: '钱江国际机器人公开赛',
        period: '2019 年 8 月',
        description:
          '6386 队在钱江国际机器人公开赛中成为中国区亚军联盟队伍。',
      },
      {
        title: 'FRC 8811 队',
        period: '2022–2024',
        description:
          '我在广州市第二中学创立 8811 队，筹集超过 14,000 美元经费，开展 60 余次技术培训，并继续担任青年导师。',
      },
      {
        title: '上海区域赛',
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
    summary: '为上海纽约大学竞赛机器人开展电气、控制与系统工作。',
    introduction:
      '我共同创立了上海纽约大学 RoboMaster 战队，现任副队长，并负责电气与控制系统。',
    sections: [
      {
        title: '嵌入式控制',
        description:
          '我负责队伍各型竞赛机器人的嵌入式控制与传感器集成。',
      },
      {
        title: '系统集成',
        description:
          '目前的工作包括自研全向底盘，以及电气、控制与机械子系统的联合集成。',
      },
    ],
  },
  'robotics-lab-infrastructure': {
    period: '2025–至今',
    category: '机器人学习基础设施',
    title: '机器人实验室基础设施',
    shortTitle: '实验室基础设施',
    summary:
      '面向真实机器人实验的遥操作、同步数据采集、标定、数据集转换与部署工具。',
    introduction:
      '在上海纽约大学，我搭建贯穿实验配置、可复现实验运行与策略部署的机器人学习基础设施。',
    sections: [
      {
        title: '上海纽约大学 DURF',
        period: '2025–至今',
        description:
          '作为校长本科生科研基金项目的本科研究员，我参与机器人学习与学习系统相关研究。',
      },
      {
        title: 'Galaxea A1 Research Runtime',
        period: '2026',
        description:
          '一套端到端运行环境，支持 Galaxea A1 遥操作、同步多模态采集、LeRobot 数据集转换与策略部署。',
      },
      {
        title: 'Quest Trajectory Recorder',
        period: '2026',
        description:
          '一套与仿真器解耦的工具，用于 LIBERO、Isaac Sim 等后端中的控制器标定、轨迹记录、实时可视化与遥操作。',
      },
    ],
  },
  'kiwi-codeshin': {
    period: '2025',
    category: '学习系统',
    title: 'Kiwi 与 CodeShin',
    shortTitle: 'Kiwi 与 CodeShin',
    summary: '在上海纽约大学开发的 AI 辅助编程练习流程。',
    introduction:
      '在上海纽约大学，我为 Kiwi 开发了 AI 辅助编程练习模块，并将 CodeShin 构建为完整的全栈练习环境。',
    sections: [
      {
        title: '练习环境',
        description:
          'CodeShin 将交互式编辑器、解答分析与面向编程练习的 AI 引导结合在一起。',
      },
      {
        title: '个性化学习',
        description:
          '系统根据学习者的进度与历史作业推荐练习，并动态调整学习路径。',
      },
      {
        title: '上海纽约大学部署',
        description:
          '该模块被集成进 Kiwi，之后用于上海纽约大学的计算机科学课程。',
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

  return {
    ...story,
    ...translation,
    sections: story.sections.map((section, index) => ({
      ...section,
      ...(translation.sections[index] || {}),
    })),
  };
}
