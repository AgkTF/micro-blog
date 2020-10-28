import { axios_firebase } from './axios';

export const getEntries = async () => {
  try {
    const res = await axios_firebase.get('/entries.json');
    const values = Object.values(res.data);

    const sorted = values.sort((entry1, entry2) => {
      return new Date(entry2.date_added) - new Date(entry1.date_added);
    });

    return sorted;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryEntries = async (category) => {
  try {
    const res = await axios_firebase.get(
      `/entries.json?orderBy="category"&equalTo="${category}"`
    );
    console.log(Object.entries(res.data));
    const values = Object.values(res.data);

    const sorted = values.sort((entry1, entry2) => {
      return new Date(entry2.date_added) - new Date(entry1.date_added);
    });

    return sorted;
  } catch (error) {
    console.log(error);
  }
};
