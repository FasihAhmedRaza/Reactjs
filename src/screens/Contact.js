import React from "react";
import { incrementByAmount } from "../Store/reducer";
import store from "../Store/Store";


function Contact(){
    return  <button onClick={ () =>  {
        store.dispatch(incrementByAmount(5))
        console.log("state updated :")
    }}>
        Increase Count by 5
        </button>;
}

export default Contact;