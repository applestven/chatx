// ~/utils/constants.js
const dataStatistics = [
  {
    id: 1,
    number: 10000,
    suffix: '+',
    description: '累计服务用户',
  },
  {
    id: 2,
    number: 10000,
    suffix: 'w+',
    description: '帮助企业拓客粉丝',
  },
  {
    id: 3,
    number: 20,
    suffix: '亿+',
    description: '未来将触达的市场',
  }
];

const listProblems = [
  {
    id: 1,
    question: '跨国沟通难，客户定位不准？语⾔差异拖累您的全球业务！',
    description: '⾯对多语⾔市场，沟通障碍带来的是误解、信任缺失，直接影响精准客户定位。结果是⼴告投放效果⼤打折扣，不仅耗费⼤量资⾦，还浪费了宝贵的时间和资源。如何打破语⾔壁垒，实现真正精准的客户触达，成为全球业务成功的关键。',
  },
  {
    id: 2,
    question: '频繁封号？重要客户数据岌岌可危？',
    description: '封号问题⼀直困扰着外贸企业，尤其是新⼿，稍有不慎，账号就可能永久失效，导致重要客户数据⽆备份，甚⾄⾟苦建⽴的客户关系顷刻崩塌。⾯对这⼀⾏业痛点，您是否担⼼账号⽆法找回，客户资源荡然⽆存？如何在激烈的市场竞争中保障您的账号安全，稳固客户关系，避免因封号⽽遭受不可挽回的损失？',
  },
  {
    id: 3,
    question: '获客成本飙升，转化难、留存低？中⼩企业如何突破困境？',
    description: '随着市场竞争愈演愈烈，获取客户的成本不断攀升，给中⼩企业带来了巨⼤的压⼒。尽管能吸引潜在客户，但由于缺乏精准营销和有效策略，转化率始终难以提升，客户留存更是乏⼒。⾯对获客成本⾼企和转化低迷的双重挑战，企业如何才能有效突破，实现可持续增⻓？',
  },
  {
    id: 4,
    question: '是否担心团队的专注力和效率无法得到有效保障？',
    description: '当团队的专注力和效率无法得到有效保障，团队的效率和整体业绩都会受到影响。如何确保每位员⼯都在正确的轨道上⾼效⼯作？我们的软件提供全⽅位的员⼯⾏为监管，让团队运作透明化，防⽌不良⾏为，确保团队⽬标达成。同时，通过清晰的绩效评估体系，激发员⼯的最⼤潜⼒，让每⼀位成员为企业的成功贡献⼒量。',
  }
];

const brandList = [
  { id: 1, text: "Zalo", icon: "/ipx/brandList/Zalo.png" },
  { id: 2, text: "WhatsApp", icon: "/ipx/brandList/WhatsApp.png" },
  { id: 3, text: "Telegram", icon: "/ipx/brandList/Telegram.png" },
  { id: 4, text: "TelegramK", icon: "/ipx/brandList/TelegramK.png" },
  { id: 5, text: "Instagram", icon: "/ipx/brandList/Instagram.png" },
  { id: 6, text: "Messenger", icon: "/ipx/brandList/Messenger.png" },
  { id: 7, text: "Twitter", icon: "/ipx/brandList/Twitter.png" },
  { id: 8, text: "LINE", icon: "/ipx/brandList/LINE.png" },
  { id: 9, text: "Snapchat", icon: "/ipx/brandList/Snapchat.png" },
  { id: 10, text: "TikTok", icon: "/ipx/brandList/TikTok.png" },
  { id: 11, text: "GoogleVoice", icon: "/ipx/brandList/GoogleVoice.png" },
  { id: 12, text: "LineBusiness", icon: "/ipx/brandList/LineBusiness.png" },
  { id: 13, text: "Facebook", icon: "/ipx/brandList/Facebook.png" },
  { id: 14, text: "Discord", icon: "/ipx/brandList/Discord.png" },
  { id: 15, text: "Skype", icon: "/ipx/brandList/Skype.png" }
]

const funcSectionList = [
  {
    id: "translate",
    direction: "left",
    imageSrc: "/ipx/produtctDesc/cx-index-d-1.webp",
    lineImageSrc: "/ipx/line-right.webp",
    moreLink: "/productTranslate",
    content: {
      title: "实时翻译 · 智能多语⾔识别",
      sections: [
        {
          subtitle: "多线路，多语言",
          text: "集成超过10条顶级翻译线路，⽀持全球200+语⾔，⽆需切换，智能识别语⾔类型，确保全球⽤户⽆缝沟通，实现真正的全球互联。",
        },
        {
          subtitle: "发送接收实时翻译",
          text: "⽆论何时何地，⽀持多语⾔在线实时翻译，快速响应，⾼效沟通，打破语⾔障碍，让您的业务遍布全球。",
        },
      ],
    },
  },
  {
    id: "platform",
    direction: "right",
    imageSrc: "/ipx/produtctDesc/cx-index-d-2.webp",
    lineImageSrc: "/ipx/line-left.webp",
    moreLink: "/productPlatform",
    content: {
      title: "多平台聚合管理 · 轻松全球触达",
      sections: [
        {
          subtitle: "主流平台⼀键切换",
          text: "全⾯⽀持WhatsApp、Telegram、Line等多款全球主流社交软件，助您实现多渠道精准获客，轻松拓展全球市场。",
        },
        {
          subtitle: "多账号同步管理",
          text: "单⼀平台即可同时管理多个账号，⽆需频繁切换，优化操作效率，让您的营销更加⾼效便捷。",
        },
      ],
    },
  },
  {
    id: "callback",
    direction: "left",
    imageSrc: "/ipx/produtctDesc/cx-index-d-3.webp",
    lineImageSrc: "/ipx/line-right.webp",
    moreLink: "/productCallback",
    content: {
      title: "快捷回复 · ⼀键触达",
      sections: [
        {
          subtitle: "预设回复模板 · ⾼效互动",
          text: "通过预设回复模板，您可以快速选择并发送常⽤信息，⽆需重复输⼊，节省时间，确保与客户的⾼效沟通，提升⼯作效率。",
        },
        {
          subtitle: "智能关键词触发 · ⾃动回复",
          text: "根据⽤户输⼊的关键词，系统可⾃动匹配并发送预设回复，实现⼀键触达，确保及时响应客户需求，提升客户满意度。",
        },
      ],
    },
  },
  {
    id: "fingerprint",
    direction: "right",
    imageSrc: "/ipx/produtctDesc/cx-index-d-4.webp",
    // lineImageSrc: "/ipx/line-left.webp",
    moreLink: "/productAccount",
    content: {
      title: "智能指纹保护 · 安全护航您的账号",
      sections: [
        {
          subtitle: "智能指纹模拟 · 隐私保护升级",
          text: "通过智能指纹模拟技术，系统⾃动⽣成独特的浏览器指纹，避免账号关联和追踪，保护您的隐私，确保每个账号都在安全的环境中运⾏。",
        },
        {
          subtitle: "多环境隔离 · 防⽌封号⻛险",
          text: "⽀持多环境隔离配置，确保每个账号在独⽴的指纹环境中运⾏，有效降低因指纹重复导致的封号⻛险，为您的账号保驾护航。",
        },
      ],
    },
  },
]

const userFeedbackList = [
  {
    id: "christopher",
    avatar: "/ipx/cx-index-u-1.webp",
    name: "Christopher",
    title: "国际市场营销经理",
    description:
      "我的⼯作需要与全球各地的团队和客户密切合作。ChatX的多语⾔实时翻译和社交APP集成功能，彻底消除沟通障碍。⽆论是策划全球营销活动，还是与国际客户进⾏实时交流ChatX都为我们提供了极⼤的便利和效率。这款⼯具显著提升了我们的营销效果，让我们在全球市场中更具竞争⼒。",
  },
  {
    id: "frances",
    avatar: "/ipx/cx-index-u-2.webp",
    name: "Frances",
    title: "运营总监",
    description:
      "作为⼀家跨境电商平台的运营总监，我深知全球沟通的重要性。⾃从使⽤了ChatX，我们的团队在与世界各地的客户和合作伙伴交流时变得更加⾼效顺畅。ChatX强⼤的多语⾔⽀持和社交平台整合功能，让我们在全球市场中占据了更有利的位置。此外，它的客户备注功能帮助我们更好地了解客户需求，推动了平台的快速增⻓和持续成功。",
  },
  {
    id: "lgnativs",
    avatar: "/ipx/cx-index-u-3.webp",
    name: "Lgnativs",
    title: "项⽬经理",
    description:
      "我的⼯作需要频繁与来⾃不同国家和⽂化背景的事及合作伙伴沟通。ChatX翻译软件已成为我们不可或缺的⼯具。它不仅⽀持多语⾔，还能与各种社交APP⽆缝集成，⼤⼤提升了我们的⼯作效率和沟通顺畅度。ChatX真正改善了我们的跨国合作，确保项⽬推进更加顺利。",
  },
]


// 命名导出（推荐）
export {
  dataStatistics,
  listProblems,
  brandList,
  funcSectionList,
  userFeedbackList
};
