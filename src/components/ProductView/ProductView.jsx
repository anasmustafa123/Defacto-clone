function ProductView()
{
    return(
        
        <div>
             
             <div className="h-80 w-52 relative">
                
                <img className="h-80 w-52" src="https://i.pinimg.com/564x/34/a4/2f/34a42f3955718d3fe4be880d27f41027.jpg" alt="" />
                
                
                <div className="absolute top-0 right-0 bg-white rounded-full p-3" ><img className="w-50 h-50x" src="https://img.icons8.com/?size=1x&id=87&format=png" alt="" /></div>
                <div className="absolute bottom-1 right-0  bg-white rounded-full p-6"><img  src="https://img.icons8.com/?size=1x&id=3686&format=png" alt="" /></div>
             </div>
             
             
            
            
            <p className=" text-gray-700 text-xs p-1">Standrad Fit Crew Neck</p>
            
            
            <div className="flex items-center gap-1 p-1">
                <p className="text-xs">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                <span className="text-xs font-light">(1)</span>
            </div>
            
            
            
            <div className="flex items-center gap-1 pl-1">
                <p className="font-bold text-gray-800">499 </p>
                <span className="font-medium text-gray-800 text-xs">EGP </span>
            </div>

            
            
        </div>
    )
    
}

export default ProductView;