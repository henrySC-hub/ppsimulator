import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Search, Star, TrendingUp, UserCog } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const helpTopics = [
  {
    icon: TrendingUp,
    title: "Potenciar tu negocio",
    description: "Estrategias y herramientas para crecer.",
    href: "#",
  },
  {
    icon: UserCog,
    title: "Autogestión total",
    description: "Configura y personaliza tu experiencia.",
    href: "#",
  },
  {
    icon: Star,
    title: "Primeros pasos",
    description: "Guías para empezar a usar el portal.",
    href: "#",
  },
  {
    icon: FileText,
    title: "Facturación y pagos",
    description: "Todo sobre tus facturas y métodos de pago.",
    href: "#",
  },
];

const popularArticles = [
  "¿Cómo configuro mi perfil?",
  "Entendiendo el panel de estadísticas",
  "Resolución de problemas comunes",
  "Guía de integración de API",
  "¿Cómo contacto a soporte?",
];

const maximizePortal = [
  "Personaliza tus reportes",
  "Automatiza tareas repetitivas",
  "Usa la app móvil",
  "Invita a tu equipo",
  "Descubre funciones avanzadas",
];

const heroImage = PlaceHolderImages.find((img) => img.id === "help-hero");

export default function HelpPage() {
  return (
    <div>
      <section className="relative h-64 md:h-80 bg-secondary">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-primary-foreground px-4">
          <h1 className="text-4xl font-headline sm:text-5xl md:text-6xl">
            Hola, ¿Cómo podemos ayudarte?
          </h1>
          <div className="mt-8 w-full max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Busca artículos de ayuda..."
                className="w-full pl-12 h-14 text-lg bg-background text-foreground"
              />
            </div>
            <p className="mt-2 text-sm">
              Artículos relacionados: <a href="#" className="underline">facturación</a>, <a href="#" className="underline">perfil</a>, <a href="#" className="underline">reportes</a>
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-headline text-center text-primary mb-12">Navega por temas</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {helpTopics.map((topic) => (
            <Link href={topic.href} key={topic.title} className="block">
              <Card className="h-full text-center hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
                <CardHeader className="items-center">
                  <div className="p-4 bg-secondary rounded-full">
                    <topic.icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="font-headline text-2xl mt-4">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{topic.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-headline text-primary mb-6">Artículos populares</h3>
              <div className="space-y-4">
                {popularArticles.map((article) => (
                  <Link href="#" key={article} className="flex items-center text-foreground hover:text-primary group">
                    <p className="flex-grow">{article}</p>
                    <ArrowRight className="h-5 w-5 ml-2 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-headline text-primary mb-6">Aprovecha el Portal al máximo</h3>
              <div className="space-y-4">
                {maximizePortal.map((tip) => (
                   <Link href="#" key={tip} className="flex items-center text-foreground hover:text-primary group">
                    <p className="flex-grow">{tip}</p>
                    <ArrowRight className="h-5 w-5 ml-2 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
