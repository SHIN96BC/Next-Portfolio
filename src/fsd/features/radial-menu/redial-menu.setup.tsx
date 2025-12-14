import { RadialMenuType } from '@FsdFeatures/radial-menu/model';

export const dataRadialMenu: RadialMenuType[] = [
  {
    key: 1,
    value: '검색기록',
    colors: '#FFF',
    icon: '/icons/radialMenu/icon_m_03_26.svg',
    content: <div />,
  },
  {
    key: 2,
    value: '마이페이지',
    colors: '#FFF',
    icon: '/icons/radialMenu/icon_m_02_26.svg',
    content: <div />,
  },
  {
    key: 3,
    value: `예약내역
     확인 및 결제`,
    colors: '#FFF',
    icon: '/icons/radialMenu/icon_m_01_26.svg',
    content: <div />,
  },
  {
    key: 5,
    value: '결제혜택',
    colors: '#FFF',
    icon: '/icons/radialMenu/icon_m_10.svg',
    content: '',
    link: '/event?tab=2',
  },
  {
    key: 6,
    value: '고객센터',
    colors: '#FFF',
    icon: '/icons/radialMenu/icon_m_9.svg',
    content: '',
    link: '/customer-center',
  },
  {
    key: 7,
    value: '찜한 상품',
    colors: '#FFF',
    icon: '/icons/radialMenu/icon_m_07_26.svg',
    content: <div />,
  },
  {
    key: 8,
    value: '최근 본 상품',
    colors: '#FFF',
    icon: '/icons/radialMenu/icon_m_08_26.svg',
    content: <div />,
  },
  {
    key: 9,
    value: '자주 찾는 질문',
    colors: '#FFF',
    icon: '/icons/radialMenu/icon_m_04_26.svg',
    content: '',
    iframeUrl:
      'https://cm-staticfile.modetour.com/files/SpecialExhibitionUserDefine/9ac151b813ac421a8873bceda7b7bd05-m.html',
  },
];
