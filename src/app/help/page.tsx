'use client';

import {
  ArchiveX,
  ArrowLeft,
  ChevronRight,
  CreditCard,
  Headphones,
  Landmark,
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

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

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

type Order = {
  id: number;
  orderNumber: string;
  date: string;
  price: string;
  status: 'Terminado' | 'Cancelado';
};

export default function HelpPage() {
  const [sheetView, setSheetView] = React.useState('main');
  const [selectedOrder, setSelectedOrder] = React.useState<Order | null>(null);
  const mainIllustration = PlaceHolderImages.find(
    (p) => p.id === 'help-illustration-main'
  );

  const onlineHelpTopics = [
    { id: 'tracking', icon: Mail, text: 'Seguimiento de mis solicitudes' },
    { id: 'issues', icon: ArchiveX, text: 'Problemas con un pedido' },
    { id: 'finance', icon: CreditCard, text: 'Finanzas' },
    { id: 'admin', icon: User, text: 'Administración de mi local' },
    { id: 'support', icon: Radio, text: 'Soporte técnico' },
    { id: 'partners', icon: Trophy, text: 'Programa Socios' },
  ];

  const orders: Order[] = [
    {
      id: 14,
      orderNumber: '1883628713',
      date: '01-02-2026, 2:21 p. m.',
      price: '$10.490',
      status: 'Terminado',
    },
    {
      id: 13,
      orderNumber: '1883465842',
      date: '01-02-2026, 1:08 p. m.',
      price: '$43.390',
      status: 'Cancelado',
    },
    {
      id: 12,
      orderNumber: '1883438302',
      date: '01-02-2026, 12:39 p. m.',
      price: '$12.290',
      status: 'Terminado',
    },
    {
      id: 11,
      orderNumber: '1883371909',
      date: '01-02-2026, 11:52 a. m.',
      price: '$10.280',
      status: 'Cancelado',
    },
  ];

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
    if (order.status === 'Cancelado') {
      setSheetView('issue-detail-canceled');
    } else {
      setSheetView('issue-detail-finished');
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Ayuda</h1>
          <Sheet
            onOpenChange={(open) => {
              if (!open) {
                setSheetView('main');
                setSelectedOrder(null);
              }
            }}
          >
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary/5 hover:text-primary"
              >
                <Headphones className="mr-2" />
                Ayuda en línea
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full max-w-md sm:max-w-lg p-0">
              {sheetView === 'main' && (
                <div className="p-6">
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
                          <button
                            onClick={() => {
                              if (['tracking', 'issues'].includes(topic.id)) {
                                setSheetView(topic.id);
                              }
                            }}
                            className="w-full text-left disabled:opacity-50"
                            disabled={!['tracking', 'issues'].includes(topic.id)}
                          >
                            <div className="flex items-center py-4 text-base font-medium">
                              <topic.icon className="mr-4 h-5 w-5 text-muted-foreground" />
                              <span className="flex-grow">{topic.text}</span>
                              <ChevronRight className="h-5 w-5 text-muted-foreground" />
                            </div>
                          </button>
                          {index < onlineHelpTopics.length - 1 && (
                            <Separator />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {sheetView === 'tracking' && (
                <div className="flex flex-col h-full">
                  <div className="flex items-center border-b">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-14 w-14 shrink-0"
                      onClick={() => setSheetView('main')}
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <h2 className="font-semibold text-lg">
                      Seguimiento de mis solicitudes
                    </h2>
                  </div>
                  <div className="flex-grow flex flex-col items-center justify-center text-center p-6 bg-background">
                    <div className="bg-muted p-5 rounded-full mb-6">
                      <Mail className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <p className="font-bold text-lg mb-1">¡Excelente!</p>
                    <p className="text-muted-foreground">
                      No tienes consultas recientes
                    </p>
                  </div>
                </div>
              )}
              {sheetView === 'issues' && (
                <div className="flex flex-col h-full">
                  <div className="flex items-center border-b shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-14 w-14"
                      onClick={() => setSheetView('main')}
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <h2 className="font-semibold text-lg">
                      Problemas con un pedido
                    </h2>
                  </div>

                  <div className="p-4 border-b shrink-0 space-y-2">
                    <Label>Fecha</Label>
                    <Select defaultValue="todas">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todas">Todas</SelectItem>
                        <SelectItem value="hoy">Hoy</SelectItem>
                        <SelectItem value="ayer">Ayer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <ScrollArea className="flex-grow bg-background">
                    <div className="p-4 space-y-3">
                      {orders.map((order) => (
                        <button
                          key={order.id}
                          className="w-full text-left"
                          onClick={() => handleOrderClick(order)}
                        >
                          <div className="border rounded-lg p-4 bg-card hover:bg-muted">
                            <div className="flex justify-between items-start">
                              <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">
                                  #{order.id}
                                </p>
                                <p className="font-semibold text-card-foreground">
                                  {order.orderNumber}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {order.date}
                                </p>
                              </div>
                              <div className="text-right flex flex-col justify-between items-end h-full space-y-1">
                                <Badge
                                  className={cn(
                                    'capitalize text-xs font-semibold',
                                    order.status === 'Terminado'
                                      ? 'bg-green-100 text-green-800 border-transparent hover:bg-green-100'
                                      : 'bg-red-100 text-red-800 border-transparent hover:bg-red-100'
                                  )}
                                >
                                  {order.status}
                                </Badge>
                                <p className="font-semibold pt-4 text-card-foreground">
                                  {order.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              )}
              {sheetView === 'issue-detail-canceled' && selectedOrder && (
                <div className="flex flex-col h-full">
                  <div className="flex items-center border-b shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-14 w-14"
                      onClick={() => setSheetView('issues')}
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <h2 className="font-semibold text-lg">
                      Problemas con un pedido cancelado
                    </h2>
                  </div>
                  <div className="p-6 flex-grow space-y-6">
                    <div className="space-y-1">
                      <p className="font-semibold text-card-foreground">
                        Pedido #{selectedOrder.orderNumber}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {selectedOrder.date}
                      </p>
                    </div>
                    <Separator />
                    <RadioGroup
                      defaultValue="cliente-cancelo"
                      className="space-y-4"
                    >
                      <h3 className="font-semibold">
                        ¿Cuál fue el motivo de la cancelación?
                      </h3>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cliente-cancelo" id="r1" />
                        <Label htmlFor="r1">El cliente canceló el pedido</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yo-cancele" id="r2" />
                        <Label htmlFor="r2">Yo cancelé el pedido</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="otro" id="r3" />
                        <Label htmlFor="r3">Otro motivo</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="p-6 border-t mt-auto">
                    <Button className="w-full" size="lg">
                      Continuar
                    </Button>
                  </div>
                </div>
              )}
              {sheetView === 'issue-detail-finished' && selectedOrder && (
                <div className="flex flex-col h-full">
                  <div className="flex items-center border-b shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-14 w-14"
                      onClick={() => setSheetView('issues')}
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <h2 className="font-semibold text-lg">
                      Problemas con un pedido
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <ul className="flex flex-col">
                      <li>
                        <button className="w-full text-left">
                          <div className="flex items-center py-4 px-6 text-base font-medium">
                            <span className="flex-grow">
                              Relacionados al repartidor
                            </span>
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          </div>
                        </button>
                        <Separator className="ml-6" />
                      </li>
                      <li>
                        <button className="w-full text-left">
                          <div className="flex items-center py-4 px-6 text-base font-medium">
                            <span className="flex-grow">
                              Relacionados a mi local
                            </span>
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          </div>
                        </button>
                        <Separator className="ml-6" />
                      </li>
                      <li>
                        <button className="w-full text-left">
                          <div className="flex items-center py-4 px-6 text-base font-medium">
                            <span className="flex-grow">
                              Relacionados al usuario
                            </span>
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
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
