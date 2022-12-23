import {instance} from "./AuthServices";
class AdminService {
  createWorker(worker) {
    return instance.post('/auth/signup',worker);
  }
  getAllUsers() {
    return instance.get('/admin-controller');
  }
}

export default new AdminService();