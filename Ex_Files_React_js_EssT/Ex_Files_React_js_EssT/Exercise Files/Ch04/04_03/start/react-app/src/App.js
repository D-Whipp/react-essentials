import './App.css';
import { useState, useEffect } from 'react';

function GithubUser({ name, location, url, image }) {
  return (
    <div>
      <img alt="profile avatar" height={150} width={150} src={image} />
      <h1>{name}</h1>
      <p>{location}</p>
      <p>{url}</p>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/D-Whipp`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data)
    return (
      <GithubUser
        name={data.name}
        location={data.location}
        url={data.url}
        image={data.avatar_url}
      />
    );
  return <h1>Data</h1>;
}

export default App;
