import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../api/axiosPrivate';

const Order = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        const getOrders = async()=>{
            const email = user.email;
            const url =`https://agile-shore-16566.herokuapp.com/order?email=${email}`
           try{
            const {data} = await axiosPrivate.get(url);
            setOrders(data);
           }
           catch(error){
               console.log(error);
               if(error.response.status === 403 || error.response.status === 401){
                   signOut(auth)
                navigate('/login')
               }
           }
        }
        getOrders();
    },[user])
    return (
        <div>
            <h2>Your orders: {orders.length}</h2>
        </div>
    );
};

export default Order;