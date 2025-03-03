import { useState } from "react" 

import DisplayState from "@/components/DisplayState"

export default function Usestate() {
    const [cont, setCont] = useState<number>(0)

    return (
        <div>
            <DisplayState value={cont} fvalue={setCont}></DisplayState>
        </div>
    )
}