import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DeletePopup } from './components/DeletePopup';

import { Card, Button } from 'react-bootstrap';
import { getNewsList } from "../../store/news/reducers";
import { loadNews, removeNews } from '../../store/news/actions';

const NewsList = ({ list }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [selectedNewsId, setSelectedNewsId] = useState(null);

  useEffect(() => {
    if (list.length === 0) {
      dispatch(loadNews());
    }
  }, [dispatch, list]);

  const onAddButtonClick = () => {
    history.push('/add');
  };

  const handleClosePopup = () => {
    setSelectedNewsId(null);
  };

  const handleDeleteNews = () => {
    if (selectedNewsId) {
      dispatch(removeNews(selectedNewsId));
      setSelectedNewsId(null);
    }
  };

  const onSelectNews = (event) => {
    setSelectedNewsId(event.target.value);
  };

  return (
    <div className="container list">
      { selectedNewsId && (
        <DeletePopup onClosePopup={handleClosePopup} onDeleteNews={handleDeleteNews} />
      )}
      <div className="row">
        { list.length ? (
          list.map(item => (
            <div className="col-md-6 col-lg-4 mb-3" key={item.id}>
              <Card
                bg="light"
                key={item.id}
                text={'dark'}
              >
                <Card.Header>
                  <span>{item.title}</span>
                  <Button variant="outline-secondary" size="sm" value={item.id} onClick={onSelectNews}>Delete</Button>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    {item.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (<div>No Data</div>)}
      </div>

      <Button variant="outline-primary" onClick={onAddButtonClick}>Add news</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: getNewsList(state)
});

const ConnectedNewsList = connect(mapStateToProps)(NewsList);
export { ConnectedNewsList as NewsList };