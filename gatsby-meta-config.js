module.exports = {
  title: `gorillaKim.github.io`,
  description: `김고릴라의 일상 기록`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://gorillakim.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `gorillaKim/gorillaKim.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'G-J969X7T5HM', // Google Analytics Tracking ID
  author: {
    name: `김영환`,
    bio: {
      role: `프론트엔드 개발자`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: ``, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: ``, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2020.06 ~ 2020.08',
        activity: '매드업(Madup) 인턴',
        links: {
          // TODO: 매드업 인턴기 블로그 포스팅하기
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/gorillaKim',
        },
      },
      {
        date: '2020.09 ~ 2020.12',
        activity: '구름(Goorm) 인턴',
        links: {
          // TODO: 구름 인턴기 블로그 포스팅하기
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/gorillaKim',
        },
      },
      {
        date: '2021.01 ~',
        activity: '매드업(Madup) Manager',
      },
      {
        date: '2021.09 ~',
        activity: 'Tag-tools 개발',
        links: {
          // TODO: Tag-tools 개발기 블로그 포스팅하기
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/gorillaKim',
        },
      },
      {
        date: '2023.07 ~',
        activity: '매드업(Madup) Advanced',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      /* TODO: 프로젝트 하단에 정리하기
      {
        title: '개발 블로그 테마 개발',
        description:
          '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
       */
    ],
  },
};
