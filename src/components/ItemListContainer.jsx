import React, { useState } from 'react'
import { products } from '../data/productos';
import { styles } from '../services/styles';

function ItemListContainer({ usuario = "sin usuario", alertaMensaje, agregarProducto }) {
    const [count, setCount] = useState(0);
    return (
        <div>
            
            <h3 style={styles.tituloAPP}>Supermercado Online</h3>
            <div style={styles.containerItems}>
                <div style={styles.productList}>
                    {products.map((product) => (
                        <div key={product.id} style={styles.productCard}>
                            <h4 style={styles.tituloItem}>{product.nombre}</h4>
                            <p>{product.descripcion}</p>
                            <p>{product.precio}</p>
                            <button style={styles.btnAgregar} onClick={agregarProducto}>
                                (+) Agregar
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer
