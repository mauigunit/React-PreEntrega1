export const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#333",
        padding: "10px 20px",
    },
    logo: {
        color: "white",
        textDecoration: "none",
        fontSize: "24px",
        fontWeight: "bold",
    },
    navLinks: {
        listStyle: "none",
        display: "flex",
    },
    navLink: {
        color: "white",
        textDecoration: "none",
        fontSize: "18px",
        margin: "0 15px",
        transition: "color 0.3s",
    },
    cartIcon: {
        position: "relative",
    },
    cartImg: {
        width: "30px",
        height: "30px",
    },
    cartCount: {
        position: "absolute",
        top: "-5px",
        right: "-5px",
        backgroundColor: "red",
        color: "white",
        borderRadius: "50%",
        padding: "5px",
        fontSize: "12px",
        fontWeight: "bold",
    },
    productList: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
    },
    productCard: {
        marginTop: "20px",
        width: "500px",
        height: "250px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        backgroundColor: "#ccc"
    },
    totalCarrito: {
        color: "#fff",
        fontSize: "20px"
    },
    containerCarrito: {
        display: "flex",
        justifyContent: "center",
        gap: "5px",
    },
    tituloAPP: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        height: "10vh", 
    },
    containerItems: { 
        width: "80%",
        margin: "0 auto", 
    },
    tituloItem: { 
        backgroundColor: "white",
        color: "#000", 
    },
    btnAgregar: { 
        backgroundColor: "#007bff",
        color: "#fff", 
        width: "100px",
        height: "50px",
        borderRadius:"5px"
    }
};