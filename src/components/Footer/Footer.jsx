import { useDispatch } from 'react-redux'
import './Footer.css'
import { addListActions } from '../../store/store'

const Footer = () => {
    const dispatch = useDispatch()

    // const removeHandler = () => {
    //     dispatch(addListActions.removeItems)
    // }

    return (
        <div className='footer'>
        You have 3 activities   
            <button  className='footer__btn'> Clear all</button>
            <button className='footer__btn show'> Show all</button>
        </div>
    )
}

export default Footer