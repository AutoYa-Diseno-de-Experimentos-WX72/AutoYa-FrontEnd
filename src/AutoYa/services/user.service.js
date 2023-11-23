import axios from 'axios';
import authHeader from './auth-header';
import http from "@/shared/services/http-common";

const API_URL = 'http://localhost:5267/api/v1/';

class UserService {

    getUserBoard() {
        return axios.get(API_URL + 'users', { headers: authHeader() });
    }
}

export default new UserService();
