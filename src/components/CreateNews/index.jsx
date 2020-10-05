import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { addNews } from '../../store/news/actions';

import './styles.css';

export const CreateNews = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSubmitForm = () => {
    if (title && text) {
      dispatch(addNews({ id: new Date().getTime(), title, text }));
      history.push('/');
    }
  };

  return (
    <div className="container create">
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Title of news"
          aria-label="Title"
          onChange={onTitleChange}
          value={title}
        />
      </InputGroup>

      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>Text</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          as="textarea"
          aria-label="Main text"
          onChange={onTextChange}
          value={text}
        />
      </InputGroup>

      <Button variant="outline-success mt-3" onClick={onSubmitForm}>Create news</Button>
    </div>
  );
};