// import React, {useEffect ,useState}from 'react';
// import './Order.css';
// import {db} from "./firebase";
// import {useStateValue} from "./StateProvider";

// function Order() {
//     const[{basket, user}, dispatch] = useStateValue();
//     const[orders, setOrders] = useState([]);
    

//     useEffect(() =>{
//     if(user){
//     db
//       .collection('users')
//       .doc(user?.uid)
//       .collection('orders')
//       .orderBy('created','desc')
//       .onSnapshot(snapshot =>{
//             setOrders(snapshot.docs).map(doc =>({
//                 id: doc.id,
//                 data:doc.data()
//             })))
//        ))
//         }else{
//             setOrders([])
//         }
       
//     }, [user])

//   return(
//    <div className="order">
//        <h2> Your Orders</h2>
//        <div className="orders__order">
//            {orders?.map(order =>(
//                <Order order={order}/>
//              ))}
//        </div>
      
//    </div>
   
//   )}

// export default Order



import React from 'react'
import './Order.css'
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />   
        </div>
    )
}

export default Order
