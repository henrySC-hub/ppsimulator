'use client';

import {
  ArchiveX,
  ArrowLeft,
  Bike,
  ChevronRight,
  CreditCard,
  Headphones,
  Landmark,
  Mail,
  MessageSquareWarning,
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

  const riderIssues = [
    {
      id: 'rider-location',
      text: '¿Dónde está mi repartidor?',
    },
    {
      id: 'rider-incomplete-order',
      text: 'El repartidor no se llevó parte del pedido',
    },
    {
      id: 'rider-wrong-order',
      text: 'El repartidor se llevó una orden equivocada',
    },
    {
      id: 'report-rider',
      text: 'Reportar a un rider',
    },
  ];

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
                      Problemas con un pedido
                    </h2>
                  </div>
                  <div className="p-6 flex-grow space-y-6 overflow-y-auto">
                    <h3 className="font-bold text-lg">El pedido está cancelado 😟</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        ¡Lamentamos los inconvenientes! Si experimentaste retrasos en la entrega y seleccionaste la opción "listo para la entrega", podrás ver los montos relacionados con la devolución por la cancelación de este pedido en tu estado de cuenta semanal.
                      </p>
                      <p>
                        No es necesario que te comuniques cuando se cancela la orden, ya que <span className="font-bold text-card-foreground">la devolución es automática</span>.
                      </p>
                      <p>
                        Recuerda que puedes consultar tu estado de cuenta semanal en la sección <Link href="#" className="text-primary underline font-semibold">Finanzas</Link>. Además, puedes conocer más sobre el proceso de pago en la sección de <Link href="#" className="text-primary underline font-semibold">Aprendizaje</Link>.
                      </p>
                    </div>
                    
                    <Separator />

                    <button className="w-full text-left" onClick={() => setSheetView('report-rider')}>
                      <div className="flex items-center justify-between py-2 text-base font-medium">
                        <span>Reportar a un rider</span>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </button>
                  </div>
                  <div className="p-6 border-t mt-auto bg-background space-y-3">
                    <p className="text-center font-semibold text-sm">¿Te sirvió esta información?</p>
                    <div className="flex flex-col gap-2">
                        <Button className="w-full border-primary text-primary hover:bg-primary/5" variant="outline">Sí</Button>
                        <Button className="w-full border-primary text-primary hover:bg-primary/5" variant="outline">No</Button>
                    </div>
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
                        <button className="w-full text-left" onClick={() => setSheetView('rider-issues')}>
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
              {sheetView === 'rider-issues' && (
                <div className="flex flex-col h-full">
                  <div className="flex items-center border-b shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-14 w-14"
                      onClick={() => setSheetView('issue-detail-finished')}
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <h2 className="font-semibold text-lg">
                      Relacionados al repartidor
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <ul className="flex flex-col">
                      {riderIssues.map((issue, index) => (
                        <li key={issue.id}>
                          <button
                            className="w-full text-left"
                            onClick={() => setSheetView(issue.id)}
                          >
                            <div className="flex items-center py-4 px-6 text-base font-medium">
                              <span className="flex-grow">{issue.text}</span>
                              <ChevronRight className="h-5 w-5 text-muted-foreground" />
                            </div>
                          </button>
                          {index < riderIssues.length - 1 && <Separator className="ml-6" />}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {sheetView === 'rider-location' && (
                <div className="flex flex-col h-full">
                  <div className="flex items-center border-b shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-14 w-14"
                      onClick={() => setSheetView('rider-issues')}
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <h2 className="font-semibold text-lg">¿Dónde está mi repartidor?</h2>
                  </div>
                  <div className="flex-grow p-6 space-y-6 overflow-y-auto">
                    <div className="rounded-lg flex overflow-hidden text-white">
                      <div className="bg-primary p-4 flex-grow flex items-center">
                        <h3 className="text-xl font-bold">¿Dónde está mi rider?</h3>
                      </div>
                      <div className="bg-yellow-400 p-2 flex items-center justify-center">
                        <div className="relative h-9 w-9">
                          <svg
                            viewBox="0 0 24 24"
                            fill="hsl(var(--primary))"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-full w-full"
                          >
                            <path d="M18 6h-2.7c-.2-2.1-2-3.8-4.3-3.8S7.2 3.9 7 6H4.3C3 6 2.2 7 2.2 8.2v12.5C2.2 21.8 3 22.8 4.3 22.8h15.4c1.3 0 2.1-1 2.1-2.2V8.2c0-1.1-.8-2.2-2.1-2.2zM12 4.2c1.2 0 2.2 1 2.2 2.2H9.8c0-1.2 1-2.2 2.2-2.2z"></path>
                            <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">P</text>
                          </svg>
                          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-green-500 rounded-full h-4 w-4 flex items-center justify-center border-2 border-yellow-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6 9 17l-5-5"></path></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 font-bold text-center rounded-lg p-3">
                      El pedido ya fué retirado
                    </div>
                    <p className="text-sm text-center text-muted-foreground">
                      Si tuviste demoras en el retiro de uno o varios pedidos que ya salieron del local, no te preocupes; esta demora se adjudica al repartidor.
                    </p>
                    <div className="relative w-full h-3 rounded-full overflow-hidden bg-primary">
                      <div className="h-full bg-yellow-400" style={{"width":"40%"}}></div>
                      <div className="absolute inset-0 flex items-center justify-end pr-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.522 10.29C13.578 10.29 14.43 10.59 15.078 11.19C15.738 11.778 16.068 12.528 16.068 13.44C16.068 14.4 15.726 15.18 15.042 15.78C14.358 16.38 13.482 16.68 12.414 16.68H10.158V19H7.902V7.39799H12.522C13.482 7.39799 14.28 7.67999 14.916 8.24399C15.564 8.79599 15.888 9.49199 15.888 10.332C15.888 11.088 15.63 11.688 15.114 12.132C14.598 12.564 13.938 12.78 13.134 12.78H10.158V14.1H12.522C13.098 14.1 13.566 13.95 13.926 13.65C14.286 13.338 14.466 12.96 14.466 12.516C14.466 12.06 14.286 11.682 13.926 11.382C13.566 11.082 13.098 10.932 12.522 10.932H10.158V10.29H12.522Z"></path>
                          </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 border-t mt-auto bg-background space-y-3">
                    <p className="text-center font-semibold text-sm">¿Te sirvió esta información?</p>
                    <div className="flex flex-col gap-2">
                        <Button className="w-full border-primary text-primary hover:bg-primary/5" variant="outline">Sí</Button>
                        <Button className="w-full border-primary text-primary hover:bg-primary/5" variant="outline">No</Button>
                    </div>
                  </div>
                </div>
              )}
              {sheetView === 'rider-incomplete-order' && (
                 <div className="flex flex-col h-full">
                    <div className="flex items-center border-b shrink-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-14 w-14"
                        onClick={() => setSheetView('rider-issues')}
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </Button>
                      <h2 className="font-semibold text-lg">El repartidor no se llevó parte del pedido</h2>
                    </div>
                    <div className="p-6 flex-grow space-y-6 overflow-y-auto">
                      <div className="space-y-4 text-muted-foreground">
                        <p>Lamentamos los inconvenientes. 😳</p>
                        <p>Te brindamos algunas recomendaciones importantes para evitar estos problemas en próximas ocasiones.</p>
                        
                        <div className="space-y-2 pt-2">
                          <p className="font-bold text-card-foreground">¿Qué hacer antes de entregar el pedido al repartidor?</p>
                          <p>Debes asegurarte que el número de orden de quien retira el pedido coincida y que marque como "retirado" el pedido.</p>
                          <p>Verifica que los productos, precios y cantidades coinciden con lo que figura en la orden.</p>
                          <p>Asegúrate de que el paquete se encuentra correctamente cerrado para que no se muevan los productos.</p>
                        </div>
                        
                        <p className="pt-2">Recuerda que el cliente al contactarse con Atención en Línea recibirá una rápida solución de parte de nuestro equipo especializado por lo que no deberás preocuparte por esto.</p>
                      </div>
                    </div>
                    <div className="p-6 border-t mt-auto bg-background space-y-3">
                      <p className="text-center font-semibold text-sm">¿Te sirvió esta información?</p>
                      <div className="flex flex-col gap-2">
                          <Button className="w-full border-primary text-primary hover:bg-primary/5" variant="outline">Sí</Button>
                          <Button className="w-full border-primary text-primary hover:bg-primary/5" variant="outline">No</Button>
                      </div>
                    </div>
                  </div>
              )}
              {sheetView === 'rider-wrong-order' && (
                 <div className="flex flex-col h-full">
                    <div className="flex items-center border-b shrink-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-14 w-14"
                        onClick={() => setSheetView('rider-issues')}
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </Button>
                      <h2 className="font-semibold text-lg">El repartidor se llevó una orden equivocada</h2>
                    </div>
                    <div className="p-6 flex-grow space-y-6 overflow-y-auto">
                      <div className="space-y-4 text-muted-foreground">
                        <p>Lamentamos los inconvenientes. 😳</p>
                        <p>Te brindamos algunas recomendaciones importantes para evitar estos problemas en próximas ocasiones.</p>
                        
                        <div className="space-y-2 pt-2">
                          <p className="font-bold text-card-foreground">¿Qué hacer antes de entregar el pedido al repartidor?</p>
                          <p>Debes asegurarte que el número de orden de quien retira el pedido coincida y que marque como "retirado" el pedido.</p>
                          <p>Verifica que los productos, precios y cantidades coinciden con lo que figura en la orden.</p>
                          <p>Asegúrate de que el paquete se encuentra correctamente cerrado para que no se muevan los productos.</p>
                        </div>
                        
                        <p className="pt-2">Recuerda que el cliente al contactarse con Atención en Línea recibirá una rápida solución de parte de nuestro equipo especializado por lo que no deberás preocuparte por esto.</p>
                      </div>
                      <Separator />
                       <div>
                         <p className="font-semibold text-card-foreground mb-2">¿Te sirvió la información?</p>
                         <ul className="flex flex-col">
                           <li>
                             <button className="w-full text-left">
                               <div className="flex items-center justify-between py-2 text-base font-medium">
                                 <span>Sí</span>
                                 <ChevronRight className="h-5 w-5 text-muted-foreground" />
                               </div>
                             </button>
                             <Separator />
                           </li>
                           <li>
                             <button className="w-full text-left">
                               <div className="flex items-center justify-between py-2 text-base font-medium">
                                 <span>No</span>
                                 <ChevronRight className="h-5 w-5 text-muted-foreground" />
                               </div>
                             </button>
                           </li>
                         </ul>
                       </div>
                    </div>
                  </div>
              )}
              {sheetView === 'report-rider' && (
                <div className="flex flex-col h-full">
                  <div className="flex items-center border-b shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-14 w-14"
                      onClick={() => setSheetView(selectedOrder?.status === 'Cancelado' ? 'issue-detail-canceled' : 'rider-issues')}
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <h2 className="font-semibold text-lg">Reportar a un rider</h2>
                  </div>
                  <div className="p-6 flex-grow space-y-6">
                    <p className="text-muted-foreground">Selecciona el motivo del reporte</p>
                    <RadioGroup defaultValue="grosero">
                        <div className="flex items-center space-x-2 py-3 border-b">
                            <RadioGroupItem value="grosero" id="r1" />
                            <Label htmlFor="r1" className="font-normal flex-grow">El repartidor fue grosero</Label>
                        </div>
                        <div className="flex items-center space-x-2 py-3 border-b">
                            <RadioGroupItem value="cambio" id="r2" />
                            <Label htmlFor="r2" className="font-normal flex-grow">El repartidor no tenía cambio</Label>
                        </div>
                        <div className="flex items-center space-x-2 py-3 border-b">
                            <RadioGroupItem value="incompleta" id="r3" />
                            <Label htmlFor="r3" className="font-normal flex-grow">El repartidor no tenía la orden completa</Label>
                        </div>
                        <div className="flex items-center space-x-2 py-3">
                            <RadioGroupItem value="otro" id="r4" />
                            <Label htmlFor="r4" className="font-normal flex-grow">Otro</Label>
                        </div>
                    </RadioGroup>
                  </div>
                  <div className="p-6 border-t mt-auto bg-background">
                    <Button className="w-full" size="lg">Continuar</Button>
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
          <h3 className="text-2xl font-bold mb-6">Artículos populares</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {popularArticles.map((article) => (
              <Card key={article.title} className="p-6">
                <CardTitle as="h3" className="text-lg font-bold mb-2">{article.title}</CardTitle>
                <CardDescription as="p">{article.description}</CardDescription>
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
          <h3 className="text-2xl font-bold mb-6">
            Aprovecha el Portal al máximo
          </h3>
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
                  <CardTitle as="h3" className="text-lg font-bold mb-2">{tip.title}</CardTitle>
                  <CardDescription as="p" className="mb-4">
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
