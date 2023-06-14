import { Input } from 'antd';
import * as React from 'react';
import { recoverMessageAddress } from 'viem';
import type { Address } from 'wagmi';
import { useSignMessage } from 'wagmi';

const SignMessage = () => {
  const [recoveredAddress, setRecoveredAddress] = React.useState<Address>();
  const { data: signature, variables, error, isLoading, signMessage } = useSignMessage();
  console.log(isLoading);

  React.useEffect(() => {
    (async () => {
      if (variables?.message && signature) {
        const recoveredAddress = await recoverMessageAddress({
          message: variables?.message,
          signature,
        });
        setRecoveredAddress(recoveredAddress);
      }
    })();
  }, [signature, variables?.message]);

  return (
    <div className="h-50">
      <form>
        <input name="message" type="text" required />
        <button type="button" disabled={isLoading} onClick={() => signMessage({ message: '109052320215969385' })}>
          {isLoading ? 'Check Wallet' : 'Sign Message'}
        </button>
      </form>

      {signature && (
        <div>
          <div>signature {signature}</div>
          <div>recovered address {recoveredAddress}</div>
        </div>
      )}

      <div>{error && (error?.message ?? 'Failed to sign message')}</div>
    </div>
  );
};

export default SignMessage;
