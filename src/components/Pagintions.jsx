"use client";

import { usePathname, useRouter } from "next/navigation";

function Pagintions({ currentPage, setCurrentPage }) {
  const router = useRouter();
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    router.push(`/?page=${pageNumber}`);
  };

  return (
    <div2 className="d-flex justify-content-center align-items-center mb-5">
      <button
        onClick={() => {
          handlePageChange(1);
        }}
        className={`btn  mx-2 btn-pagintions ${
          currentPage == 1 ? "btn-primary" : "btn-outline-primary"
        }`}
      >
        1
      </button>
      <button
        onClick={() => {
          handlePageChange(2);
        }}
        className={`btn  mx-2 btn-pagintions ${
          currentPage == 2 ? "btn-primary" : "btn-outline-primary"
        }`}
      >
        2
      </button>
    </div2>
  );
}

export default Pagintions;
