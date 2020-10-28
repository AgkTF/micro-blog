import { axios_firebase } from './axios';

export const getTip = async (id) => {
  try {
    const res = await axios_firebase.get(`entries/${id}.json`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
