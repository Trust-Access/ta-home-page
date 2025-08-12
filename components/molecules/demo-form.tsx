"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/atoms/ui/card';
import { Checkbox } from '@/components/atoms/ui/checkbox';
import { Input } from '@/components/atoms/ui/input';
import { Label } from '@/components/atoms/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/atoms/ui/select';
import { Textarea } from '@/components/atoms/ui/textarea';
import { Button } from '@/components/atoms/ui/button';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { submitDemo, type DemoFormState } from '@/app/actions/submitDemo';

export default function DemoForm() {
  const initialState: DemoFormState = { errors: {} };
  const [state, formAction] = useFormState(submitDemo, initialState);

  return (
    <section id='contact' className='py-20 md:py-32 bg-background'>
      <div className='container px-4 md:px-6'>
        <div className='max-w-2xl mx-auto'>
          <Card className='border-0 shadow-xl'>
            <CardHeader className='text-center pb-8'>
              <CardTitle className='text-3xl font-bold text-blue-600 mb-4'>
                Agendar uma Demo
              </CardTitle>
            </CardHeader>
            <CardContent className='px-8 pb-8'>
              <form className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='firstName'>Nome*</Label>
                    <Input id='firstName' name='firstName' placeholder='Nome' required />
                    {state.errors?.firstName && (
                      <p className='text-sm text-red-500'>{state.errors.firstName[0]}</p>
                    )}
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='lastName'>Sobrenome*</Label>
                    <Input id='lastName' name='lastName' placeholder='Sobrenome' required />
                    {state.errors?.lastName && (
                      <p className='text-sm text-red-500'>{state.errors.lastName[0]}</p>
                    )}
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='email'>E-mail Corporativo*</Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='E-mail Corporativo'
                      required
                      name='email'
                    />
                    {state.errors?.email && (
                      <p className='text-sm text-red-500'>{state.errors.email[0]}</p>
                    )}
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='phone'>Telefone*</Label>
                    <Input id='phone' name='phone' placeholder='Telefone' required />
                    {state.errors?.phone && (
                      <p className='text-sm text-red-500'>{state.errors.phone[0]}</p>
                    )}
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='company'>Empresa*</Label>
                    <Input id='company' name='company' placeholder='Empresa' required />
                    {state.errors?.company && (
                      <p className='text-sm text-red-500'>{state.errors.company[0]}</p>
                    )}
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='employees'>Número de Funcionários*</Label>
                    <Input
                      id='employees'
                      placeholder='Número de Funcionários'
                      required
                      name='employees'
                    />
                    {state.errors?.employees && (
                      <p className='text-sm text-red-500'>{state.errors.employees[0]}</p>
                    )}
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='country'>País*</Label>
                  <Select name='country'>
                    <SelectTrigger>
                      <SelectValue placeholder='País' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='br'>Brasil</SelectItem>
                      <SelectItem value='us'>Estados Unidos</SelectItem>
                      <SelectItem value='ca'>Canadá</SelectItem>
                      <SelectItem value='mx'>México</SelectItem>
                    </SelectContent>
                  </Select>
                  {state.errors?.country && (
                    <p className='text-sm text-red-500'>{state.errors.country[0]}</p>
                  )}
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='message'>Conte-nos como podemos ajudar</Label>
                  <Textarea
                    id='message'
                    placeholder='Descreva suas necessidades de segurança e gestão de acesso...'
                    rows={4}
                    name='message'
                  />
                  {state.errors?.message && (
                    <p className='text-sm text-red-500'>{state.errors.message[0]}</p>
                  )}
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='source'>Como você soube sobre nós?*</Label>
                  <Select name='source'>
                    <SelectTrigger>
                      <SelectValue placeholder='Selecione uma opção' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='google'>Google</SelectItem>
                      <SelectItem value='linkedin'>LinkedIn</SelectItem>
                      <SelectItem value='referral'>Indicação</SelectItem>
                      <SelectItem value='event'>Evento</SelectItem>
                      <SelectItem value='other'>Outro</SelectItem>
                    </SelectContent>
                  </Select>
                  {state.errors?.source && (
                    <p className='text-sm text-red-500'>{state.errors.source[0]}</p>
                  )}
                </div>
                <div className='space-y-4'>
                  <div className='text-sm text-muted-foreground'>
                    Ao completar este formulário, você concorda em receber comunicações de marketing da Trust Access. Você pode cancelar a inscrição a qualquer momento. Consulte nossa{' '}
                    <Link href='#' className='text-blue-600 hover:underline'>
                      Política de Privacidade
                    </Link>
                    .
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Checkbox id='terms' name='terms' required />
                    <Label htmlFor='terms' className='text-sm'>
                      Eu concordo com os termos e condições*
                    </Label>
                  </div>
                  {state.errors?.terms && (
                    <p className='text-sm text-red-500'>{state.errors.terms[0]}</p>
                  )}
                </div>
                <Button
                  type='submit'
                  formAction={formAction}
                  className='w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-lg py-6'
                >
                  Enviar
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
