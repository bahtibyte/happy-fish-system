import { useState, useEffect } from 'react';
import { auth, signOut, db, doc, onDocUpdate } from './firebase'

function HappyFish() {
  const [count, setCount] = useState(0);
  const [config, setConfig] = useState({});

  useEffect(() => {
    const ref = doc(db, 'config', 'latest');
    const unsubscribe = onDocUpdate(ref, (doc) => {
      if (doc.exists()) {
        setConfig(doc.data());
      }
    });

    return () => unsubscribe();
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleSignOut = async () => {
    await signOut(auth);
  }

  return (
    <div>
      <p>count is {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleSignOut}>Sign Out</button>
      <div>
        <h2>Firestore Real-time Update</h2>
        {config && (
          <pre>{JSON.stringify(config, null, 2)}</pre>
        )}
      </div>
    </div>
  )
}

export default HappyFish;
