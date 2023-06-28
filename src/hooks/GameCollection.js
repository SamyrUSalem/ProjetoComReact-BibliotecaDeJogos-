import { useState } from "react"

export default function GameCollection() {
    const [games, setGames] = useState(() => {
        const storageGames = localStorage.getItem("GameLib")
        //Para evitar erros, pois caso n tivesse nada ele retornaria um erro com isso será retornado um array vazio
        if (!storageGames) return []
        //Dessa maneira será possível ler o valor
        return JSON.parse(storageGames)
    })

    const addGames = ({ title, img }) => {
        //Estou coletando um valor aleatórioe  entre 0 e 1000000
        const id = Math.floor(Math.random() * 1000000)
        //Esse objeto será o formato com as propriedades q o game terá
        const game = { id, title, img }
        //Estou usando o estado anterior como parâmetro e estou separando todos os elementos atuais do array e criando um novo array com esses elementos + o jogo q foi criado 
        setGames(state => {
            const newState = [...state, game]
            //Estou enviando para o LocalStorage o jogo para evitar q os dados sejam perdidos quandoa  página for atualizada, e o JSON está convertendo o obj em string
            localStorage.setItem("GameLib", JSON.stringify(newState))
            return newState
        })
    }

    const removeGame = (id) => {
        //Estou utilizando um filter, ele irá realziar um filtro, todos os elementos q tiverem o id diferente daquele componente q ativou o evento serã mantidos
        setGames((state) => {
            const newState = state.filter(games => games.id !== id)
            localStorage.setItem("GameLib", JSON.stringify(newState))
            return newState
        })
    }

    return { games, addGames, removeGame }
}