import React, {Component, Fragment} from 'react'; 

class Tutor extends Component{
    state = {
        order: 127
    }
    handlePlus = () => {
        this.setState ({
            order : this.state.order + 1
        })
    }
    handleMinus = () => {
        if (this.state.order > 0){
            this.setState ({
                order : this.state.order - 1
            })
        }
    }
    
    render(){

        return(
            <Fragment>
                <div className="card"> 
                        <div className="counter">
                            <p>~~~~~~~~~~~ </p>
                            <p>Pilih Pengajar : </p>
                            <button className="plus" onClick={this.handlePlus}>+</button>
                            <button className="minus" onClick={this.handleMinus}>-</button>
                                <div className="count">
                                    <p>Jumlah murid yang sudah ada dikelas pengajar : {this.state.order}</p>
                                </div>
                        </div>
                </div>
            </Fragment>
        )
    }
}

export default Tutor;