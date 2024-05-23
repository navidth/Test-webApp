import FetchData from "@/components/FetchData/FetchData";
import AddUser from "@/components/AddUser";
import Pagintions from "@/components/Pagintions";

export default function Home({ searchParams }) {
  let page = parseInt(searchParams.page, 10);
  page = !page || page < 1 ? 1 : page;

  return (
    <div className="container-md">
      <h3 className="d-flex justify-content-center my-5">لیست کاربران</h3>
      <FetchData page={page}/>

      {page === 2 ? <AddUser /> : null}
    </div>
  );
}
