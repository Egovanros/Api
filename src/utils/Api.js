export default class Api{
    static getUsers =  () =>{
        return fetch("https://jsonplaceholder.typicode.com/users").then(
    (r) => r.json())
    }
    static getAlbums =  () =>{
        return fetch("https://jsonplaceholder.typicode.com/albums").then(
    (r) => r.json())
    }
    static getUser =  (id) =>{
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (r) => r.json())
    }
    static getPhotos = (id) =>{
        return fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`).then(
            (r) => r.json())
    }
    static getAlbum = (id) =>{
        return fetch(`https://jsonplaceholder.typicode.com/albums/${id}`).then(
            (r) => r.json())
    }
}