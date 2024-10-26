export default function AvailablePlayer({ availablePlayer, handleChoosePlayer }) {
    const { player_name, player_img, country, type, batting_style, bolling_style, rating, bidding_price } = availablePlayer;
    return (
        <div className='border border-gray-300 p-5 space-y-4 rounded-lg text-sm'>
            <img src={player_img} className="w-full h-52 rounded" />
            <div className="flex gap-3 items-center">
                <img src="https://img.icons8.com/?size=100&id=12437&format=png&color=000000" className="w-5 h-5" />
                <h3 className="font-medium pt-1 text-lg">{player_name}</h3>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img src="https://img.icons8.com/?size=100&id=2755&format=png&color=000000" className="w-3 h-3" />
                    <p className="text-sm text-gray-700 font-medium">{country}</p>
                </div>
                <p className="text-gray-500">{type}</p>
            </div>
            <p className="text-gray-600">Rating: {rating}</p>
            <div className="flex justify-between font-medium text-gray-700">
                <p>{batting_style}</p>
                <p>{bolling_style}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-gray-800 font-medium">Price: ${bidding_price}</p>
                <button onClick={() => handleChoosePlayer(availablePlayer)} className="bg-yellow-200 px-3 py-2 rounded font-medium border border-yellow-300">Choose Player</button>
            </div>
        </div>
    )
}