const MockData = [
  {
    id: '1',
    title: '新世代のスマートウォッチ',
    company: {
      companyId: '000',
      image: '',
      name: '株式会社あいうえお',
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
      'https://images.unsplash.com/photo-1519335553051-96f1218cd5fa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480',
    description: '新世代のスマートウォッチ',
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
    status: {
      totalPrice: 12345678,
      targetPrice: 1000000,
      supporter: 100,
      favorite: 100,
      // progress: 10,
    },
  },
  {
    id: '2',
    title: 'ファンド2',
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
    image:
      'https://images.unsplash.com/photo-1521120413309-42e7eada0334?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480',
    description: 'まったく新しいスマートフォンスタンド',
    type: 'all-in',
    createdAt: 0,
    expiredAt: 1612105200000,
    new: true,
    status: {
      targetPrice: 1623402883000,
      totalPrice: 5550000,
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
    title: 'ファンド3',
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
    description: '世界一軽いタブレット',
    type: 'all-in',
    createdAt: 0,
    expiredAt: 1609426800000,
    status: {
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
    title: 'ファンド4',
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
    description:
      '長い説明文の場合に一体どういう表示になるのかを試してみるテスト１２３４５６７８９０世界一軽いタブレット',
    type: 'all-in',
    createdAt: 0,
    expiredAt: 1608426800000,
    status: {
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
