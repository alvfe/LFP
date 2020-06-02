import React from "react";
import { useSelector } from "react-redux";
import UsersTableItem from "./UsersTableItem";

const getItems = (users) =>
  users.map(({ id, first_name: firstName, last_name: lastName }) => (
    <UsersTableItem key={`usr_key_${id}`} user={{ id, firstName, lastName }} />
  ));

function UsersTable() {
  const { users } = useSelector((state) => state.users);
  const userItems = getItems(users);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>{userItems}</tbody>
    </table>
  );
}

export default UsersTable;
