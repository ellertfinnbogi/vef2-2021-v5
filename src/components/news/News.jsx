import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { NewsPage }  from '../../pages/News';
const apiUrl = process.env.REACT_APP_API_URL;
const apisurl = 'https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/allar';

export function News() {
  const [loading,setLoading] = useState(false);
  const [data, setData] = useState(false);
  const [error, setError] = useState(null);

  let { type } = useParams();


  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      let json;
      const url = 'https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/'+type;
  
      try {
        const result = await fetch(url);
  
        if(!result.ok) {
          throw new Error('result not ok');
        }
  
        json = await result.json();
      } catch(e) {
        setError('Gat ekki sótt gögn');
        return;
      } finally {
        setLoading(false);
      }
      setData(json);
    }
    fetchData();
 },[]);

 if(error) {
   return (
   <p>Villa kom upp</p>
   );
  }

  if(loading) {
    return (
      <p>Sæki gögn...</p>
    );
  }
  let news = data.items || [];

  //const {title} = "sdfsdf";
  return (
    <NewsPage
      title="sdfsdafd"
      news={news}
    />
  );
}