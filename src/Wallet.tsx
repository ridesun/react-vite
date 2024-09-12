import { useWallet } from '@suiet/wallet-kit';
import { truncateString } from './utils/tool';
function Wallet() {
  const wallet = useWallet();
  return (
    <>
      <div>
        <h2 className="card-title">Account</h2>
        <p>{truncateString(wallet.account?.address)}</p>
      </div>
    </>
  );
}
export default Wallet;
