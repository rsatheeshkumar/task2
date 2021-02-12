import axios from "axios";
import React, { useState, useEffect } from "react";

import Card from "../card/index";
import Search from "../search";

const Home = () => {
  const [users, setUsers] = useState([]);
  // const [];

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      setUsers(res.data.data);
    });
  }, []);

  const handleChange = () => {};

  return (
    <div>
      <Search onChange={handleChange} />
      <ul>
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
