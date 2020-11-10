import axios from "axios";

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  const key = '18623544-b4f5dbb9e909edd8c116f4e97'
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default { fetchImagesWithQuery };
