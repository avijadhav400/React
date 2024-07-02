import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])

  //     useEffect(()=>{
  //         fetch('https://api.github.com/users/avijadhav400')
  //         .then(response => response.json())
  //         .then(data => {
  //             console.log(data);
  //             setData(data)
  //         })
  //     }, [])
  return (
    <div className="flex justify-center items-center flex-col bg-gray-500 text-black text-center text-2xl">
      <h3>Followers: {data.followers}</h3>
      <img
        className="flex justify-center items-center"
        src={data.avatar_url}
        alt="git pic"
        width={300}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/avijadhav400");
  return response.json();
};
