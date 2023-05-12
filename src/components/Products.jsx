import React from 'react'
import First from '../Images/Product 1.png'

const Products = () => {
  return (
    <div className='mx-[24px] md:mx-[100px] justify-between'>
        <h2 className='md:text-[36px] text-[24px] font-bold'>Some of Our Products</h2>
        <div className='space-x-12 md:flex'>
          <div>
            <img src={First} alt="" className='rounded-3xl' />
          </div>
          <div>
              <h2 className='text-3xl font-bold'>Online Learning Management System</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Habitasse purus turpis tempor purus lectus convallis egestas. Interdum purus faucibus in id sed nunc mauris nullam molestie. Sed egestas nunc urna convallis nunc odio porttitor. Tincidunt aliquam sed quis urna venenatis duis nunc. Dignissim amet montes morbi facilisi interdum pulvinar. Potenti rhoncus et semper cursus. Venenatis cursus facilisi ultrices velit ut felis vitae non. Vulputate tellus quis scelerisque dui. Sociis cursus purus tincidunt et elit auctor.</p>

              <button className='px-6 py-3 bg-yellow-500 text-black font-medium rounded-md'>View Product</button>
          </div>
        </div>
      
    </div>
  )
}

export default Products
