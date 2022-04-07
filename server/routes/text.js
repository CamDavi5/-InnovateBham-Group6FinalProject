// const fetch =require( 'node-fetch');
// import * as module from "node-fetch"
import db from "../db/usersdb";

// fetch("localhost:3000/api/users")
// .then(res => json.)


// async function getUsers(){
// let url = 'http://localhost:3000/api/user';
// try {
//     let res = await fetch (url);
//     return await res.json();
// } catch (error) {
//     console.warn(error);
// }
// };
// getUsers();
const get = async()=>{
    const id = req.params.id;
    try {
        const user = await db.one(id);
        console.log(res.json(user));
    } catch (error) {
        console.warn(error);
    }
};
console.log(get);

// console.log(getUsers());

// const get = () =>{
// fetch("http://localhost:3000/api/user")
// .then(res =>res.json())
// .then(data => console.log(data));
// };
// get();
// console.log("Hello World");