import React from 'react'
import CartWidget from './CartWidget'
import { styles } from '../services/styles'
import MiLogo from '../images/th.jfif'
function NavBar() {
    const withLogo = "100px";
    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>
                <a href="#"><img src={MiLogo} alt="Logo Supermercado" width={withLogo} /></a>
            </div>
            <ul style={styles.navLinks}>
                <li><a href="#" style={styles.navLink}>Inicio</a></li>
                <li><a href="#" style={styles.navLink}>Servicios</a></li>
                <li><a href="#" style={styles.navLink}>Quiénes Somos</a></li>
                <li><a href="#" style={styles.navLink}>Contacto</a></li>
            </ul>
            <CartWidget initial={0} />
        </nav>
    )
}

export default NavBar
