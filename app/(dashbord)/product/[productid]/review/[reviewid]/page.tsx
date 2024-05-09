import { Metadata } from "next";

type Props = {
    params: {
        productid: string;
        reviewid: string;
    }
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const titles = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`HITESH Product Id is ${params.productid} and Review Id is ${params.reviewid}`);
        }, 100);
    })
    return {
        title: `${titles}`
    };
}

export default function reviewid({ params }: Props, generateMetadata: any) {
    return (<main>
        {generateMetadata}
        <h1>product id is {params.productid}</h1>
        <h1>review id is {params.reviewid}</h1>
    </main>
    );
}
