import New from "../New";
import Popular from "../Popular";

function highlighter(Component) {
    return function (props) {
        return (
            <>
            {(props.views < 100) ? <New><Component {...props}></Component></New> 
            : (props.views > 1000) ? <Popular><Component {...props}></Component></Popular> 
            : <Component {...props}></Component>}
             </>
        )
    }
  }

  export default highlighter;