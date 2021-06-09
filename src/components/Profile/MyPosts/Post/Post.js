import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
              <div className={styles.item}>
                <img src='https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg'/>
                {props.message}
                <div>
                  <span>like {props.countLikes}</span>
                </div>
              </div>
    )
}

export default Post;