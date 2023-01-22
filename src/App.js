import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Page from "./components/Page/Page";

function App() {
  return (
    <div className="App">
		<Header></Header>
		<div className='content'>
			<Nav></Nav>
			<Page></Page>
		</div>
    </div>
  );
}





export default App;
