interface Stats {
  holders: string;
  transfers: string;
  marketCap: string;
  totalLiquidity: string;
  liquidityBNB: string;
}

export async function fetchStats(): Promise<Stats> {
  try {
    const response = await fetch('/api/stats');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching stats:', error);
    // Return fallback values if fetch fails
    return {
      holders: '458',
      transfers: '12,321',
      marketCap: '472.4K',
      totalLiquidity: '50.09K',
      liquidityBNB: '38.38',
    };
  }
}
