import { FaWhatsapp } from 'react-icons/fa';
import { SiShopee, SiGojek } from 'react-icons/si';

export const orderLinks = [
  {
    name: 'ShopeeFood',
    color: 'bg-orange-500 hover:bg-orange-600',
    webUrl: 'https://shopee.co.id/m/shopeefood',
    appUrl: 'shopeefood://open',
    icon: SiShopee,
  },
  {
    name: 'GoFood',
    color: 'bg-green-700 hover:bg-green-800',
    webUrl: 'https://gofood.co.id',
    appUrl: 'gojek://gofood',
    icon: SiGojek,
  },
  {
    name: 'WhatsApp',
    color: 'bg-green-500 hover:bg-green-600',
    webUrl: 'https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20order',
    icon: FaWhatsapp,
  },
];
