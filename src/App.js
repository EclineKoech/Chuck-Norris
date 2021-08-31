
import React, { useEffect, useState } from 'react';
import './App.css';
import List from './component/List';
import WithlistLoading from './component/withListLoading';


function App() {
  const ListLoading = WithlistLoading(List);
  const [AppState, setAppState] = useState({
    loading: false,
    categories:null,
  });

  useEffect(()=>{
    setAppState({ loading: true});
    const apiUrl = 'https://api.chucknorris.io/jokes/categories';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((categories) => {
        setAppState({ loading:false, categories:categories});
      });
  }, [setAppState]);
  return(
    <div className='App'>
      <div className='container'>
        <ListLoading isLoading ={AppState.loading} categories={AppState.categories}/>
      </div>
    </div>
  )
}


export default App;
