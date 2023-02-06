import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Page from "./components/Page/Page";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import PageContainer from "./components/Page/Page-container";
import DialogsContainer from "./components/Dialogs/Dialog/Dialogs-container";
import UsersContainer from "./components/Users/User/Users-container";


function App(props) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header></Header>
                <div className='content'>
                    <Nav></Nav>
                    <Routes>
                        <Route exact path='/profile'
                               element={<Profile profilePage={props.store.profilePage}/>}/>
                        <Route exact path='/page' element={<PageContainer store={props.store} dispatch={props.dispatch}/>}/>
                        <Route exact path='/dialogs' element={<DialogsContainer store={props.store} dispatch={props.dispatch}/>}/>
                        <Route exact path='/users' element={<UsersContainer store={props.store} dispatch={props.dispatch}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
