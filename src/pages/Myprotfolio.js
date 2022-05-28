import React from 'react';
import college from "../images/company/collage.jpg"

const Myprotfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={college} class="lg:max-w-sm md:w-100 rounded-lg shadow-2xl" alt='websites screenshot' />
                    <div>
                        <h1 class="text-2xl font-bold"><span className='text-primary'>Name:</span> MD AZIZUL HAKIM ANTOR</h1>
                        <h2 class="text-xl font-bold"><span className='text-primary'>Email:</span> md.antor1155@gmail.com</h2>
                        <div className="divider"></div>
                        <h3 className='text-xl mt-4'> Educational Background</h3>
                        <div class="py-6 flex flex-col items-start">
                            <p><span className='text-red-500'>Bachalor:</span> Weifang University of Science and Technology, China</p>
                            <p><span className='text-orange-400'>college:</span> Military Collegiate School, Khulna</p>
                            <p><span className='text-blue-500'>High Schoole:</span> Military Collegiate School, Khulna</p>
                        </div>
                        <div className="divider"></div>
                        <div>
                            <h2 className='text-2xl text-primary'>links to few of my websites</h2>
                            <p className='text-blue-600 underline'><a target="_blank" rel="noreferrer" href="https://warehouse-734e0.web.app/">Warehouse management website</a></p>
                            <p className='text-blue-600 underline'><a target="_blank" rel="noreferrer" href="https://independent-photographer-726fa.web.app/">Alpha's P_palace for web photographer</a></p>
                            <p className='text-blue-600 underline'><a target="_blank" rel="noreferrer" href="https://superlative-starship-b46f28.netlify.app/home">Best food best health food site</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-7'>
                <h3 className='text-xl mb-2'>As a web developer I am familier with</h3>
                <span className='text-orange-800 px-2'>HTML</span>
                <span className='text-orange-800 px-2'>CSS</span>
                <span className='text-orange-800 px-2'>bootstrap</span>
                <span className='text-orange-800 px-2'>tailwind</span>
                <span className='text-orange-800 px-2'>Javascript</span>
                <span className='text-orange-800 px-2'>React</span>
                <span className='text-orange-800 px-2'>firebase</span>
                <span className='text-orange-800 px-2'>netlify</span>
                <span className='text-orange-800 px-2'>node js</span>
                <span className='text-orange-800 px-2'>express</span>
                <span className='text-orange-800 px-2'>mongodb</span>
                <span className='text-orange-800 px-2'>heroku</span>
                <span className='text-orange-800 px-2'>React router</span>
                <span className='text-orange-800 px-2'>daisy ui</span>
                <span className='text-orange-800 px-2'>React firebase Hook</span>
                <span className='text-orange-800 px-2'>Github</span>
                <span className='text-orange-800 px-2'>git</span>
                <span className='text-orange-800 px-2'>photoshop</span>
                <span className='text-orange-800 px-2'>Adobe xd</span>
                <span className='text-orange-800 px-2'>figma</span>
                <span className='text-orange-800 px-2'>tcp/ip</span>
                
            </div>
        </div>
    );
};

export default Myprotfolio;