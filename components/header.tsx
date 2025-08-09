import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '@/data/navigation';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
      <div className='container flex h-16 items-center justify-between px-4 md:px-6'>
        <div className='flex items-center space-x-3'>
          <Image
            src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon-v9YclKNTugIW3t2efXVwjAoqMRC4o8.png'
            alt='Trust Access'
            width={32}
            height={32}
            className='h-8 w-8'
            loading='lazy'
          />
          <span className='text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent'>
            Trust Access
          </span>
        </div>
        <nav className='hidden md:flex items-center space-x-8'>
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className='text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className='flex items-center space-x-4'>
          <Button variant='ghost' className='hidden md:inline-flex'>
            Login
          </Button>
          <Button className='bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700'>
            Book a Demo
          </Button>
          <Button variant='ghost' size='icon' className='md:hidden'>
            <Menu className='h-5 w-5' />
          </Button>
        </div>
      </div>
    </header>
  );
}
