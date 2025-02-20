import type { NextApiRequest, NextApiResponse } from 'next';

interface Stats {
  holders: string;
  transfers: string;
  marketCap: string;
  totalLiquidity: string;
  liquidityBNB: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Stats>) {
  // Return static stats
  res.status(200).json({
    holders: '586',
    transfers: '12,321',
    marketCap: '472.4K',
    totalLiquidity: '74.81K',
    liquidityBNB: '57.44',
  });
}
