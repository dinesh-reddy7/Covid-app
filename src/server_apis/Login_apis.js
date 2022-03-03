const axios =require('axios');

const instance = axios.create({
    baseURL:'mongodb://localhost:27017',
    timeout:1500,
})
const get_Data = () => {
return instance.get("/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false")
.then(res =>res.data)
.catch(err => console.log(" api Error",err));
}
export {get_Data}; 