import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./User.css";
import { USER_API_URL } from "../../const";
const EditUser = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const handleGetUser = () => {
      axios
        .get(USER_API_URL.concat("/") + id)
        .then((item) => {
          setUser(item.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    handleGetUser();
  }, [id]);

  return (
    <div className="user mt-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default EditUser;
