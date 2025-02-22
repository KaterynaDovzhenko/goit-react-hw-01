import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({
  friendItem: { avatar, name, isOnline },
}) {
  const statusClsx = clsx(css.text, isOnline ? css.online : css.offline);
  return (
    <div>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClsx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
