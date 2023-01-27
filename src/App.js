import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Page from "./components/Page/Page";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";


function App(props) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header></Header>
                <div className='content'>
                    <Nav></Nav>
                    <Routes>
                        <Route exact path='/profile'
                               element={<Profile profileData={props.state.profileData}/>}/>
                        <Route exact path='/page' element={<Page postPage={props.state.postPage} addPost={props.addPost} updateText={props.updateText}/>}/>
                        <Route exact path='/dialogs' element={<Dialogs dialogData={props.state.dialogData}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
