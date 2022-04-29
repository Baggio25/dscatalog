import Link from "next/link";

import NavbarLink from "../NavbarLink";

import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-md navbar-dark bg-primary ${styles.mainNav}`}>
      <div className="container">
        <Link href="/">
          <a className={styles.navLogoText}>
            <h5>DSCatalog</h5>
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dscatalog-navbar">
            <ul className={`navbar-nav offset-md-2 ${styles.mainMenu}`}>
                <li>
                    <NavbarLink label="INÍCIO" target="/"/>
                </li>
                <li>
                    <NavbarLink label="CATÁLOGO" target="/catalog"/>
                </li>
                <li>
                    <NavbarLink label="ADMINISTRADOR" target="/admin"/>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
}
