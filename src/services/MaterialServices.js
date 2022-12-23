import axios from 'axios';

const URL = process.env.REACT_APP_URL;

const matIns = axios.create({
  withCredentials: true,
  baseURL: URL,
  headers: {
    "Content-Type": "multipart/form-data"
  }
})

class MaterialServices {
  addMaterial(materialData) {
    return matIns.post("/material/upload", materialData
    );
  }

  deleteMaterial(id) {
    return matIns.delete("/material/" + id);
  }
}

export default new MaterialServices();
