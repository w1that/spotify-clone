import React, {useEffect} from "react";
import { useRouter } from "next/dist/client/router";
import LinearGenresList from "./LinearGenresList";

export default function FlowField() {
  const router = useRouter();
  console.log(process.env.API_BASE);

  return (
    <div className="w-full px-10 flex justify-center mt-20">
      <LinearGenresList/>
    </div>
  );
}
