import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

import Button from '../components/Button'

function BlogDetails() {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
      fetch("http://localhost:8000/blogs/" + id, {
        method: 'DELETE',
      }).then(() => {
        history.push('/blogs')
      })
    }
    return (
      <div className="content">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <Button buttonType="primary" onClick={handleDelete}>Delete Blog</Button>
          </article>
        )}
      </div>
    );
}

export default BlogDetails
