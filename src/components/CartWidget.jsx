import React from 'react'
import imgCarrito from '../images/imagenCarrito.png'
import { styles } from '../services/styles'
function CartWidget({ initial = 0 }) {
    return (
        <div>
            <div style={styles.containerCarrito}>
                <div>
                    <a href="#"><img src={imgCarrito} alt="Logo Supermercado" width="50px" /></a>
                </div>
                <div>
                    <span style={styles.totalCarrito}>({initial})</span>
                </div>
            </div>
        </div>
    )
}

export default CartWidget
