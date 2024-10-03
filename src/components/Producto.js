import { Component } from "react";
import Button from './Button'
const style={
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0, 0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '8px',
    },
    img: {
        width:'100%',
    }
}
class Producto extends Component{

    render(){
        const {producto, agregarAlCarro} = this.props
        return(
            <div style={style.producto}>
                <img style={style.img} alt={producto.nombre} src={producto.img}/>
                <h3>
                    {producto.nombre}
                </h3>
                <p>
                    {producto.precio}
                </p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto