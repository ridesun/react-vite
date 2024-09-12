import { ConnectButton } from '@suiet/wallet-kit';
import Wallet from './Wallet.tsx';
import { useWallet, useAccountBalance, formatSUI, } from '@suiet/wallet-kit';
import { truncateString } from './utils/tool';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { useRouteError } from "react-router-dom";
import { Publish, Upload, Vote } from './Tab.tsx';
import { useState } from 'react';

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={() => navigate(-1)} className='btn'>Back</button>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Bottom />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "upload",
        element: <Upload />
      },
      {
        path: "vote",
        element: <Vote />
      },
      {
        path: "publish",
        element: <Publish />
      },
    ]
  },
]);

function Bottom() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<'left' | 'center' | 'right' | 'home'>('home');
  return (
    <div>
      <div className="card-actions flex justify-end border-solid border-2 rounded-full border-green-400 -space-x-1">
        <button className={`flex-1 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 relative z-10 ${selected === 'left' ? 'text-white bg-green-700' : 'text-gray-700'
          }`} onClick={() => { setSelected('left'); navigate("/upload"); }}>Upload</button>
        <button className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 relative z-10 ${selected === 'center' ? 'text-white bg-green-700' : 'text-gray-700'
          }`} onClick={() => { setSelected('center'); navigate("/vote"); }}>Vote</button>
        <button className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 relative z-10 ${selected === 'right' ? 'text-white bg-green-700' : 'text-gray-700'
          }`} onClick={() => { setSelected('right'); navigate("/publish"); }}>Publish Request </button>
      </div>
      <Outlet />
    </div>
  )
}

function App() {
  const wallet = useWallet();
  const { balance } = useAccountBalance();
  return (
    <>
      <div className="bg-black h-dvh w-full text-white font-sans subpixel-antialiased">
        <nav className="bg-dark shadow-lg">
          <div className="max-w-full mx-auto px-4">
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
              <div className="hidden md:flex items-center space-x-1 ">
                {wallet.connected ? (
                  <div>
                    <div className="badge badge-lg badge-ghost">{wallet.chain?.name}</div>
                    <div className="dropdown dropdown-hover dropdown-end">
                      <div tabIndex={0} role="button" className="btn m-1">{wallet?.name}</div>
                      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-black">
                        <li><a>{truncateString(wallet?.address)}</a></li>
                        <li><a>{" "}{formatSUI(balance ?? 0, { withAbbr: false, })}{" "}SUI</a></li>
                        <li><div tabIndex={0} role="button" onClick={wallet?.disconnect}>Disconnect</div></li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <ConnectButton className="@apply wkit-button">
                    <div className="flex flex-row items-center">
                      <i className="icon-[solar--wallet-broken] text-xl" />
                      Connect
                    </div>
                  </ConnectButton>
                )}
              </div>
            </div>
          </div>
        </nav>
        <div className=' flex items-center justify-center'>
          <div className="card bg-[#181a1e] w-96 shadow-xl text-white transition-all duration-300 ease-in-out">
            <div className="card-body">
              <Wallet />
              <RouterProvider router={router}></RouterProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
