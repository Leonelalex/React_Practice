const getGifs = async(category) =>{
    //const url = 'https://api.giphy.com/v1/gifs/search?q=Goku&limit=10&api_key=wF2jBVzo3js7tZsIpoqjWBOk9QetA7CB';
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=5&api_key=wF2jBVzo3js7tZsIpoqjWBOk9QetA7CB`;

    const peticion = await fetch(url);
    const {data} = await peticion.json();
    const gifs = data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    });

    return gifs;
};

export default getGifs;