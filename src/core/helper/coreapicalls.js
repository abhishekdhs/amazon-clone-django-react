import {API} from '../../backend'

export const getProducts= () =>{
    return fetch(`${API}product/`,{method:'GET'})
    .then((response) => {
        return response.json();
    })
    .catch((error) => console.log(error))
}