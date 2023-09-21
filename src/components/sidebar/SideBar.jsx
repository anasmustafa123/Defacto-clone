export default function SideBar(){
    let arr1=[" Blazer Jacket","  Athlete"," Boxer"," Cardigan","Coat"]
    let arr2 =[ "46","48","50","52","54"]
    let arr3=["Blue","Bordeaux","Anthracite","Beige","Black"]
    

    return (
       <div className="">   
        <div className="ml-5 ">
        {arr1.map((v, index) => (
            <>
            <div className="flex ml-5">
            <input type="checkbox" />
            <p
                className="ml-2"
                key={index}
              >
                {v}
              </p>
              </div>
              </>
            ))}

        </div>
        <div className="ml-5 mt-4">
        {arr2.map((v, index) => (
            <>
            <div className="flex ml-5">
            <input type="checkbox" />
            <p
                className="ml-2"
                key={index}
              >
                {v}
              </p>
              </div>
              </>
            ))}
        </div> 
        <div className="ml-5 mt-5">
        {arr3.map((v, index) => (
            <>
            <div className="flex ml-5 ">
            <input type="checkbox" />
            <p
                className="ml-2"
                key={index}
              >
                {v}
              </p>
              </div>
              </>
            ))}
        </div>      
        <div className="flex ml-3">
        <div className="w-20"> 
          <p>
            from
          </p>
          <input className="w-20 border border-black rounded" type="number" />
        </div>
        <div className=" w-20 ml-3">
          <p>
            to
          </p>
          <input className="w-20 border border-black rounded" type="number" />
        </div>
        </div>
       </div>
    )
}