import type { NextApiRequest, NextApiResponse } from 'next';
import MockData from '../mock';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  res.status(200).json(MockData);
}
