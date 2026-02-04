'use client';

import {
  ArchiveX,
  ChevronRight,
  CreditCard,
  Headphones,
  Landmark,
  LifeBuoy,
  Mail,
  Radio,
  Search,
  ShieldCheck,
  Star,
  Trophy,
  TrendingUp,
  User,
  UserCog,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const helpTopics = [
  { icon: TrendingUp, text: 'Potenciar tu negocio' },
  { icon: UserCog, text: 'Autogestión total' },
  { icon: Star, text: 'Primeros pasos' },
  { icon: ShieldCheck, text: 'Operativa exitosa' },
  { icon: User, text: 'Perfil ideal' },
  { icon: Landmark, text: 'Finanzas al detalle' },
];

const popularArticles = [
  {
    title: 'Tiempo de preparación de un pedido',
    description:
      'Respetar los tiempos de preparación es fundamental para que el cliente tenga una buena experiencia y califique bien tu local. ¡Aprende todo...',
    href: '#',
  },
  {
    title: 'Cuándo pedir ayuda',
    description:
      'Descubre cómo autogestionarte en los asuntos más relevantes para tu local y por qué canales y temas puedes solicitar ayuda personalizada.',
    href: '#',
  },
  {
    title: 'Descuentos otorgados por PedidosYa a clientes - Solo Chile',
    description:
      'Conoce cómo puedes visualizar los descuentos otorgados por PedidosYa a sus clientes.',
    href: '#',
  },
];

const portalTips = [
  {
    id: 'help-portal-1',
    title: 'Potencia tu negocio',
    description: 'Descubre cómo impulsar tu crecimiento usando el Portal',
    imageHint: 'business growth illustration',
  },
  {
    id: 'help-portal-2',
    title: 'Monitorea tu desempeño',
    description:
      'Aprende todo sobre tu rendimiento, pedidos, evaluaciones y más.',
    imageHint: 'performance monitoring illustration',
  },
  {
    id: 'help-portal-3',
    title: 'Gestiona tu local',
    description: 'Conoce cómo autogestionar tu negocio en el Portal',
    imageHint: 'store management illustration',
  },
];

export default function HelpPage() {
  const mainIllustration = PlaceHolderImages.find(
    (p) => p.id === 'help-illustration-main'
  );

  const onlineHelpTopics = [
    { icon: Mail, text: 'Seguimiento de mis solicitudes', href: '#' },
    { icon: ArchiveX, text: 'Problemas con un pedido', href: '#' },
    { icon: CreditCard, text: 'Finanzas', href: '#' },
    { icon: User, text: 'Administración de mi local', href: '#' },
    { icon: Radio, text: 'Soporte técnico', href: '#' },
    { icon: Trophy, text: 'Programa Socios', href: '#' },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Ayuda</h1>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary/5 hover:text-primary"
              >
                <Headphones className="mr-2" />
                Ayuda en línea
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full max-w-md sm:max-w-lg">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold">
                  Ayuda en línea
                </SheetTitle>
              </SheetHeader>
              <div className="pt-6 pb-4">
                <p className="text-lg mb-6">
                  <span className="font-bold">¡Hola! 👋</span> Te damos la
                  bienvenida a Ayuda en Línea.
                </p>
                <ul className="flex flex-col">
                  {onlineHelpTopics.map((topic, index) => (
                    <li key={topic.text}>
                      <Link
                        href={topic.href}
                        className="flex items-center py-4 text-base font-medium"
                      >
                        <topic.icon className="mr-4 h-5 w-5 text-muted-foreground" />
                        <span className="flex-grow">{topic.text}</span>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </Link>
                      {index < onlineHelpTopics.length - 1 && <Separator />}
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </header>

        <Card className="p-8 mb-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                ¿Cómo podemos ayudarte?
              </h2>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Descubre más información útil"
                  className="pl-10 h-12"
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {helpTopics.map((topic) => (
                  <Button
                    key={topic.text}
                    variant="outline"
                    className="justify-start text-left"
                  >
                    <topic.icon className="mr-2" />
                    {topic.text}
                  </Button>
                ))}
              </div>
            </div>
            {mainIllustration && (
              <div className="hidden md:flex justify-center items-center">
                <Image
                  src={mainIllustration.imageUrl}
                  alt={mainIllustration.description}
                  width={300}
                  height={200}
                  className="object-contain"
                  data-ai-hint={mainIllustration.imageHint}
                />
              </div>
            )}
          </div>
        </Card>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Artículos populares</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {popularArticles.map((article) => (
              <Card key={article.title} className="p-6">
                <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                <CardDescription>{article.description}</CardDescription>
                <Link
                  href={article.href}
                  className="text-primary font-semibold mt-4 inline-block"
                >
                  Leer más &gt;
                </Link>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">
            Aprovecha el Portal al máximo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portalTips.map((tip) => {
              const image = PlaceHolderImages.find((p) => p.id === tip.id);
              return (
                <Card key={tip.title} className="p-6 text-center">
                  {image && (
                    <div className="flex justify-center mb-4">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={150}
                        height={100}
                        className="object-contain h-24"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardTitle className="text-lg mb-2">{tip.title}</CardTitle>
                  <CardDescription className="mb-4">
                    {tip.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5 hover:text-primary"
                  >
                    Ver artículos
                  </Button>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
