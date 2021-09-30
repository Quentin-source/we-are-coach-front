
// let training structure = {
    
//     name: "Fractionné",
//     description: "6 x (3\" rapide légère côte / 1\"30 recup) ",
//     picture: "https://images.pexels.com/photos/1526790/pexels-photo-1526790.jpeg?cs=srgb&dl=pexels-visually-us-1526790.jpg&fm=jpg",
//     level : "5",
//     sports_id : [3,6,8],

// }

let top = [];
let apiToken = ""; //localstore
let userToken = ""; //localstart




const dataMiddleware = () => (next) => (action) => {
    console.log('init middlewares ok');
    console.log(JSON.stringify(top));
    next(action);
};

export default dataMiddleware;
