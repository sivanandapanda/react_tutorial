import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID OJ2gFcU5kVu8H9xMCYAnoJxf-PtDcaAIUXREWCtQI64'
    }
});