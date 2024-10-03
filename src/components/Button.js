import { Component } from "react";
const style={
    button: {
        backgroundColor: '#5A2',
        color: 'white',
        padding: '15px 10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }
}

class Button extends Component{
    render(){
        return(
            <button  
                style={style.button}
                {...this.props}
            />
        )
    }
}

export default Button