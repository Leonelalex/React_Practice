// Async Wait

/*const getImagen = async() => 'http:/asdgsdfgfdg.com';

getImagen().then(console.log);*/

const asynPeticion = async()=>{
    try{
        const key = 'wF2jBVzo3js7tZsIpoqjWBOk9QetA7CB';
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${key}`);

        const {data} = await res.json();
        const {url} = data.images.original;

        return url;
    }catch(error){
        return "No se puedo cargar la imagen";
    }

}


asynPeticion().then((url) => {
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch(console.warn);
