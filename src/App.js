
import './App.css';
import instance from './components/instance';
import Row from './components/Row';
import requests from './components/requests';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Banner/>
      <Navbar/>
    <Row title="Netflix originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
    <Row title="Trending now" fetchUrl={requests. fetchTrending}/>
    <Row title="Action movies" fetchUrl={requests. fetchActionMovies}/>
    <Row title="Comedy movies" fetchUrl={requests. fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests. fetchHorrorMovies}/>
    <Row title="Romantic Movies" fetchUrl={requests. fetchRomanceMovies}/>
    <Row title="Documentaries" fetchUrl={requests. fetchDocumentaries}/>

    </div>
  );
}

export default App;
