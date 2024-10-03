import { Component } from "react";
import Productos from './components/Products'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'
class App extends Component{
     state = {
          productos : [
               {nombre:'Tomate', precio: 1500, img: '/productos/tomate.png' },
               {nombre:'Uvas', precio: 1000, img: '/productos/uvas.webp' },
               {nombre:'Maruchan', precio: 675, img: '/productos/maruchan.png' },
          ],
          carro: [],
          esCarroVisible: false,
     }
     agregarAlCarro = (producto)=>{
          const { carro} = this.state
          if (carro.find(x => x.nombre === producto.nombre)){
               const newCarro = carro.map(x => x.nombre === producto.nombre
                    ? ({
                       ...x,
                       cantidad: x.cantidad+1       
                    })
                    : x)
                    return this.setState({ carro: newCarro})
          }
          return this.setState({
               carro: this.state.carro.concat({
                    ...producto,
                    cantidad: 1
               })
          })
     }
     mostrarCarro = () =>{
          if(!this.state.carro.length){
               return
          }
          this.setState({esCarroVisible: !this.state.esCarroVisible})
     }
     render(){
          const { esCarroVisible}= this.state
          return(
          <div>
               <Navbar 
                    carro={this.state.carro} 
                    esCarroVisible={esCarroVisible}
                    mostrarCarro={this.mostrarCarro}
               />
               <Layout>
                    <Title/>
                    <Productos
                         agregarAlCarro={this.agregarAlCarro}
                         productos={this.state.productos}
                    />
               </Layout>
          </div>
        )
     }
}


export default App