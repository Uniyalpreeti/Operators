import React,{useEffect} from "react";
export function Covid(){
    const getresponse=async()=>{
        try{
            const res=await fetch(`https://dummyjson.com/products`);
            const data=await res.json();
            console.log(data);
    
        }
        catch(err)
        {
            console.log(err)
        }
    }

useEffect(()=>{
    getresponse();
},[]);

return(
    <div>



        

    </div>


)
}

 