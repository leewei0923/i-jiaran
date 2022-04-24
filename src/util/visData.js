import {
  ReactIcon,
  HotIcon,
  DevIcon,
  OfficeIcon,
  VideoIcon,
  ShoppingIcon,
  BeautifyIcon,
  MoreIcon,
  SougouIcon,
  BaiduIcon,
  BingIcon,
  GoogleIcon
} from '~/component/Icon.js';

export const leftlist = [
  {
    id: '1',
    name: '热门',
    key: 'hot',
    icon: <HotIcon style={{ color: '#F8242A' }} />
  },
  {
    id: '2',
    name: '开发',
    key: 'dev',
    icon: <DevIcon />
  },
  {
    id: '3',
    name: '办公',
    key: 'office',
    icon: <OfficeIcon />
  },
  {
    id: '4',
    name: '视频',
    key: 'video',
    icon: <VideoIcon />
  },
  {
    id: '5',
    name: '购物',
    key: 'shopping',
    icon: <ShoppingIcon />
  },
  {
    id: '6',
    name: '美化',
    key: 'beautify',
    icon: <BeautifyIcon />
  },
  {
    id: '7',
    name: '更多',
    key: 'more',
    icon: <MoreIcon />
  }
];

export const SearchEngine = [
  {
    id: '1',
    name: '搜狗',
    key: 'Sougou',
    icon: <SougouIcon style={{ fontSize: '20px' }} />
  },
  {
    id: '2',
    name: '谷歌',
    key: 'Google',
    icon: <GoogleIcon style={{ fontSize: '20px' }} />
  },
  {
    id: '3',
    name: '百度',
    key: 'Baidu',
    icon: <BaiduIcon style={{ fontSize: '20px' }} />
  },
  {
    id: '4',
    name: '必应',
    key: 'Bing',
    icon: <BingIcon style={{ fontSize: '20px' }} />
  }
];

export const festivalDate = [
  {
    id: '1',
    name: '劳动节',
    date: '2022-05-01',
    type: 'sys'
  },
  {
    id: '2',
    name: '端午节',
    date: '2022-06-03',
    type: 'sys'
  },
  {
    id: '3',
    name: '国庆节',
    date: '2022-10-01',
    type: 'sys'
  }
];

export const Rightlist = [
  {
    id: '1',
    key: 'hot',
    name: '热门',
    child: [
      {
        id: '1',
        key: 'react',
        name: 'react',
        icon: <ReactIcon />,
        url: ''
      },
      {
        id: '2',
        key: 'react',
        name: 'react',
        icon: <ReactIcon />,
        url: ''
      },
      {
        id: '3',
        key: 'react',
        name: 'react',
        icon: <ReactIcon />,
        url: ''
      }
    ]
  },
  {
    id: '2',
    key: 'dev',
    name: '开发',
    child: [
      {
        id: '1',
        key: 'facebook',
        name: 'facebook',
        icon: <ReactIcon />,
        url: ''
      },
      {
        id: '1',
        key: '推特',
        name: '推特',
        icon: <ReactIcon />,
        url: ''
      },
      {
        id: '1',
        key: '谷歌',
        name: '谷',
        icon: <ReactIcon />,
        url: ''
      }
    ]
  },
  {
    id: '3',
    key: 'office',
    name: '办公',
    child: [
      {
        id: '',
        key: '',
        name: '',
        icon: '',
        url: ''
      }
    ]
  },
  {
    id: '4',
    key: 'video',
    name: '视频',
    child: [
      {
        id: '',
        key: '',
        name: '',
        icon: '',
        url: ''
      }
    ]
  },
  {
    id: '5',
    key: 'shopping',
    name: '购物',
    child: [
      {
        id: '',
        key: '',
        name: '',
        icon: '',
        url: ''
      }
    ]
  },
  {
    id: '6',
    key: 'beautify',
    name: '美化',
    child: [
      {
        id: '',
        key: '',
        name: '',
        icon: '',
        url: ''
      }
    ]
  },
  {
    id: '7',
    key: 'more',
    name: '更多',
    child: [
      {
        id: '',
        key: '',
        name: '',
        icon: '',
        url: ''
      }
    ]
  }
];
