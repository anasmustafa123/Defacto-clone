function SmallContainer({singleData}){


    return(
        <div>
        <div className="inline-flex mb-14 " >
        <img src={singleData.imgUrl} alt="" />
        <div className="ml-2">
            <h1 className="font-semibold">
            {singleData.header} 
            </h1> 
            <p className="font-light">
                {singleData.smallHeader}
            </p> 
        </div>
        </div>
        
      
        <h1 className="font-semibold">
            {singleData.array.arrayHeader}
        </h1>
       <div className="flex flex-col gap-2 font-light mt-2 "> 
        {singleData.array.arrayData.map((value, index) => (
            <p className="cursor-pointer hover:underline hover:text-gray-500" key={index}>{value}</p>
        ) )}
       </div>
       

        </div>
        
        
    )
}
export default SmallContainer;