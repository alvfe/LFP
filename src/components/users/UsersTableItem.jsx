import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UsersTableItem({ user }) {
  const { firstName, lastName, id } = user;
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>
        <Link to={`/users/${id}`} role="button" className="btn btn-primary">
          <span>Ver más</span>
        </Link>
      </td>
    </tr>
  );
}

UsersTableItem.propTypes = {
  user: PropTypes.exact({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default UsersTableItem;
