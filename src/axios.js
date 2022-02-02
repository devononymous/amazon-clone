import axios from 'axios';

const instance = axios.create({
    baseUrl:'http://localhost:5001/cloned-f110f/us-central1/api/dev'
     // The apli (cloud functional) URL 
});

export default instance;