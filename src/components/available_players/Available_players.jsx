import { useEffect, useState } from "react"
import AvailablePlayer from "./available_player"

export default function AvailablePlayers({ handleChoosePlayer, choosePlayers, handleActiveBtn, activeBtn }) {
    const [availablePlayers, setAvailablePlayers] = useState([])
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setAvailablePlayers(data))
    }, [])

    return (
        <div>
            <div className="flex pb-5 justify-between">
                <h3 className={`font-semibold text-2xl ${activeBtn === 'selected' ? 'hidden' : 'block'}`}>Available Players</h3>
                <h3 className={`font-semibold text-2xl ${activeBtn === 'selected' ? 'block' : 'hidden'}`}>Selected Players (<span>{choosePlayers.length}</span> / 6)</h3>
                <div className="flex gap-2">
                    <button onClick={() => handleActiveBtn('available')} className={`border border-gray-300 p-3 rounded font-medium ${activeBtn === 'available' ? 'bg-yellow-400' : ''}`}>Available</button>

                    <button onClick={() => handleActiveBtn('selected')} className={`border border-gray-300 p-3 rounded font-medium ${activeBtn === 'selected' ? 'bg-yellow-400' : ''}`}>Selected (<span >{choosePlayers.length}</span>)</button>

                </div>
            </div>
            <div className={`grid md:grid-cols-3 gap-5 xl:gap-10 ${activeBtn === 'available' ? 'grid' : activeBtn === 'selected' ? 'hidden' : 'grid'}`}>
                {
                    availablePlayers.map((availablePlayer, index) => <AvailablePlayer key={index} availablePlayer={availablePlayer} handleChoosePlayer={handleChoosePlayer}></AvailablePlayer>)
                }
            </div>
        </div>
    )
}