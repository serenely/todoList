import './Header.css'

const Header = (props) => {
    return (
        <div className='header'>
            {props.headerText}
        </div>
    )
}

export default Header