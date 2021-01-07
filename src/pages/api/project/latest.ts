import type { NextApiRequest, NextApiResponse } from 'next';
import { ProjectMockData } from '../data';

export default function handler(_req: NextApiRequest, res: NextApiResponse): void {
  res.status(200).json(ProjectMockData);
}
