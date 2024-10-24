import React, { Fragment } from 'react';

const MathOperations=() =>{
    const multiply =(num1, num2)=>{
        return num1 * num2;
    }
    return(
        <Fragment>
            <h3>Multiplication of 5 and 3 is : {multiply(5, 3)}</h3>
            <h3>Multiplication of 7 and 2 is : {multiply(7, 2)}</h3>
        </Fragment>
    )
}
export default MathOperations;