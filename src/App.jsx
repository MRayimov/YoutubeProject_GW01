import './App.css';
import Header from './Layout/Header/Header';
import Main from './Layout/Main/Main';
import Sidebar from './Layout/Sidebar/Sidebar';

function App() {
	return (
		<div>
			<Header />
			<div className='grid' style={{ gridTemplateColumns: '1fr 4fr' }}>
				<Sidebar />
				<Main />
			</div>
		</div>
	);
}

export default App;
