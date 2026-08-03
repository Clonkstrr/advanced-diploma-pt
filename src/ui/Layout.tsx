import { Link, NavLink, Outlet } from 'react-router-dom';
import { UpdateBanner } from './UpdateBanner';

const linkClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : undefined);

export function Layout() {
  return (
    <div className="app">
      <header className="app-header">
        <Link to="/" className="brand">Advanced Diploma · Personal Training Science &amp; Coaching</Link>
        <nav aria-label="Main">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/catalog" className={linkClass}>Catalog</NavLink>
          <NavLink to="/review" className={linkClass}>Review</NavLink>
          <NavLink to="/settings" className={linkClass}>Settings</NavLink>
        </nav>
      </header>
      <UpdateBanner />
      <main><Outlet /></main>
    </div>
  );
}
