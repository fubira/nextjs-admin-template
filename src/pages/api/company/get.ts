import type { NextApiRequest, NextApiResponse } from 'next';
import { CompanyMockData } from '../data';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  const {
    query: { id },
  } = req;

  const company = CompanyMockData.find((d) => d.id === id) || {};

  res.status(200).json(company);
}
