const MockData = [
  {
    id: '1',
    title: 'プロジェクトタイトル：新世代のスマートウォッチ',
    company: {
      companyId: '000',
      image: '',
      name: '株式会社ガジェットカンパニージャパン',
      location: '日本',
      description: '主にハードウエアやソフトウエアを開発・販売している会社です。的な説明文',
      social: {
        tiwtter: '',
        facebook: '',
        instagram: '',
        github: '',
      },
    },
    topImage:
      'https://images.unsplash.com/photo-1519335553051-96f1218cd5fa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480',
    images: [
      'https://images.unsplash.com/photo-1519335553051-96f1218cd5fa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480&h=320',
      'https://images.unsplash.com/photo-1514218842929-d6b0d653a623?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&h=320&q=80',
      'https://images.unsplash.com/photo-1497565998880-bd009060dcd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=480&h=320&q=80',
    ],
    description:
      'プロジェクト説明文：まだ誰も見たことのない新世代のスマートウォッチです。みたいなある程度長い文章を入れられる領域として用意したエリアです',
    type: 'all-in',
    createdAt: 0,
    expiredAt: 1639214083000,
    new: true,
    products: [
      {
        id: '1-1',
        title: 'プロダクト1',
        description: 'プロダクト1の説明',
        image:
          'https://images.unsplash.com/photo-1519335553051-96f1218cd5fa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480',
        price: 10000,
        tax: 1000,
        estimatedArrivalDate: '2021年末',
        stockProducts: 300,
        soldProducts: 110,
      },
    ],
    details: [
      {
        image:
          'https://images.unsplash.com/photo-1486649961855-75838619c131?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        html:
          '画像と説明文を記述するための領域です。<b>HTMLも使用可能。<br></b><h3>いろはにほへとちりぬるを わかよたれそつねならむ</h3>',
      },
      {
        image: '',
        html: '詳細説明２',
      },
      {
        image: '',
        html: '詳細説明３',
      },
      {
        image: '',
        html: '詳細説明４',
      },
      {
        image: '',
        html: '詳細説明５',
      },
    ],
    status: {
      totalPrice: 12345678,
      targetPrice: 1000000,
      supporter: 100,
      favorite: 100,
      progress: 10,
    },
  },
  {
    id: '2',
    title: 'プロジェクト2',
    company: {
      companyId: '001',
      image: '',
      name: '株式会社かきくけこ',
      location: '日本',
      description: '会社説明文です。',
      social: {
        tiwtter: '',
        facebook: '',
        instagram: '',
        github: '',
      },
    },
    topImage:
      'https://images.unsplash.com/photo-1521120413309-42e7eada0334?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480',
    images: [
      'https://images.unsplash.com/photo-1521120413309-42e7eada0334?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480&h=320',
    ],
    description: 'まったく新しいスマートフォンスタンド',
    type: 'all-in',
    createdAt: 0,
    expiredAt: 1612105200000,
    new: true,
    status: {
      targetPrice: 1623402883000,
      totalPrice: 5550000,
      supporter: 188,
      favorite: 100,
      progress: 50,
    },
    details: [
      {
        image: '',
        html: '詳細説明１',
      },
      {
        image: '',
        html: '詳細説明２',
      },
      {
        image: '',
        html: '詳細説明３',
      },
      {
        image: '',
        html: '詳細説明４',
      },
      {
        image: '',
        html: '詳細説明５',
      },
    ],
  },
  {
    id: '3',
    title: 'プロジェクト3',
    company: {
      companyId: '001',
      image: '',
      name: '株式会社さしすせそ',
      location: '日本',
      description: '会社説明文です。',
      social: {
        tiwtter: '',
        facebook: '',
        instagram: '',
        github: '',
      },
    },
    image:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480',
    images: [
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480&h=320',
    ],
    description: '世界一軽いタブレット',
    type: 'all-in',
    createdAt: 0,
    expiredAt: 1609426800000,
    status: {
      supporter: 255,
      favorite: 100,
      progress: 99,
      targetPrice: 12345678,
      totalPrice: 12345678,
    },
    details: [
      {
        image: '',
        html: '詳細説明１',
      },
      {
        image: '',
        html: '詳細説明２',
      },
      {
        image: '',
        html: '詳細説明３',
      },
      {
        image: '',
        html: '詳細説明４',
      },
      {
        image: '',
        html: '詳細説明５',
      },
    ],
  },
  {
    id: '4',
    title: 'プロジェクト4',
    company: {
      companyId: '001',
      image: '',
      name: '株式会社たちつてと',
      location: '日本',
      description: '会社説明文です。',
      social: {
        tiwtter: '',
        facebook: '',
        instagram: '',
        github: '',
      },
      details: [
        {
          image: '',
          html: '詳細説明１',
        },
        {
          image: '',
          html: '詳細説明２',
        },
        {
          image: '',
          html: '詳細説明３',
        },
        {
          image: '',
          html: '詳細説明４',
        },
        {
          image: '',
          html: '詳細説明５',
        },
      ],
    },
    image:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480',
    images: [
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480&h=320',
    ],
    description:
      '長い説明文の場合に一体どういう表示になるのかを試してみるテスト１２３４５６７８９０世界一軽いタブレット',
    type: 'all-in',
    createdAt: 0,
    expiredAt: 1608426800000,
    status: {
      supporter: 12245,
      favorite: 100,
      progress: 188,
      targetPrice: 12345678,
      totalPrice: 24444444,
    },
    details: [
      {
        image: '',
        html: '詳細説明１',
      },
      {
        image: '',
        html: '詳細説明２',
      },
      {
        image: '',
        html: '詳細説明３',
      },
      {
        image: '',
        html: '詳細説明４',
      },
      {
        image: '',
        html: '詳細説明５',
      },
    ],
  },
];

export default MockData;
