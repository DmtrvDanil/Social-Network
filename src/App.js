import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";

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
