import SocialProfileList from './components/SocialProfileList';
import users from './components/social-profile/user.json';
import FriendList from './components/FriendList';
import friends from './components/friend/friends.json';
import transactions from './components/transaction-history/transactions.json';
import TransactionHistory from './components/TransactionHistory';
import Statistics from './components/Statistics';
import statisticalData from './components/statistics/statistical-data.json';
export default function App() {
  return (
    <div>
      <span>Задача 1</span>
      <SocialProfileList user={users} />
      <span>Задача 2</span>
      <FriendList friends={friends} />
      <span>Задача 3</span>
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <span>Задача 4</span>
      <TransactionHistory items={transactions} />
    </div>
  );
}
