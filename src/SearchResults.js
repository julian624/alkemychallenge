import React, {useState} from 'react';
import SearchResultItem from './SearchResultItem';
import Team from './Team';

function SearchResults(props, add) {
  const {superheroData = []} = props;
  console.log(superheroData[0]); 

  return (
    <div className="Searchresultoriginal">
      {superheroData.map(superhero =>
        <SearchResultItem data={superheroData[0]} />
       
      
      )}
      
    
    {/* <Team user={add}  /> */}
    
    </div>
    
  );
}



      
 

export default SearchResults;
