export type Hotel = {
  name: string;
  email?: string;
  phone?: string;
};

export type Category = {
  id: number;
  name: string;
  description: string;
  hotels: Hotel[];
};

export const categories: Category[] = [
  {
    id: 1,
    name: 'Hotel 1 Estrella',
    description:
      'Los hoteles de 1 estrella son establecimientos de tamaño reducido y estructura básica. Por lo general, tienen menos de 30 habitaciones y ofrecen servicios y comodidades limitados en comparación con hoteles de categorías superiores. Las instalaciones en las habitaciones suelen ser simples y funcionales, con énfasis en proporcionar un alojamiento básico y asequible para los huéspedes. Dada su escala más pequeña y su enfoque en la funcionalidad sobre el lujo, los hoteles de 1 estrella tienden a tener un equipo de empleados reducido que desempeña múltiples roles. Los empleados pueden estar involucrados en tareas que van desde la recepción de huéspedes hasta la limpieza de habitaciones y la atención al cliente.',
    hotels: [
      {
        name: 'MS Hotel Ushuaia',
        email: 'mshotel22@gmail.com',
        phone: '+5492901307880',
      },
    ],
  },
  {
    id: 2,
    name: 'Hoteles 2 Estrellas',
    description:
      'Los hoteles de 2 estrellas son establecimientos más modestos en comparación con las categorías superiores, con un tamaño más reducido que generalmente varía entre 30 y 50 habitaciones. Debido a su tamaño y menor nivel de comodidades, los hoteles de 2 estrellas tienden a tener una estructura organizativa más simple y emplear un número más reducido de personal. Como resultado, los empleados pueden asumir una variedad de roles y responsabilidades, lo que requiere una mayor versatilidad y disposición para realizar diferentes tareas.',
    hotels: [
      {
        name: 'Hotel Antartida Argentina',
        email: 'info@hotelantartida.com',
        phone: '5492901435761',
      },
      {
        name: 'Hotel Vitalia',
        email: 'reservasvitaliahotel@gmail.com',
        phone: '+5492901404023',
      },
      {
        name: 'Hotel De Los Andes',
        email: 'reservas@delosandeshotel.com.ar',
        phone: '+5492901432721 - Solo Llamadas',
      },
      {
        name: 'Costa Ushuaia Hotel',
        email: 'reservas@costaushuaia.com',
        phone: '+5492901440846',
      },
    ],
  },
  {
    id: 3,
    name: 'Hoteles 3 Estrellas',
    description:
      'Los hoteles de 3 estrellas son establecimientos más pequeños en comparación con otras categorías, con un máximo de 50 a 70 habitaciones. A pesar de su tamaño, estos hoteles ofrecen una variedad de comodidades en las habitaciones para satisfacer las necesidades de los huéspedes. Algunos también pueden contar con servicios adicionales como lavandería y gimnasio. Dado que son más pequeños, los hoteles de 3 estrellas tienden a buscar empleados con un poco más de experiencia, y los requisitos para los puestos pueden ser más detallados. Trabajar en un hotel de esta categoría puede ser una excelente opción para aquellos que buscan adquirir experiencia en la industria hotelera, ya que los empleados suelen estar involucrados en una variedad de tareas que les permiten aprender y crecer profesionalmente.',
    hotels: [
      {
        name: 'Hotel Lennox',
        email: 'recursoshumanos@lennoxhotels.com',
        phone: '+5491128069770',
      },
      {
        name: 'Hotel Mil810',
        email: 'info@hotel1810.com',
        phone: '+5492901437710',
      },
      {
        name: 'Altos Ushuaia Hotel & Resto',
        email: 'info@altosushuaia.com',
        phone: '+5492901422990',
      },
      {
        name: 'Hotel Los Naranjos',
        email: 'reservas@losnaranjosushuaia.com',
        phone: '+5492901527461',
      },
      {
        name: 'Hotel Las Lengas',
        email: 'reservas@laslengashotel.com.ar',
        phone: '+5492901423366 - Solo Llamadas',
      },
      {
        name: 'Hotel Los Ñires',
        email: 'info@losnires.com',
        phone: '+5492901556954',
      },
      {
        name: 'Hotel Tolkeyen',
        email: 'info@tolkeyen.com',
        phone: '+5492901626200',
      },
      {
        name: 'Hotel Villa Brescia',
        email: 'reservas@villabresciahotel.com',
        phone: '+5492901610759',
      },
      {
        name: 'Hotel Los Yamanas',
        email: 'operaciones@hotelyamanas.com.ar',
        phone: '+5492901410797',
      },
      {
        name: 'Hotel Cap Polonio',
        email: 'rrhh@hotelcappolonio.com.ar',
        phone: '+5492901610444',
      },
      {
        name: 'Hotel de Montaña Cumbres del Martial',
        email: 'info@cumbresdelmartial.com.ar',
        phone: '+5492901469221',
      },
      {
        name: 'Hotel Campanilla',
        email: 'campanillahotel@gmail.com',
        phone: '+5492901611767',
      },
      {
        name: 'Hotel Boutique Original House',
        email: 'ventas@originalhouse.com.ar',
        phone: '+5492901617210',
      },
    ],
  },
  {
    id: 4,
    name: 'Hoteles 4 Estrellas',
    description:
      'Los hoteles de 4 estrellas son establecimientos de tamaño considerable, con un número de habitaciones que oscila entre 50 y 100. Muchos de ellos ofrecen comodidades como spa, gimnasio y piscina, mientras que otros se centran en espacios comunes como el lobby o en las propias habitaciones. Al igual que los hoteles de 5 estrellas, son una excelente opción para aquellos que buscan iniciar su carrera en la industria hotelera, ya que requieren de un personal diverso para satisfacer la demanda de sus servicios. Tanto personas con experiencia como sin experiencia pueden encontrar oportunidades laborales en estos establecimientos.',
    hotels: [
      {
        name: 'Wyndham Garden Hotel',
        email: 'rrhh.hoteldelglaciar@gmail.com',
        phone: '+5492901528221',
      },
      {
        name: 'Hotel Tierra del Fuego',
        email: 'hoteltdf@speedy.com.ar',
        phone: '+5492901424901 - Solo Llamadas',
      },
      {
        name: 'Cilene del Faro',
        email: 'supervisor2@cilenedelfaro.com',
        phone: '+5492901558617',
      },
      {
        name: 'Cilene del Fuego',
        email: 'recepcion@cilenedelfuego.com',
        phone: '+5492901400848',
      },
      {
        name: 'Fueguino Hotel',
        email: 'recepcion@fueguinohotel.com.ar',
        phone: '+5492901521273',
      },
      {
        name: 'Hotel Albatros',
        email: 'albatroshotelrrhh@gmail.com',
        phone: '+5492901643533',
      },
      {
        name: 'Hotel Canal de Beagle',
        email: 'reservas@canalbeaglehotel.com.ar',
        phone: ' +5402901421356 - Solo Llamadas',
      },
    ],
  },
  {
    id: 5,
    name: 'Hoteles 5 Estrellas',
    description:
      'Los hoteles de 5 estrellas representan la máxima categoría en la industria hotelera y suelen contar con más de 100 a 150 habitaciones. Estos establecimientos ofrecen una amplia gama de comodidades, que incluyen restaurantes de alta calidad, spas lujosos, gimnasios bien equipados y piscinas elegantes. Además, suelen contar con servicios exclusivos como Bell Boys (Maleteros) y transporte privado, especialmente si están ubicados en zonas alejadas de la ciudad. Los hoteles de 5 estrellas son ideales para quienes buscan una primera experiencia en la industria hotelera, ya que ofrecen oportunidades laborales tanto para personas con experiencia como para aquellas que están comenzando su carrera. Esto permite a los empleados aprender el funcionamiento de cada área a su propio ritmo y adquirir experiencia en un entorno de hospitalidad de primera clase.',
    hotels: [
      {
        name: 'Arakur Ushuaia Resort & Spa',
        email: 'empleo@arakur.com',
        phone: '+5492901442900',
      },
      {
        name: 'Los Cauquenes',
        email: 'cv@loscauquenes.com',
        phone: '+5492901601306',
      },
      {
        name: 'Las Hayas',
        email: 'lashayas@tremun.com.ar',
        phone: '+5492236024789',
      },
    ],
  },
  {
    id: 6,
    name: 'Hostels - Hosterias - Cabañas - Posadas',
    description:
      'Los hostels, hosterías, posadas y cabañas, son opciones de alojamiento que ofrecen una experiencia más íntima y acogedora que los hoteles convencionales. Estos establecimientos suelen ubicarse en entornos naturales o rurales, brindando un ambiente tranquilo y relajado para los huéspedes. A diferencia de los grandes hoteles, estos lugares suelen tener un número más limitado de habitaciones, lo que permite una atención más personalizada. Generalmente, los empleados suelen realizar más tareas generales, desde recepción hasta limpieza y mantenimineto porque tienen un número reducido de empleados.',
    hotels: [
      {
        name: 'Hostería Rosa de los Vientos',
        email: 'info@rosadelosvientos.com.ar',
        phone: '+5492901465141',
      },
      {
        name: 'Hostería Les Eclaireurs',
        phone: '+5492901425095 - Solo Llamadas',
      },
      {
        name: 'Hostería y Restaurante América',
        email: 'hosteriaamerica@gmail.com',
        phone: '+5492901615849',
      },
      {
        name: 'Posada Fueguina',
        email: 'Info@posadafueguina.com.ar',
        phone: '+5492901423467 - Solo Llamadas',
      },
      {
        name: 'Posada del Fin del Mundo',
        email: 'ana@posadafindelmundo.com.ar',
        phone: '+5492901475537',
      },
      {
        name: 'Hosteria Oikos',
        phone: '+5492901559022',
      },
      {
        name: 'Hosteria Hostal Malvinas',
        email: 'nuevohostalmalvinas@gmail.com',
        phone: '+5492901653435',
      },
      {
        name: 'Hostal de La Laguna',
        phone: '+5492901403533',
      },
      {
        name: 'Hosteria Mirador del Beagle',
        email: 'contacto@miradordelbeagle.com',
        phone: '+5492901614659',
      },
      {
        name: 'Hosteria Auroras de Fuego',
        email: 'aurorasdefuego@gmail.com',
        phone: '+5492901612444',
      },
      {
        name: 'Hostal del Bosque',
        email: 'recepcion@hostaldelbosque.com.ar',
        phone: '+5492901563561',
      },
      {
        name: 'Oshovia Hostel',
        email: 'info@oshoviahostel.com',
        phone: '+5492901472846',
      },
      {
        name: 'Anum Hostel',
        email: 'rrhhanumhostel@gmail.com',
        phone: '+5492901400707',
      },
      {
        name: 'Amanecer de la Bahia',
        email: 'Amanecerdelabahia@gmail.com',
        phone: '+5492901522013',
      },
      {
        name: 'Torre al Sur Hostel',
        email: 'torrealsur@gmail.com',
        phone: '+5492901551022',
      },
      {
        name: 'El Refugio Lodge Hostel',
        email: 'selecciondepersonalushuaia@gmail.com',
        phone: '+5492901566675',
      },
      {
        name: 'Hostel Los Cormoranes',
        email: 'info@loscormoranes.com',
        phone: '+5492901562014',
      },
      {
        name: 'Hostel Cruz del Sur',
        email: 'xdelsur@yahoo.com',
        phone: '+5492901434099',
      },
      {
        name: 'Antarctica Hostel',
        email: 'info@antarcticahostel.com',
      },
      {
        name: 'Yaghan Hostel',
        email: 'info@yaghanhostel.com',
        phone: '+5492901409508',
      },
      {
        name: 'Hostel House 1903',
        phone: '+5492901535757',
      },
      {
        name: 'Patagonia Jarke',
        email: 'recursoshumanos@gennera.com.ar',
        phone: '+5491125212039',
      },
      {
        name: 'Hostería Foike',
        email: 'info@hosteriafoike.com.ar',
        phone: '+5492901422475 - Solo Llamadas',
      },
      {
        name: 'Hostería Ailen',
        email: 'info.hosteriaailen@gmail.com',
        phone: '+5492901602912',
      },
      {
        name: 'Apart Hotel Cabo San Diego',
        email: 'info@cabosandiego.com.ar',
        phone: '+5492901601054',
      },
      {
        name: 'Hostería Kupanaka',
        email: 'hosteriakupanaka@gmail.com',
        phone: '+5492901406612',
      },
      {
        name: 'Apart Hotel Alem',
        email: 'aparthotelalem@gmail.com',
        phone: '+5492901437840',
      },
    ],
  },
];
