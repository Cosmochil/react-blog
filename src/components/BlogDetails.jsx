import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function BlogDetails() {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
    return (
      <div className="content">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </article>
        )}
      </div>
    );
}

export default BlogDetails
