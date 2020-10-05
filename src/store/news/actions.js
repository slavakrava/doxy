export const loadNews = () => ({ type: 'LOAD_LIST' });

export const removeNews = (id) => ({ type: 'REMOVE_NEWS', id });

export const addNews = (news) => ({ type: 'ADD_NEWS', news });