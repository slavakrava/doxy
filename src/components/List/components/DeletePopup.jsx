import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles.css';

export const DeletePopup = ({ onDeleteNews, onClosePopup }) => {
  return (
    <div className="popup">
      <div className="popup__overlay" onClick={onClosePopup}></div>
      <div className="popup__form">
        <h4>Do you want to delete this news?</h4>
        <Button variant="outline-success" size="sm" onClick={onDeleteNews}>Yes</Button>
        <Button variant="outline-secondary" size="sm" onClick={onClosePopup}>No</Button>
      </div>
    </div>
  );
};
