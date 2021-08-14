import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go';
import { GiTie }from 'react-icons/gi';
import Image from 'next/image'
import { useTheme }from 'next-themes'


// import vercel from '../public/vercel.svg';


function Sidebar() {
    const {theme, setTheme} = useTheme();
    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark':'light')
    }

    return (
        <div>
            <Image 
            src='/images/Head.jpg'
            alt='user avatar'
            width='128px'
            height='128px'
            layout='intrinsic'
            className="mx-auto border rounded-full "
            quality='100'
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-Kaushan">
                <span className="text-green">Aaron </span>
                Su
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Web Developer</p>
            <a 
                className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200" 
                // href='/assets/Aaron Su Resume.pdf' 
                // download='Aaron Su Resume.pdf'
                href='/images/blink.jpg'
                download='blink.jpg'
            > 
                <GiTie className="w-6 h-6"/>Download Resume
            </a>
            <div className='flex justify-around w-9/12 my-5 text-green md:w-full'>
                <a href="https://www.youtube.com/channel/UC6dY0JeAOm-g0NyNnEY0M6g" aria-label='Youtube'>
                    <AiFillYoutube className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="https://github.com/dragonlonss99" aria-label='Github'>
                    <AiFillGithub className="w-8 h-8 ursor-pointer"/>
                </a>
                <a href="https://www.linkedin.com/in/aaron-su-%E8%98%87%E5%BD%A5%E8%9E%8D-25b47a156/" aria-label='Linkedin'>
                    <AiFillLinkedin className="w-8 h-8 ursor-pointer"/>
                </a>
            </div>
            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Taipei, Taiwan</span>
                </div>
                <p className="my-2">dragonlonss@gmail.com</p>
                <p className="my-2">02-12345678/0912333456</p>
            </div>
            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
                onClick={() => window.open('mailto:dragonlonss@gmail.com')}
            >Email Me</button>
            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400'
                    onClick={changeTheme}
            >Toggle Theme </button>
        </div>
    )
}

export default Sidebar
