import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { NewsPage }  from '../../pages/News';
const apiUrl = process.env.REACT_APP_API_URL;

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
      const url = apiUrl+type;
  
      try {
        const result = await fetch(url);
  
        if(!result.ok) {
          throw new Error('result not ok');
        }
        json = await result.json();

      } catch(e) {
        console.log('error: ' + e);
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
  let title = data.title;

  console.log(data);
  return (
    <NewsPage
      title={title}
      news={news}
    />
  );
}