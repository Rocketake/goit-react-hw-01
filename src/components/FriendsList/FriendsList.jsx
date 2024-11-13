import React from 'react'
import FriendsListItem from '../FriendsListItem/FriendsListItem'
import s from "./FriendsList.module.css"

const FriendsList = ({ friends }) => {

	return (
		<ul className={s.list}>
			{friends.map(({ id, avatar, name, isOnline }) => {
				return <li key={id} className={s.item}>
					<FriendsListItem avatar={avatar} name={name} isOnline={isOnline} />
				</li>
			})}
		</ul>
	)
}

export default FriendsList