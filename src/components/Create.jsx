import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import Button from '../components/Button'

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body }

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false)
      history.push('/blogs');
    })
  }

  const Label = styled.label`
    font-size: 1.5rem;
    color: #60dbfb;
    text-align: left;
    display: block;
  `;
    return (
      <div className="create">
        <h2>Ceate Blog</h2>
        <form onSubmit={handleSubmit}>
          <Label>Blog Title</Label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Label>Blog Post</Label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          {!isPending && <Button buttonType="primary">Submit</Button>}
          {isPending && <Button buttonType="primary" disabled>Adding Blog...</Button>}
        </form>
      </div>
    );
}

export default Create;
