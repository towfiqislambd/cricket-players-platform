import BgShadow from '../assets/logo-footer.png';

export default function Footer() {
    return (
        <div className='bg-slate-800 pb-5 pt-32'>
            <img src={BgShadow} className="w-32 mx-auto mb-7" />
            <div className="grid grid-cols-3 justify-between container mx-auto px-20 pb-14 text-gray-400">
                <div>
                    <h4 className='text-gray-100 pb-3'>About Us</h4>
                    <p className='text-sm'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className='justify-self-center'>
                    <h4 className='text-gray-100 pb-3'>Quick Lins</h4>
                    <ul className='space-y-2' style={{ listStyle: 'disc' }}>
                        <li>Home</li>
                        <li>Service</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-gray-100 pb-3'>Subscribe</h4>
                    <p className='text-sm pb-3 w-2/3'>Subscribe to our newsletter for the latest updates.</p>
                    <input style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }} type="email" placeholder='Enter Your Email' className='border border-gray-300 px-3 h-10 outline-none' />
                    <button style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }} className='bg-gradient-to-r from-pink-500 to-yellow-500 font-semibold px-4 h-10 text-sm text-black'>Subscribe</button>
                </div>
            </div>
            <div className="border-gray-500 border-b-[1px]"></div>
            <div>
                <p className='text-center pt-5 text-gray-500 text-sm'>@2024. Your Company All Rights Reserved</p>
            </div>
        </div>
    )
}
