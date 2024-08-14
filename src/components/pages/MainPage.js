import { useState } from 'react';
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import decoration from '../../resources/img/vision.png';
import FindChar from '../findChar/FindChar'
import {Helmet} from 'react-helmet'

const MainPage = () =>{
    const[selectedChar, setChar] = useState(null)

    const onCharSelected = (id) =>{  
        setChar(id)
    }

    return(
        <>
            <Helmet>
                <meta
                    name="main page"
                    content="Marvel information portal"
                    />
                <title>Marvel information portal</title>
            </Helmet>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected = {onCharSelected} selectedChar = {selectedChar}/>
                </ErrorBoundary>
                <div>
                    <ErrorBoundary>
                        <CharInfo charId = {selectedChar}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        < FindChar/>
                    </ErrorBoundary>
                </div>
                
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage