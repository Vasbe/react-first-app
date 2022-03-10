import './Styles/App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Post from "./Components/Profile/MyPosts/Post/Post";
import music from "./Components/Music/music.jsx";
import Music from "./Components/Music/music.jsx";
import Settings from "./Components/settings/settings";
import News from "./Components/News/news";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <div className='app__wrapper__content'>
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
