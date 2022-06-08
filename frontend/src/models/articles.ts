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
  {
    img: 'https://assets.st-note.com/production/uploads/images/80067536/rectangle_large_type_2_fe2fcccac357a2fbe53ca3aa8183e129.jpeg',
    title: '〜地方メンバーの声　#2（佐藤玲佳さん　編）〜',
    bodyDigest:
      '国際教養大学の2年生の佐藤玲佳です。あまり知られてないかもしれないのですが、国際教養大学って学部が国際教養学部しかないんです。その中で領域が三年時...',
    date: '2022/06/05',
    url: 'https://note.com/ase_lab_/n/nd873fcb66048',
  },
];
