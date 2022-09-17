import './App.css';
import { useState, useEffect } from 'react';

function GithubUser({ name, location, url, image }) {
  return (
    <div>
      <img
        alt="profile avatar"
        height={150}
        width={150}
        src={image}
      />
      <h1>{name}</h1>
      <p>{location}</p>
      <p>{url}</p>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/D-Whipp`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;
  return (
    <GithubUser
      name={data.name}
      location={data.location}
      url={data.url}
      image={data.avatar_url}
    />
  );
}

export default App;
