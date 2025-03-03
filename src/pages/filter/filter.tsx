import { useEffect, useState } from "react"

export default function filter() {
    const [categ, setCateg] = useState<string>('')
    const [lines, setLines] = useState<any[]>([])

    useEffect(() => {
        fetch('http://127.0.0.1:1880/car')
        .then(res => res.json())
        .then(res => {
            car = res
        })
    }, [])

    function linesCreate(cat: any) {
        setCateg(cat)
        let l: any[] = []
        car.forEach((c: any) => {
            if(c.categ == cat) {
                l.push (
                    <div className="flex flex-row w-[500px]" key={c.id}>
                        <div className="w-full">{c.categ}</div>
                        <div className="w-full">{c.value}</div>
                        <div className="w-full">{c.model}</div>
                    </div>
                )
            }
        })
        setLines(l)
    }

    return (
        <div>
            <div>
                <label>Select the category</label>
                <select value={categ} onChange={(evt) => {linesCreate(evt.target.value)}}>
                    <option value=''>Nenhum</option>
                    <option value='Sport'>Sport</option>
                    <option value='SUV'>SUV</option>
                    <option value='Util'>Util</option>
                </select>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row w-[500px]">
                    <div className="w-full">Category</div>
                    <div className="w-full">Value</div>
                    <div className="w-full">Model</div>
                </div>
                {lines}
            </div>
        </div>
    )
}