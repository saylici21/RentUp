import React, { useEffect, useState } from 'react'
import "../himad/himad.css"

const Himad = () => {
    const [users, setUsers] = useState([]);
    const endPoint = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {

        const fetchPhoto = async () => {
            const response = await fetch(endPoint);
            const data = await response.json();
            setUsers(data);
        }
        fetchPhoto();
    }, [])



    return (
        <div className='first'>
            {
                users && users.map(user => (
                    <div className='showItem' key={user.id}>
                        <div className="data">
                            <h1>{user.name}</h1>
                            <p>{user.email}</p>
                            <p>{user.address.street}</p>
                            <button>View</button>
                        </div>
                    </div>
                ))


            }
        </div>
    )
}

export default Himad