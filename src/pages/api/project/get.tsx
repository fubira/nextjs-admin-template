import type { NextApiRequest, NextApiResponse } from 'next';
import MockData from '../mock';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  const {
    query: { id },
  } = req;

  const project = MockData.find((d) => d.id === id) || {};

  res.status(200).json(project);
}
