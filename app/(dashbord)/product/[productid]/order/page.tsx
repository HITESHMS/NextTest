"use client";

import { useRouter } from "next/navigation";

export default function order() {
    const router = new useRouter();
    const handleClick = () =>{
        console.log("order is success");
        router.push("/");
    };

    return (<>
        <h1>Order Product</h1>
        <button onClick={handleClick}> Order Now </button>
    </>);
}