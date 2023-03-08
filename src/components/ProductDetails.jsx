

const ProductDetails = ({product}) => {

   const {title, price, description, category, image} = product

 


  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-20 border-2 border-gray-200">
      <img className=" mt-4 w-32 h-32 mx-auto" src={image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className=" mb-2 text-center text-purple-800 font-semibold font-family: Proxima Nova, system-ui, sans-serif;text-xl">{ title.substring(1,25) }</div>
        <div className=" text-center text-xl text-gray-700 font-semibold font-family: Proxima Nova, system-ui, sans-serif;text-2xl">${ price }</div>
      </div>

        
      <div className="px-6 pt-2 pb-2  ">
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Buy Now
          </span>
      </button>
      </div>
   </div>
  )
}

export default ProductDetails