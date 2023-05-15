import { useDispatch, useSelector } from 'react-redux';
import BIN from '../../icos/icos';

import './Content.css'
import { activityActions, } from '../../store/store';

const Content = (props) => {

  const activities = useSelector(state => state)
  const dispatch = useDispatch()

function handleClick(id) {
  dispatch(activityActions.toggleActive(id));
}

const removeItemHandler = id => {
  dispatch(activityActions.removeItem(id));
}
  
  return (
    <div className='content__div'>
      {activities.map((activity, index) => (
        <div className="content__div__li" key={index}>
        <li id = {index} className={`content__li ${activity.active ? 'strike' : ''}`} onClick={handleClick}>
          {activity.text}
        </li>
          <button className='content__li__btn' onClick={() => removeItemHandler(activity.id)}>
            <img className='bin' src={BIN} alt="bin" />
          </button>
        </div>
      ))}
    </div>
    )
}
export default Content