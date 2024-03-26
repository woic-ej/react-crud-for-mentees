import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Common/Loader";
import { USER_API_URL } from "../../const";
const ShowUser = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteUser = async (id) => {
    // fetch delete api(endpoint:USER_API_URL) & update state
    // handle loading state, error
  };

  useEffect(() => {
    const handleGetUsers = async () => {
      // fetch users(endpoint:USER_API_URL) api & update state
      // handle error
    };
    handleGetUsers();
  }, []);

  if (users.length === 0) return <h1>no user found</h1>;

  return (
    <div className="mt-5">
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(({ id, name, email, phone }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>
                <Link to={`/edit-user/${id}`}>
                  <i className="fa fa-pencil" aria-hidden="true" />
                </Link>
                <Link to={`/user/${id}`}>
                  <i className="fa fa-eye" aria-hidden="true" />
                </Link>

                <i
                  className="fa fa-trash-o"
                  aria-hidden="true"
                  onClick={() => handleDeleteUser(id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowUser;
