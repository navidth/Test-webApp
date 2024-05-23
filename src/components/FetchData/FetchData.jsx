"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, deleteUser, selectUser } from "../Redux/CreateSlice";
import Image from "next/image";
import { MdDelete, MdEdit } from "react-icons/md";
import Link from "next/link";
import LoadingPage from "../Loading";
import axios from "axios";
import Pagintions from "../Pagintions";

function FetchData({page}) {
  const [currentPage, setCurrentPage] = useState(page);
  console.log(typeof currentPage)
  console.log(currentPage)

  const dispatch = useDispatch();
  const { users, error, loading } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchData(page));
  }, [page]);
  // func delete
  const deleteUsers = async (user) => {
    const response = await axios.delete(
      `https://reqres.in/api/users/${user.id}`
    );
    console.log(response);
    dispatch(deleteUser(user));
  };

  // func reload
  const handleReload = () => {
    window.location.reload();
  };
  // error in fetch
  if (error || !users) {
    return (
      <div className="d-block w-50 mx-auto bg-light border">
        <h4>کاربری یافت نشد !!</h4>
        <button type="button" className="btn btn-text-bg-danger">
          {" "}
          صفحه را دوباره بارگزاری کنید
        </button>
      </div>
    );
  }
  // loading in fetch
  if (loading) {
    <LoadingPage />;
  }

  return (
    <div className="">
      {/* Reload.............. */}
      <button
        type="button"
        onClick={handleReload}
        className="btn btn-primary mb-3"
      >
        {" "}
        Reload
      </button>
      {/* table user information */}
      <table class="table table-responsive table-hover">
        <tbody className="border">
          {users.data?.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td className="border-end">
                <Image
                  src={item.avatar}
                  width={100}
                  height={100}
                  className="rounded-circle d-block mx-auto"
                  alt="avatarUser"
                />
              </td>
              <td className="border-end">
                <p className="d-flex align-items-center justify-content-center">
                  {item?.first_name} _ {item?.last_name}
                </p>
              </td>
              <td className="border-end">
                <p className="d-flex align-items-center justify-content-center">
                  {item.email}
                </p>
              </td>
              <td className="border">
                <div className="d-flex flex-column align-items-center">
                  <Link
                    href={`${item.id}`}
                    className="btn btn-success mb-2 w-50"
                    onClick={()=>{dispatch(selectUser(item))}}
                  >
                    <MdEdit size={18} />
                  </Link>
                  <button
                    onClick={() => {
                      deleteUsers(item);
                    }}
                    type="button"
                    className="btn btn-danger w-50"
                  >
                    <MdDelete size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* pagintions */}
      <Pagintions currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default FetchData;
