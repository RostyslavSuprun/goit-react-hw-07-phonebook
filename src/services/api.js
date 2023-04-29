import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://644d61c957f12a1d3dde3423.mockapi.io/contacts',
});

export const fetchContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async options => {
  const { data } = await instance.post('/', options);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
