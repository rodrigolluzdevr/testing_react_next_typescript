interface DisplayStateProps {
    value: number;
    fvalue: any;
}

export default function DisplayState(props: DisplayStateProps) {

    function operation(op: number) {
        let c=props.value
        c+=op
        props.fvalue(c)
    }

    return (
        <div className="flex flex-col p-5 rounded-md bg-zinc-300 justify-center items-center w-[300px]">
            <div className="flex bg-zinc-700  text-green-500 justify-center items-center w-[200px] mb-4">{props.value}</div>
            <div className="flex gap-5">
                <button className="btn" onClick={() => operation(1)}>add</button>
                <button className="btn" onClick={() => operation(-1)}>sub</button>
            </div>
        </div>
    )
}