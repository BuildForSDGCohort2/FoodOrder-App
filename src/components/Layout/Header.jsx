import  {Fragment} from "react";
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../Assets/meals.jpg';
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
          <h1>Reactive Meals</h1>
          <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
          <img src={mealsImage} alt="Table full of food"/>
      </div>
    </Fragment>
  )
}
export default Header;