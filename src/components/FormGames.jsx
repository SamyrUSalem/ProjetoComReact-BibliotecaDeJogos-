import { useState } from "react"
import PropTypes from "prop-types"
import Input from "./Input"

FormGames.propTypes = {
    addGame: PropTypes.func
}

export default function FormGames({ addGame }) {
    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")

    const submit = (ev) => {
        ev.preventDefault()
        addGame({ title, img })
        setTitle("")
        setImg("")
    }

    return (
        <form onSubmit={submit}>
            <Input id="title" label="Título: " value={title} setValue={setTitle} />
            <Input id="img" label="Capa: " value={img} setValue={setImg} />
            <button type="submit">Enviar!</button>
        </form>
    )
}