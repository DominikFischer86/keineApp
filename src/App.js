import React,{useState} from 'react';
import Tweet from './Tweet';
import './App.css';


function App(){
    const [isRed,setRed] = useState(false);
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
        setRed(!isRed);
    }

    const [users, setUser] = useState([
        {name: 'Ed', message:'Hello there'},
        {name:'John Snow', message: "Winter is coming!"},
        {name:'Romeryo', message:'I am awesome'}
    ])

    return (
        <div className="app">
            <h1>Tweets</h1>
            <Tweet name="Dev Ed" message="This is a random tweet." likes="64456"/>
            <Tweet name="Jon Snow" message="She is MY Queen!" likes="78465"/>
            <Tweet name="Winter Is Coming" message="Is what Eddard Stark said" likes="1456"/>
            <Tweet name="Romeryo" message="Geiler dood." likes="132"/>
            <div className="toggle">
                <h1 className={isRed ? 'red' : ''}>Change my color</h1>
                <button onClick={increment}>Increment</button>
                <h2>{count}</h2>
            </div>
            <div className="messages">
                {users.map(users =>(
                <Tweet name={users.name} message = {users.message} />
                ))}
            </div>
        </div>
    )
    

}

export default App;