import { useState } from "react";
import "./styles.css";
import "./Query_jest.jpg";
// import ProductList from "./components/ProductList";
import UserForm from "./UserForm";
import UserList from "./UserList";

export default function App() {
  const [users, setUser] = useState([]);
  const onUserAdd = (user) => {
    setUser([...users, user]);
  };
  return (
    <div className="container mx-auto">
      {/* <ProductList /> */}
      <UserForm onUserAdd={onUserAdd} />
      <UserList users={users} />
    </div>
  );
}
