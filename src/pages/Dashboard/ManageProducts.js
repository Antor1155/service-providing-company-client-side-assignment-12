import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setTools(data.product));
    }, [])
    console.log(tools);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>available</th>
                            <th>Price</th>
                            <th>minimum</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{tool.name}</td>
                                <td>{tool.available}</td>
                                <td>${tool.price}</td>
                                <td>{tool.minimum}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;