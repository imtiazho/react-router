import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams();
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h2>This is details of a bondhu! {friendId}</h2>
            <h4>{friend.name}</h4>
            <h5>{friend.email}</h5>
            <h6>{friend.website}</h6>
        </div>
    );
};

export default FriendDetail;