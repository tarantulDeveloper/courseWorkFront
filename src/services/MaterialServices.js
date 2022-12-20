import { instance } from "./AuthServices";

class MaterialServices {
    addMaterial(materialData) {
        return instance.post('/material/upload', materialData);
    }

    deleteMaterial(id) {
        return instance.delete('/material/upload/' + id);
    }
}