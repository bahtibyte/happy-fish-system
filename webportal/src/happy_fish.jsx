import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase'

function HappyFish() {
  const [count, setCount] = useState(0);

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
    </div>
  )
}

export default HappyFish;
