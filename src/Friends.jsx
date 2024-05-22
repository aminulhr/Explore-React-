
import { useState } from 'react';
import './style.css'
import { useEffect } from 'react';
import Friend from './Friend';
const Friends = () => {
    const [friends, setfriend] = useState([]);
    useEffect(()=>{
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(tata => setfriend(tata))
        // .then(tata => console.log(tata))
    },[])
    return (
        <div className='box'>
            <h3>Friends:{friends.length} </h3>
            {
                friends.map( friend => <Friend
                bondhu = {friend}></Friend> 
                )
            }
        </div>
    );
};

export default Friends;