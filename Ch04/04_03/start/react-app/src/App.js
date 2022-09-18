import './App.css';
import { Link, Outlet } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h2>About Us</h2>
      <Outlet />
    </div>
  );
}

export function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  )
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </nav>
      <h2>Contact Us</h2>
    </div>
  );
}

export function App() {
  return <Home />;
}
