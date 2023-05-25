const Posts = ({ posts }) => {
  return posts.map((post) => <p key={post.id}>{post.title}s</p>);
};

export default Posts;
