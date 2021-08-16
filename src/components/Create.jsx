import React, { useState } from "react";
import styled from 'styled-components'
import Button from '../components/Button'

function Create() {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');

  const Label = styled.label`
    font-size: 1.5rem;
    color: #60dbfb;
    text-align: left;
    display: block;
  `;
    return (
      <div className="create">
        <h2>Ceate Blog</h2>
        <form>
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
            value={post}
            onChange={(e) => setPost(e.target.value)}
          ></textarea>
          <Button buttonType="primary">Submit</Button>
        </form>
      </div>
    );
}

export default Create;
