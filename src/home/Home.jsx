import { useEffect } from "react";
import Main from "./Main";
export default function Home() {  


  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <div>
   <Main/>
    </div>
  );
}
