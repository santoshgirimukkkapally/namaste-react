import React from 'react'
import ReactDOM from 'react-dom';

// <div id="parent">
//     <div id="childOne">
//             <h1> Hello I am H1 of Child One</h1>
//             <h2> Hello I am H2 of Child One</h2>
            
//     </div>
//     <div id="childTwo">
//     <h1> Hello I am H1 of Child Two</h1>
//     <h2> Hello I am H2 of Child Two</h2>

//     </div>
// </div>


const heading = React.createElement(
    'div', 
    {id: 'parent'}, 
    [React.createElement(
        'div', 
        {id: 'childOne'},
        [
            React.createElement(
                'h1', 
                {}, 
                'Hello I am H1 of Child One'
                ),
                React.createElement(
                    'h2', 
                    {}, 
                    'Hello I am H2 of Child One'
                    )
        ]
        ),
        React.createElement(
            'div', 
            {id: 'childTwo'}, 
            [
                React.createElement(
                    'h1', 
                    {}, 
                    'Hello I am H1 of Child Two'
                    ),
                    React.createElement(
                        'h2', 
                        {}, 
                        'Hello I am H2 of Child Two'
                        )
            ]
            )]
    );

    console.log(heading);
        const root = ReactDOM.createRoot(document.getElementById('root'))
        root.render(heading)