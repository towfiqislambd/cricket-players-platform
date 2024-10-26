import BannerMain from '../assets/banner-main.png';
import BgShadow from '../assets/bg-shadow.png';

export default function Banner({ handleClaimFreeCredit }) {
    const bgShadow = {
        background: `linear-gradient(#000000f3,#000000ef),url(${BgShadow}) no-repeat center center / cover`,
        backgroundBlendMode: 'overlay'
    }
    return (
        <div className='mb-10 rounded-2xl text-center space-y-4 py-14 text-white' style={bgShadow}>
            <img src={BannerMain} className="w-32 mx-auto pb-2" />
            <h1 className='text-3xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-gray-200 pb-1'>Beyond Boundaries Beyond Limits</p>
            <button onClick={handleClaimFreeCredit} className='bg-yellow-300 font-medium rounded px-4 py-2 text-sm text-black'>Claim Free Credit</button>
        </div>
    )
}
