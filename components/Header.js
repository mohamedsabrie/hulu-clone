import Image from 'next/image';
import {
    HomeIcon,
    SearchIcon,
    BadgeCheckIcon,
    UserIcon,
    FireIcon,
    CollectionIcon
    } from '@heroicons/react/outline'
import HeaderItem from './HeaderItem';
    
function Header() {
    return (
        <header className="flex flex-col md:flex-row m-5 items-center justify-between ">
            <div className="flex  items-center flex-grow justify-evenly max-w-2xl mt-6">
                <HeaderItem title="Home" Icon={HomeIcon} />
                <HeaderItem title="Trending" Icon={FireIcon} />
                <HeaderItem title="Collection" Icon={CollectionIcon} />
                <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
                <HeaderItem title="Search" Icon={SearchIcon} />
                <HeaderItem title="Account" Icon={UserIcon} />

                {/* <HeaderItem title="Home" Icon={HomeIcon} />
                <HeaderItem title="Home" Icon={HomeIcon} />
                <HeaderItem title="Home" Icon={HomeIcon} /> */}
                



            </div>
        <Image className="object-contain" src="/images/hulu_logo.png" height={100} width={200} />
            
            
        </header>
    )
}

export default Header
