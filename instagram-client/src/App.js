import './App.css';
// import Account from './components/Account';
// import Profile from './components/Profile';
// import NewPost from './components/NewPost';
// import SearchList from './components/SearchList';
// import ElemetSearch from './components/ElementSearch';
import Login from './components/Login';
import Signup from './components/Signup';
// import SideBar from './components/SideBar';
// import PostCard from './components/PostCard';
// import Home from './components/Home'; 
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      </Routes>    
    </BrowserRouter>
    // {/* <Login />   */}
    // {/* <Signup />  */}
    // {/* <SideBar /> */}
    // {/* <PostCard /> */}
    // {/* <Home /> */}
    // {/* <ElemetSearch/> */}
    // {/* <SearchList /> */}
    // {/* <NewPost /> */}
    // {/* <Profile /> */}
    // {/* <Account /> */}
    
  );
}

export default App;
