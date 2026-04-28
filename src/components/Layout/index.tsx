import Navbar from '../Navbar';
import Background from '../Background';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Background />
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
