import { useEffect, useState } from "react"

export default function UseEffect() {
    const [cont, setCont] = useState<number>(0)

    useEffect(() => {

    })

    function add() {
        let c = cont
        c++
        setCont(c)
    }

    return (
        <div>
            <div>
                <p>{`Value of cont: ${cont}`}</p>
                <p>{`Value of cont: ${cont}`}</p>
                <button onClick={add}>Add</button>
            </div>
        </div>
    )
}