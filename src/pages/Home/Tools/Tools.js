import React from 'react';
import Card from "./Card"

const Tools = () => {
    return (
        <div className='py-16'>
            <h2 className='text-3xl font-semibold mb-16'> A glimpse of good products we supply</h2>
            <div className='grid gap-y-10 grid-cols-1 lg:grid-cols-3 '>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    );
};

export default Tools;