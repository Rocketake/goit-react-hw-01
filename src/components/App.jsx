import React from 'react'
import userData from "../assets/userData.json"
import friends from "../assets/friends.json"
import transactions from "../assets/transactions.json"
import Profile from "./Profile/Profile"
import FriendsList from './FriendsList/FriendsList'
import TransactionsHistory from './TransactionsHistory/TransactionsHistory'
import "modern-normalize"


const App = () => {
  return (<>
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats} />
    <FriendsList friends={friends} />
    <TransactionsHistory items={transactions} />
  </>
  )
}

export default App
