import React, { useEffect, useState } from 'react';
import { Index } from '../../pages/Index';
import axios from 'axios';
import { func } from 'prop-types';
const apiUrl = process.env.REACT_APP_API_URL;
const apisurl = 'https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/allar';


export function NewsList() {
  const [error, setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const [allNews, setAllNews] = useState([]);
  const [foreignNews, setForeignNews] = useState([]);
  const [cultureNews, setCultureNews] = useState([]);
  const [sportNews, setSportNews] = useState([]);
  const [domesticNews, setDomesticNews] = useState([]);
  const sportNewsApi = 'https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/ithrottir';
  const domesticNewsApi = 'https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/innlent';
  const allNewsApi = 'https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/allar';
  const cultureNewsApi = 'https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/menning';
  const foreignNewsApi = 'https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/erlent';

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
    
      const allNewsGet = axios.get(allNewsApi);
      const sportNewsGet = axios.get(sportNewsApi);
      const domesticNewsGet = axios.get(domesticNewsApi);
      const foreignNewsGet = axios.get(foreignNewsApi);
      const cultureNewsGet = axios.get(cultureNewsApi);

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

  //const {title} = "sdfsdf";
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
