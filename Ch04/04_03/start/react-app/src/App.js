import './App.css';

function Home() {
  return (
    <div>
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h2>About Us</h2>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
    </div>
  );
}

export function App() {
  return <Home />;
}
