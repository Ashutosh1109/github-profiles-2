import React from "react";

const Pagination = ({ postsPerPage, number, paginate }) => {
  const pageNumbers = [];

  var count = number / 30;
  if (count > 100) {
    pageNumbers.push("prev");
    for (let i = 1; i <= 10; i++) {
      pageNumbers.push(i);
    }
    pageNumbers.push("next");
  } else {
    for (let i = 1; i <= count; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
