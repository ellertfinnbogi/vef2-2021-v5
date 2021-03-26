import { NewsLink} from '../components/NewsLink';
import PropTypes from 'prop-types';


Index.propTypes = {
  title: PropTypes.string,
  news: PropTypes.arrayOf(PropTypes.object),
}

export function Index({ allNews, sportNews, domesticNews,foreignNews,cultureNews }) { 

  return  (
  <section>
      <div>
      <h1>Allar fréttir</h1>
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
    <h3>Allar fréttir</h3>
    </div>
    <div>
      <h1>Íþróttafréttir</h1>
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
    <h3>Allar fréttir</h3>
    </div>
    <div>
      <h1>Menningafréttir</h1>
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
    <h3>Allar fréttir</h3>
    </div>
    <div>
      <h1>Erlendar fréttir</h1>
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
    <h3>Allar fréttir</h3>
    </div>
    <div>
      <h1>Innlendar fréttir</h1>
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
    <h3>Allar fréttir</h3>
    </div>
     </section>
     
    );
    
}



