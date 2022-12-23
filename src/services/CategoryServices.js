import axios from 'axios';

const URL = process.env.REACT_APP_URL;

const catIns = axios.create({
  withCredentials: true,
  baseURL: URL,
  headers: {
    "Content-Type": "multipart/form-data",
  }
})


class CategoryServices {
  fetchCategories() {
    return catIns.get("/category");
  }

  createCategory(newCategory) {
    return catIns.post("/category", newCategory,);
  }

  deleteCategory(id) {
    return axios.delete("/category/" + id, {
      withCredentials: true,
      baseURL: URL
    });
  }
}

export default new CategoryServices();
