import moment from "moment"
import 'moment/locale/ru'

function ChangeTime(Component) {
  
    return function (props) {
      let propsDate = props.date
      moment.locale('ru')
      const diff = moment(propsDate).fromNow();

        return <Component   date={diff}></Component>
    }
  }

  export default ChangeTime;