import highlighter from "./HOC/highlighter"
import {nanoid} from 'nanoid';
import Video from './Video';
import Article from './Article';

export default function List(props) {
  const VideoWithHighlight = highlighter(Video);
  const ArticleWithHighlighter =highlighter(Article);
  return props.list.map(item => {
      let id =nanoid();
      switch (item.type){
        case 'video':
          return <VideoWithHighlight {...item} key ={id} id={id}/>
        case 'article':
          return <ArticleWithHighlighter {...item} key ={id} id={id}/>
        default: return null;
      }
      });
};