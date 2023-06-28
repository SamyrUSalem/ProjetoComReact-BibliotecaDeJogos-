import PropTypes from "prop-types"

Input.prototype = {
    value: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    setValue: PropTypes.func
}

export default function Input({ id, label, value, setValue }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} name={id} value={value} onChange={(ev) => setValue(ev.target.value)} />
        </div>
    )
}