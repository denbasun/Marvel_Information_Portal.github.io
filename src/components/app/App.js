import {lazy, Suspense} from 'react';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';
const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SinglePage = lazy(() => import('../pages/SinglePage'))
const SingleCharacter = lazy(() => import('../pages/singleCharacterLayout/SingleCharacter'))
const SingleComic = lazy(() => import('../pages/singleComicLayout/SingleComic'))

const App = (id) => {
    return (
       <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense  fallback={<Spinner/>}>
                        <Switch>
                            <Route exact path="/">
                                <MainPage/>
                            </Route>
                            <Route exact path="/comics">
                                <ComicsPage/>
                            </Route>
                             <Route exact path="/comics/:id">
                                <SinglePage Component = {SingleComic} dataType={'comic'}/>
                            </Route>
                            <Route exact path="/characters/:id">
                                <SinglePage Component = {SingleCharacter} dataType={'character'}/>
                            </Route>
                            <Route path="*">
                                <Page404/>
                            </Route>
                        </Switch>
                    </Suspense>                   
                </main>
            </div>
       </Router>
    )
}

export default App;

