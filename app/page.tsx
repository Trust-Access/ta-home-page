import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Globe, Linkedin, Lock, Mail, Menu, Shield, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function TrustAccessLanding() {
	return (
		<div className='min-h-screen bg-white'>
			{/* Header */}
			<header className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
				<div className='container flex h-16 items-center justify-between px-4 md:px-6'>
					<div className='flex items-center space-x-3'>
						<Image
							src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon-v9YclKNTugIW3t2efXVwjAoqMRC4o8.png'
							alt='Trust Access'
							width={32}
							height={32}
							className='h-8 w-8'
						/>
						<span className='text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent'>
							Trust Access
						</span>
					</div>

					<nav className='hidden md:flex items-center space-x-8'>
						<Link
							href='#services'
							className='text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'
						>
							Serviços
						</Link>
						<Link
							href='#solutions'
							className='text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'
						>
							Soluções
						</Link>
						<Link
							href='#cases'
							className='text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'
						>
							Cases
						</Link>
						<Link
							href='#contact'
							className='text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'
						>
							Contato
						</Link>
					</nav>

					<div className='flex items-center space-x-4'>
						<Button variant='ghost' className='hidden md:inline-flex'>
							Login
						</Button>
						<Button className='bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700'>
							Agendar Demo
						</Button>
						<Button variant='ghost' size='icon' className='md:hidden'>
							<Menu className='h-5 w-5' />
						</Button>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className='relative py-20 md:py-32 overflow-hidden'>
				{/* Geometric Background Pattern */}
				<div className='absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-100'>
					<div className='absolute inset-0 opacity-30'>
						<svg className='w-full h-full' viewBox='0 0 1200 800' fill='none'>
							<defs>
								<pattern
									id='hexagons'
									x='0'
									y='0'
									width='100'
									height='87'
									patternUnits='userSpaceOnUse'
								>
									<polygon
										points='50,0 93.3,25 93.3,62 50,87 6.7,62 6.7,25'
										fill='none'
										stroke='currentColor'
										strokeWidth='1'
										opacity='0.3'
									/>
								</pattern>
							</defs>
							<rect
								width='100%'
								height='100%'
								fill='url(#hexagons)'
								className='text-teal-300'
							/>
						</svg>
					</div>
				</div>

				<div className='container relative px-4 md:px-6'>
					<div className='max-w-4xl'>
						<div className='space-y-8'>
							<h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-900'>
								IAM e Segurança como Serviço para{' '}
								<span className='bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent'>
									Operações Seguras
								</span>
							</h1>

							<p className='text-xl text-gray-600 max-w-3xl leading-relaxed'>
								Implementamos soluções robustas de gestão de identidades e
								acessos. Com foco na experiência do usuário, eficiência
								operacional e redução de riscos, garantimos que sua empresa
								opere com segurança, controle e simplicidade.
							</p>

							<p className='text-lg text-gray-700 max-w-3xl leading-relaxed'>
								Nossa criptografia simples e acessível oferece controle completo
								sobre suas informações, em qualquer lugar que elas se
								movam—mesmo quando compartilhadas fora da sua organização.
							</p>

							<div className='pt-4'>
								<Button
									size='lg'
									className='bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-lg px-8 py-6 rounded-full'
								>
									Agendar Demo
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Trust Section */}
			<section className='py-16 bg-gradient-to-r from-teal-50 to-blue-50'>
				<div className='container px-4 md:px-6'>
					<div className='text-center space-y-8'>
						<p className='text-lg font-medium text-gray-700 uppercase tracking-wide'>
							Mais de{' '}
							<span className='font-bold text-2xl bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent'>
								500+ EMPRESAS
							</span>{' '}
							confiam na Trust Access para segurança e gestão de acesso.
						</p>

						<div className='grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60'>
							<div className='flex items-center justify-center'>
								<div className='text-2xl font-bold text-gray-500'>MINING</div>
							</div>
							<div className='flex items-center justify-center'>
								<div className='text-2xl font-bold text-gray-500'>HOTMART</div>
							</div>
							<div className='flex items-center justify-center'>
								<div className='text-2xl font-bold text-gray-500'>ULTIMATE</div>
							</div>
							<div className='flex items-center justify-center'>
								<div className='text-2xl font-bold text-gray-500'>
									ENTERPRISE
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id='services' className='py-20 md:py-32'>
				<div className='container px-4 md:px-6'>
					<div className='text-center space-y-4 mb-16'>
						<h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-600'>
							Com a Trust Access, você pode:
						</h2>
					</div>

					<div className='grid gap-16 lg:grid-cols-2 items-center'>
						<div className='space-y-8'>
							<div className='space-y-6'>
								<h3 className='text-3xl font-bold text-gray-900'>
									Proteger Dados Sensíveis Sem Limitar Sua Capacidade de
									Compartilhá-los
								</h3>
								<p className='text-lg text-gray-600 leading-relaxed'>
									A Trust Access facilita a adição de proteção a e-mails,
									arquivos, anexos e até mesmo dados fluindo através de outros
									aplicativos SaaS – sem necessidade de novas contas. Essa
									proteção se estende além do perímetro da sua organização para
									dar controle auditável mesmo depois que os dados saíram da sua
									rede.
								</p>
							</div>
						</div>

						<div className='relative'>
							<div className='bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-3xl p-8 relative overflow-hidden'>
								{/* Mock Interface */}
								<div className='bg-white rounded-lg shadow-lg p-6 space-y-4'>
									<div className='flex items-center space-x-3 mb-6'>
										<div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center'>
											<Users className='w-4 h-4 text-white' />
										</div>
										<div className='flex-1'>
											<div className='text-sm text-gray-500'>Para</div>
											<div className='font-medium'>admin@empresa.com.br</div>
										</div>
										<Button size='sm' variant='ghost'>
											<span className='text-red-500'>×</span>
										</Button>
									</div>

									<div className='flex items-center space-x-3 mb-6'>
										<div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center'>
											<Users className='w-4 h-4 text-white' />
										</div>
										<div className='flex-1'>
											<div className='text-sm text-gray-500'>De</div>
											<div className='font-medium'>
												contato@trustaccess.com.br
											</div>
										</div>
										<Button size='sm' variant='ghost'>
											<span className='text-red-500'>×</span>
										</Button>
									</div>

									<div className='bg-blue-50 rounded-lg p-4 space-y-3'>
										<div className='flex items-center justify-between'>
											<span className='text-sm font-medium text-blue-700'>
												OPÇÕES DE MENSAGEM
											</span>
											<div className='flex items-center space-x-2'>
												<span className='text-xs text-blue-600'>Proteção</span>
												<div className='w-8 h-4 bg-blue-500 rounded-full relative'>
													<div className='w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5'></div>
												</div>
												<span className='text-xs font-medium text-blue-600'>
													ON
												</span>
											</div>
										</div>

										<div className='space-y-2'>
											<div className='flex items-center space-x-2'>
												<Shield className='w-4 h-4 text-blue-500' />
												<span className='text-sm'>
													Desabilitar Encaminhamento
												</span>
												<div className='ml-auto w-8 h-4 bg-blue-500 rounded-full relative'>
													<div className='w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5'></div>
												</div>
											</div>

											<div className='flex items-center space-x-2'>
												<Users className='w-4 h-4 text-blue-500' />
												<span className='text-sm'>Data de Expiração</span>
												<div className='ml-auto w-8 h-4 bg-blue-500 rounded-full relative'>
													<div className='w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5'></div>
												</div>
											</div>
										</div>

										<div className='flex items-center space-x-2 pt-2'>
											<Input placeholder='1' className='w-16 h-8' />
											<Select>
												<SelectTrigger className='w-24 h-8'>
													<SelectValue placeholder='Semana' />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value='week'>Semana</SelectItem>
													<SelectItem value='month'>Mês</SelectItem>
												</SelectContent>
											</Select>
										</div>

										<div className='text-xs text-gray-500'>
											14/7/2024 @ 10:04 AM
										</div>

										<div className='border-t pt-3 space-y-2'>
											<div className='text-sm font-medium text-blue-700'>
												OPÇÕES DE ANEXO
											</div>
											<div className='flex items-center space-x-2'>
												<Lock className='w-4 h-4 text-blue-500' />
												<span className='text-sm'>Marca d'água</span>
												<div className='ml-auto w-8 h-4 bg-blue-500 rounded-full relative'>
													<div className='w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5'></div>
												</div>
											</div>

											<div className='flex items-center space-x-2'>
												<Shield className='w-4 h-4 text-blue-500' />
												<span className='text-sm'>Proteção Persistente</span>
												<div className='ml-auto w-8 h-4 bg-blue-500 rounded-full relative'>
													<div className='w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5'></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Compliance Section */}
			<section className='py-20 md:py-32 bg-gray-50'>
				<div className='container px-4 md:px-6'>
					<div className='grid gap-16 lg:grid-cols-2 items-center'>
						<div className='relative'>
							<div className='bg-gradient-to-br from-teal-100 via-blue-100 to-cyan-100 rounded-3xl p-8 relative overflow-hidden'>
								<Image
									src='/placeholder.svg?height=400&width=600'
									alt='Professional working on compliance'
									width={600}
									height={400}
									className='rounded-lg shadow-lg'
								/>

								{/* Mock File Interface Overlay */}
								<div className='absolute top-12 right-8 bg-white rounded-lg shadow-xl p-4 w-64'>
									<div className='flex items-center space-x-2 mb-3'>
										<div className='w-6 h-6 bg-red-500 rounded flex items-center justify-center'>
											<span className='text-white text-xs'>PDF</span>
										</div>
										<div className='flex-1'>
											<div className='text-sm font-medium'>
												Relatório Trimestral
											</div>
											<div className='text-xs text-gray-500'>
												Empresa.pdf.tdf
											</div>
										</div>
										<Button size='sm' variant='ghost'>
											<span className='text-gray-400'>×</span>
										</Button>
									</div>

									<div className='space-y-2 text-xs'>
										<div className='flex justify-between'>
											<span className='text-gray-600'>Aberto</span>
											<span>5:05 PM por mim</span>
										</div>
										<div className='flex justify-between'>
											<span className='text-gray-600'>Criado</span>
											<span>5:05 PM com Trust Access para Drive</span>
										</div>
									</div>

									<div className='mt-4 pt-3 border-t'>
										<div className='space-y-2'>
											<div className='flex items-center space-x-2'>
												<Checkbox checked />
												<span className='text-xs'>
													Desabilitar re-compartilhamento
												</span>
											</div>
											<div className='flex items-center space-x-2'>
												<Checkbox checked />
												<span className='text-xs'>Marca d'água</span>
											</div>
											<div className='flex items-center space-x-2'>
												<Checkbox checked />
												<span className='text-xs'>
													Data de expiração (clique para redefinir)
												</span>
											</div>
										</div>

										<div className='text-xs text-gray-500 mt-2'>
											16 de fevereiro, 2023 1:45 PM
										</div>

										<div className='mt-3 pt-2 border-t'>
											<div className='flex items-center space-x-1 text-red-600 text-xs'>
												<span className='w-2 h-2 bg-red-500 rounded-full'></span>
												<span>Revogar Acesso de todos os Convidados</span>
											</div>

											<div className='mt-2 text-xs font-medium'>
												Usuários Permitidos (3)
											</div>
											<div className='space-y-1 mt-1'>
												<div className='flex items-center space-x-2'>
													<div className='w-4 h-4 bg-gray-300 rounded-full'></div>
													<span className='text-xs'>admin@empresa.com.br</span>
												</div>
												<div className='flex items-center space-x-2'>
													<div className='w-4 h-4 bg-gray-300 rounded-full'></div>
													<span className='text-xs'>user@empresa.com.br</span>
												</div>
												<div className='flex items-center space-x-2'>
													<div className='w-4 h-4 bg-blue-500 rounded-full'></div>
													<span className='text-xs'>
														contato@trustaccess.com.br
													</span>
													<span className='text-xs text-blue-600'>
														Acessado 12 minutos atrás
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='space-y-8'>
							<div className='space-y-6'>
								<h3 className='text-3xl font-bold text-gray-900'>
									Fortalecer Conformidade
								</h3>
								<p className='text-lg text-gray-600 leading-relaxed'>
									Seja você do setor financeiro, manufatura, educação ou saúde,
									a criptografia e controles de acesso da Trust Access suportam
									até mesmo as regulamentações mais rigorosas, incluindo LGPD,
									GDPR, ISO 27001, SOC 2, e muitas outras.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Audit Section */}
			<section className='py-20 md:py-32'>
				<div className='container px-4 md:px-6'>
					<div className='grid gap-16 lg:grid-cols-2 items-center'>
						<div className='space-y-8'>
							<div className='space-y-6'>
								<h3 className='text-3xl font-bold text-gray-900'>
									Auditar e Controlar o Fluxo de Dados Dentro e Fora da Sua
									Organização
								</h3>
								<p className='text-lg text-gray-600 leading-relaxed'>
									Proteja dados em movimento, seja um e-mail de entrada ou uma
									mensagem de saída, ou uma página de sistema interno. Com a
									Trust Access, você pode alterar ou revogar permissões de
									acesso a qualquer momento.
								</p>
							</div>
						</div>

						<div className='relative'>
							<div className='bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100 rounded-3xl p-8 relative overflow-hidden'>
								<Image
									src='/placeholder.svg?height=400&width=600'
									alt='Data audit and control'
									width={600}
									height={400}
									className='rounded-lg shadow-lg'
								/>

								{/* Mock Email Interface Overlay */}
								<div className='absolute top-8 right-8 bg-white rounded-lg shadow-xl p-4 w-72'>
									<div className='flex items-center space-x-2 mb-4'>
										<div className='text-sm font-medium text-blue-600'>
											Para
										</div>
										<div className='flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1'>
											<div className='w-6 h-6 bg-gray-400 rounded-full'></div>
											<span className='text-sm'>admin@empresa.com.br</span>
											<Button size='sm' variant='ghost' className='h-4 w-4 p-0'>
												<span className='text-gray-400'>×</span>
											</Button>
										</div>
									</div>

									<div className='flex items-center space-x-2 mb-6'>
										<div className='text-sm font-medium text-gray-600'>De</div>
										<div className='flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1'>
											<div className='w-6 h-6 bg-green-500 rounded-full'></div>
											<span className='text-sm'>
												contato@trustaccess.com.br
											</span>
											<Button size='sm' variant='ghost' className='h-4 w-4 p-0'>
												<span className='text-gray-400'>×</span>
											</Button>
										</div>
									</div>

									<div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4'>
										<Image
											src='/placeholder.svg?height=200&width=250'
											alt='Email content preview'
											width={250}
											height={200}
											className='rounded-lg w-full'
										/>

										<div className='mt-4 flex items-center justify-between'>
											<span className='text-sm font-medium text-blue-700'>
												Proteção
											</span>
											<div className='flex items-center space-x-2'>
												<span className='text-xs text-blue-600'>ON</span>
												<div className='w-8 h-4 bg-blue-500 rounded-full relative'>
													<div className='w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5'></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section id='cases' className='py-20 md:py-32 bg-gray-50'>
				<div className='container px-4 md:px-6'>
					<div className='grid gap-12 lg:grid-cols-2'>
						<Card className='border-0 shadow-lg bg-white'>
							<CardContent className='p-8'>
								<div className='space-y-6'>
									<div className='text-2xl font-bold text-gray-400 tracking-wider'>
										VALE
									</div>

									<blockquote className='text-lg text-gray-700 leading-relaxed'>
										"Fiquei realmente impressionado com a cultura da empresa e o
										que vocês fazem para ajudar um cliente a se integrar. Não é
										como qualquer outra empresa. É algo completamente diferente.
										Vocês realmente se destacam por não fazer as coisas que todo
										mundo faz: Nada se perde, tudo é rápido. Tudo é realmente
										mais rápido do que eu esperaria, com muito mais detalhes do
										que eu esperaria. Estou realmente impressionado."
									</blockquote>

									<div className='pt-4'>
										<div className='font-semibold text-gray-900'>
											Carlos Silva
										</div>
										<div className='text-gray-600'>
											Gerente de Segurança da Informação e Privacidade
										</div>
										<div className='text-gray-500'>MINING</div>
									</div>

									<Link
										href='#'
										className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium'
									>
										Ler o Caso de Estudo →
									</Link>
								</div>
							</CardContent>
						</Card>

						<div className='space-y-8'>
							<div className='relative'>
								<Image
									src='/placeholder.svg?height=300&width=500'
									alt='Professional using Trust Access'
									width={500}
									height={300}
									className='rounded-lg shadow-lg w-full'
								/>
							</div>

							<Card className='border-0 shadow-lg bg-white'>
								<CardContent className='p-6'>
									<div className='space-y-4'>
										<div className='flex items-center space-x-3'>
											<div className='text-xl font-bold text-blue-600'>
												CLIENT
											</div>
										</div>

										<h4 className='text-lg font-semibold text-gray-900'>
											CLIENT Substitui Soluções Complexas pela Trust Access para
											Gestão Simplificada de Dados
										</h4>

										<blockquote className='text-gray-700'>
											"Ter uma ferramenta como a Trust Access que pudéssemos
											implementar rapidamente, que não exigisse muito trabalho
											para colocar em funcionamento, foi uma vantagem."
										</blockquote>

										<div className='pt-2'>
											<div className='font-semibold text-gray-900'>
												Roberto Santos
											</div>
											<div className='text-gray-600'>
												Engenheiro Sênior de Segurança
											</div>
											<div className='text-gray-500'>Hotmart</div>
										</div>

										<Link
											href='#'
											className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium'
										>
											Ler o Caso →
										</Link>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Demo Form Section */}
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
								<form className='space-y-6'>
									<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
										<div className='space-y-2'>
											<Label htmlFor='firstName'>Nome*</Label>
											<Input id='firstName' placeholder='Nome' required />
										</div>
										<div className='space-y-2'>
											<Label htmlFor='lastName'>Sobrenome*</Label>
											<Input id='lastName' placeholder='Sobrenome' required />
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
											/>
										</div>
										<div className='space-y-2'>
											<Label htmlFor='phone'>Telefone*</Label>
											<Input id='phone' placeholder='Telefone' required />
										</div>
									</div>

									<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
										<div className='space-y-2'>
											<Label htmlFor='company'>Empresa*</Label>
											<Input id='company' placeholder='Empresa' required />
										</div>
										<div className='space-y-2'>
											<Label htmlFor='employees'>Número de Funcionários*</Label>
											<Input
												id='employees'
												placeholder='Número de Funcionários'
												required
											/>
										</div>
									</div>

									<div className='space-y-2'>
										<Label htmlFor='country'>País*</Label>
										<Select>
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
									</div>

									<div className='space-y-2'>
										<Label htmlFor='message'>
											Conte-nos como podemos ajudar
										</Label>
										<Textarea
											id='message'
											placeholder='Descreva suas necessidades de segurança e gestão de acesso...'
											rows={4}
										/>
									</div>

									<div className='space-y-2'>
										<Label htmlFor='source'>Como você soube sobre nós?*</Label>
										<Select>
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
									</div>

									<div className='space-y-4'>
										<div className='text-sm text-gray-600'>
											Ao completar este formulário, você concorda em receber
											comunicações de marketing da Trust Access. Você pode
											cancelar a inscrição a qualquer momento. Consulte nossa{' '}
											<Link href='#' className='text-blue-600 hover:underline'>
												Política de Privacidade
											</Link>
											.
										</div>

										<div className='flex items-center space-x-2'>
											<Checkbox id='terms' required />
											<Label htmlFor='terms' className='text-sm'>
												Eu concordo com os termos e condições*
											</Label>
										</div>
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

			{/* Footer */}
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
								Especialistas em IAM e segurança digital. Implementamos soluções
								robustas de gestão de identidades e acessos.
							</p>
							<div className='flex space-x-4'>
								<Link
									href='#'
									className='text-gray-400 hover:text-white transition-colors'
								>
									<Linkedin className='h-5 w-5' />
								</Link>
								<Link
									href='#'
									className='text-gray-400 hover:text-white transition-colors'
								>
									<Mail className='h-5 w-5' />
								</Link>
								<Link
									href='#'
									className='text-gray-400 hover:text-white transition-colors'
								>
									<Globe className='h-5 w-5' />
								</Link>
							</div>
						</div>

						<div className='space-y-4'>
							<h3 className='text-lg font-semibold'>Serviços</h3>
							<div className='space-y-2'>
								<Link
									href='#'
									className='block text-gray-400 hover:text-white transition-colors'
								>
									Implementação IAM
								</Link>
								<Link
									href='#'
									className='block text-gray-400 hover:text-white transition-colors'
								>
									Consultoria de Segurança
								</Link>
								<Link
									href='#'
									className='block text-gray-400 hover:text-white transition-colors'
								>
									Automação de Processos
								</Link>
								<Link
									href='#'
									className='block text-gray-400 hover:text-white transition-colors'
								>
									Suporte Técnico
								</Link>
							</div>
						</div>

						<div className='space-y-4'>
							<h3 className='text-lg font-semibold'>Empresa</h3>
							<div className='space-y-2'>
								<Link
									href='#'
									className='block text-gray-400 hover:text-white transition-colors'
								>
									Sobre Nós
								</Link>
								<Link
									href='#'
									className='block text-gray-400 hover:text-white transition-colors'
								>
									Cases de Sucesso
								</Link>
								<Link
									href='#'
									className='block text-gray-400 hover:text-white transition-colors'
								>
									Blog
								</Link>
								<Link
									href='#'
									className='block text-gray-400 hover:text-white transition-colors'
								>
									Contato
								</Link>
							</div>
						</div>

						<div className='space-y-4'>
							<h3 className='text-lg font-semibold'>Contato</h3>
							<div className='space-y-2'>
								<div className='text-gray-400'>
									<div>www.trustaccess.com.br</div>
									<div>contato@trustaccess.com.br</div>
								</div>
							</div>
						</div>
					</div>

					<div className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
						<p className='text-gray-400 text-sm'>
							© {new Date().getFullYear()} Trust Access. Todos os direitos
							reservados.
						</p>
						<div className='flex space-x-6 mt-4 md:mt-0'>
							<Link
								href='#'
								className='text-gray-400 hover:text-white text-sm transition-colors'
							>
								Política de Privacidade
							</Link>
							<Link
								href='#'
								className='text-gray-400 hover:text-white text-sm transition-colors'
							>
								Termos de Serviço
							</Link>
							<Link
								href='#'
								className='text-gray-400 hover:text-white text-sm transition-colors'
							>
								LGPD
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
