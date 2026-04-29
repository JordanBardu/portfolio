import Navbar from '../Navbar';
import Background from '../Background';
import OutlineTitle from '../OutlineTitle';
import { useLocation } from 'react-router';

const ROUTE_TITLES: Record<string, string> = {
  '/course': 'Parcours',
  '/projects': 'Projets',
  '/skills': 'Compétences',
};

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const title = ROUTE_TITLES[location.pathname];

  return (
    <>
      <Background />
      <Navbar />
      {title && <OutlineTitle title={title} size={'medium'} />}
      <main>{children}</main>
    </>
  );
}

export default Layout;
