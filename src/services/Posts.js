import axios from 'axios';
export default class PostService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api'
    }

    getAll() {
        return axios.get('/posts');
    }
    getId(id) {
        return axios.get('/posts/' + id);
    }
    addPost(post) {
        return axios.post('/posts', post);
    }
}

export const postService = new PostService();