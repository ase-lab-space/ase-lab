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
      '国際教養大学の2年生の佐藤玲佳です。あまり知られてないかもしれないのですが、国際教養大学って学部が国際教養学部しかないんです。その中で領域が三年次...',
    date: '2022/06/05',
    url: 'https://note.com/ase_lab_/n/nd873fcb66048',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/82287733/rectangle_large_type_2_0ff0e012818c4ca826bbd090d4f2355d.jpeg',
    title: '〜海外メンバーの声　(神田芽生さん編）〜',
    bodyDigest:
      '時差もあって、TELSTARもそうですけど、ASE-Lab.に入った当初は活動時間やどういう形態で行われてるのか分からなくて。リアルタイムで出なきゃいけないと勝手に思い込んでいました...',
    date: '2022/07/09',
    url: 'https://note.com/ase_lab_/n/nb85dc1be333f',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/86050214/rectangle_large_type_2_bd20eea8c3cdf1920ae5fa8034f5e80a.jpeg',
    title: '〜地方メンバーの声　＃３(瀬戸晴登君　編）〜',
    bodyDigest:
      '僕自身モノづくりの中でも宇宙探索、宇宙開発系のロボットを作りたいなと思っていて、宇宙には元々凄い興味があったんですね。今年の春休みにビックサイトで国際宇宙産業展が...',
    date: '2022/09/03',
    url: 'https://note.com/ase_lab_/n/n257e02a41d76',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/88084122/rectangle_large_type_2_6e843800e75f869272214a4b9786cbbc.png?width=2000&height=2000&fit=bounds&quality=85',
    title: '〜地方メンバーの声〜　＃４（安田伊吹君編）〜',
    bodyDigest:
      '小学校二年生の頃に、映画ドラえもんの『新・のび太の宇宙開拓史』という映画をみて、そこから宇宙に対して漠然とした憧れを抱きました。それを機に学校の図書館で宇宙の本を読んでみたり...',
    date: '2022/10/09',
    url: 'https://note.com/ase_lab_/n/n2f0c02416e3e',
  },  
    
];
