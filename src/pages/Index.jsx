
import PropTypes from 'prop-types';


Index.propTypes = {
  title: PropTypes.string,
  news: PropTypes.arrayOf(PropTypes.object),
}

function Test({title = '', link = ''}) {
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  )
}


export function Index({ title, news }) {
  // TODO útfæra yfirlitssíðu

  return  (
  <section>
    <h1>{title}</h1>
    {news.length>0 && news.map((item,i) => {
      const {
        title,link
      } = item;
    return (
      <Test
      key={i}
      title={title}
      link={link}
      />
     )
    })}
     </section>
     
    );
    
}



