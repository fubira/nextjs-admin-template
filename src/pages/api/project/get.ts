import type { NextApiRequest, NextApiResponse } from 'next';
import { ProjectMockData } from '../data';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  const {
    query: { id },
  } = req;

  const project = ProjectMockData.find((d) => d.id === id) || {};

  res.status(200).json(project);
}
