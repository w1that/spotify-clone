import React, {useEffect} from "react";
import { useRouter } from "next/dist/client/router";

export default function FlowField() {
  const router = useRouter();
  console.log(router.pathname)
  // useEffect(() => {
  //   switch (router.query.title) {
  //     case value:
        
  //       break;
    
  //     default:
  //       break;
  //   }
  // }, [])
  

  return (
    <div className="w-full  bg-purple-400 flex justify-center text-white mt-20">
      <h1>FlowField</h1>
    </div>
  );
}
