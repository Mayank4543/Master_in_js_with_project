import { Route, Routes } from "react-router-dom"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import Hero from "./components/hero/hero"




function App() {


  return (
    <>

      <Header />
      <section className="bg-white shadow-white mt-5 ml-1 mr-1 body-font" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px; ' }}>
        <div className="container px-20 py-0">
          <div className="flex flex-wrap flex-row lg:justify-between gap-10 justify-center -m-4 ">
            <div className="flex flex-row lg:justify-between gap-10 mx-3 my-5 md:mx-12">
              <div className="user-container flex flex-col items-center justify-center ">
                <div>
                  <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/085406bae47866d5.png?q=100" className="rounded-full w-16 h-16 opacity-100" alt="" />
                </div>
                <div><p className="font-medium">Top Offers</p></div>

              </div>
              <div className="user-container flex flex-col items-center">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/64f1cc66052c66ef.png?q=100" className="rounded-full w-16 h-16 opacity-1" alt="" />
                <p className=" font-medium">Mobiles & Tablets</p>
              </div>
              <div className="user-container flex-col flex items-center">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/1fd83847b32a09d1.png?q=100" className="rounded-full w-16 h-16 opacity-1" alt="" />
                <p className="font-medium">Electronics</p>
              </div>
              <div className="user-container flex-col flex items-center">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/6c0716819ac55121.png?q=100" className="rounded-full w-16 h-16 opacity-1" alt="" />
                <p className="font-medium">Electronics</p>
              </div>
              <div className="user-container flex-col flex items-center">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/1fd83847b32a09d1.png?q=100" className="rounded-full w-16 h-16 opacity-1" alt="" />
                <p className="font-medium">Tvs & Appliances </p>
              </div>
              <div className="user-container flex-col flex items-center">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/6dbed7ba5417672f.jpg?q=100" className="rounded-full w-16 h-16 opacity-1" alt="" />
                <p className="font-medium">Fashion</p>
              </div>
              <div className="user-container flex-col flex items-center">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/c444de48eb75d450.png?q=100" className="rounded-full w-16 h-16 opacity-1" alt="" />
                <p className="font-medium">Beauty</p>
              </div>
              <div className="user-container flex-col flex items-center">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/f9c7aaa5f5455ae7.png?q=100" className="rounded-full w-16 h-16 opacity-1" alt="" />
                <p className="font-medium">Home & Kitchen</p>
              </div>
              <div className="user-container flex-col flex items-center">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/26e11f4698473e49.png?q=100" className="rounded-full w-16 h-16 opacity-1" alt="" />
                <p className="font-medium">Furniture</p>
              </div>
            </div>


          </div>
        </div>
      </section>


      <div className=" mt-5 p-6 py-12 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; dark:bg-violet-400 dark:text-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracki font-bold">Up to
              <br className="sm:hidden" />50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">MAMBA</span>
            </div>
            <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Shop Now</a>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
