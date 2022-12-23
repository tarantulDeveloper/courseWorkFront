import axios from 'axios';

const URL = process.env.REACT_APP_URL;

class ChoiceService {
  createChoise(choice) {
    return axios.post(URL + "/common/choice?name=" + choice)
  }

  getAllChoices() {
    return axios.get(URL + "/common/choice")
  }

  deleteChoices() {
    return axios.delete(URL + "/common/choice")
  }

  createOrder(order) {
    return axios.post(URL + '/common/order', order)
  }

  getAllOrders() {
    return axios.get(URL + '/common/order', {
      withCredentials: true
    });
  }

  deleteOrderById(id) {
    return axios.delete(URL + '/common/order/' + id, {withCredentials: true});
  }
}

export default new ChoiceService();