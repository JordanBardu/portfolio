import './App.css';
import AppRoutes from './AppRoutes';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <Toaster richColors position="bottom-left" />
      <AppRoutes />;
    </>
  );
}

export default App;
