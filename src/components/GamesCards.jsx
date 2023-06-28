import PropTypes from "prop-types"

GamesCards.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    onRemove: PropTypes.func
}

export default function GamesCards({ title, img, onRemove }) {
    return (
        <div>
            <img src={img} />
            <div>
                <h2>{title}</h2>
                <button onClick={onRemove}>Remover Jogo!</button>
            </div>
        </div>


    )
}