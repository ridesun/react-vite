import { useWallet } from '@suiet/wallet-kit';
import { useEffect } from 'react';

function Wallet() {
  const wallet = useWallet();

  useEffect(() => {
    if (!wallet.connected) return;
    console.log('connected wallet name: ', wallet.name);
    console.log('account address: ', wallet.account?.address);
    console.log('account publicKey: ', wallet.account?.publicKey);
  }, [wallet.connected]);

  return (
    <>
      <div className="overflow-x-auto pt-10">
        <table className="table">
          <tbody>
            <tr>
              <th>1</th>
              <td>{wallet.name}</td>
              <td>{wallet.account?.address}</td>
              <td>{wallet.account?.publicKey}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Wallet;
