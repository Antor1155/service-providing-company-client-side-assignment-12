import React from 'react';

const AddProduct = () => {
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const available = event.target.available.value;
        const minimum = event.target.minimum.value;
        const price = event.target.price.value;

        fetch('https://young-river-42057.herokuapp.com/addItem',{
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({name, image, description, available, minimum, price})
        }).then(res => res.json())
        .then(data => console.log(data));

        event.target.reset();
    }
    return (
        <div className='bg-base-500 pb-5'>

        <h2 className='text-center mt-9 mb-4 text-3xl font-bold text-primary'>Please Add products</h2>
        <div className='mx-auto border-4 mb-2 p-2 w-72'>
            <form className='loginForm' onSubmit={handleFormSubmit}>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">product name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className=" " required />
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">product image url</span>
                    </label>
                    <input type="text" name='image' placeholder="url" className=" " required />
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">product description</span>
                    </label>
                    <textarea type="text" name='description' placeholder="description" className=" " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">product price</span>
                    </label>
                    <input type="number" min='0' name="price" placeholder="price" className="" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                    </label>
                    <input type="number" min='1' name="available" placeholder="available" className="" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">minimun ordre quantity</span>
                    </label>
                    <input type="number" min='1' name="minimum" placeholder="minimum order" className="" required />
                </div>



                <input className='text-center btn btn-primary mt-6' type="submit" value="add product" />
            </form>
        </div>
    </div>
    );
};

export default AddProduct;