import React from "react";
import Profile from "./Social-profile/Social-profile";
import user from "../user.json";
import Statistics from "./Statistics/Statistics";
import data from "../data.json";
import FriendsList from "./Friends-list/Friends-list";
import friends from "../friends.json";
import TransactionHistory from './Transaction-history/Transaction-history';
import transactions from '../transactions.json';

function App() {
  return (
    <div className="App">
      <Profile user={user} />

      <Statistics title="Upload stats" stats={data} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />

    </div>
  );
}

export default App;
