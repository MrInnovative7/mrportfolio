import React from 'react';
import profile from '../assets/profile.jpg';
import './ProfilePage.css';
import About from './About';

function ProfilePage() {
  return (
    <div className="profile-page">

      <div className="profile-container">
        <img src={profile} alt="profile" className="profile-image" />
      </div>

      {/* Same About section */}
      <About />

    </div>
  );
}

export default ProfilePage;