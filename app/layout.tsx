import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: {
		default: 'Trust Access | Identity & Access Management',
		template: '%s | Trust Access',
	},
	description:
		'Trust Access is a cybersecurity consultancy specialized in authentication, identity, and access management (IAM). Secure, automate, and scale access for your business.',

	generator: 'Next.js',
	applicationName: 'Trust Access',
	keywords: [
		'Identity and Access Management',
		'IAM',
		'Cybersecurity',
		'Authentication',
		'MFA',
		'SSO',
		'Governance',
		'Onboarding Automation',
		'Security Consulting',
		'Trust Access',
	],
	authors: [{ name: 'Trust Access', url: 'https://www.trustaccess.com.br' }],
	creator: 'Trust Access',

	metadataBase: new URL('https://www.trustaccess.com.br'),

	openGraph: {
		title: 'Trust Access | Identity & Access Management',
		description:
			'Secure, automate, and scale identity and access for your organization. Trust Access provides IAM, authentication, and security consulting services.',
		url: 'https://www.trustaccess.com.br',
		siteName: 'Trust Access',
		images: [
			{
				url: 'https://www.trustaccess.com.br/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Trust Access - Identity & Access Management',
			},
		],
		locale: 'en_US',
		type: 'website',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Trust Access | Identity & Access Management',
		description:
			'Secure, automate, and scale identity and access for your organization. Trust Access provides IAM, authentication, and security consulting services.',
		creator: '@trustaccess', // if you don't have, remove this line
		images: ['https://www.trustaccess.com.br/og-image.jpg'],
	},

	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},

	manifest: '/site.webmanifest',

	themeColor: '#0A0A0A',

	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			maxVideoPreview: -1,
			maxImagePreview: 'large',
			maxSnippet: -1,
		},
	},

	category: 'Technology',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
