import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// this manifest is used temporarily for development purposes
// const manifestUrl = 'https://Avtoritetik.github.io/my_first_contract_frontend/tonconnect-manifest.json';
const manifestUrl = "https://github.com/Avtoritetik/my_first_contract_frontend/blob/master/public/tonconnect-manifest.json"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>,
)