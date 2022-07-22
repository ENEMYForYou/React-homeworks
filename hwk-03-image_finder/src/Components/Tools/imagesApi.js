import axios from "axios";

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  const key = "28565993-c6ffef87068ea24c81177e086";
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};
// eslint-disable-next-line
export default {
  fetchImagesWithQuery,
};
