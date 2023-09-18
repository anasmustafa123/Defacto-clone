export default function Heder() {
    return(
    <> 
    <div className="flex justify-between w-full  p-4 h-20 items-center
">
        <div className="logo">
        <a href="#j"><img src="https://dfcdn.defacto.com.tr/AssetsV2/dist/img/de-facto-logo-light-v2.svg" alt="" width="141" /></a>
        </div>
        
        <nav className="defacto-nav">
        <ul className=" list-none p-0 m-0 flex ">
        <li className=" mr-5 " ><a href="/" className=" no-underline font-bold text-gray-800 " >WEMAN</a></li>
        <li className=" mr-5 " ><a href="/ت" className=" no-underline font-bold text-gray-800 " >MEN</a></li>
        <li className=" mr-5 " ><a href="/ا" className=" no-underline font-bold text-gray-800 " >KIDS</a></li>
        <li className=" mr-5 " ><a href="/ا" className=" no-underline font-bold text-gray-800 " >BABY</a></li>
        </ul>
        </nav>

        

        <div className=" border border-black  ">
        <i class='bx bx-search'></i>
            <input type="text" placeholder="search:Jean Pants, Basic Body. Moder Fit Shirt Track Suit"   />
        </div>
        


        <div className="">
        <nav className="defacto-nav">
        <ul className=" list-none p-0 m-0 flex" >
        <i class='bx bxs-user'></i>
        <li className=" mr-5 " ><a href="/" className=" no-underline text-gray-800  " >Login</a></li>
        <i class='bx bxs-heart-circle'></i>
        <li className=" mr-5 " ><a href="/ت" className=" no-underline text-gray-800  " >Favorites</a></li>
        <i class='bx bxs-shopping-bag' ></i>
        <li className=" mr-5 " ><a href="/ا" className=" no-underline text-gray-800  " >shopping cart</a></li>
        </ul>
        </nav>
        </div>  

        
        </div>
    </>
    )
}



