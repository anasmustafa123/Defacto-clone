function VerySmallContainer (){
    return( 
        <div className="flex flex-col justify-center items-center">
       <h1 className="mb-2 font-medium text-lg">
       JOIN THE FUN!
       </h1>
       <p className="mb-9 font-normal ">
       Subscribe to our newsletter and get 10% off your first purchase!
       </p>
       <p className="mb-3">
       Who are you shopping for?
       </p>
       <div className="mb-7">
        <div className="flex justify-center gap-3">
<button className=" p-2 font-normal border-2">
femal
</button>
<button className="p-2 font-normal border-2">
    male
</button>
<button className="p-2 font-normal border-2">
    kids
</button>
</div>
    <div className="flex">

            <div>

       <input id="email"name="email" placeholder="E-mail adress" />
       <label htmlFor=""></label>
       </div> 

       <div>
       <button className="p-2 font-normal border-2 flex-row">
        Subscribe Now!
       </button>
       </div>
    </div>
       
       </div>
       <div className="flex mr-1">
       <input type="checkbox" />
       <p>
        I accept the confidenciality policy
       </p>
       </div>
      








       </div>


    )
}
export default VerySmallContainer