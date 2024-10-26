import SelectedPlayer from "./Selected_player"

export default function SelectedPlayers({ choosePlayers, handleRemovedSelectedPlayers, activeBtn, handleActiveBtn }) {
    return (
        <div className={`${activeBtn === 'selected' ? 'block' : 'hidden'}`}>
            {
                choosePlayers.map(choosePlayer => <SelectedPlayer key={choosePlayer.playerid} choosePlayer={choosePlayer} handleRemovedSelectedPlayers={handleRemovedSelectedPlayers}></SelectedPlayer>)
            }
            <button onClick={() => handleActiveBtn('addMorePlayer')} className='bg-yellow-300 font-medium rounded px-4 py-3 text-sm text-black border border-yellow-500'>Add More Players</button>
        </div>
    )
}
