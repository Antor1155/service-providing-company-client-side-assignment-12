import React, { useEffect, useState } from 'react';
import Card from "./Card"

const Tools = () => {
    const [tools, setTools]=useState([]);
    useEffect(()=>{
        fetch('https://young-river-42057.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setTools(data.product));
    },[])
    return (
        <div className='pt-16 pb-20'>
            <h2 className='text-4xl font-semibold mb-16'> A glimpse of good products we supply</h2>
            <div className='grid gap-y-10 grid-cols-1 lg:grid-cols-3 '>
                {
                    tools.slice(0,3).map(tool => <Card tool={tool}></Card>)
                }
              
                
            </div>
        </div>
    );
};

export default Tools;