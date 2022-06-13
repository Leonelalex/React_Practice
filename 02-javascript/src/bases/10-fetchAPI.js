//Fetch API 
//ref: https://developer.mozilla.org/es/docs/Web/API/Fetch_API

const apiKey = 'wF2jBVzo3js7tZsIpoqjWBOk9QetA7CB';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/*peticion
    .then(res => res.json())
    .then(data => {console.log(data)})
    .catch(console.warn);*/

peticion.then(res =>{
    res.json().then(({data}) =>{
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    });
}).catch(console.warn);