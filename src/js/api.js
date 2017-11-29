import axios from 'axios';

 const getPageContent = function (page, callback) {
    const pageDataUrl = 'https://s3.ca-central-1.amazonaws.com/cellarart/' + page + '.json';
    axios.get(pageDataUrl, { headers: { 'Content-Type': 'application/json' } })
        .then(response => callback(response.data))
        .catch(error => console.warn(error));
};

const api = {
    getPageContent,
};

export default api;