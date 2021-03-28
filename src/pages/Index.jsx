import { NewsLink} from '../components/NewsLink';
import PropTypes from 'prop-types';


Index.propTypes = {
  title: PropTypes.string,
  news: PropTypes.arrayOf(PropTypes.object),
}

export function Index({ allNews, sportNews, domesticNews,foreignNews,cultureNews }) { 
  
  return  (

  <div className="news-list-container">
      <div className="news-list">
      <h2>Allar fréttir</h2>
    {allNews.length>0 && allNews.map((item,i) => {
      const {
        title,link
      } = item;
    return (
      <NewsLink
      key={i}
      title={title}
      link={link}
      />
     )
     
    })}
    <h3><a href="/allar">Allar fréttir</a></h3>
    </div>
    <div className="news-list">
      <h2>Íþróttafréttir</h2>
    {sportNews.length > 0 && sportNews.map((item, i) => {
      const {
        title,link
      } = item;
      return (
        <NewsLink
        key={i}
        title={title}
        link={link}
        />
       
      )
    })}
    <h3><a href="/ithrottir">Allar fréttir</a></h3>
    </div>
    <div className="news-list">
      <h2>Menningafréttir</h2>
    {cultureNews.length > 0 && cultureNews.map((item, i) => {
      const {
        title,link
      } = item;
      return (
        <NewsLink
        key={i}
        title={title}
        link={link}
        />
       
      )
    })}
    <h3><a href="/menning">Allar fréttir</a></h3>
    </div>
    <div className="news-list">
      <h2>Erlendar fréttir</h2>
    {foreignNews.length > 0 && foreignNews.map((item, i) => {
      const {
        title,link
      } = item;
      return (
        <NewsLink
        key={i}
        title={title}
        link={link}
        />
       
      )
    })}
    <h3><a href="/erlent">Allar fréttir</a></h3>
    </div>
    <div className="news-list">
      <h2>Innlendar fréttir</h2>
    {domesticNews.length > 0 && domesticNews.map((item, i) => {
      const {
        title,link
      } = item;
      return (
        <NewsLink
        key={i}
        title={title}
        link={link}
        />
       
      )
    })}
    <h3><a href="/innlent">Allar fréttir</a></h3>
    </div>
     </div>
     
    );
}



