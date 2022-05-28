import React from 'react';

const ManageAllOrders = () => {
    return (
        <div>
            <h3 className='mb-4'>Manage all orders</h3>
            <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                       
                            <th>Customer Name</th>
                            <th>Product Name</th>
                            <th>Order amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <td>Cy Ganderton</td>
                            <td>shoe</td>
                            <td>700</td>
                            <td><button className='btn-sm rounded-lg btn-primary'>ship now</button></td>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr>
                            <td>Cy Ganderton</td>
                            <td>shoe</td>
                            <td>700</td>
                            <td><button className='btn-sm rounded-lg btn-primary'>ship now</button></td>
                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <td>Cy Ganderton</td>
                            <td>shoe</td>
                            <td>700</td>
                            <td><button className='btn-sm rounded-lg btn-primary'>ship now</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default ManageAllOrders;