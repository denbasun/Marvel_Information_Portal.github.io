import './singleCharacterLayout.scss';
import { Helmet } from 'react-helmet';
const SingleCharacter = ({data}) => {
    const {name, description, thumbnail} = data;

    return (
        <div className="single-comic">
            <Helmet>
                <meta
                    name="single character"
                    content= {`${name} character`}
                    />
                <title>{name}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="single-comic__char-img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
        </div>
    )
}

export default SingleCharacter;