import React from 'react'
import s from "./Profile.module.css"


const Profile = ({ image, name, tag, location, stats }) => {
	const { followers, views, likes } = stats;

	return (
		<div className={s.container}>
			<div className={s.card}>
				<div className={s.info}>
					<img
						src={image}
						alt="User avatar"
						className={s.image} />
					<p className={s.name}>{name}</p>
					<p>@{tag}</p>
					<p>{location}</p>
				</div>

				<ul className={s.stats}>
					<li>
						<span>Followers</span>
						<span>{followers}</span>
					</li>
					<li>
						<span>Views</span>
						<span>{views}</span>
					</li>
					<li>
						<span>Likes</span>
						<span>{likes}</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Profile
