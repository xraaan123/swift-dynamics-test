'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import DropdownLanguage from './DropdownLanguage';

const NavBar = () => {
    const router = useRouter();
    const pathname = usePathname();

    // const pathnameClick = () => {
    //     console.log(pathname);
    // }

    const headerName = () => {
        switch (pathname) {
            case '/en/layout-style':
                return 'Layout & Style';
            case '/en/form':
                return 'Form';
            default:
                return '';
        }
    }

    return (
        /*  */
        <nav className='fixed top-0 left-0 w-full px-6 lg:px-20 py-5'>
            <div className='mx-auto flex justify-between items-center max-w-[1440px]'>
                <Link href='/' >
                    <button className={`${headerName() === '' ?
                        ('') :
                        ('border-black border-2 p-1 rounded-lg text-xl font-semibold')}`}>
                        {headerName()}
                    </button>
                </Link >

                {/* <button onClick={pathnameClick}>
                    check pathname
                </button> */}
                <DropdownLanguage />
            </div>
        </nav >
    )
}

export default NavBar