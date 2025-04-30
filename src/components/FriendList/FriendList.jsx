import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendsList}>
      {friends.map(friend => {
        return (
          <li className={styles.friendsItem} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}
