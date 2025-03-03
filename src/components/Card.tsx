interface CardProps {
    product: string;
    value: number;
    descount: number;
    funct: (value: number, descount: number) => number;
}

export default function Card(props: CardProps) {
    return (
        <div className='flex flex-col border border-black-700 rounded-sm p-1'>
            <div>Product: {props.product}</div>
            <div>Value: ${props.value}</div>
            {props.descount > 0 ? (
                <div>
                    <div>Desc.: ${props.descount}</div>
                    <div>Price With Desc.: ${props.funct(props.value, props.descount)}</div>
                </div>
            ) : ""}
        </div>
    );
}