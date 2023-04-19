
  import { Route, Routes} from 'react-router-dom';
  import './App.css';
  import Layout from './layout/Layout.jsx';
  import Home from './pages/home/Home.jsx';
  import NotFound from './pages/notFound/NotFound.jsx';
  import About from './pages/about/About.jsx'
  function App() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element = {<Layout/>}>
            <Route index element = {<Home/>}/>
            <Route path='about' element = {<About/>}/>
            <Route path='*' element = {<NotFound/>}/>
          </Route>
        </Routes>
      </div>
    );
  }

  export default App;
