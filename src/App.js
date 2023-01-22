import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
		<header className='header'>
			<img className='header__icon' src="https://cdn-icons-png.flaticon.com/512/263/263080.png">
			</img>
		</header>
		<div className='content'>
			<nav className='nav'>
				<ul className='nav__list'>
					<li className='nav__list-item'>
						<a href='#'>
							Profile
						</a>
					</li>
					<li className='nav__list-item'>
					<a href='#'>
					Messages
						</a>
					</li>
					<li className='nav__list-item'>
					<a href='#'>
					News
						</a>						
					</li>
					<li className='nav__list-item'>
					<a href='#'>
					Music
						</a>
					</li>
					<li className='nav__list-item'>
					<a href='#'>
					Setting
						</a>
					</li>
				</ul>
			</nav>
			<div className='page'>
				<div className='page__profile'>
					<div className='page__profile-user'>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgIjrjdROcjrL6FDnNu5XqxYASXq8vKILM_w&usqp=CAU">
					</img>
					<div>
						<p className='user__name'>
							Danil
						</p>
						<div className='user__info'>
							<p className='user__info-item'>
								Date: 2 May;
							</p>
							<p className='user__info-item'>
								City: California
							</p>
						</div>
					</div>
					</div>
				</div>
				<div className='posts'>
				<h3 className='posts__heading'>
					My posts
				</h3>
				<textarea className='posts__textAdd'></textarea>
				<button className='posts__btn'>
					Send
				</button>
			</div>
			</div>

		</div>
    </div>
  );
}





export default App;
