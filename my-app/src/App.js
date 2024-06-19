
import './App.css';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Profile from './profile';
import Friends from './Friends';
import Posts from './Posts';
import data from './data';
import Profiles from './Profiles';

function App() {
  return (
<BrowserRouter>
    <div className="App">

    <Header />
      <Routes>
        <Route path='/' element={<Main data={data.PostPage.posts}/>}/>
        <Route path='/friends' element={<Friends />}/>
        <Route path='/profile' element={<Profiles />}/>
      </Routes>


    </div>
    </BrowserRouter>

  );
}

export default App;
