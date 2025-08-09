import { Globe, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-3'>
              <Image
                src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon-v9YclKNTugIW3t2efXVwjAoqMRC4o8.png'
                alt='Trust Access'
                width={32}
                height={32}
                className='h-8 w-8'
              />
              <span className='text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent'>
                Trust Access
              </span>
            </div>
            <p className='text-gray-400 max-w-xs'>
              Especialistas em IAM e segurança digital. Implementamos soluções robustas de gestão de identidades e acessos.
            </p>
            <div className='flex space-x-4'>
              <Link href='#' className='text-gray-400 hover:text-white transition-colors'>
                <Linkedin className='h-5 w-5' />
              </Link>
              <Link href='#' className='text-gray-400 hover:text-white transition-colors'>
                <Mail className='h-5 w-5' />
              </Link>
              <Link href='#' className='text-gray-400 hover:text-white transition-colors'>
                <Globe className='h-5 w-5' />
              </Link>
            </div>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Serviços</h3>
            <div className='space-y-2'>
              <Link href='#' className='block text-gray-400 hover:text-white transition-colors'>
                Implementação IAM
              </Link>
              <Link href='#' className='block text-gray-400 hover:text-white transition-colors'>
                Consultoria de Segurança
              </Link>
              <Link href='#' className='block text-gray-400 hover:text-white transition-colors'>
                Automação de Processos
              </Link>
              <Link href='#' className='block text-gray-400 hover:text-white transition-colors'>
                Suporte Técnico
              </Link>
            </div>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Empresa</h3>
            <div className='space-y-2'>
              <Link href='#' className='block text-gray-400 hover:text-white transition-colors'>
                Sobre Nós
              </Link>
              <Link href='#' className='block text-gray-400 hover:text-white transition-colors'>
                Cases de Sucesso
              </Link>
              <Link href='#' className='block text-gray-400 hover:text-white transition-colors'>
                Blog
              </Link>
              <Link href='#' className='block text-gray-400 hover:text-white transition-colors'>
                Contato
              </Link>
            </div>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Contato</h3>
            <div className='space-y-2 text-gray-400'>
              <div>www.trustaccess.com.br</div>
              <div>contato@trustaccess.com.br</div>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm'>
            © {new Date().getFullYear()} Trust Access. Todos os direitos reservados.
          </p>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <Link href='#' className='text-gray-400 hover:text-white text-sm transition-colors'>
              Política de Privacidade
            </Link>
            <Link href='#' className='text-gray-400 hover:text-white text-sm transition-colors'>
              Termos de Serviço
            </Link>
            <Link href='#' className='text-gray-400 hover:text-white text-sm transition-colors'>
              LGPD
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
