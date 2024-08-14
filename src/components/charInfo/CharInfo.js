import './charInfo.scss';
import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

const CharInfo =(props)=> {
    const [char, setChar] = useState(null)
    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(()=>{
        updateChar();
    },[props.charId])
    
    const onCharLoaded = (char) => {
        setChar(char)
    }

    const updateChar = () => {
        if(!props.charId) {
            return;
        }
        clearError();
        getCharacter(props.charId)
            .then(onCharLoaded)  
    }

    const skeleton = char || loading || error ? null : <Skeleton></Skeleton>
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;

    return (
        <div className="char__info">
            {console.log(char)}
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const View = ({char}) =>{
    const {name, description, thumbnail, homepage, wiki, comics} = char; 
    let imgStyle = {'objectFit' : 'cover'};
            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
     
    return (
        <>
        <div className="char__basics">
            <img src={thumbnail} alt={name} style={imgStyle}/>  
            <div>
                <div className="char__info-name">{name}</div>
                <div className="char__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
        <div className="char__descr">
            {description}
        </div>
        <div className="char__comics">Comics:</div>
        <ul className="char__comics-list">     
            {comics.length > 0 ? null: 'There is no comics available'}
            {
                comics.map((item, i) =>{
                    const comicsId = item.resourceURI.split('/').pop();
                    // eslint-disable-next-line 
                     if( i > 9) return;
                    return (
                        <li className="char__comics-item" key = {i} >
                            <Link  to={`/comics/${comicsId}`}>
                                {item.name}
                            </Link> 
                        </li> 
                    )
                })
            }
        </ul></>
    )
}
// type check
CharInfo.propTypes  = {
    charId: PropTypes.number
}

export default CharInfo;