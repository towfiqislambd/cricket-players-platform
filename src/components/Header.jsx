import Logo from '../assets/logo.png';

export default function Header() {
    return (
        <div className='container mx-auto px-20 sticky top-0 bg-[rgba(255,255,255,0.5)] backdrop-blur backdrop-brightness-[0.8'>
            <div className="flex justify-between items-center py-5">
                <img src={Logo} className="w-16" />
                <div className="flex gap-8 items-center text-gray-700">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Team</li>
                    <li>Schedules</li>
                    <button className='flex gap-2 border rounded py-1 px-2 font-semibold'><span id='coin'>0</span> Coin <img className='w-6' src="https://img.icons8.com/?size=100&id=sPBQkuep9vDA&format=png&color=000000" /></button>
                </div>
            </div>
        </div>

    )
}

