import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favourites-context";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const favoritesCtx =  useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div><Link to ='/'className={classes.logo} >My LOGO</Link></div>
      <nav>
        <ul>
          <li>
            <Link to="/">All MeetUps</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add new Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites<span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
