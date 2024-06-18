import navbar from './Navbar.module.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

const Navbar = () =>
{

    return(
        <div className={navbar.container}>
            <img className={navbar.logo} src={logo} alt="logo"/>
            <div className={navbar.searchbar}>
                <input placeholder="Search a album of your choice"/>
                <span className={navbar.searchicon}><img src={search} alt="search"/></span>
            </div>
            <button className={navbar.feedback}>Give Feedback</button>
        </div>
    )
}

export default Navbar