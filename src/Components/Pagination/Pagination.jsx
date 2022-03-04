import React from "react";
import "../../SCSS/MainStyle.scss";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="paginateNumbers">
      <nav>
        <ul>
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                onClick={function changeList(e) {
                  e.preventDefault();
                  paginate(number);
                }}
                href="!#"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
