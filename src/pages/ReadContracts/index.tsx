import { stringify } from 'viem';
import { useContractReads } from 'wagmi';

export const wagmigotchiContractConfig = {
  address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  abi: [
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'balances',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
  ],
} as const;

export function ReadContracts() {
  const { data, isSuccess, isLoading } = useContractReads({
    contracts: [
      {
        ...wagmigotchiContractConfig,
        functionName: 'balances',
        args: ['0xCEdcBc25632d5D71E5852aC012101b5bfbaa119A'],
      },
    ],
  });

  return (
    <div>
      <div>Data:</div>
      {isLoading && <div>loading...</div>}
      {isSuccess && data?.map((data) => <div key={stringify(data)}>{stringify(data)}</div>)}
    </div>
  );
}

export default ReadContracts;
