
import { useEffect, useState } from "react";
import { useSelector , useDispatch} from "react-redux"
import { fetchCategories } from '../store'
import { fetchProducts } from "../store";
import ProductDetails from "./ProductDetails";


const FormStore = () => {

  const [categorySelect , setcategorySelect ] = useState('')

  const dispatch = useDispatch()

  const { category } = useSelector((state) => {
    return state.categories;
  });

  const { product } = useSelector((state) => {
     return state.products;
  })

  useEffect(() => {
     dispatch(fetchCategories())

  }, [])

  const handleSubmit = e => {
      e.preventDefault()

      dispatch(fetchProducts(categorySelect))
  }


  return (
     <div className=" mx-96 mt-28">
        <form
            onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-4 gap-6">
              <div className="col-span-3 ">
              <select
                   name="category"
                   id="category"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-700
                            focus:border-purple-700 block w-full p-3 dark:bg-purple-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-purple-700 dark:focus:border-purple-700"
                   value={categorySelect}
                   onChange={e => setcategorySelect(e.target.value)}
                  >
               
                  <option value="">--- Select a category ---</option>
                    {category.map(item => (
                      <option
                          key={item}
                          value={item}
                      >{item}</option>
                    ))}
              </select>
              </div>
          
              <input
                 type="submit" 
                 value="Search"
                 className="text-white bg-gradient-to-r from-purple-500 to-pink-700 hover:bg-gradient-to-l focus:ring-4 
                 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 text-xl" 
              />

              
           </div>
        </form>

        <div className="grid grid-cols-4 gap-4 mt">
           {product.map(item => (
               <ProductDetails 
                  key={item.id}
                  product={item}
               />
           ))}            
        </div>

     </div>
  )
}

export default FormStore