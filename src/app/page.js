import Image from "next/image";
import styles from "./page.module.css";
import FetchData from "@/components/FetchData/FetchData";
import AddUser from "@/components/AddUser";

export default function Home() {
  return (
    <div className="container-md">
      <h3 className="d-flex justify-content-center my-5">لیست کاربران</h3>
      <AddUser/>
      <FetchData />
    </div>
  );
}
