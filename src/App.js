import React, { useState, useEffect } from 'react';
import Login from './Login'
import Home from './Home'
// import 'bootstrap/dist/css/bootstrap.min.css';
// NUEVOS
import Spinner from './Spinner'
import { BrowserRouter as Router, Route,Link,Switch } from "react-router-dom";

function App() {
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);
  // traido de superheroecomun
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function searchSuperHeroes () {
    const response = await fetch(`https://www.superheroapi.com/api.php/10219177700206566/search/${searchText}`);
    const data = await response.json();
    console.log("searchSuperHeroes -> data", data)

    setSuperheroData(data.results);
  }
  function handleChange (e) {
    const searchTerm = e.target.value;
    
    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length > 3) {
      searchSuperHeroes();
    }
  }
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="App">
       <Router>
       <div className="App">
         <div classname="containerprincipal">
       <Switch>
          {!isAuth ? (
            <Route path='/'>
              <Login setIsAuth={setIsAuth} />
            </Route>
          ) : (
            <Home setIsAuth={setIsAuth} searchText={searchText} handleChange={handleChange}/>
            
          )}
        </Switch>
       </div>

      </div>
     </Router>
    </div>
  );
}

export default App;
