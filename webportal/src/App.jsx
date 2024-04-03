import { useState, useEffect } from 'react';
import { auth, onAuthChange } from './firebase'
import Login from './components/login'
import HappyFish from './happyfish'

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthChange(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  // Display empty page until user authentication is obtained.
  if (loading) {
    return <div />;
  }

  // Display dashboard if valid user auth exists, otherwise show login.
  return user ? <HappyFish /> : <Login />;
}

export default App;
