import React from 'react'
import { Link } from 'react-router-dom'

const FeatureCard = ({cards = [1, 2, 3]}) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
         <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Popular Categories</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            cards?.map((card) => {
              return (
                <Link to={`/categories/${card}`} className="p-4 md:w-1/3 cursor-pointer">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium capitalize">{card || 'Example card'}</h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">Explore the {card} collection and dive into a world of {card} wonders with just a click...</p>
      
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FeatureCard