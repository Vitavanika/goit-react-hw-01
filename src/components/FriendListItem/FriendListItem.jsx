import styles from './FriendListItem.module.css';

export default function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;
  return (
    <div className={styles.friendItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.friendName}>{name}</p>
      <p className={styles.onlineStatus}>
        {isOnline ? (
          <span className={styles.isOnline}>Online</span>
        ) : (
          <span className={styles.isOffline}>Offline</span>
        )}
      </p>
    </div>
  );
}
