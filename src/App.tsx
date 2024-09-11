import { ConnectButton } from '@suiet/wallet-kit';
import Wallet from './Wallet.tsx';
import { useWallet } from '@suiet/wallet-kit';

function App() {
  const wallet = useWallet();
  return (
    <>
      <div className="bg-[#191b1f] h-dvh w-full text-white font-sans subpixel-antialiased">
        <nav className="bg-dark shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-5">
                <div>
                  <a href="#" className="flex items-center py-4 px-2">
                    <span className="font-semibold text-gray-500 text-lg">
                      {'Logo'}
                    </span>
                  </a>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-white transition duration-300"
                >
                  {'Service'}
                </a>
                <a
                  href="#"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-white transition duration-300"
                >
                  {'Connect'}
                </a>
                {/* {wallet.connected ? (
                  <div className="stat">
                    <div className="stat-title text-white">{wallet?.name}</div>
                  </div>
                ) : (
                  <ConnectButton />
                )} */}
                <ConnectButton className="@apply wkit-button">
                  <div className="flex flex-row items-center">
                    <i className="icon-[solar--wallet-broken] text-xl" />
                    Connect
                  </div>
                </ConnectButton>
              </div>
            </div>
          </div>
        </nav>
        <Wallet />
      </div>
    </>
  );
}

export default App;
