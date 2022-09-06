// Handling event using inline anonymous ES6 function(arrow funtion)  

{/* <button onClick={() => console.log('second example')}> inline anonymous ES6 function event handler
</button> */}

// Handling events using a separate function expression 

// Click event on button

// const Btn = () => {

//     const clickHandler = () => console.log('clicked')

//     return (
//         <button onClick={clickHandler}>Click Me</button>
//     );
// }

// export default Btn;


// mouse over event
const Btn = () => {

    const clickHandler = () => console.log('mouse over')
    
    return (
        <button onMouseOver={clickHandler}>Click Me</button>
    );
}

export default Btn;