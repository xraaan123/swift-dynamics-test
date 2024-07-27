'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import DropdownLanguage from './DropdownLanguage';

const NavBar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const headerName = () => {
        switch (pathname) {
            case '${path}/layout-style':
                return 'Layout & Style';
            case '/form':
                return 'Form';
            default:
                return 'Home';
        }
    }
    // const shoot = () => {
    //     alert(headerName());
    // }

    return (
        /*  */
        <nav className='fixed top-0 left-0 w-full px-6 lg:px-20 py-5'>
            <div className='mx-auto flex justify-between items-center max-w-[1440px]'>
                <Link href='/' >
                    <h1 className='text-xl font-semibold' >
                        {headerName()}
                    </h1>
                </Link >

                {/* <Link href='/test-button'>
                    test page
                </Link> */}
                <DropdownLanguage />
            </div>
        </nav>
    )
}

export default NavBar