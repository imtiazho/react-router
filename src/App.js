import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Compoennts/Home/Home';
import About from './Compoennts/About/About';
import Friends from './Compoennts/Friends/Friends';
import NotFound from './Compoennts/NotFound/NotFound';
import Header from './Compoennts/Header/Header';
import FriendDetail from './Compoennts/FriendDetail/FriendDetail';
import Post from './Compoennts/Post/Post';
import PostDetail from './Compoennts/PostDetails/PostDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/aboutus' element={<About></About>}></Route>
          <Route path='/friends' element={<Friends></Friends>}></Route>
          <Route path='friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
          <Route path='/posts' element={<Post></Post>}>
            <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
          </Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
