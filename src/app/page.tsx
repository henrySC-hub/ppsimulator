"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  ArrowUp,
  Ban,
  ChevronRight,
  Clock,
  Frown,
  Info,
  Store,
} from "lucide-react";
import Image from "next/image";

const summaryData = [
  { name: "00h", value: 0.1 },
  { name: "02h", value: 0.15 },
  { name: "04h", value: 0.1 },
  { name: "06h", value: 0.2 },
  { name: "08h", value: 0.25 },
  { name: "10h", value: 0.3 },
  { name: "12h", value: 0.4 },
  { name: "14h", value: 0.35 },
  { name: "16h", value: 0.45 },
  { name: "18h", value: 0.5 },
  { name: "20h", value: 0.4 },
];

const statusItems = [
  { icon: Store, title: "Locales no disponibles", time: "Ahora" },
  { icon: Ban, title: "Pedidos cancelados", time: "Hoy" },
  { icon: Clock, title: "Pedidos con demora", time: "Hoy" },
  { icon: Frown, title: "Evaluaciones 1 estrella", time: "Hoy" },
];

export default function DashboardPage() {
  return (
    <div className="bg-gray-50/50 p-4 sm:p-6 lg:p-8 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Resumen</CardTitle>
                <Button variant="ghost" size="sm">
                  Más <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="flex space-x-1 sm:space-x-2">
                <Button variant="secondary" size="sm" className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full">Hoy</Button>
                <Button variant="ghost" size="sm" className="rounded-full">Ayer</Button>
                <Button variant="ghost" size="sm" className="rounded-full">7 días</Button>
                <Button variant="ghost" size="sm" className="rounded-full">30 días</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-8 mb-4">
                <div>
                  <div className="text-sm text-muted-foreground">Pedidos</div>
                  <div className="text-3xl font-bold">0</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Revenue</div>
                  <div className="text-3xl font-bold">0 $</div>
                </div>
              </div>
              <div style={{ width: "100%", height: 200 }}>
                <ResponsiveContainer>
                  <LineChart data={summaryData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                    <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} domain={[0, 1]}/>
                    <Tooltip contentStyle={{fontSize: "12px", padding: "2px 8px"}}/>
                    <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Socios</CardTitle>
                  <Button variant="ghost" size="sm">
                    Ir a Socios <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <Image
                  src="https://res.cloudinary.com/djpzl0pcq/image/upload/v1716327438/404_illustration_j8v1wb.png"
                  alt="Error 404"
                  width={150}
                  height={100}
                  className="mx-auto mb-4"
                />
                <h3 className="font-bold">Ups, algo salió mal</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Estamos teniendo un problema técnico. Inténtalo de nuevo más tarde o comunícate con Ayuda si es necesario.
                </p>
              </CardContent>
            </Card>

            <div>
              <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">Desempeño operativo</h3>
                  <Button variant="ghost" size="sm">
                      Más <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
              </div>
              <div className="space-y-4">
                  <Card>
                      <CardContent className="pt-6">
                          <div className="flex justify-between items-start text-sm">
                              <span className="text-muted-foreground">Rechazos</span>
                              <Info className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="text-2xl font-bold mt-1">4 Pedidos rechazados</div>
                          <div className="flex items-center text-sm text-red-500 font-semibold">
                              100% <ArrowUp className="h-4 w-4 ml-1" />
                          </div>
                          <div className="text-xs text-muted-foreground">Últimos 7 días</div>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardContent className="pt-6">
                          <div className="flex justify-between items-start text-sm">
                              <span className="text-muted-foreground">Tiempo no disponible</span>
                              <Info className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="text-2xl font-bold mt-1 flex items-baseline">22,59% <span className="text-sm font-normal text-muted-foreground ml-2">18 horas 59 min</span><ArrowUp className="h-4 w-4 ml-1 text-red-500" /></div>
                          <div className="text-xs text-muted-foreground">Últimos 7 días</div>
                      </CardContent>
                  </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Estado actual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {statusItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <item.icon className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-semibold text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id={`status-${index}`} />
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
