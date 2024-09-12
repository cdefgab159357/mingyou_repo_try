/**
 **
 */
import React from "react";

const Pagination = () => {
  return (
    <nav className="pagination" aria-label="Page navigation">
      <button className="page-button">1</button>
      <button className="page-button">2</button>
      <button className="page-button page-button-active">3</button>
      <span className="page-ellipsis">...</span>
      <button className="page-button">10</button>
    </nav>
  );
};

export default Pagination;
