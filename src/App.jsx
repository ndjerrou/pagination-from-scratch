import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Pagination from './Pagination';

import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './Posts';
import { paginate } from './utils/paginate';

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((data) => data.json())
      .then((posts) => setAllPosts(posts));
  }, []);
  const posts = paginate(allPosts, pageSize, currentPage);
  console.log(posts);
  return (
    <>
      <Posts posts={posts} />
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        count={allPosts.length}
        onChangePage={setCurrentPage}
      />
    </>
  );
}

export default App;
