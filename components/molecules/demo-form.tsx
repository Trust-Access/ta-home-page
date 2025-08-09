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
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const DemoFormSchema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(1, 'Required'),
  company: z.string().min(1, 'Required'),
  employees: z.string().min(1, 'Required'),
  country: z.string().min(1, 'Required'),
  message: z.string().optional(),
  source: z.string().min(1, 'Required'),
  terms: z
    .boolean()
    .refine((val) => val, { message: 'You must agree to the terms' }),
});

type DemoFormValues = z.infer<typeof DemoFormSchema>;

export default function DemoForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DemoFormValues>({
    resolver: zodResolver(DemoFormSchema),
    defaultValues: { terms: false },
  });

  const onSubmit = (data: DemoFormValues) => {
    console.log(data);
  };

  return (
    <section id='contact' className='py-20 md:py-32 bg-white'>
      <div className='container px-4 md:px-6'>
        <div className='max-w-2xl mx-auto'>
          <Card className='border-0 shadow-xl'>
            <CardHeader className='text-center pb-8'>
              <CardTitle className='text-3xl font-bold text-blue-600 mb-4'>
                Agendar uma Demo
              </CardTitle>
            </CardHeader>
            <CardContent className='px-8 pb-8'>
              <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='firstName'>Nome*</Label>
                    <Input id='firstName' placeholder='Nome' required {...register('firstName')} />
                    {errors.firstName && (
                      <p className='text-sm text-red-500'>{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='lastName'>Sobrenome*</Label>
                    <Input id='lastName' placeholder='Sobrenome' required {...register('lastName')} />
                    {errors.lastName && (
                      <p className='text-sm text-red-500'>{errors.lastName.message}</p>
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
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className='text-sm text-red-500'>{errors.email.message}</p>
                    )}
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='phone'>Telefone*</Label>
                    <Input id='phone' placeholder='Telefone' required {...register('phone')} />
                    {errors.phone && (
                      <p className='text-sm text-red-500'>{errors.phone.message}</p>
                    )}
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='company'>Empresa*</Label>
                    <Input id='company' placeholder='Empresa' required {...register('company')} />
                    {errors.company && (
                      <p className='text-sm text-red-500'>{errors.company.message}</p>
                    )}
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='employees'>Número de Funcionários*</Label>
                    <Input
                      id='employees'
                      placeholder='Número de Funcionários'
                      required
                      {...register('employees')}
                    />
                    {errors.employees && (
                      <p className='text-sm text-red-500'>{errors.employees.message}</p>
                    )}
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='country'>País*</Label>
                  <Controller
                    name='country'
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
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
                    )}
                  />
                  {errors.country && (
                    <p className='text-sm text-red-500'>{errors.country.message}</p>
                  )}
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='message'>Conte-nos como podemos ajudar</Label>
                  <Textarea
                    id='message'
                    placeholder='Descreva suas necessidades de segurança e gestão de acesso...'
                    rows={4}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className='text-sm text-red-500'>{errors.message.message}</p>
                  )}
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='source'>Como você soube sobre nós?*</Label>
                  <Controller
                    name='source'
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
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
                    )}
                  />
                  {errors.source && (
                    <p className='text-sm text-red-500'>{errors.source.message}</p>
                  )}
                </div>
                <div className='space-y-4'>
                  <div className='text-sm text-gray-600'>
                    Ao completar este formulário, você concorda em receber comunicações de marketing da Trust Access. Você pode cancelar a inscrição a qualquer momento. Consulte nossa{' '}
                    <Link href='#' className='text-blue-600 hover:underline'>
                      Política de Privacidade
                    </Link>
                    .
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Controller
                      name='terms'
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id='terms'
                          required
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <Label htmlFor='terms' className='text-sm'>
                      Eu concordo com os termos e condições*
                    </Label>
                  </div>
                  {errors.terms && (
                    <p className='text-sm text-red-500'>{errors.terms.message}</p>
                  )}
                </div>
                <Button
                  type='submit'
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
