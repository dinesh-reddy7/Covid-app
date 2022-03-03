const axios =require('axios');

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    timeout:1500,
})
const get_Movies = () => {
return instance.get("/movie/550?api_key=7465bb71382e4c2191819dfcec4bd6fb&language=en-US")
.then(res =>res.data)
.catch(err => console.log(" api Error",err));
}
export {get_Movies}; 
