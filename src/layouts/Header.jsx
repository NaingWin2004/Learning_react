import Nav from '../components/Nav.jsx'
import Summary from '../components/Summary.jsx'

const Header = ({showCartHandler}) => {
    return (
      <header>
      <Nav showCartHandler={showCartHandler}/>
      <Summary/>
      </header>
      )
};

export default Header;
