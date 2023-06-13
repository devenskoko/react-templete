export type SupportedChain = 1319 | 1320;
const constants = {
  ZERO_ADDRESS: '0x0000000000000000000000000000000000000000',
  INIT_CHAIN: 1319, // 1319主网
  SUPPORTED_CHAINS: [1319, 1320],
  // BASE_URL: baseURL,
  CHAIN_CACHE_KEY: 'ACCESS_CHAIN',
  CHAIN_INFO: {
    '1320': {
      chainName: 'AITD TEST',
      chainNameShort: 'AITD',
      rpcUrl: ['http://http-testnet.aitd.io'],
      blockExplorerUrs: [''],
      nativeCurrency: {
        name: 'Aitd Coin',
        symbol: 'AITD',
        decimals: 18,
      },
    },
    '1319': {
      chainId: '1319',
      chainName: 'AITD MAIN',
      chainNameShort: 'AITD',
      rpcUrl: ['https://walletrpc.aitd.io', 'https://node.aitd.io'],
      blockExplorerUrs: [''],
      nativeCurrency: {
        name: 'Aitd Coin',
        symbol: 'AITD',
        decimals: 6,
      },
    },
  },
};

export const chins = {
  1320: 'http://http-testnet.aitd.io', //aitd测试链
  1319: 'https://walletrpc.aitd.io', // aitd主链
};

export default { ...constants };
