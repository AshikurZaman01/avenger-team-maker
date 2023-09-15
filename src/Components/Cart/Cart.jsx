import React from 'react';
import './Cart.css'

const Cart = ({selectedActors , remaining, totalCOst}) => {

    console.log(selectedActors)
    return (
        <div className='cart'>
            <h2>This is Cart</h2>
            <h3>Total Actor : {selectedActors.length}</h3>
            <h5>Remaining : {remaining}</h5>
            <h5>Total Cost : {totalCOst}</h5>
            {
                // eslint-disable-next-line react/prop-types
                selectedActors.map(actor=> {
                    return(
                        // eslint-disable-next-line react/jsx-key
                        <div key={actor.id} className='cc'>
                            <li>{actor.name}</li>
                            <li>{actor.role}</li>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Cart;