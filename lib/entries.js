import { axios_firebase } from './axios';

export const getEntries = async () => {
  try {
    const res = await axios_firebase.get('/entries.json');
    const complete = Object.entries(res.data);

    //TODO: date_added not always the final date of the post. check the update_date as well
    const sortedComplete = complete.sort((entry1, entry2) => {
      return new Date(entry2[1].date_added) - new Date(entry1[1].date_added);
    });

    return sortedComplete;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryEntries = async (category) => {
  try {
    const res = await axios_firebase.get(
      `/entries.json?orderBy="category"&equalTo="${category}"`
    );
    const complete = Object.entries(res.data);

    const sortedComplete = complete.sort((entry1, entry2) => {
      return new Date(entry2[1].date_added) - new Date(entry1[1].date_added);
    });

    // console.log(sortedComplete);
    return sortedComplete;
  } catch (error) {
    console.log(error);
  }
};

export const getEntriesByDate = async (date) => {
  try {
    const res = await axios_firebase.get(
      `/entries.json?orderBy="date_added"&equalTo="${date}"`
    );

    const complete = Object.entries(res.data);
    const sortedComplete = complete.sort((entry1, entry2) => {
      return new Date(entry2[1].date_added) - new Date(entry1[1].date_added);
    });
    // console.log(sortedComplete);

    return sortedComplete;
  } catch (error) {
    console.log(error);
  }
};
