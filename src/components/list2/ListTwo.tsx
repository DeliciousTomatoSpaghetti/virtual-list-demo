import { useEffect,useRef } from "react"

export default function ListTwo(){
  const divRef=useRef<HTMLDivElement|null>(null)
  useEffect(()=>{
    console.log(divRef.current!.offsetHeight);
    
  },[])  
  return (
    <div 
    ref={divRef}
      style={{
        height:"100000000000000000px"
      }}
    >
      2
    </div>
  )
}