import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.profile_container}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>
      <ul className={css.social_stats}>
        <li className={css.social_stats_item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.social_stats_item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.social_stats_item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
