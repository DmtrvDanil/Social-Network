import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Page from "./components/Page/Page";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
  <BrowserRouter>
    <div className="App">
		<Header></Header>
		<div className='content'>
			<Nav></Nav>
			<Routes>
			<Route exact path='/page' element={<Page />} />
			<Route exact path='/dialogs' element={<Dialogs />} />
			</Routes>
			</div>
    </div>
  </BrowserRouter>
  );
}





export default App;
