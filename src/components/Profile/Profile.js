import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
      <div>
        <div className={styles.wallpaper}>
          <img src='https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300' />
        </div>
        
        <ProfileInfo />
        <MyPostsContainer store={props.store} />
      </div>
    )
}

export default Profile;