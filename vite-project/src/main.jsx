import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){ //since, in App,jsx there is a function called app which we are rendering here
    return (       //similar we can do it with this MyApp function also.
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

const anotherUser = "   new value for another user"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com ', target: '_blank'},
    'click here to visit google', //if i had to add any element here then just define it before this element and use it here 
    anotherUser   //that's how we add new values
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//     //<MyApp /> //rendeing MyApp instead of App here 
//     reactElement
// )

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
    
)
