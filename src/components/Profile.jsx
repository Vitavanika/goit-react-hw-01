import styles from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.profileUser}>
        <img className={styles.userImage} src={image} alt="User avatar" />
        <p className={styles.userName}>{name}</p>
        <p className={styles.userTag}>@{tag}</p>
        <p className={styles.userLocation}>{location}</p>
      </div>

      <ul className={styles.profileStats}>
        <li className={styles.statsItem}>
          <span className={styles.statsTitle}>Followers</span>
          <span className={styles.statsQuantity}>{stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.statsTitle}>Views</span>
          <span className={styles.statsQuantity}>{stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.statsTitle}>Likes</span>
          <span className={styles.statsQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
