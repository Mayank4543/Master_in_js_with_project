import { useState } from "react"
import Login from "../auth/login"


const Header = () => {
    const [modelopen, setModelopen] = useState(false);

    const handleSubmit = () => {
        setModelopen(!modelopen);
    };

    return (
        <>
            <header className="bg-[#2874f0]">
                <div className="container mx-auto px-4 py-3 flex items-center">
                    {/* logo */}
                    <div className="mr-auto md:w-48 flex-shrink-0 leading-3">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            version="1.1"
                            viewBox="0 0 512.016 512.016"
                            xmlSpace="preserve"
                        >
                            <path d="M145.544 151.36L105.184 31.92 0.68 31.92 0.68 0 128.096 0 175.784 141.136z"></path>
                            <path
                                fill="#FFD67F"
                                d="M68.128 124.56L511.336 124.56 426.856 361.584 141.936 361.584z"
                            ></path>
                            <circle cx="377.128" cy="450.56" r="61.456"></circle>
                            <circle cx="191.752" cy="450.56" r="61.456"></circle>
                            <path
                                fill="#FF583E"
                                d="M322.288 308.816L195.832 180.656 322.288 52.496 443.632 52.496 316.968 180.656 443.632 308.816z"
                            ></path>
                        </svg>
                        <h1 className="text-white text-lg font-bold font-sans ">Ecommerce</h1>
                        {/* <h1 className="text-white text-md font-bold">Explore <span className="text-yellow-400">plus</span> </h1> */}
                        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwEA2B12Docc525kwI_pDwR414o3YK_jPBVBCF6frj8z7Yg4Q4I8BYdPOdaEA0pZHWiE&usqp=CAU" alt="8984532 - Amazon Arrow Logo Vector@pngkey.com" style={{ background: 'transparent' }} />
                        
                        */}





                    </div>
                    {/* search */}
                    <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl  rounded-md hidden xl:flex items-center">
                        <select
                            className="bg-[#2874f0] text-white uppercase font-bold text-sm p-4 mr-4 rounded-md "
                            name=""
                            id=""
                        >
                            <option className="pr-4">all categories</option>
                        </select>


                        <div className="rounded-full bg-white w-full px-4 py-4  -ml-4 flex items-center justify-center ">
                            <input type="text" className=" font-semibold pl-4 outline-none" style={{ background: 'transparent' }} name="" id="" placeholder="" />
                            <svg
                                className="ml-auto h-5 px-4 "
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="search"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill=""
                                    d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                                />
                            </svg>
                        </div>


                    </div>







                    {/* phone number */}
                    <div className="ml-0  md:w-48 hidden rounded-md sm:flex flex-col place-items-end">
                        <button className="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 " onClick={handleSubmit}    >Login</button>

                        {

                        }



                    </div>
                    {/* buttons */}
                    <nav className="contents">
                        <ul className="ml-4 xl:w-48 flex items-center justify-end">
                            <li className="ml-2 lg:ml-4 relative inline-block">
                                <a className="" href="">
                                    <svg
                                        className="h-9 lg:h-10 p-2 text-[#fff] text-sm font-medium"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="user"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li className="ml-2 lg:ml-4 relative inline-block">
                                <a className="" href="">
                                    <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                                        3
                                    </div>
                                    <svg
                                        className="h-9 lg:h-10 p-2 text-[#fff] text-sm font-medium"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="heart"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li className="ml-2 lg:ml-4 relative inline-block">
                                <a className="" href="">
                                    <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                                        12
                                    </div>
                                    <svg
                                        className="h-9 lg:h-10 p-2 text-[#fff] text-sm font-medium"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="shopping-cart"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* cart count */}
                    <div className="ml-4 hidden sm:flex flex-col font-bold">
                        <span className="text-xs text-[#fff]  font-medium">Your Cart</span>
                        <span>$2,650,59</span>
                    </div>
                </div>
                <hr />
            </header>

            {modelopen && <Login />}
        </>
    )
}

export default Header