// import { Search } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import Team from './Team'
import Button from '@material-ui/core/Button'
import ModalExample from './ModalExample'
// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function SearchResultItem(props) {
  const {data} = props;
  const [SearchResultItem, setSearchResultItem]= useState([]);
  let add = () => {
    const newUser ={
      name: data.name,
      uid: data.id,
      powerstats: data.powerstats,
      powerpower:data.powerstats.power,
      powerintelligence:data.powerstats.intelligence,
      powerstrength:data.powerstats.strength,
      powerspeed:data.powerstats.speed,
      img: data.image.url
    }
    setSearchResultItem([...SearchResultItem, newUser])
    // const total = [newUser].reduce(function(a, b){ return a + b; });
    // console.log(total)
  
  }
  const deletee = (name) => {
    const newUsers = SearchResultItem.filter((user) => user.name !== name);
    setSearchResultItem(newUsers);
  };

  const podertotal = getSumOf(SearchResultItem, "powerpower");
  const strengthtotal = getSumOf(SearchResultItem, "powerstrength");
  const speedtotal = getSumOf(SearchResultItem, "powerspeed");
  const intelligencetotal = getSumOf(SearchResultItem, "powerintelligence");
  console.log(SearchResultItem)

  

  // const eliminar = [SearchResultItem].splice(-1)
  
  
  // console.log('data', data);
  return (
    <div className="search-result">
      
    <div className="search-result1">
      <div className="left">
        <img src={data.image.url} alt="super pic" />
      </div>
      <div className="right">
        <h1>{data.name}</h1>
        <span style={{ color:'gray', marginBottom: 5 }}>{data.biography['full-name']}</span>
        <div className="stats">
          <div>strength: {data.powerstats.strength}</div>
          <div>speed: {data.powerstats.speed}</div>
          <div>power: {data.powerstats.power}</div>
          <div>intelligence: {data.powerstats.intelligence}</div>
          <br></br>
          <div className="BotonesHeroe">
        <Button variant="contained" color="primary" className="" onClick={add}>Agregar a equipo</Button>
        <br></br>
        
        <ModalExample data={data}/>
        </div>
        
        </div>
  
        </div>
        
      </div>

      <div> 
      <div className="search-result2">
      <ul className="Equipoul">
          {SearchResultItem.map((user) => (
            <div  className="Equipototal">
              
              <img className="Equipoimagen" src={user.img} alt="super pic" />
             <li key={user.uid}>
             {" "} {user.name} 
             <Button variant="contained" color="warning" size="small" className="" onClick={() => deletee(user.name)}>Borrar</Button>
              {/* Powerstats:{["Speed"+ user.powerstats.speed, user.powerstats.power]} */}
              </li>   
              
           
            </div>           

        ))}
        </ul>
     
      </div>
      </div>
      <div className="search-result3">
      <h5>Power total :{podertotal}</h5>
      <h5> Strenght total:{strengthtotal}</h5>
      <h5> Speed total:{speedtotal}</h5>
      <h5> Intelligence total:{intelligencetotal}</h5>
      {/* <h3> Acumulado total de poderes:{powerstatstotal}</h3> */}
      
     
    </div>
   
    </div>
    
    
  );
}

const getSumOf = (list, property) => {
  let sumOf = 0;
  list?.forEach((item) => {
    sumOf += +item[property];
  });
  return sumOf;
};



export default SearchResultItem;