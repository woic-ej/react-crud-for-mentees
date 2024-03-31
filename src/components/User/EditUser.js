import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { USER_API_URL } from "../../const";
import Loader from "../Common/Loader";
import "./User.css";

const EditUser = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    event.preventDefault();
    // update user state using input event
    const inputName = event.target.name;
    const inputData = event.target.value;
    setUser({
      ...user,
      [inputName]: inputData,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // fetch put(endpoint:USER_API_URL) api
    // handle loading state, error
    // navigate to '/show-user' page when api call success
    try {
      await fetch(`${USER_API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((response) => {
        if (!response.ok) throw new Error("예외가 발생했습니다.");
        navigate("../show-user");
      });
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const handleGetUser = async () => {
      // fetch user api(user api endpoint : USER_API_URL.concat("/") + id) & update state
      // handle error
      try {
        await fetch(`${USER_API_URL}/${id}`)
          .then((response) => {
            if (!response.ok) throw new Error("예외가 발생했습니다.");
            return response.json();
          })
          .then((data) => {
            setUser(data);
          });
      } catch (error) {
        setError(error);
      }
    };
    handleGetUser();
  }, [id]);

  return (
    <div className="user-form">
      <div className="heading">
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
        <p>Edit Form</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={user?.name}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleInputChange}
            value={user?.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            onChange={handleInputChange}
            value={user?.phone}
          />
        </div>
        <button type="submit" className="btn btn-primary submit-btn">
          EDIT
        </button>
      </form>
    </div>
  );
};
export default EditUser;
