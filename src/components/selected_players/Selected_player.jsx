export default function SelectedPlayer({ choosePlayer, handleRemovedSelectedPlayers }) {
    const { player_name, player_img, batting_style, bidding_price } = choosePlayer;
    return (
        <div>
            <div className="p-5 rounded-lg border flex justify-between items-center mb-5" id="removeItem">
                <div className="flex gap-4 items-center">
                    <img src={player_img} className="w-20 h-20 rounded-lg" />
                    <div className="">
                        <h4 className="font-semibold text-lg">{player_name}</h4>
                        <p className="text-gray-700 font-medium">{batting_style}</p>
                        <p className="text-sm text-gray-500">Price: ${bidding_price}</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleRemovedSelectedPlayers(choosePlayer)}>
                        <img src="https://img.icons8.com/?size=100&id=78581&format=png&color=000000" className="w-8" />
                    </button>
                </div>
            </div>
        </div>
    )
}
