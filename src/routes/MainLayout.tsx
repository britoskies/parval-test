import { Outlet, Link } from 'react-router';

const MainLayout = () => (
  <div>
    <header className="bg-orange-300 text-black p-4">
      <nav className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/create" className="hover:underline">Create New</Link>
      </nav>
    </header>
    <main className="p-4">
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
