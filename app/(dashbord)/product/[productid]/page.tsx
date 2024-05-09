import Link from "next/link";

export default function productid( {params} : {params : {productid: string}} ){
    return(
    <main>
    <h1>product id is { params.productid }</h1>
    <Link href ={`/product/${params.productid}/review`}>
    <h1> reviews </h1>
    </Link>
    <Link href ={`/product/${params.productid}/order`}>
    <h1> order </h1>
    </Link>
    </main>
    );
}