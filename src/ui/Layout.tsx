import { Link, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="app">
      <header className="app-header">
        <Link to="/" className="brand">Advanced Diploma · Personal Training Science & Coaching</Link>
        <nav>
          <Link to="/catalog">Catalog</Link>
          {' '}
          <Link to="/settings">Settings</Link>
        </nav>
      </header>
      <main><Outlet /></main>
    </div>
  );
}
