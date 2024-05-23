"use client";
import {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers} from "./Redux/CreateSlice";

function AddUser() {
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const dispatch = useDispatch();
      var { users } = useSelector((state) => state.user);

      const addUser = () => {
        fetch(`https://reqres.in/api/users/`, {
          method: "POST",
          body: JSON.stringify({
            id: users.data?.lenght + 1,
            email: email,
            first_name: firstName,
            last_name: lastName,
            avatar: "https://reqres.in/img/faces/7-image.jpg",
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => dispatch(addUsers(json)));
      };
    
      return (
        <div className=" border bg-light mx-auto w-50 my-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="nameProfile mt-3 d-flex flex-column align-items-center">
              <label className="fw-bold fs-4">FirstName </label>
              <input
                className="form-control px-3"
                placeholder=" New FirstName ..."
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="nameProfile my-5 d-flex flex-column align-items-center">
              <label className="fw-bold fs-4">LastName </label>
              <input
                className="form-control px-3"
                placeholder=" New LastName ..."
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className="emailProfile d-flex flex-column align-items-center">
              <label className="fw-bold fs-4">Email</label>
              <input
                className="form-control px-3"
                placeholder="New Email ..."
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div
              className="btn mt-5 mb-3 btn-success"
              onClick={addUser}>
              create
            </div>
          </div>
        </div>
      );
}

export default AddUser