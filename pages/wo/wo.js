import { useRouter } from 'next/router';

function Post() {


  return (
    <div>
      <h1>Blog Post </h1>
      <p>This is the content of the blog post with ID {postId}.</p>
    </div>
  );
}

export default Post;