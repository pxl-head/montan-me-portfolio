export type Language = 'ru' | 'en';

export type PortfolioProject = {
  number: string;
  title: string;
  note: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  gallerySlug: string;
  galleryCount: number;
  galleryVideo?: {
    src: string;
    poster: string;
  };
};

export type FrameMedia =
  | { src: string; alt: string; width: number; height: number }
  | {
      type: 'video';
      src: string;
      poster: string;
      alt: string;
    };

export type CreditRole =
  | 'models'
  | 'mua'
  | 'photo'
  | 'photoEdit'
  | 'designStyle'
  | 'videographer'
  | 'creativeDirector'
  | 'style'
  | 'team';

export type CreditPerson = { label: string; href: string };

export type CreditGroup = { role: CreditRole; people: CreditPerson[] };

function instagram(
  label: string,
  username: string,
  token: string,
): CreditPerson {
  return {
    label,
    href: `https://www.instagram.com/${username}?stkn=${token}`,
  };
}

const montan = {
  label: '@montan.me',
  href: 'https://www.instagram.com/montan.me?stkn=MWNncDEzZ2U1d3Q1ag%3D%3D&utm_source=qr',
};

export const caseCredits: Record<string, CreditGroup[]> = {
  'drama-industry': [
    {
      role: 'models',
      people: [
        montan,
        instagram('@honekss', 'honekss', 'YjZyeDNpNnh1MnE1'),
        instagram('@iamsalyona', 'iamsalyona', 'cjJ6ejU5MDNucWNv'),
        instagram('@kemiled', 'kemiled', 'MmZ1eHl1eWVnaHd5'),
        instagram('@go.roshina', 'go.roshina', 'MXFyeXEwMmx6a2ZmZQ=='),
        instagram('@babysupaskkiny', 'babysupaskkiny', 'eXhzOHRtdHBoaGMz'),
        instagram('@kupido.n', 'kupid0.n', 'aTYydnZndDk4bmp5'),
        instagram('@cuwtiea', 'cuwtiea', 'd2JqcXp6eDVwMGwy'),
      ],
    },
    {
      role: 'mua',
      people: [
        instagram('@cuwtiea', 'cuwtiea', 'd2JqcXp6eDVwMGwy'),
        instagram('@kemiled', 'kemiled', 'MmZ1eHl1eWVnaHd5'),
        instagram('@kupid0.n', 'kupid0.n', 'aTYydnZndDk4bmp5'),
        instagram('@prooosecco', 'prooosecco', 'MWJrYXRtN2FjaGV4Ng=='),
      ],
    },
  ],
  'cheese-tabi': [
    {
      role: 'models',
      people: [instagram('@singantol', 'singantol', 'MXZ1ZG5seHRvMjRmaw==')],
    },
    {
      role: 'photo',
      people: [instagram('@avotarip', 'avotarip', 'Y2xvNHh5azAyZTAz')],
    },
    {
      role: 'videographer',
      people: [instagram('@pxl_head', 'pxl_head', 'dmE1NGVzZm9pcWEy')],
    },
  ],
  pony: [
    {
      role: 'models',
      people: [instagram('@endy_marfa', 'endy_marfa', 'MXJ4bG94cXZubmtnMg==')],
    },
    {
      role: 'photoEdit',
      people: [instagram('@weirddy.y', 'weirddy.y', 'aTRzMW92MDNpc3Fw')],
    },
    { role: 'designStyle', people: [montan] },
    {
      role: 'videographer',
      people: [instagram('@pxl_head', 'pxl_head', 'dmE1NGVzZm9pcWEy')],
    },
    {
      role: 'creativeDirector',
      people: [instagram('@avotarip', 'avotarip', 'Y2xvNHh5azAyZTAz')],
    },
    {
      role: 'style',
      people: [instagram('@outside.inc', 'outside.inc', 'cDQyNGp1aTNydDFs')],
    },
  ],
  'horse-games': [
    {
      role: 'designStyle',
      people: [
        montan,
        instagram('@prooosecco', 'prooosecco', 'MWJrYXRtN2FjaGV4Ng=='),
      ],
    },
    {
      role: 'models',
      people: [
        instagram('@fffadeintoyou', 'fffadeintoyou', 'MW55Y24xZ3JrMzB1dQ=='),
        instagram('@degrassys', 'degrassys', 'amYzcWZxOXl5NHRk'),
        instagram('@kemiled', 'kemiled', 'MmZ1eHl1eWVnaHd5'),
        instagram('@oupwery', 'oupwery', 'MXgxanpwaWg1M2dzbA=='),
        instagram('@honekss', 'honekss', 'YjZyeDNpNnh1MnE1'),
        instagram('@for_ental', 'for_ental', 'MWQxZmo3anE1cWloMw=='),
        instagram('@go.roshina', 'go.roshina', 'MXFyeXEwMmx6a2ZmZQ=='),
        instagram('@fursak_', 'fursak_', 'MWppNDJxbjEyMjA1NA=='),
      ],
    },
    {
      role: 'mua',
      people: [instagram('@prooosecco', 'prooosecco', 'MWJrYXRtN2FjaGV4Ng==')],
    },
  ],
  'veins-of-vanity': [
    {
      role: 'models',
      people: [
        instagram('@fffadeintoyou', 'fffadeintoyou', 'MW55Y24xZ3JrMzB1dQ=='),
        instagram('@honekss', 'honekss', 'YjZyeDNpNnh1MnE1'),
        instagram('@kemiled', 'kemiled', 'MmZ1eHl1eWVnaHd5'),
        instagram('@oupwery', 'oupwery', 'MXgxanpwaWg1M2dzbA=='),
        instagram('@powerpuff8luv', 'powerpuff8luv', 'Y2FiNjFxbnE4dWR5'),
        instagram('@valotosss', 'valotosss', 'MTE0c2ZqNGcyeXNn'),
      ],
    },
    {
      role: 'mua',
      people: [
        instagram('@prooosecco', 'prooosecco', 'MWJrYXRtN2FjaGV4Ng=='),
        instagram('@maytatonkikh', 'maytatonkikh', 'MXZud3Ywa2JndWFyOA=='),
      ],
    },
  ],
};

type SiteCopy = {
  meta: { title: string; description: string };
  language: { legend: string; russian: string; english: string };
  header: {
    homeLabel: string;
    menu: string;
    note: string;
    navigationLabel: string;
    work: string;
    contact: string;
  };
  hero: { alt: string; portfolio: string; scroll: string };
  statement: { eyebrow: string; headline: [string, string]; copy: string };
  signal: string;
  work: { eyebrow: string; title: string; status: string };
  projects: PortfolioProject[];
  process: { eyebrow: string; title: string; copy: string };
  framesSection: { eyebrow: string; title: string; frame: string };
  frames: FrameMedia[];
  footer: {
    availability: string;
    contact: string;
    credit: string;
    socialsLabel: string;
    backToTop: string;
  };
  gallery: {
    openGallery: string;
    openMark: string;
    photo: string;
    video: string;
    of: string;
    navigation: string;
    previousMedia: string;
    nextMedia: string;
    previous: string;
    next: string;
    allMedia: string;
    openMedia: string;
    close: string;
  };
  caseDetails: {
    title: string;
    roles: Record<CreditRole, string>;
  };
  theme: { legend: string; pink: string; green: string; purple: string };
};

export const siteCopy: Record<Language, SiteCopy> = {
  ru: {
    meta: {
      title: 'MONTAN.ME — Портфолио',
      description: 'Дизайн, творчество и перформанс MONTAN.ME.',
    },
    language: {
      legend: 'Язык сайта',
      russian: 'Русский язык',
      english: 'Английский язык',
    },
    header: {
      homeLabel: 'MONTAN.ME — наверх',
      menu: 'МЕНЮ',
      note: 'ДИЗАЙН · ТВОРЧЕСТВО · ПЕРФОРМАНС',
      navigationLabel: 'Основная навигация',
      work: 'ПРОЕКТЫ',
      contact: 'КОНТАКТЫ',
    },
    hero: {
      alt: 'MONTAN.ME — дизайн, творчество и перформанс',
      portfolio: 'ПОРТФОЛИО / 2026',
      scroll: 'ЛИСТАЙТЕ НИЖЕ ↓',
    },
    statement: {
      eyebrow: '[ ЛИЧНЫЙ АРХИВ ]',
      headline: [
        'MONTAN.ME — визуальные проекты на стыке моды, образа и искусства.',
        'Костюм, материал, стилизация, перформанс — и всё, что между ними.',
      ],
      copy: 'Сделано руками. Придумано головой. Не всё открывается с первого взгляда.',
    },
    signal: 'MONTAN.ME — ОБРАЗ / ТЕЛО / ОБЪЕКТ / ПЕРФОРМАНС — ',
    work: {
      eyebrow: '[ ИЗБРАННЫЕ ПРОЕКТЫ ]',
      title: 'Архив Тимура',
      status: '01—08 / пополняется',
    },
    projects: [
      {
        number: '01',
        title: 'HEART ATTACK',
        note: 'архив проекта',
        image: '/media/heart-01.webp',
        width: 853,
        height: 1280,
        alt: 'HEART ATTACK — портрет за кулисами в красно-чёрных костюмах',
        gallerySlug: 'heart-attack',
        galleryCount: 18,
      },
      {
        number: '02',
        title: 'VEINS OF VANITY',
        note: 'избранные кадры',
        image: '/gallery/veins-of-vanity/04.webp',
        width: 853,
        height: 1280,
        alt: 'VEINS OF VANITY — скульптурный розовый костюм за кулисами',
        gallerySlug: 'veins-of-vanity',
        galleryCount: 15,
      },
      {
        number: '03',
        title: '«PONY» PROJECT',
        note: 'визуальный проект',
        image: '/gallery/pony/01.webp',
        width: 892,
        height: 1280,
        alt: '«PONY» PROJECT — исполнители в розовом костюме и тёмном сценическом свете',
        gallerySlug: 'pony',
        galleryCount: 19,
        galleryVideo: {
          src: '/media/pony-img-3912.mp4',
          poster: '/media/pony-img-3912.jpg',
        },
      },
      {
        number: '04',
        title: 'DRAMA QUEEN',
        note: 'подиумный проект',
        image: '/gallery/drama-industry/01.webp',
        width: 1280,
        height: 853,
        alt: 'DRAMA QUEEN — групповая сцена на подиуме в пастельных костюмах',
        gallerySlug: 'drama-industry',
        galleryCount: 7,
      },
      {
        number: '05',
        title: 'PLAY TIME IS OVER',
        note: 'исследование образа',
        image: '/gallery/horse-games/01.webp',
        width: 960,
        height: 1280,
        alt: 'PLAY TIME IS OVER — исполнитель в костюме из ярких сфер',
        gallerySlug: 'horse-games',
        galleryCount: 42,
      },
      {
        number: '06',
        title: 'CHEESE TABI',
        note: 'объект / образ',
        image: '/media/cheese-01.webp',
        width: 853,
        height: 1280,
        alt: 'CHEESE TABI — портрет со скульптурными жёлтыми туфлями',
        gallerySlug: 'cheese-tabi',
        galleryCount: 4,
      },
      {
        number: '07',
        title: 'MD',
        note: 'подиумный архив',
        image: '/gallery/md/01.webp',
        width: 1179,
        height: 777,
        alt: 'MD — подиумный портрет в конструктивной одежде',
        gallerySlug: 'md',
        galleryCount: 32,
      },
      {
        number: '08',
        title: 'STYLING',
        note: 'избранные образы',
        image: '/gallery/styling/01.webp',
        width: 960,
        height: 1280,
        alt: 'STYLING — три фигуры в чёрно-белых образах',
        gallerySlug: 'styling',
        galleryCount: 32,
      },
    ],
    process: {
      eyebrow: '[ МЕТОД РАБОТЫ ]',
      title: 'КТО ТАКОЙ MONTAN.ME',
      copy: 'Люблю вещи, которым не положено существовать.\n\nЯ — Тимур Монтан.\n\nЯ занимаюсь модой, костюмом и визуальными образами.\n\nМне интересно превращать идею в физическую вещь — даже если ради этого приходится забыть, как принято делать одежду.\n\nЯ работаю с конструкцией, стилизацией и нетипичными материалами. Вещь может быть сделана из ткани, силикона, пластика, синтепона, шаров для бассейна — вообще из того, что изначально не должно было становиться одеждой.\n\nДля меня важен не только финальный образ, но и то, как он существует в пространстве, движется и выглядит на человеке.',
    },
    framesSection: {
      eyebrow: '[ ПОЛЕВЫЕ ЗАМЕТКИ ]',
      title: 'Избранные кадры',
      frame: 'КАДР',
    },
    frames: [
      {
        src: '/media/heart-02.webp',
        alt: 'HEART ATTACK — подиумный перформанс',
        width: 1178,
        height: 792,
      },
      {
        src: '/gallery/veins-of-vanity/10.webp',
        alt: 'VEINS OF VANITY — подиумный образ',
        width: 872,
        height: 1280,
      },
      {
        src: '/gallery/pony/08.webp',
        alt: '«PONY» PROJECT — деталь костюма',
        width: 1280,
        height: 853,
      },
      {
        src: '/gallery/horse-games/24.webp',
        alt: 'PLAY TIME IS OVER — сцена на подиуме',
        width: 1280,
        height: 853,
      },
      {
        src: '/gallery/md/16.webp',
        alt: 'MD — портретное исследование',
        width: 1280,
        height: 851,
      },
      {
        src: '/gallery/styling/25.webp',
        alt: 'STYLING — тёмный редакционный портрет',
        width: 853,
        height: 1280,
      },
      {
        type: 'video',
        src: '/media/pony-selected-frame.mp4',
        poster: '/media/pony-selected-frame.jpg',
        alt: '«PONY» PROJECT — видео-кадр',
      },
    ],
    footer: {
      availability: 'ОТКРЫТ ДЛЯ ВИЗУАЛЬНЫХ ПРОЕКТОВ И КОЛЛАБОРАЦИЙ',
      contact: '[ КОНТАКТЫ ]',
      credit: 'The site was created by',
      socialsLabel: 'Социальные сети',
      backToTop: 'НАВЕРХ ↑',
    },
    gallery: {
      openGallery: 'Открыть галерею проекта',
      openMark: 'ОТКРЫТЬ',
      photo: 'фото',
      video: 'видео',
      of: 'из',
      navigation: 'Навигация по галерее',
      previousMedia: 'Предыдущий материал',
      nextMedia: 'Следующий материал',
      previous: '← НАЗАД',
      next: 'ДАЛЬШЕ →',
      allMedia: 'Все материалы проекта',
      openMedia: 'Открыть материал',
      close: 'Закрыть галерею',
    },
    caseDetails: {
      title: '[ КРЕДИТЫ ]',
      roles: {
        models: 'МОДЕЛИ',
        mua: 'MUA',
        photo: 'ФОТО',
        photoEdit: 'ФОТО / МОНТАЖ',
        designStyle: 'ДИЗАЙН / СТИЛИЗАЦИЯ',
        videographer: 'ВИДЕО',
        creativeDirector: 'КРЕАТИВНЫЙ ДИРЕКТОР',
        style: 'СТИЛЬ',
        team: 'КОМАНДА',
      },
    },
    theme: {
      legend: 'Цветовая тема',
      pink: 'Розовая тема',
      green: 'Зелёная тема',
      purple: 'Фиолетовая тема',
    },
  },
  en: {
    meta: {
      title: 'MONTAN.ME — Portfolio',
      description: 'Design, creativity and performance by MONTAN.ME.',
    },
    language: {
      legend: 'Site language',
      russian: 'Russian language',
      english: 'English language',
    },
    header: {
      homeLabel: 'MONTAN.ME — back to top',
      menu: 'MENU',
      note: 'DESIGN · CREATIVITY · PERFORMANCE',
      navigationLabel: 'Main navigation',
      work: 'WORK',
      contact: 'CONTACT',
    },
    hero: {
      alt: 'MONTAN.ME — design, creativity and performance',
      portfolio: 'PORTFOLIO / 2026',
      scroll: 'SCROLL TO ENTER ↓',
    },
    statement: {
      eyebrow: '[ PERSONAL ARCHIVE ]',
      headline: [
        'MONTAN.ME — visual projects at the intersection of fashion, image, and art.',
        'Costume, material, styling, performance — and everything in between.',
      ],
      copy: 'Made by hand. Conceived in the mind. Not everything reveals itself at first glance.',
    },
    signal: 'MONTAN.ME — IMAGE / BODY / OBJECT / PERFORMANCE — ',
    work: {
      eyebrow: '[ SELECTED WORK ]',
      title: "Timur's archive",
      status: '01—08 / ongoing',
    },
    projects: [
      {
        number: '01',
        title: 'HEART ATTACK',
        note: 'project archive',
        image: '/media/heart-01.webp',
        width: 853,
        height: 1280,
        alt: 'HEART ATTACK — backstage portrait in red and black costumes',
        gallerySlug: 'heart-attack',
        galleryCount: 18,
      },
      {
        number: '02',
        title: 'VEINS OF VANITY',
        note: 'selected frames',
        image: '/gallery/veins-of-vanity/04.webp',
        width: 853,
        height: 1280,
        alt: 'VEINS OF VANITY — sculptural pink costume backstage',
        gallerySlug: 'veins-of-vanity',
        galleryCount: 15,
      },
      {
        number: '03',
        title: '«PONY» PROJECT',
        note: 'visual project',
        image: '/gallery/pony/01.webp',
        width: 892,
        height: 1280,
        alt: '«PONY» PROJECT — performers in pink costume and dark stage light',
        gallerySlug: 'pony',
        galleryCount: 19,
        galleryVideo: {
          src: '/media/pony-img-3912.mp4',
          poster: '/media/pony-img-3912.jpg',
        },
      },
      {
        number: '04',
        title: 'DRAMA QUEEN',
        note: 'runway project',
        image: '/gallery/drama-industry/01.webp',
        width: 1280,
        height: 853,
        alt: 'DRAMA QUEEN — group runway scene in pastel costumes',
        gallerySlug: 'drama-industry',
        galleryCount: 7,
      },
      {
        number: '05',
        title: 'PLAY TIME IS OVER',
        note: 'character study',
        image: '/gallery/horse-games/01.webp',
        width: 960,
        height: 1280,
        alt: 'PLAY TIME IS OVER — performer in a costume made of bright spheres',
        gallerySlug: 'horse-games',
        galleryCount: 42,
      },
      {
        number: '06',
        title: 'CHEESE TABI',
        note: 'object / image',
        image: '/media/cheese-01.webp',
        width: 853,
        height: 1280,
        alt: 'CHEESE TABI — portrait with sculptural yellow shoes',
        gallerySlug: 'cheese-tabi',
        galleryCount: 4,
      },
      {
        number: '07',
        title: 'MD',
        note: 'runway archive',
        image: '/gallery/md/01.webp',
        width: 1179,
        height: 777,
        alt: 'MD — runway portrait with constructed clothing',
        gallerySlug: 'md',
        galleryCount: 32,
      },
      {
        number: '08',
        title: 'STYLING',
        note: 'selected looks',
        image: '/gallery/styling/01.webp',
        width: 960,
        height: 1280,
        alt: 'STYLING — three figures in black and white styling',
        gallerySlug: 'styling',
        galleryCount: 32,
      },
    ],
    process: {
      eyebrow: '[ WORKING METHOD ]',
      title: 'WHO IS MONTAN.ME',
      copy: 'I love things that were never meant to exist.\n\nI’m Timur Montan.\n\nI work with fashion, costume, and visual image-making.\n\nI’m interested in turning an idea into a physical thing — even if that means forgetting how clothes are supposed to be made.\n\nI work with construction, styling, and unconventional materials. A piece might be made from fabric, silicone, plastic, synthetic padding, pool balls — from anything that was never meant to become clothing.\n\nWhat matters to me is not only the final image, but how it occupies space, moves, and lives on the body.',
    },
    framesSection: {
      eyebrow: '[ FIELD NOTES ]',
      title: 'Selected frames',
      frame: 'FRAME',
    },
    frames: [
      {
        src: '/media/heart-02.webp',
        alt: 'HEART ATTACK — runway performance',
        width: 1178,
        height: 792,
      },
      {
        src: '/gallery/veins-of-vanity/10.webp',
        alt: 'VEINS OF VANITY — runway look',
        width: 872,
        height: 1280,
      },
      {
        src: '/gallery/pony/08.webp',
        alt: '«PONY» PROJECT — costume detail',
        width: 1280,
        height: 853,
      },
      {
        src: '/gallery/horse-games/24.webp',
        alt: 'PLAY TIME IS OVER — runway scene',
        width: 1280,
        height: 853,
      },
      {
        src: '/gallery/md/16.webp',
        alt: 'MD — portrait study',
        width: 1280,
        height: 851,
      },
      {
        src: '/gallery/styling/25.webp',
        alt: 'STYLING — dark editorial portrait',
        width: 853,
        height: 1280,
      },
      {
        type: 'video',
        src: '/media/pony-selected-frame.mp4',
        poster: '/media/pony-selected-frame.jpg',
        alt: '«PONY» PROJECT — video frame',
      },
    ],
    footer: {
      availability: 'AVAILABLE FOR VISUAL PROJECTS & COLLABORATIONS',
      contact: '[ CONTACT ]',
      credit: 'The site was created by',
      socialsLabel: 'Social media',
      backToTop: 'BACK TO TOP ↑',
    },
    gallery: {
      openGallery: 'Open project gallery',
      openMark: 'OPEN',
      photo: 'photo',
      video: 'video',
      of: 'of',
      navigation: 'Gallery navigation',
      previousMedia: 'Previous media',
      nextMedia: 'Next media',
      previous: '← PREV',
      next: 'NEXT →',
      allMedia: 'All project media',
      openMedia: 'Open media',
      close: 'Close gallery',
    },
    caseDetails: {
      title: '[ CREDITS ]',
      roles: {
        models: 'MODELS',
        mua: 'MUA',
        photo: 'PHOTO',
        photoEdit: 'PHOTO / EDIT',
        designStyle: 'DESIGN / STYLE',
        videographer: 'VIDEOGRAPHY',
        creativeDirector: 'CREATIVE DIRECTOR',
        style: 'STYLE',
        team: 'TEAM',
      },
    },
    theme: {
      legend: 'Color theme',
      pink: 'Pink theme',
      green: 'Green theme',
      purple: 'Purple theme',
    },
  },
};
