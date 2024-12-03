import { defineConfig, type DefaultTheme} from 'vitepress'

var base_path_guide_cloud = '/en/guide_cloud'
var base_path_examples = '/en/examples'
var base_path_api = '/en/api'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  title: "SwanLab Docs",
  description: "SwanLab Official Documentation, providing the most comprehensive user guide and API documentation",
  lang: 'en-US',

  head: [
    ['link', { rel: 'icon', type:"image/svg+xml", href: '/icon.svg' }],
    ['link', { rel: 'icon', type:"image/png", href: '/icon.png' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 左上角logo
    logo: '/icon.svg',

    // 导航栏配置
    nav: [
      { 
        text: 'User Guide',
        link: base_path_guide_cloud + '/general/what-is-swanlab',
        activeMatch: '/en/guide_cloud/',
      },
    //   { 
    //     text: '案例',
    //     link: base_path_examples + '/mnist',
    //     activeMatch: '/en/examples/',
    //   },
    //   { 
    //     text: 'API',
    //     link: base_path_api + '/api-index',
    //     activeMatch: '/en/api/',
    //     },
      { text: 'v0.3.27',  items: [
        { text: 'changelog', link: base_path_guide_cloud + '/general/changelog' },
        // { text: '参与贡献', link: 'https://github.com/SwanHubX/SwanLab/blob/main/CONTRIBUTING.md' },
        // { text: '建议反馈', link: 'https://geektechstudio.feishu.cn/share/base/form/shrcn8koDFRcH2mMcBYMh9tiKfI'}
      ] },
    //   { text: '在线交流', link: '/en/guide_cloud/community/online-support'},
      { text: 'Website', link: 'https://swanlab.cn' },
    ],

    // 最后更新于配置
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      },
    },

    // 编辑此页配置
    editLink: {
      pattern: 'https://github.com/swanhubx/swanlab-docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    // 侧边栏配置
    outline: {
      label: 'On this page',
      level: 'deep',
    },

    // 侧边栏配置
    sidebar: {
      '/en/guide_cloud/':{base: '/en/guide_cloud/', items: sidebarGuideCloud(),},
    //   '/en/examples/':{base: '/en/examples/', items: sidebarExamples(),},
    //   '/en/api/':{base: '/en/api/', items: sidebarAPI(),},
    },

    // 页脚配置
    socialLinks: [
      { icon: 'github', link: 'https://github.com/swanhubx/swanlab' }
    ],

    // 搜索配置
    search: {
      provider: 'local'
    }
  }
})


function sidebarGuideCloud(): DefaultTheme.SidebarItem[] {
  return [{
    text: 'Introduction',
    // collapsed: false,
    items: [
      { text: 'What is SwanLab', link: 'general/what-is-swanlab' },
      { text: 'Quick Start', link: 'general/quick-start' },
      { text: 'Team Usage', link: 'general/organization' },
      { text: 'Changelog', link: 'general/changelog' }
    ]
  },
  {
    text: '📚 Experiment Track',
    // collapsed: false,
    items: [
      { text: 'What is experiment tracking?', link: 'experiment_track/what-is-experiment-track' },
      { text: 'Create an experiment', link: 'experiment_track/create-experiment' },
      { text: 'Create by config file', link: 'experiment_track/create-experiment-by-configfile' },
      { text: 'Set config', link: 'experiment_track/set-experiment-config' },
      { text: 'Log metric', link: 'experiment_track/log-experiment-metric' },
      { text: 'Log media metric', link: 'experiment_track/log-media' },
      { text: 'View result', link: 'experiment_track/view-result' },
      { text: 'Finish experiment', link: 'experiment_track/finish-experiment' },
      { text: 'Jupyter Notebook', link: 'experiment_track/jupyter-notebook' },
      { text: 'Limitations and Performance', link: 'experiment_track/limit-and-performance' },
      { text: 'Experiment metadata', link: 'experiment_track/experiment-metadata' },
      { text: 'FAQ', link: 'experiment_track/FAQ' },
    ]
  },
  {
    text: '💻 Self-hosted',
    // collapsed: false,
    items: [
      { text: 'Offline board', link: 'self_host/offline-board' },
      { text: 'Remote access tutorial', link: 'self_host/remote-view' },
    ]
  },
  {
    text: '⚡️ Integration',
    // collapsed: false,
    items: [
      { text: 'Argparse', link:'integration/integration-argparse' },
      { text: 'Fastai', link: 'integration/integration-fastai' },
      { text: 'HuggingFace Accelerate', link: 'integration/integration-huggingface-accelerate' },
      { text: 'HuggingFace Transformers', link: 'integration/integration-huggingface-transformers' },
      { text: 'Hydra', link: 'integration/integration-hydra' },
      { text: 'Keras', link: 'integration/integration-keras' },
      { text: 'MMEngine', link: 'integration/integration-mmengine' },
      { text: 'MMPretrain', link: 'integration/integration-mmpretrain' },
      { text: 'MMDetection', link: 'integration/integration-mmdetection' },
      { text: 'MMSegmentation', link: 'integration/integration-mmsegmentation' },
      { text: 'OpenAI', link: 'integration/integration-openai' },
      { text: 'Omegaconf', link: 'integration/integration-omegaconf' },
      { text: 'PaddleDetection', link: 'integration/integration-paddledetection' },
      { text: 'PaddleYOLO', link: 'integration/integration-paddleyolo' },
      { text: 'PyTorch', link: 'integration/integration-pytorch' },
      { text: 'PyTorch Lightning', link: 'integration/integration-pytorch-lightning' },
      { text: 'PyTorch torchtune', link: 'integration/integration-pytorch-torchtune' },
      { text: 'Sentence Transformers', link: 'integration/integration-sentence-transformers'},
      { text: 'Stable Baseline3', link: 'integration/integration-sb3' },
      { text: 'Swift', link: 'integration/integration-swift' },
      { text: 'Tensorboard', link: 'integration/integration-tensorboard'},
      { text: 'Ultralytics', link: 'integration/integration-ultralytics' },
      { text: 'Weights & Biases', link: 'integration/integration-wandb'},
      { text: 'Xtuner', link: 'integration/integration-xtuner'},
      { text: 'ZhipuAI', link: 'integration/integration-zhipuai'},
    ]
  },
]
}




//   {
//     text: '👥 社区',
//     // collapsed: false,
//     items: [
//       { text: '在线支持', link: 'community/online-support'},
//       { text: 'Github徽章', link: 'community/github-badge'},
//       { text: '论文引用', link: 'community/paper-cite'},
//       { text: '贡献代码', link: 'community/contributing-code'},
//       { text: '贡献官方文档', link: 'community/contributing-docs'},
//       { text: '贡献者', link: 'community/contributor'},
//       { text: '关于我们', link: 'community/emotion-machine'},
//     ]
//   },]
// }

// function sidebarExamples(): DefaultTheme.SidebarItem[] {
//   return [{
//     text: '入门',
//     // collapsed: false,
//     items: [
//       { text: 'Hello_World', link: 'hello_world' },
//       { text: 'MNIST手写体识别', link: 'mnist' },
//     ]
//   },
//   {
//     text: '计算机视觉',
//     // collapsed: false,
//     items: [
//       { text: 'FashionMNIST', link: 'fashionmnist' },
//       { text: 'Resnet猫狗分类', link: 'cats_dogs_classification' },    
//       { text: 'Yolo目标检测', link: 'yolo' },  
//     ]
//   },
//   {
//     text: '自然语言处理',
//     // collapsed: false,
//     items: [  
//       { text: 'BERT文本分类', link: 'bert' },  
//       { text: 'Qwen微调案例', link: 'qwen_finetune' },  
//       { text: 'LLM预训练', link: 'pretrain_llm' },  
//     ]
//   },
//   {
//     text: '音频',
//     // collapsed: false,
//     items: [
//       { text: '音频分类', link: 'audio_classification' },
//     ]
//   },
//   {
//     text: '时间序列',
//     // collapsed: false,
//     items: [
//       { text: 'LSTM股票预测', link: 'lstm_stock'},
//     ]
//   },
// ]
// }

// function sidebarAPI(): DefaultTheme.SidebarItem[] {
//   return [{
//     text: 'CLI',
//     // collapsed: false,
//     items: [
//       { text: 'swanlab watch', link: 'cli-swanlab-watch' },
//       { text: 'swanlab login', link: 'cli-swanlab-login' },
//       { text: 'swanlab logout', link: 'cli-swanlab-logout' },
//       { text: 'swanlab convert', link: 'cli-swanlab-convert' },
//       { text: '(内测中) swanlab remote gpu', link: 'cli-swanlab-remote-gpu' },
//       { text: '其他', link: 'cli-swanlab-other' },
//     ]
//   },
//   {
//     text: 'Python SDK',
//     // collapsed: false,
//     items: [
//       { text: 'init', link: 'py-init' },
//       { text: 'log', link: 'py-log' },
//       { text: '多媒体数据', items: [
//         { text: 'Image', link: 'py-Image' },
//         { text: 'Audio', link: 'py-Audio' },
//         { text: 'Text', link: 'py-Text' },
//       ]},
//       { text: 'login', link: 'py-login' },
//       { text: 'integration', link: 'py-integration' },
//       { text: 'converter', link: 'py-converter' },
//     ]
//   },]
// }