import { useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

export const Preloader = ()=>{
    const [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        },8000)
    },[])
    return(
        <>
        <div className="preloader">
        <ScaleLoader
        color={color}
        loading={loading}
        size={22}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={0.9}
        width={8}
      />
        </div>
        
        </>
    )
}