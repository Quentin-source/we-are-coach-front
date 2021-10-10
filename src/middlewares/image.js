import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.cloudinary.com/v1_1/we-are-coach/image/upload',
});

const debugMiddleware = (store) => (next) => (action) => {
        

    if (action.type === 'UPLOAD_IMAGE') {
        const formData = new FormData();
        formData.append('file', action.file);
        formData.append('upload_preset', 'eeqgbzk5');
        api.post('/', formData )
            .then((response)=>
                store.dispatch({
                    type : 'UPLOAD_IMAGE_OK',
                    target : action.target,
                    url : response.data.secure_url,
                })

            )
            .catch((error)=> (console.error(error)));
    };

    next(action);


};

export default debugMiddleware;
