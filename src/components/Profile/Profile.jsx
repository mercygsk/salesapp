import React, { useState, useEffect } from 'react';
import * as usersAPI from '../../utilities/users-api';
import styles from './Profile.module.css';

function Profile({ user }) {
  const [profileData, setProfileData] = useState(user);

  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.title}>User Profile</h2>
      {profileData ? (
        <div className={styles.profileInfo}>
          <div>
            <strong>Name:</strong> {profileData.name}
          </div>
          <div>
            <strong>Email:</strong> {profileData.email}
          </div>
        </div>
      ) : (
        <p className={styles.loading}>Loading profile data...</p>
      )}
    </div>
  );
}

export default Profile;
