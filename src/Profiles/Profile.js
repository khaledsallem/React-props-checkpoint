import React from 'react';

function Profile(props) {
    function handleClick (e) {
        e.preventDefault();
        alert(props.fullName);
      };


    return (
        <div>
            {props.children}
            <h2>{props.fullName}</h2>
            <p>{props.bio}</p>
            <p>{props.profession}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}









export default Profile;