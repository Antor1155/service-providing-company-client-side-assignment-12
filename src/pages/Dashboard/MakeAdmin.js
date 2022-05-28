import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    const[r, setR] =useState("");

    useEffect(() => {
        fetch(`https://young-river-42057.herokuapp.com/users`, {
        }).then(res => res.json())
            .then(data => setUsers(data.users));
    }, [r])
    
    function handleAdmin(id){
        fetch('https://young-river-42057.herokuapp.com/makeAdmin',{
            method: "PUT",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify({_id:id})
        }).then(res=>res.json())
        .then(data=>setR(data));
    }

    return (
        <div>
            <h3 className='text-xl font-semibold text-accent mb-4'>All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>email</th>
                            <th>status</th>
                            <th>make admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {users.map((user, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{user?.email}</td>
                                <td>{user.role? user.role : "customer"}</td>
                                <td>{user.role? <span className='font-bold text-primary'>Already admin</span>:
                                <button onClick={()=>handleAdmin(user?._id)} className='btn-sm rounded-lg btn-primary'>make admin</button>}</td>
                            </tr>
                       )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;