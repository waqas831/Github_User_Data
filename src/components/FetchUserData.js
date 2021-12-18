import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CreateUserDesign from "./CreateUserDesign";

const FetchUserData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const myalldata = async () => {
    const data = await axios.get("https://api.github.com/users");
    setUsers(data.data);
    setLoading(false);
  };
  useEffect(() => {
    myalldata();
  }, []);
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          fontSize: 35,
          color: "black",
          fontWeight: "bold",
          paddingTop: "2%",
          paddingBottom: "2%",
        }}
      >
        Github Users Data
      </h2>
      <CreateUserDesign user={users} loading={loading} />
    </div>
  );
};

export default FetchUserData;
