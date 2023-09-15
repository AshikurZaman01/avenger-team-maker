// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {

    const [allActors , setActors] = useState([]);
    const [selectedActors , setSelectedActors] = useState([]);
    const [totalCOst , setCost] = useState(0);
    const [remaining , setRemaining] = useState(0);


    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setActors(data))
    },[])

           {/* Add to cart*/}
        const handleSelectActor = (actor)=>
            {
                const isExists = selectedActors.find(item=> item.id == actor.id);
                let count = actor.salary;
                if(isExists)
                {
                    alert('Already added');
                }
                else
                {
                    selectedActors.forEach(item =>
                        {
                            count = count + item.salary;  
                        })
                   
                    const totalRemaining = 20000 - count;
                    if(count > 20000)
                    {
                       return alert('tk sesh');
                    }
                   else
                   {
                    setCost(count);
                    setRemaining(totalRemaining);
                    setSelectedActors([...selectedActors , actor]);
                   }
                }
                
            }
           {/* Add to cart end*/}


    return (   
       <div className='container'>
        <div className="home-container">
           
           {/* Card */}
           <div className="card-container">
            {
                allActors.map(actor => (
                    
                    // eslint-disable-next-line react/jsx-key
                    <div key={actor.id} className="card">
                    <div className="card-img">
                        <img className='photo' src={actor.image} alt="" />
                    </div>
                    <h2>{actor.name}</h2>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ex!</small></p>
                    <div className="info">
                        <p>Salary : {actor.salary}$</p>
                        <p>{actor.role}</p>
                        <p>Country : {actor.country}</p>
                    </div>
                    <button onClick={()=>handleSelectActor(actor)} className='card-btn'>Select</button>
                </div>
                ))
            }
                
           </div>
           {/* Card end*/}
           
           {/* Cart */}
           <Cart selectedActors={selectedActors} remaining={remaining} totalCOst={totalCOst}></Cart>
           {/* Cart end */}



        </div>            
        </div>
    );
};

export default Home;