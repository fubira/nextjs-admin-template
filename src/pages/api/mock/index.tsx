const MockData = [
  {
    id: '1',
    title: '新世代のスマートウォッチ',
    company: '株式会社あいうえお',
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
    status: {
      totalPrice: 12345678,
      soldPrice: 1000000,
      supporter: 100,
      favorite: 100,
      // progress: 10,
    },
  },
  {
    id: '2',
    title: 'ファンド2',
    company: '株式会社かきくけこ',
    image:
      'https://images.unsplash.com/photo-1521120413309-42e7eada0334?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480',
    description: 'まったく新しいスマートフォンスタンド',
    type: 'all-in',
    createdAt: 0,
    expiredAt: 1612105200000,
    new: true,
    status: {
      target: 1623402883000,
      prices: 5550000,
      favorite: 100,
      progress: 50,
    },
  },
  {
    id: '3',
    title: 'ファンド3',
    company: '株式会社さしすせそ',
    image:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480',
    description: '世界一軽いタブレット',
    type: 'all-in',
    createdAt: 0,
    expiredAt: 1609426800000,
    status: {
      favorite: 100,
      progress: 99,
      target: 12345678,
      prices: 12345678,
    },
  },
  {
    id: '4',
    title: 'ファンド4',
    company: '株式会社たちつてと',
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
      target: 12345678,
      prices: 24444444,
    },
  },
];

export default MockData;
