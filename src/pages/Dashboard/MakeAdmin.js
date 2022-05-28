import React from 'react';

const MakeAdmin = () => {
    return (
        <div>
            <h3 className='text-xl font-semibold text-accent mb-4'>All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>status</th>
                            <th>make admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>

                            <td>name</td>
                            <td>aha@gmail.com</td>
                            <td>user</td>
                            <td><button className='btn-sm rounded-lg btn-primary'>make admin</button></td>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr>

                            <td>name</td>
                            <td>aha@gmail.com</td>
                            <td>user</td>
                            <td><button className='btn-sm rounded-lg btn-primary'>make admin</button></td>
                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <td>name</td>
                            <td>aha@gmail.com</td>
                            <td>user</td>
                            <td><button className='btn-sm rounded-lg btn-primary'>make admin</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;