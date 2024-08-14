import ErrorMesage from "../errorMessage/ErrorMessage"
import {Link} from "react-router-dom";
import { Helmet } from 'react-helmet';

const Page404 = () =>{

    return(
        <div>
            <Helmet>
                <meta
                    name="error"
                    content="404"
                    />
                <title>error</title>
            </Helmet>
            <ErrorMesage/>
            <p style = {{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'color': 'red'}}>Page doesn't exist</p>
            <Link style = {{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to main page</Link>
        </div>
    )
}

export default Page404