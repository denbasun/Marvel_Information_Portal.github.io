import ComicsList from "../../comicsList/ComicsList";
import AppBanner from '../../appBanner/AppBanner';
import { Helmet } from 'react-helmet';
import './ComicsPage.scss';

const ComicsPage = () =>{
    return(
        <>
            <Helmet>
                <meta
                    name="comics page"
                    content="Page with list of our comics"
                    />
                <title>ComicsPage</title>
            </Helmet>
            <AppBanner></AppBanner>
            <ComicsList></ComicsList>   
        </>
    )
   
}
    
export default ComicsPage
