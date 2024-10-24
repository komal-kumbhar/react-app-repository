import React from 'react';
import { Fragment } from 'react';
const SimpleCalculator = ()=>{
    let a=100, b=20;

    return(
        <Fragment>
            <h3>Given numbers are a=100, b=20</h3>
            <h3>Sum of Given number is: {a+b}</h3>
            <h3>Difference between a and b is: {a-b}</h3>
            <h3>Product of Given number is: {a*b}</h3>
            <h3>Division of two number is: {a/b}</h3>
        </Fragment>
    )
}
export default SimpleCalculator;