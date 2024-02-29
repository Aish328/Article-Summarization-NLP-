import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignInUp from './pages/SignInUp';
import Library from './pages/Library';
import Discover from './pages/Discover';
import Home from './pages/Home';
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    <div className="bg-[#a4c3b2]">
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/discover'element={<Discover/>}></Route>
        <Route path='/threads'element={<Library/>}></Route>
        <Route path='/search'element={<SearchComponent/>}></Route>
        <Route path='/signin'element={<SignInUp/>}></Route>
        <Route path='/signup'element={<SignInUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
