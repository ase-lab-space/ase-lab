export interface IArticleProps {
  img: string;
  title: string;
  bodyDigest: string;
  date: string;
  url: string;
}

export const articles: IArticleProps[] = [
  {
    img: '/img/laughing_max.webp',
    title: '〜地方メンバーの声　#1（加藤数麻君 編）〜',
    bodyDigest:
      '元々阿部と今運営にいる本田の三人で、大学一年生に入ってから勉強会をする機会があって、その勉強会の延長というか、同じようなことをしていきたいねという風に思って...',
    date: '2022/04/23',
    url: 'https://note.com/ase_lab_/n/nb899b1739d39',
  },
];
