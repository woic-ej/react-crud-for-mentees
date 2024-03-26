import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Common/Loader";
import "./User.css";
import { USER_API_URL } from "../../const";

const CreateUser = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    // update user state using input event
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // fetch post(endpoint:USER_API_URL) api
    // handle loading state, error
    // navigate to '/show-user' page when api call success
    // initialize user state to empty object
  };

  return (
    <div className="user-form">
      <div className="heading">
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
        <p>User Form</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" name="name" />
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Phone
          </label>
          <input type="text" className="form-control" id="phone" name="phone" />
        </div>
        <button type="submit" className="btn btn-primary submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
