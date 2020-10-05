import data from '../../db/db.json';

const news = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_LIST':
      return [
        ...data
      ];
    case 'ADD_NEWS':
      state.push(action.news);
      return state;
    case 'REMOVE_NEWS':
      return state.filter(item => item.id !== Number(action.id));
    default:
      return state
  }
}

export const getNewsList = (state) => state.news;

export default news;