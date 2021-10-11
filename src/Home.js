import React, { useState, } from 'react';
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import Team from './Team'


export default function Home({ setIsAuth }) {
    const [searchText, setSearchText] = useState('');
    const [superheroData, setSuperheroData] = useState([]);
    async function searchSuperHeroes () {
        const response = await fetch(`https://www.superheroapi.com/api.php/10219177700206566/search/${searchText}`);
        const data = await response.json();
        
      
       
    
        setSuperheroData(data.results);
      }
    
      function handleChange (e) {
        const searchTerm = e.target.value;
        
        setSearchText(searchTerm);
        if (searchTerm.length === -1) {
          setSuperheroData([]);
        }
        if (searchTerm.length > 3) {
          searchSuperHeroes();
        }
      }

      


    return (
        <div className="Home">
            <Navbar setIsAuth={setIsAuth}/>
            <SearchBar id="searchbar" searchText={searchText} handleChange={handleChange} />

                <div id="titulos"className="titulos">
                <h2>Heroe</h2>
                <h2>Lista de tus heroes</h2>
                <h2>Suma total de poder de heroes</h2>
                </div>


                
            <div className="ContainerResultados">
              <div className="Resultados">
               
                <SearchResults superheroData={superheroData} />
               
              </div>
              
                {/* <Team/> */}
                {/* <h1>Hola</h1> */}

              
            </div>
      </div>
        
    )
}