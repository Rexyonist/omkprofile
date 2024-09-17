import { useRouter } from 'next/navigation';
import React from 'react'

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: false },
  { name: 'About Us', href: '/about', current: false },
  { name: 'Event', href: '/event', current: false },
  { name: 'Program Kerja', href: '/proker', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
  const router = useRouter();

  return (
    <nav className='flex justify-center h-[200px]'>
      <div className='w-full flex items-center'>
        <div>

        </div>
      </div>
    </nav>
  )
}

export default NavBar;