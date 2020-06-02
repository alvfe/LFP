import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux_store";
import UsersTable from "./UsersTable";

const getChild = ({ users, loading, error }) => {
  if (loading) {
    return <p className="font-weight-bold">Cargando, por favor espere...</p>;
  }
  if (error) {
    return <h2>Ha ocurrido un error, vuelve a intentarlo.</h2>;
  }
  if (users) {
    return <UsersTable />;
  }

  return "";
};

function Users() {
  const { loading, error, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <h2>Listado de usuarios</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">{getChild({ users, loading, error })}</div>
        </div>
      </div>
    </div>
  );
}

export default Users;
