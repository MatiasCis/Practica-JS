import { localhostUserToModel } from "../mappers/localhost-user.mappers";


/**
 * 
 * @param {Number} page 
 * @returns
 */

export const loadUsersByPage = async(page = 1) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${ page }`;
    const res = await fetch(url)
    const data = await res.json();

    const users = data.data.map( userLike => localhostUserToModel( userLike ))
    return users;
    console.log(users); // [User, User,]
}