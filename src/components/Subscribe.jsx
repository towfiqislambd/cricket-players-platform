import BgShadow from '../assets/bg-shadow.png';

export default function Subscribe() {
    return (
        <div className='translate-y-16 rounded-2xl text-center space-y-4 py-20 outline-2 outline outline-offset-[12px] outline-gray-200' style={{ background: `linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,1)),url(${BgShadow}) no-repeat center center / cover` }}>
            <h1 className='text-3xl font-semibold'>Subscribe To Our Newsletter</h1>
            <p className='pb-1 text-gray-500'>Get the latest updates and news right in your inbox!</p>
            <input type="email" placeholder='Enter Your Email' className='border border-gray-300 px-5 py-2 rounded w-80 outline-none' />
            <button className='bg-gradient-to-r from-pink-500 to-yellow-500 ml-2 font-semibold rounded px-4 h-10 text-sm text-black'>Subscribe</button>
        </div>
    )
}
