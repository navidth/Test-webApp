"use client";
import {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { editUsers } from "./Redux/CreateSlice";
import Image from "next/image";

function EditUser({ data }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  
  const dispatch = useDispatch();
  
  const router = useRouter();
  // Func update...............................
  const upadateUser = (user) => {
    fetch(`https://reqres.in/api/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: user.id,
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
      .then((json) => dispatch(editUsers(json)));
    router.push("./");
  };

  return (
    <>    
    <div className="border bg-light  mx-auto w-50 mt-5">
      {/* Information users */}
    <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>Information User</h1>
        <div className="image">
          <Image src={`${data.data.avatar}`} alt="profile" width={100} height={100} className="rounded-circle" />
        </div>
        <div className="nameProfile mt-3 d-flex flex-column align-items-center">
          <p className="border-0 border-bottom fw-bold">Name User </p>
          <p>{data.data.first_name} _ {data.data.last_name} </p>
        </div>
        <div className="emailProfile d-flex flex-column align-items-center">
          <p className="border-0 border-bottom fw-bold"> Email User</p>
          <p>{data.data.email}</p>
        </div>
      </div>
    </div>
    {/* update Users.............. */}
    <div className=" border bg-light mx-auto w-50 mt-5">
      <div className="d-flex flex-column justify-content-center align-items-center mt-2">
        <h1> update User</h1>
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
        <button
          className="btn mt-5 mb-3 btn-success"
          onClick={() => {
            upadateUser(data.data);
          }}
        >
          آپدیت
        </button>
      </div>
    </div>
    </>

  );
}

export default EditUser;
