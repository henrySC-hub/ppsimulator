import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart2, DollarSign, HelpCircle, Settings } from 'lucide-react';

const portalItems = [
  {
    title: 'Mis Ventas',
    icon: DollarSign,
    description: 'Revisa el historial y detalles de tus ventas.',
    href: '#',
  },
  {
    title: 'Estadísticas',
    icon: BarChart2,
    description: 'Analiza el rendimiento de tu negocio.',
    href: '#',
  },
  {
    title: 'Configuración',
    icon: Settings,
    description: 'Ajusta las preferencias de tu portal.',
    href: '#',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-headline tracking-tight text-primary sm:text-5xl md:text-6xl">
          Bienvenido a tu Portal de Gestión
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-5 md:max-w-3xl">
          Administra tu negocio de forma fácil y eficiente. Aquí encontrarás todas las herramientas que necesitas.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portalItems.map((item) => (
          <Card key={item.title} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-headline">{item.title}</CardTitle>
              <item.icon className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-headline text-primary">¿Necesitas Ayuda?</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Nuestro centro de ayuda está disponible para resolver tus dudas.
        </p>
        <div className="mt-6">
          <Button asChild size="lg">
            <Link href="/help">
              <HelpCircle className="mr-2 h-5 w-5" />
              Ir al Centro de Ayuda
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
