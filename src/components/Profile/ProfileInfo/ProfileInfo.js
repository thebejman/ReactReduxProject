import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={styles.bio}>
            <img className={styles.avatar} src='https://www.w3schools.com/howto/img_avatar.png' />
            <div>
              <h1>Zulya</h1>
              <p>Hello,world!</p>
            </div>
        </div>
    )
}

export default ProfileInfo;