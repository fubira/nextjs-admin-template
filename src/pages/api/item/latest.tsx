import type { NextApiRequest, NextApiResponse } from 'next';

const data = [
  {
    id: '0000000001',
    title: 'ファンド1',
    image:
      'https://images.unsplash.com/photo-1519335553051-96f1218cd5fa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480',
    description: '新世代のスマートウォッチ',
    type: 'all-in',
    expiredAt: 0,
    status: {
      target: 12345678,
      prices: 1000000,
      favorite: 100,
      progress: 10,
    },
  },
  {
    id: '0000000002',
    title: 'ファンド2',
    image:
      'https://images.unsplash.com/photo-1521120413309-42e7eada0334?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480',
    description: 'まったく新しいスマートフォンスタンド',
    type: 'all-in',
    expiredAt: 0,
    status: {
      target: 12345678,
      prices: 5550000,
      favorite: 100,
      progress: 50,
    },
  },
  {
    id: '0000000003',
    title: 'ファンド3',
    image:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480',
    description: '世界一軽いタブレット',
    type: 'all-in',
    expiredAt: 0,
    status: {
      favorite: 100,
      progress: 160,
      target: 12345678,
      prices: 12345678,
    },
  },
  {
    id: '0000000004',
    title: 'ファンド4',
    image:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixlib=rb-1.2.1&q=80&w=480',
    description: '世界一軽いタブレット',
    type: 'all-in',
    expiredAt: 0,
    status: {
      favorite: 100,
      progress: 188,
      target: 12345678,
      prices: 24444444,
    },
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  res.status(200).json(data);
}
