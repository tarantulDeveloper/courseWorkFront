import { instance } from "./AuthServices";
class ShopService {
    getMaterials(){
        return instance.get('/common/materials')
    }
}

export default new ShopService();