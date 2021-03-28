import React, { useEffect, useState } from 'react';
import { Index } from '../../pages/Index';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;


export function NewsList() {
  const [allNews, setAllNews] = useState([]);
  const [foreignNews, setForeignNews] = useState([]);
  const [cultureNews, setCultureNews] = useState([]);
  const [sportNews, setSportNews] = useState([]);
  const [domesticNews, setDomesticNews] = useState([]);
  const sportNewsApi = apiUrl +'ithrottir';
  const domesticNewsApi = apiUrl+'innlent';
  const allNewsApi = apiUrl +'allar';
  const cultureNewsApi = apiUrl +'menning';
  const foreignNewsApi = apiUrl +'erlent';

  useEffect(() => {
    async function fetchData() {    
      const allNewsGet = axios.get(allNewsApi);
      const sportNewsGet = axios.get(sportNewsApi);
      const domesticNewsGet = axios.get(domesticNewsApi);
      const foreignNewsGet = axios.get(foreignNewsApi);
      const cultureNewsGet = axios.get(cultureNewsApi);

    //not correct, but will do for now.    
    axios.all([allNewsGet, sportNewsGet, domesticNewsGet,foreignNewsGet,cultureNewsGet]).then(
    axios.spread((...allData) =>   {
      const allNewsData  = allData[0].data.items.slice(0,5);
      const sportNewsData = allData[1].data.items.slice(0,5);
       const domesticNewsData = allData[2].data.items.slice(0,5);
       const foreignNewsData = allData[3].data.items.slice(0,5);
       const cultureNewsData = allData[4].data.items.slice(0,5);

      setAllNews(allNewsData);
      setSportNews(sportNewsData);
      setDomesticNews(domesticNewsData);
      setForeignNews(foreignNewsData);
      setCultureNews(cultureNewsData);
    }));
    }
    fetchData();
  },[] ) 

  return (
   
    <Index
    allNews={allNews}
    sportNews={sportNews}
    domesticNews={domesticNews}
    foreignNews={foreignNews}
    cultureNews={cultureNews}
    />
    
  );
  
}
