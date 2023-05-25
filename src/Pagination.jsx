import { range } from 'lodash';

const Pagination = ({ count, pageSize, onChangePage, currentPage }) => {
  const pages = count / pageSize;
  const pagesArray = range(pages);

  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        {pagesArray.map((page) => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <a
              onClick={() => onChangePage(page)}
              className='page-link'
              href='#'
            >
              {page + 1}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
