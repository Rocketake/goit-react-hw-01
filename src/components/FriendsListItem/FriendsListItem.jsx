import React from 'react'
import s from "./FriendsListItem.module.css"
import clsx from 'clsx'

const FriendsListItem = ({ avatar, name, isOnline }) => {
	return (
		<>
			<img className={s.image} src={avatar} alt="Avatar" width="48" />
			<p className={s.name}>{name}</p>
			{isOnline ? <p className={s.online}>Online</p> : <p className={s.offline}>Offline</p>}
		</>
	)
}

export default FriendsListItem