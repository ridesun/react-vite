import App from './App.tsx';
import './index.css';
import { WalletProvider } from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';
import ReactDOM from 'react-dom/client';
import './custom.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <WalletProvider>
    <App />
  </WalletProvider>
);
