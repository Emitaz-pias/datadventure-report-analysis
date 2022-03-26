import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  // const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  let limit = 10;

  useEffect(() => {
    const getEle = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      // setItems(data);
      console.log(data);
    };
    getEle();
  }, [limit]);

  // fetch data when btn is clicked
  const fetchData = async (currentPage) => {
    console.log(currentPage, "from loader fun");
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_${currentPage}&_limit=12`
    );
    const data = await res.json();

    return data;
  };

  // call the loader
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const loadDataFromServer = await fetchData(currentPage);
    console.log(loadDataFromServer, "fethed data");
    // setItems(loadDataFromServer);
  };

  return (
    <div style={{ zIndex: "-1" }} className="ms-5 ps-5 mt-2">
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        breakClassName="page-item"
        breakLinkClassName="page-link"
      />
    </div>
  );
};

export default Pagination;
