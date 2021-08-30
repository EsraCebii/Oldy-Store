import React from 'react';
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";

import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";


function Navbar() {
    const { loggedIn, user} = useAuth();
    const {items} = useBasket();

   

    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/" className={styles.baslik}>OLDY STORE</Link>
                </div>

                <ul className={ styles.font}>
                    <li>
                        <Link to="/">Products</Link>
                    </li>

                </ul>
            </div>
            <div className={styles.right}>
                {!loggedIn && (
                    <>
                        <Link to="/signin">
                            <Button colorScheme="orange">Login</Button>
                        </Link>
                        <Link to="signup">
                            <Button colorScheme="orange">Register</Button>
                        </Link>
                    </>
                )}
                {
                    loggedIn && (

                        <>
                            {
                                items.length > 0 && (
                                    <Link to="/basket">
                                        <Button colorScheme="orange"  variant="outline">
                                            Basket ({items.length})

                                        </Button>
                                    </Link>
                                )
                            }
                            {
                                user?.role === 'admin' && (
                                    <Link to="/admin">
                                        <Button colorScheme="orange" variant="ghost" m="2">Admin</Button>
                                     </Link>
                                )
                            }

                            <Link to="profile">
                                <Button colorScheme="orange">
                                    profile
                                </Button>
                            </Link>
                        </>
                    )
                }
            </div>

        </nav>
    )
}

export default Navbar
