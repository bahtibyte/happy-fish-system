import '../css/heading.css'
import Profile from "./profile"
import avatarImage from '../assets/pfp.png'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'

function Heading() {

  const handleProfileClick = async () => {
    try {
      await signOut(auth);
      // Logout successful, you can redirect or update state here
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <h1>
        Happy Fish - QC Bio Lab
      </h1>
      <Profile avatar={avatarImage} onClick={handleProfileClick} />
    </div>
  )
}

export default Heading;