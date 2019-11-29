import axios from 'axios';
export default class PostService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api'
    }

    getAll() {
        return axios.get('/posts?filter={"include":["comments"]}');
    }
    // getId(id) {
    //     return axios.get('/posts/' + id);
    // }
    addPost(post) {
        return axios.post('/posts', post);
    }
    edit(id, post) {
        return axios.put('/posts/' + id, post);
    }
    delete(id) {
        return axios.delete('/posts/' + id);
    }
    addComment(comment, id) {
        return axios.post('/posts/' + id + '/comments', comment);
    }
    getId(id) {
        return axios.get('/posts/'+id+'?filter={"include":["comments"]}');
    }
}

export const postService = new PostService();