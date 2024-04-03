import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'
import Login from './components/login'
import HappyFish from './happy_fish'

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setUser(user)
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
