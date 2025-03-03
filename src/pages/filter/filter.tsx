import { useState } from "react"

const car = [ 
    {id:0, categ: 'Sport', value: '120000.00', model: 'Golf'},
    {id:1, categ: 'Sport', value: '200000.00', model: 'Camaro'},
    {id:2, categ: 'SUV', value: '100000.00', model: 'HRV'},
    {id:3, categ: 'SUV', value: '100000.00', model: 'T-Cross'},
    {id:4, categ: 'Util', value: '180000.00', model: 'Hillux'},
    {id:5, categ: 'Util', value: '160000.00', model: 'Ranger'}
]

export default function filter() {
    const [categ, setCateg] = useState<string>('')
    const [lines, setLines] = useState<any[]>([])

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
                    <option value='Todos'>Todos</option>
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