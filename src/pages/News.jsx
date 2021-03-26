import { NewsLink} from '../components/NewsLink';

export function NewsPage({title, news}) {

    return  (
        <section>
          <h1>{title}</h1>
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
           </section>
           
          );
}