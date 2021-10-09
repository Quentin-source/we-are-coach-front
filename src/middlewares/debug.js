const debugMiddleware = () => (next) => (action) => {
        
    next(action);
};

export default debugMiddleware;
