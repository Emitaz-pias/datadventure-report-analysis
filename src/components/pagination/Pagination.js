import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  const [items, setItems] = useState([]);
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
      setItems(data);
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
    setItems(loadDataFromServer);
  };

  return (
    <div className="ms-5 ps-5 mt-2">
      <div>
        {/* <div className="row m-2">
          {items.map((item) => {
            return (
              <div key={item.id} className="col-sm-6 col-md-4 v my-2">
                <div
                  className="card shadow-sm w-100"
                  style={{ minHeight: 225 }}
                >
                  <div className="card-body">
                    <h5 className="card-title text-center h2">
                      Id :{item.id}{" "}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted text-center">
                      {item.email}
                    </h6>
                    <p className="card-text">{item.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
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
