import { Button } from 'antd';
import { useNetwork, useSwitchNetwork } from 'wagmi';

export default function NetworkSwitcher() {
  const { chain } = useNetwork();
  const { chains, error, pendingChainId, switchNetwork, status } = useSwitchNetwork({
    throwForSwitchChainNotSupported: true,
  });
  console.log(chain, chains);

  return (
    <div>
      {chain && <div>Using {chain.name}</div>}

      {chains.map((x) => (
        <Button disabled={!switchNetwork || x.id === chain?.id} key={x.id} onClick={() => switchNetwork?.(x.id)}>
          Switch to {x.name}
          {status === 'loading' && x.id === pendingChainId && '…'}
        </Button>
      ))}

      <div>{error && (error?.message ?? 'Failed to switch')}</div>
    </div>
  );
}
