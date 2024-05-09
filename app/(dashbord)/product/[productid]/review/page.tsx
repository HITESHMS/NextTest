import Link from "next/link";

export default function review() {
    return (
        <main>
            <h1> reviews </h1>
            <Link href='./review/1'>
                <li>review 1</li>
            </Link>
            <Link href='./review/2'>
                <li>review 2</li>
            </Link>
        </main>
    );
}