import { useState, ReactNode } from "react";

interface Car {
    id: number;
    categ: string;
    value: string;
    model: string;
}

const car: Car[] = [
    { id: 0, categ: "Sport", value: "120000.00", model: "Golf" },
    { id: 1, categ: "Sport", value: "200000.00", model: "Camaro" },
    { id: 2, categ: "SUV", value: "100000.00", model: "HRV" },
    { id: 3, categ: "SUV", value: "100000.00", model: "T-Cross" },
    { id: 4, categ: "Util", value: "180000.00", model: "Hillux" },
    { id: 5, categ: "Util", value: "160000.00", model: "Ranger" }
];

export default function Filter() {
    const [categ, setCateg] = useState<string>("");
    const [lines, setLines] = useState<ReactNode[]>([]);

    function linesCreate(cat: string) {
        setCateg(cat);
        const l: ReactNode[] = car
            .filter((c) => c.categ === cat)
            .map((c) => (
                <div className="flex flex-row w-[500px]" key={c.id}>
                    <div className="w-full">{c.categ}</div>
                    <div className="w-full">{c.value}</div>
                    <div className="w-full">{c.model}</div>
                </div>
            ));
        setLines(l);
    }

    return (
        <div>
            <div>
                <label>Select the category</label>
                <select value={categ} onChange={(evt) => linesCreate(evt.target.value)}>
                    <option value="">Nenhum</option>
                    <option value="Sport">Sport</option>
                    <option value="SUV">SUV</option>
                    <option value="Util">Util</option>
                </select>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row w-[500px] font-bold">
                    <div className="w-full">Category</div>
                    <div className="w-full">Value</div>
                    <div className="w-full">Model</div>
                </div>
                {lines}
            </div>
        </div>
    );
}
