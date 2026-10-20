// src/i18n/es.ts
export const es = {
  // Navigation
  nav: {
    home: 'Inicio',
    portfolio: 'Portafolio',
    services: 'Servicios',
    about: 'Sobre Natalia',
    booking: 'Reservar',
    contact: 'Contacto',
    admin: 'Admin'
  },

  // Hero section
  hero: {
    title: 'Nails by Natalia',
    subtitle: 'Diseño de uñas profesional y creativo',
    cta_primary: 'Reservar cita',
    cta_secondary: 'Ver portafolio'
  },

  // Services section
  services: {
    title: 'Nuestros Servicios',
    subtitle: 'Descubre nuestros servicios especializados en cuidado y diseño de uñas',
    items: [
      {
        title: 'Manicura Clásica',
        description: 'Cuidado y esmaltado tradicional para uñas naturales'
      },
      {
        title: 'Manicura de Gel',
        description: 'Uñas de gel duraderas con acabado brillante profesional'
      },
      {
        title: 'Extensions de Uñas',
        description: 'Alargamiento y refuerzo con acrílico o gel'
      },
      {
        title: 'Nail Art',
        description: 'Diseños artísticos personalizados: desde clásicos hasta tendencia'
      },
      {
        title: 'Reparación de Uñas',
        description: 'Tratamiento y reconstrucción de uñas dañadas o quebradas'
      },
      {
        title: 'Pedicura Spa',
        description: 'Tratamiento completo para pies con exfoliación y masaje'
      }
    ]
  },

  // Portfolio section
  portfolio: {
    title: 'Portafolio',
    subtitle: 'Trabajos recientes de Natalia',
    view_all: 'Ver todo',
    categories: {
      all: 'Todo',
      gel: 'Gel',
      acrylic: 'Acrylico',
      'nail-art': 'Nail Art',
      'special-occasion': 'Ocasiones especiales'
    }
  },

  // About section
  about: {
    title: 'Sobre Natalia',
    subtitle: 'Pasión y profesionalismo en cada detalle',
    description: 'Natalia es una artista de uñas certificada con más de 5 años de experiencia en el diseño y cuidado de uñas. Su pasión por la creatividad y su atención al detalle la han convertido en una de las manicuristas más buscadas de la zona. Cada cliente recibe un tratamiento personalizado, utilizando solo productos de alta calidad para asegurar resultados duraderos y hermosos.',
    specialties: [
      'Diseño de uñas de gel',
      'Extensiones y refuerzos',
      'Nail art artístico y personalizado',
      'Cuidado y tratamiento de uñas naturales',
      'Pedicura spa y terapéutica'
    ],
    booking_cta: 'Reserva tu cita con Natalia'
  },

  // Booking section
  booking: {
    title: 'Reservar cita',
    subtitle: 'Elige tu servicio y horario preferido',
    form: {
      select_service: 'Selecciona un servicio',
      select_date: 'Selecciona una fecha',
      select_time: 'Selecciona una hora',
      client_name: 'Nombre completo',
      client_email: 'Correo electrónico',
      client_phone: 'Teléfono de contacto',
      notes: 'Notas adicionales (opcional)',
      submit_button: 'Confirmar reserva',
      success_message: '¡Tu reserva ha sido confirmada! Te enviaremos un recordatorio 24 horas antes de tu cita.',
      error_message: 'Hubo un error al procesar tu reserva. Por favor, intenta nuevamente.'
    },
    services_list: [
      'Manicura Clásica',
      'Manicura de Gel',
      'Extensions de Uñas',
      'Nail Art',
      'Reparación de Uñas',
      'Pedicura Spa'
    ]
  },

  // Contact section
  contact: {
    title: 'Contáctanos',
    subtitle: '¿Tienes preguntas? Estamos aquí para ayudarte.',
    form: {
      name: 'Nombre',
      email: 'Correo electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      submit_button: 'Enviar mensaje',
      success_message: '¡Tu mensaje ha sido enviado! Nos pondremos en contacto contigo pronto.',
      error_message: 'Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.'
    },
    contact_info: {
      title: 'Información de contacto',
      address: 'Dirección: Calle de la Belleza 123, Ciudad de la Color',
      phone: 'Teléfono: +56 9 1234 5678',
      email: 'Correo: hello@nailsbynatalia.cl',
      hours: 'Horarios: Lunes-Viernes 9:00-19:00, Sábados 10:00-17:00'
    }
  },

  // Footer
  footer: {
    rights: 'Todos los derechos reservados',
    made_with: 'Hecho con ❤️ para Nails by Natalia'
  },

  // Admin section
  admin: {
    title: 'Panel de Administración',
    subtitle: 'Gestiona tu negocio de uñas',
    nav: {
      dashboard: 'Panel de control',
      bookings: 'Citas',
      clients: 'Clientes',
      services: 'Servicios',
      portfolio: 'Portafolio',
      settings: 'Ajustes'
    },
    dashboard: {
      title: 'Panel de control',
      stats: {
        today_bookings: 'Citas de hoy',
        upcoming_bookings: 'Próximas citas',
        total_clients: 'Total de clientes',
        monthly_revenue: 'Ingresos mensuales'
      },
      recent_activity: 'Actividad reciente',
      no_activity: 'No hay actividad reciente'
    },
    bookings: {
      title: 'Gestión de citas',
      search_placeholder: 'Buscar por nombre, fecha o servicio',
      filters: {
        all: 'Todas',
        pending: 'Pendientes',
        confirmed: 'Confirmadas',
        completed: 'Completadas',
        cancelled: 'Canceladas'
      },
      table_headers: [
        'Fecha',
        'Hora',
        'Cliente',
        'Servicio',
        'Estado',
        'Acciones'
      ],
      actions: {
        confirm: 'Confirmar',
        complete: 'Completar',
        cancel: 'Cancelar',
        reschedule: 'Reprogramar'
      },
      status_badges: {
        pending: 'Pendiente',
        confirmed: 'Confirmada',
        completed: 'Completada',
        cancelled: 'Cancelada'
      }
    },
    clients: {
      title: 'Gestión de clientes',
      search_placeholder: 'Buscar por nombre o email',
      table_headers: [
        'Nombre',
        'Email',
        'Teléfono',
        'Última visita',
        'Total visitas',
        'Acciones'
      ],
      actions: {
        view: 'Ver perfil',
        edit: 'Editar',
        delete: 'Eliminar'
      }
    },
    services: {
      title: 'Gestión de servicios',
      search_placeholder: 'Buscar servicios',
      table_headers: [
        'Nombre',
        'Descripción',
        'Precio',
        'Duración',
        'Acciones'
      ],
      actions: {
        edit: 'Editar',
        delete: 'Eliminar'
      },
      form: {
        title: 'Nuevo servicio',
        name: 'Nombre del servicio',
        description: 'Descripción',
        price: 'Precio',
        duration: 'Duración (minutos)',
        submit: 'Guardar servicio'
      }
    },
    portfolio: {
      title: 'Gestión de portafolio',
      search_placeholder: 'Buscar por categoría o descripción',
      table_headers: [
        'Imagen',
        'Título',
        'Categoría',
        'Fecha',
        'Acciones'
      ],
      actions: {
        edit: 'Editar',
        delete: 'Eliminar'
      },
      form: {
        title: 'Nuevo trabajo',
        titleField: 'Título',
        description: 'Descripción',
        category: 'Categoría',
        image_url: 'URL de la imagen',
        submit: 'Guardar trabajo'
      }
    },
    settings: {
      title: 'Ajustes de la cuenta',
      profile: {
        title: 'Perfil',
        name: 'Nombre completo',
        email: 'Correo electrónico',
        phone: 'Teléfono',
        submit: 'Guardar cambios'
      },
      notifications: {
        title: 'Notificaciones',
        email_enabled: 'Notificaciones por email',
        sms_enabled: 'Recordatorios por SMS',
        submit: 'Guardar ajustes'
      }
    }
  },

  // Common UI components
  ui: {
    loading: 'Cargando...',
    error: 'Error occurred',
    retry: 'Reintentar',
    close: 'Cerrar',
    back: 'Atrás',
    next: 'Siguiente',
    submit: 'Enviar',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    edit: 'Editar',
    view: 'Ver',
    search: 'Buscar',
    no_results: 'No se encontraron resultados',
    see_more: 'Ver más',
    see_less: 'Ver menos'
  },

  // Form validation
  validation: {
    required: 'Este campo es obligatorio',
    email: 'Ingresa un correo electrónico válido',
    min_length: (length: number) => `Debe tener al menos ${length} caracteres`,
    max_length: (length: number) => `No debe exceder los ${length} caracteres`,
    min_value: (value: number) => `Debe ser mayor o igual a ${value}`,
    max_value: (value: number) => `Debe ser menor o igual a ${value}`,
    invalid_date: 'Fecha no válida',
    invalid_time: 'Hora no válida'
  },

  // Dates and times
  datetime: {
    days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    days_short: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    months: [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ],
    months_short: [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ],
    time_format: 'HH:mm',
    date_format: 'dd/MM/yyyy'
  }
}

export type Locale = typeof es