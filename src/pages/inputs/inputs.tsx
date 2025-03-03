import { useState } from "react"

import Global from "@/components/Global"

const courses = ["HTML", "React", "Vue", "C#", "Typescript", "Arduino"]

const xcourses = [
    {"course": "HTML"},
    {"course": "React"},
    {"course": "Vue"},
    {"course": "C#"},
    {"course": "Typescript"},
    {"course": "Arduino"},
]

export default function inputs() {
    const [ name, setName ] = useState<string>("")
    const [ course, setCourse ] = useState<string>("")

    function fcourses() {
        return xcourses.map((c: any) => {
            return <option value={c.course}>{c.course}</option>
        })
    }

    return (
        <div >
            <div className="form">
                <label className="formlabel">Name</label>
                <input className="forminput" type="text" value={name} onChange={(evt) => setName(evt.target.value)}></input>
            </div>
            <div className="form">
                <label className="formlabel">Course</label>
                <select className="formselect" value={course} onChange={(evt) => setCourse(evt.target.value)}>
                    {
                        fcourses()
                    }
                </select>
            </div>
            <div>
                <p>{Global.course}</p>
                <p>{Global.year}</p>
            </div>
        </div>
    )
}