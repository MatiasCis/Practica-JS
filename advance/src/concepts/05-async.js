import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {
    const id1= '5d86371f233c9f2425f16916'
    console.log('Inicio de componente');


    findHero( id1 )
        .then( name => element.innerHTML = name)
        .catch( error => element.innerHTML = error)
    
    console.log('Fin del componente');
}

/**
 * @param {String} id
 */
const findHero = async ( id ) => {
    
    const hero = heroes.find( hero => hero.id === id );
    if ( !hero ) 
        throw `Hero with id ${ id } not found`;
    return hero?.name;
}