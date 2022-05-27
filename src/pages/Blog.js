import React from 'react';

const Blog = () => {
    return (
        <div className='py-5'>
            <h2 className='text-4xl font-bold text-accent'>Blogs</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-7 gap-5'>
                <div className="card-body mx-auto lg:w-96 items-center text-center shadow-xl">
                    <h2 className="card-title">How will you improve the performance of a React Application?
</h2>
                    <p className='italic'>"To increase the performance of React we can do firstly, keep the state and variable as local as possible. Secondly, Try not to re-render or less re-render as much as possible. We can cache different data to keep it local as serve as fast as possible. We can use Lazy loading where import data will be loaded first then laod the less required data. Call or fetch data less where we can keep the data and re use it."</p>
                </div>

                <div className="card-body mx-auto  lg:w-96 items-center text-center shadow-xl">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p className='italic'>"different ways of managing data in react are to pass the data using props. To pass through different state, props drilling may be required but to avoid it, can use Context Api. Through context api, can pass the state to all components inside Context provider and can easily manage the state. Another way of managing state in react, can be react hooks. Using hooks, can pass state to different components easily"</p>
                </div>

                <div className="card-body mx-auto  lg:w-96 items-center text-center shadow-xl">
                    <h2 className="card-title">How does prototypical inheritance work?
</h2>
                    <p className='italic'>"prototypical inheritance is a way through which we provide or add properties and methods in a object. Its mainly a method by which an object can have the properties of other object. It can have both methods and properties to pass to another object. This method is present in javascript. In modern language prototypical inheritance is be passed as childObject.__proto__ = ParentObject"</p>
                </div>

                <div className="card-body mx-auto  lg:w-96 items-center text-center shadow-xl">
                    <h2 className="card-title"> Why you do not set the state directly in React?</h2>
                    <p className='italic'>"Updating the state directly may lead to differnt kind of bugs. One simple example can be, if directly update the state, later the setState() may update the state again and eventually won't get the expected resutl. In simple way after mutating the state, setState may mutate the value again which will lead to bug or unexpected value. Another thing happens, the framework or library work as a whole. Once try to modify it in unexpected way, it might be short-circuted and the work flow may hinder leading to differnt unexpected bugs."</p>
                </div>

                <div className="card-body mx-auto  lg:w-96 items-center text-center shadow-xl">
                    <h2 className="card-title"> What is a unit test? Why should write unit tests?</h2>
                    <p className='italic'>"Unit test can also be reffered as a regression testing. it let the programmer test the code in a refactored way to make the the odules still works correctly. Using unit test, the bugs and error can be identified quickly and fixed.One main benefit of unit test is that, it isolate a funciton, class or method and only test that peice of code. so, step by step, method by method and by codes eventually can test the whole project and can find differet bugs and errors. "</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;