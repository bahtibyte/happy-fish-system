import Clock from "./clock"
import '../css/heading.css'
import Profile from "./profile"
import avatarImage from '../assets/pfp.png'
import Toggle from "./toggle";

function Heading({ onTabClick }) {

  const handleProfileClick = () => {
    // Handle profile button click event
  };

  return (
    <div>
      <h1>
        Happy Fish - QC Bio Lab
      </h1>
      <Clock />
      <Profile avatar={avatarImage} onClick={handleProfileClick} />
      <Toggle onTabClick={onTabClick} />
    </div>
  )
}

export default Heading;