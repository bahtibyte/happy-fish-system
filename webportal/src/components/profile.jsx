import '../css/profile.css';

function Profile({ avatar, onClick }) {
  return (
    <div className='profile'>
      <button className="profile-button" onClick={onClick}>
        <img src={avatar} alt="Profile Avatar" className="avatar" />
      </button>
    </div>
  );
}

export default Profile;