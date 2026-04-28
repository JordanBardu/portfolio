import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import Layout from './components/Layout';
import { ViewportProvider } from './hooks/useViewport.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ViewportProvider>
        <Layout>
          <App />
        </Layout>
      </ViewportProvider>
    </BrowserRouter>
  </StrictMode>,
);
