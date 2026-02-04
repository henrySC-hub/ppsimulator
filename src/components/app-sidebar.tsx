'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import {
  LayoutGrid,
  Package,
  Star,
  Tag,
  BookMarked,
  Clock,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    label: 'Monitorea tu desempeño',
    items: [
      { href: '/', icon: LayoutGrid, text: 'Tablero' },
      { href: '/pedidos', icon: Package, text: 'Pedidos' },
      { href: '/evaluacion', icon: Star, text: 'Evaluación y opiniones' },
    ],
  },
  {
    label: 'Potencia tu negocio',
    items: [{ href: '/promociones', icon: Tag, text: 'Promociones' }],
  },
  {
    label: 'Gestiona tu local',
    items: [
      { href: '/menu', icon: BookMarked, text: 'Menú' },
      { href: '/horarios', icon: Clock, text: 'Horarios' },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="font-bold text-lg flex items-center gap-2">
          <span>PedidosYa</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-md text-sm font-semibold">
            Portal
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {menuItems.map((group) => (
          <SidebarGroup key={group.label} className="py-2 pr-3">
            <SidebarGroupLabel className="text-xs text-muted-foreground font-normal px-2 pb-2">
              {group.label}
            </SidebarGroupLabel>
            <SidebarMenu>
              {group.items.map((item) => (
                <SidebarMenuItem key={item.text}>
                  <Link href={item.href} legacyBehavior passHref>
                    <SidebarMenuButton
                      isActive={pathname === item.href}
                      tooltip={item.text}
                      className="font-semibold"
                    >
                      <item.icon />
                      <span>{item.text}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
