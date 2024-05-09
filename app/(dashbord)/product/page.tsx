import Link from "next/link";
export const metadata = {
    title : "Products"
    //title : {absolute : "PRO-HIT"}
}

export default function product() {
    return (
        <main>
            <h1> Products </h1>
            <Link href='./product/1'>
                <li>prod 1</li>
            </Link>
            <Link href='./product/2'>
                <li>prod 2</li>
            </Link>
        </main>
    );
}