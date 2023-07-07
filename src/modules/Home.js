import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=12')
      const data = await response.json()
      //console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Hero />
      <Categories/>
      <div className="flex flex-col text-center w-full  mt-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
      </div>
      {
        products.length > 0 ? 
        <ProductCard products={products} /> 
        :
        <div>Loading.....</div>
      }
      {/* <Stats/> */}
    </>
  )
}

export default Home