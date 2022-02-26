import React from 'react'

import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Pizza from '../components/Pizza'
import { getAllPizzas } from '../actions/pizzaActions'
const HomeScreen = () => {


    const dispatch = useDispatch();
    const pizzasstate = useSelector((state) =>state.getAllPizzasReducer);
    const { pizzas, error, loading } = pizzasstate;
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [dispatch])
    return (
        <div>
            <div className='row  justify-content-center'>

                {loading ? (<h1>loading</h1>) : error ? (<h1>something went wrong</h1>) : (
                    pizzas.map(pizza => {
                        return (<div className="col-md-3 m-3" key={pizza._id}>
                            <div>
                                <Pizza pizza={pizza}></Pizza>
                            </div>
                        </div>
                        );
                    })


                )}

            </div>
        </div>
    )
}

export default HomeScreen
