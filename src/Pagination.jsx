import React from "react";

  
const Pagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginationClass">
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</a>
          </li>
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
            </li>
          ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <span className="page-link" onClick={() => paginate(currentPage + 1)}>Next</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
