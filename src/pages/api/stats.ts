import type { NextApiRequest, NextApiResponse } from 'next';

interface Stats {
  holders: string;
  transfers: string;
  marketCap: string;
  totalLiquidity: string;
  liquidityBNB: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Stats>) {
  try {
    // Return static data from the images
    res.status(200).json({
      holders: '586',
      transfers: '12,321',
      marketCap: '394.1K',
      totalLiquidity: '74.81K',
      liquidityBNB: '57.44',
    });
  } catch (error) {
    console.error('Error:', error);
    // Return same values as fallback
    res.status(200).json({
      holders: '586',
      transfers: '12,321',
      marketCap: '394.1K',
      totalLiquidity: '74.81K',
      liquidityBNB: '57.44',
    });
  }
}
