import React from 'react';
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react"


function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/">e-Commerce</Link>
                </div>

                <ul className={styles.menu}>
                    <li>
                        <Link to="/">Products</Link>
                    </li>

                </ul>
            </div>
            <div className={styles.right}>
                <Link to="/signin">
                    <Button colorScheme="orange">Login</Button>
                </Link>
                <Link to="signup">
                    <Button colorScheme="orange">Register</Button>
                </Link>
                
            </div>

        </nav>
    )
}

export default Navbar
