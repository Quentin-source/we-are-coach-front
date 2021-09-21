const debugMiddleware = () => (next) => (action) => {
    console.log('init middlewares ok');
    
    next(action);
};

export default debugMiddleware;
