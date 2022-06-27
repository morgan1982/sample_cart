import React, { Fragment } from 'react'
import banner from '../../assets/banner.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={banner} alt="food table" />
      </div>
    </Fragment>
  )
}

export default Header;
