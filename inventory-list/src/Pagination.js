// Pagination.js
import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevClick = () => {
    onPageChange(Math.max(1, currentPage - 1));
  };

  const handleNextClick = () => {
    onPageChange(Math.min(totalPages, currentPage + 1));
  };

  const handlePageNumberClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      <button
        className="prev-btn"
        disabled={currentPage === 1}
        onClick={handlePrevClick}
      >
        {"<"}
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`page-number ${i + 1 === currentPage ? 'active' : ''}`}
          onClick={() => handlePageNumberClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="next-btn"
        disabled={currentPage === totalPages}
        onClick={handleNextClick}
      >
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
