import {useHttp} from '../hooks/http.hook'

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();
    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=88a31499e2fdfa92ebd0fb37639efba2';
    const _baseOffset = 210;

    const getAllCharacters = async (offset = _baseOffset) =>{
        let length;
        console.log(window.innerWidth)
        if(window.innerWidth <=576){
            if(window.innerWidth <=576){
            length = 8
            console.log(length)
            }
        }else{
            length = 9
            console.log(length)
        }
        let res = await request(`${_apiBase}characters?limit=${length}&offset=${offset}&${_apiKey}`);
        
        return res.data.results.map(_trnsformCharacter);
    }

    const getAllComics = async (offset = 100) =>{
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_trnsformComics);
    }
   
    const getCharacter = async(id) =>{
        console.log(id)
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _trnsformCharacter(res.data.results[0])
    }

    const getComic = async(id) =>{
        console.log(id)
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _trnsformComics(res.data.results[0])
    }

    const getCharByName = async(name) =>{
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
        return res.data.results.map(_trnsformCharacter);
    }

    const _trnsformCharacter = (char) =>{
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 170)}...` : 'No description available',
            thumbnail:  char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage:char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items,
        }
    }

    const _trnsformComics = (comics) =>{
        return {
            id: comics.id,
            title: comics.title,
            thumbnail:  comics.thumbnail.path + '.' + comics.thumbnail.extension,
            price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available",
            description: comics.description || "There is no description",
            pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: "No information about the number of pages",
            language: comics.textObjects[0]?.language || "en-us",
            
            
        }
    }
    return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComic, getCharByName}
}

export default useMarvelService;