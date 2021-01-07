import type { NextApiRequest, NextApiResponse } from 'next';
import { UserMockData } from '../data';

export default function handler(_req: NextApiRequest, res: NextApiResponse): void {
  res.status(200).json(UserMockData);
}
