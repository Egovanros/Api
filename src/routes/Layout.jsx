import React from "react";
import styles from "./Layout.module.css";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <header>
        <NavLink
          to="/users"
          end={true}
          className={({isActive}) => isActive ? `${styles.linkActive}` : ""}
          >
          Users
        </NavLink>
        <NavLink
          to="/"
          end={true}
          className={({isActive}) => isActive ? `${styles.linkActive}` : ""}
        >
          Albums
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
