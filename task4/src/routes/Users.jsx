import React from "react";
import { useLoaderData, Link } from "react-router-dom";

import Api from "../utils/Api";

export const loader = async () => {
  const users = await Api.getUsers()
  return { users };
};

export default function Users() {
  const { users } = useLoaderData();
  return (
    <div>
      {users.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <div>{user.name}</div>
        </Link>
      ))}
    </div>
  );
}
