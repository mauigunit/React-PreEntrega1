import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

function App() {
  const nombreCliente = "Mauricio Garrido";

  const mensajeBienvenida = (mensaje) => {
    alert(`Bienvenido ${mensaje} a tu supermercado Online`);
  };

  const agregarProducto = () => {
    alert(`Producto Agregado`);
  };

  return (
    <>
      <NavBar />
      <ItemListContainer usuario={nombreCliente} alertaMensaje = {mensajeBienvenida} agregarProducto={agregarProducto} />
    </>
  )
}

export default App
