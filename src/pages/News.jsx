import { NewsLink} from '../components/NewsLink';

export function NewsPage({title, news}) {

    return  (
        <div className="news-list-container">
          <div className="news-box">
          <h1 className="title">{title}</h1>
          {news.length>0 && news.map((item,i) => {
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
          </div>
           </div>
           
          );
}