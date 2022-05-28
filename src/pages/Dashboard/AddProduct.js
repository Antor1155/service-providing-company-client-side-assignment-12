import React from 'react';

const AddProduct = () => {
    const handleFormSubmit = async (event) => {
    }
    return (
        <div className='bg-base-500 pb-5'>

        <h2 className='text-center mt-9 mb-4 text-3xl font-bold text-primary'>Please Add products</h2>
        <div className='mx-auto border-4 mb-2 p-2 w-72'>
            <form className='loginForm' onSubmit={handleFormSubmit}>
                <div class="form-control ">
                    <label class="label">
                        <span class="label-text">product name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" class=" " required />
                </div>
                <div class="form-control ">
                    <label class="label">
                        <span class="label-text">product image url</span>
                    </label>
                    <input type="text" name='image' placeholder="url" class=" " required />
                </div>

                <div class="form-control ">
                    <label class="label">
                        <span class="label-text">product description</span>
                    </label>
                    <textarea type="text" name='description' placeholder="description" class=" " required />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">product price</span>
                    </label>
                    <input type="number" min='0' name="price" placeholder="price" class="" required />
                </div>

                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Available quantity</span>
                    </label>
                    <input type="number" min='1' name="available" placeholder="available" class="" required />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">minimun ordre quantity</span>
                    </label>
                    <input type="number" min='1' name="minimum" placeholder="minimum order" class="" required />
                </div>



                <input className='text-center btn btn-primary mt-6' type="sumbit" value="add product" />
            </form>
        </div>
    </div>
    );
};

export default AddProduct;