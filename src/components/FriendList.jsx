import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";
export default function FriendList({ items }) {
  return (
    <>
      <ul className={css.list}>
        {items.map((friend) => (
          <li className={css.list_item} key={friend.id}>
            <FriendListItem friendItem={friend} />
          </li>
        ))}
      </ul>
    </>
  );
}
