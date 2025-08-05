// Set the languages that will be used in the webapp
export type Language = "pt" | "es" | "en";

export const landingPageText = {
  pt: {
    // Header
    brandName: "WhatsBot",
    ctaButton: "Teste grátis por 14 dias",

    // Hero Section
    badge: "🇧🇷 Feito no Brasil para pequenos negócios",
    heroTitle: "Chatbot no WhatsApp\nem 5 minutos",
    heroDescription:
      "Conecte seu número do WhatsApp, adicione uma planilha Google e pronto! Seu chatbot inteligente está funcionando. Sem código, sem reuniões, sem complicação.",
    startFreeButton: "Começar grátis agora",
    watchDemoButton: "Ver demonstração",
    features: {
      setup: "Setup em 5 minutos",
      selfService: "100% self-service",
      freeTrial: "Teste grátis 14 dias",
    },

    // How It Works Section
    howItWorks: {
      title: "Como funciona? É simples!",
      subtitle: "3 passos e seu chatbot está no ar atendendo seus clientes",
      steps: {
        connect: {
          title: "1. Conecte seu WhatsApp",
          description:
            "Cole o número do seu WhatsApp Business. Nosso sistema conecta automaticamente via API oficial.",
        },
        addData: {
          title: "2. Adicione seus dados",
          description:
            "Suba uma planilha Google com FAQ, catálogo ou serviços. Ou use nossos templates prontos.",
        },
        goLive: {
          title: "3. Chatbot no ar!",
          description:
            "Pronto! Seu chatbot inteligente já está respondendo clientes com GPT em português brasileiro.",
        },
      },
    },

    // Features Section
    featuresSection: {
      title: "Funcionalidades completas",
      subtitle:
        "Tudo que você precisa para automatizar o atendimento no WhatsApp",
      features: {
        smartReplies: {
          title: "Respostas inteligentes",
          description:
            "GPT treinado com seus dados responde em português natural, entendendo contexto e perguntas complexas",
        },
        sheets: {
          title: "Integração com Google Sheets",
          description:
            "Conecte sua planilha e o bot usa os dados em tempo real. Atualize preços e o bot já sabe na hora",
        },
        uploads: {
          title: "Upload de PDFs e documentos",
          description:
            "Faça upload de catálogos, manuais ou documentos e o bot responde baseado no conteúdo",
        },
        dashboard: {
          title: "Dashboard completo",
          description:
            "Acompanhe conversas, métricas de atendimento e performance do seu bot em tempo real",
        },
        pix: {
          title: "Integração com Pix",
          description:
            "Bot gera links de pagamento Pix automaticamente e confirma recebimentos para seus clientes",
        },
        team: {
          title: "Equipe e colaboradores",
          description:
            "Adicione sua equipe para monitorar conversas e assumir atendimento quando necessário",
        },
      },
    },

    // Target Business Section
    targetBusiness: {
      title: "Perfeito para seu negócio",
      subtitle:
        "Empresas brasileiras que já usam WhatsApp para atender clientes",
      businesses: {
        restaurants: "Restaurantes e delivery",
        clinics: "Clínicas e consultórios",
        salons: "Salões e estética",
        gyms: "Academias e personal",
        petshops: "Petshops e veterinárias",
        ecommerce: "Ecommerces locais",
      },
    },

    // Pricing Section
    pricing: {
      title: "Planos simples e transparentes",
      subtitle:
        "Sem taxas de setup, sem reuniões de vendas. Escolha seu plano e comece hoje",
      mostPopular: "Mais popular",
      startFreeButton: "Começar teste grátis",
      plans: {
        starter: {
          name: "Iniciante",
          price: "R$ 39",
          period: "/mês",
          description: "Perfeito para começar",
          features: [
            "1 número do WhatsApp",
            "1.000 mensagens/mês",
            "Google Sheets integrado",
            "Dashboard básico",
          ],
        },
        professional: {
          name: "Profissional",
          price: "R$ 89",
          period: "/mês",
          description: "Para negócios em crescimento",
          features: [
            "3 números do WhatsApp",
            "5.000 mensagens/mês",
            "Upload de PDFs",
            "Integração Pix",
            "3 usuários da equipe",
          ],
        },
        enterprise: {
          name: "Empresarial",
          price: "R$ 199",
          period: "/mês",
          description: "Para operações maiores",
          features: [
            "10 números do WhatsApp",
            "20.000 mensagens/mês",
            "Usuários ilimitados",
            "Marca personalizada",
            "Suporte prioritário",
          ],
        },
      },
    },

    // Benefits Section
    benefits: {
      badge: "100% Self-Service",
      title: "Sem reuniões, sem complicação",
      description:
        "Diferente de outras ferramentas que exigem demos e calls de vendas, com o WhatsBot você cria sua conta e já sai usando. Tudo pensado para o pequeno empresário brasileiro.",
      benefitsList: [
        "Responde dúvidas sobre produtos e serviços",
        "Agenda consultas e horários automaticamente",
        "Envia catálogos e listas de preços",
        "Processa pedidos e gera links de pagamento",
        "Funciona 24/7, mesmo quando você está ocupado",
      ],
      timeIndicator: {
        number: "5 minutos",
        description: "Do cadastro ao bot funcionando",
      },
    },

    // CTA Section
    cta: {
      title: "Transforme seu WhatsApp em uma\nmáquina de vendas inteligente",
      description:
        "Teste grátis por 14 dias. Sem cartão de crédito, sem compromisso. Se não gostar, cancele a qualquer momento.",
      startTrialButton: "Começar teste grátis agora",
      talkToTeamButton: "Falar com nosso time",
    },

    // Footer
    footer: {
      brandName: "WhatsBot",
      copyright:
        "© 2024 WhatsBot - Chatbots inteligentes para pequenos negócios brasileiros",
    },
  },

  es: {
    // Header
    brandName: "WhatsBot",
    ctaButton: "Prueba gratis por 14 días",

    // Hero Section
    badge: "🇧🇷 Hecho en Brasil para pequeños negocios",
    heroTitle: "Chatbot en WhatsApp\nen 5 minutos",
    heroDescription:
      "Conecta tu número de WhatsApp, agrega una hoja de Google y ¡listo! Tu chatbot inteligente está funcionando. Sin código, sin reuniones, sin complicaciones.",
    startFreeButton: "Empezar gratis ahora",
    watchDemoButton: "Ver demostración",
    features: {
      setup: "Configuración en 5 minutos",
      selfService: "100% autoservicio",
      freeTrial: "Prueba gratis 14 días",
    },

    // How It Works Section
    howItWorks: {
      title: "¿Cómo funciona? ¡Es simple!",
      subtitle:
        "3 pasos y tu chatbot está en el aire atendiendo a tus clientes",
      steps: {
        connect: {
          title: "1. Conecta tu WhatsApp",
          description:
            "Pega el número de tu WhatsApp Business. Nuestro sistema se conecta automáticamente via API oficial.",
        },
        addData: {
          title: "2. Agrega tus datos",
          description:
            "Sube una hoja de Google con FAQ, catálogo o servicios. O usa nuestras plantillas listas.",
        },
        goLive: {
          title: "3. ¡Chatbot en vivo!",
          description:
            "¡Listo! Tu chatbot inteligente ya está respondiendo clientes con GPT en español.",
        },
      },
    },

    // Features Section
    featuresSection: {
      title: "Funcionalidades completas",
      subtitle:
        "Todo lo que necesitas para automatizar la atención en WhatsApp",
      features: {
        smartReplies: {
          title: "Respuestas inteligentes",
          description:
            "GPT entrenado con tus datos responde en español natural, entendiendo contexto y preguntas complejas",
        },
        sheets: {
          title: "Integración con Google Sheets",
          description:
            "Conecta tu hoja de cálculo y el bot usa los datos en tiempo real. Actualiza precios y el bot ya lo sabe",
        },
        uploads: {
          title: "Subida de PDFs y documentos",
          description:
            "Sube catálogos, manuales o documentos y el bot responde basado en el contenido",
        },
        dashboard: {
          title: "Dashboard completo",
          description:
            "Acompaña conversaciones, métricas de atención y rendimiento de tu bot en tiempo real",
        },
        pix: {
          title: "Integración con Pix",
          description:
            "Bot genera enlaces de pago Pix automáticamente y confirma recibos para tus clientes",
        },
        team: {
          title: "Equipo y colaboradores",
          description:
            "Agrega tu equipo para monitorear conversaciones y asumir atención cuando sea necesario",
        },
      },
    },

    // Target Business Section
    targetBusiness: {
      title: "Perfecto para tu negocio",
      subtitle: "Empresas que ya usan WhatsApp para atender clientes",
      businesses: {
        restaurants: "Restaurantes y delivery",
        clinics: "Clínicas y consultorios",
        salons: "Salones y estética",
        gyms: "Gimnasios y personal",
        petshops: "Tiendas de mascotas",
        ecommerce: "Ecommerces locales",
      },
    },

    // Pricing Section
    pricing: {
      title: "Planes simples y transparentes",
      subtitle:
        "Sin tarifas de configuración, sin reuniones de ventas. Elige tu plan y comienza hoy",
      mostPopular: "Más popular",
      startFreeButton: "Empezar prueba gratis",
      plans: {
        starter: {
          name: "Principiante",
          price: "$ 39",
          period: "/mes",
          description: "Perfecto para empezar",
          features: [
            "1 número de WhatsApp",
            "1.000 mensajes/mes",
            "Google Sheets integrado",
            "Dashboard básico",
          ],
        },
        professional: {
          name: "Profesional",
          price: "$ 89",
          period: "/mes",
          description: "Para negocios en crecimiento",
          features: [
            "3 números de WhatsApp",
            "5.000 mensajes/mes",
            "Subida de PDFs",
            "Integración Pix",
            "3 usuarios del equipo",
          ],
        },
        enterprise: {
          name: "Empresarial",
          price: "$ 199",
          period: "/mes",
          description: "Para operaciones mayores",
          features: [
            "10 números de WhatsApp",
            "20.000 mensajes/mes",
            "Usuarios ilimitados",
            "Marca personalizada",
            "Soporte prioritario",
          ],
        },
      },
    },

    // Benefits Section
    benefits: {
      badge: "100% Autoservicio",
      title: "Sin reuniones, sin complicaciones",
      description:
        "A diferencia de otras herramientas que requieren demos y llamadas de ventas, con WhatsBot creas tu cuenta y ya puedes usarla. Todo pensado para el pequeño empresario.",
      benefitsList: [
        "Responde dudas sobre productos y servicios",
        "Agenda consultas y horarios automáticamente",
        "Envía catálogos y listas de precios",
        "Procesa pedidos y genera enlaces de pago",
        "Funciona 24/7, incluso cuando estás ocupado",
      ],
      timeIndicator: {
        number: "5 minutos",
        description: "Del registro al bot funcionando",
      },
    },

    // CTA Section
    cta: {
      title: "Transforma tu WhatsApp en una\nmáquina de ventas inteligente",
      description:
        "Prueba gratis por 14 días. Sin tarjeta de crédito, sin compromiso. Si no te gusta, cancela en cualquier momento.",
      startTrialButton: "Empezar prueba gratis ahora",
      talkToTeamButton: "Hablar con nuestro equipo",
    },

    // Footer
    footer: {
      brandName: "WhatsBot",
      copyright:
        "© 2024 WhatsBot - Chatbots inteligentes para pequeños negocios",
    },
  },

  en: {
    // Header
    brandName: "WhatsBot",
    ctaButton: "Free 14-day trial",

    // Hero Section
    badge: "🇧🇷 Made in Brazil for small businesses",
    heroTitle: "WhatsApp Chatbot\nin 5 minutes",
    heroDescription:
      "Connect your WhatsApp number, add a Google Sheet and you're done! Your intelligent chatbot is working. No code, no meetings, no complications.",
    startFreeButton: "Start free now",
    watchDemoButton: "Watch demo",
    features: {
      setup: "5-minute setup",
      selfService: "100% self-service",
      freeTrial: "Free 14-day trial",
    },

    // How It Works Section
    howItWorks: {
      title: "How does it work? It's simple!",
      subtitle: "3 steps and your chatbot is live serving your customers",
      steps: {
        connect: {
          title: "1. Connect your WhatsApp",
          description:
            "Paste your WhatsApp Business number. Our system connects automatically via official API.",
        },
        addData: {
          title: "2. Add your data",
          description:
            "Upload a Google Sheet with FAQ, catalog or services. Or use our ready templates.",
        },
        goLive: {
          title: "3. Chatbot live!",
          description:
            "Ready! Your intelligent chatbot is already responding to customers with GPT in English.",
        },
      },
    },

    // Features Section
    featuresSection: {
      title: "Complete features",
      subtitle: "Everything you need to automate WhatsApp customer service",
      features: {
        smartReplies: {
          title: "Intelligent responses",
          description:
            "GPT trained with your data responds in natural English, understanding context and complex questions",
        },
        sheets: {
          title: "Google Sheets integration",
          description:
            "Connect your spreadsheet and the bot uses data in real time. Update prices and the bot knows instantly",
        },
        uploads: {
          title: "PDF and document upload",
          description:
            "Upload catalogs, manuals or documents and the bot responds based on the content",
        },
        dashboard: {
          title: "Complete dashboard",
          description:
            "Track conversations, service metrics and your bot's performance in real time",
        },
        pix: {
          title: "Pix integration",
          description:
            "Bot generates Pix payment links automatically and confirms receipts for your customers",
        },
        team: {
          title: "Team and collaborators",
          description:
            "Add your team to monitor conversations and take over service when necessary",
        },
      },
    },

    // Target Business Section
    targetBusiness: {
      title: "Perfect for your business",
      subtitle: "Companies that already use WhatsApp to serve customers",
      businesses: {
        restaurants: "Restaurants & delivery",
        clinics: "Clinics & consultories",
        salons: "Salons & beauty",
        gyms: "Gyms & personal trainers",
        petshops: "Pet shops & veterinary",
        ecommerce: "Local ecommerce",
      },
    },

    // Pricing Section
    pricing: {
      title: "Simple and transparent plans",
      subtitle:
        "No setup fees, no sales meetings. Choose your plan and start today",
      mostPopular: "Most popular",
      startFreeButton: "Start free trial",
      plans: {
        starter: {
          name: "Starter",
          price: "$ 39",
          period: "/month",
          description: "Perfect to get started",
          features: [
            "1 WhatsApp number",
            "1,000 messages/month",
            "Google Sheets integrated",
            "Basic dashboard",
          ],
        },
        professional: {
          name: "Professional",
          price: "$ 89",
          period: "/month",
          description: "For growing businesses",
          features: [
            "3 WhatsApp numbers",
            "5,000 messages/month",
            "PDF uploads",
            "Pix integration",
            "3 team users",
          ],
        },
        enterprise: {
          name: "Enterprise",
          price: "$ 199",
          period: "/month",
          description: "For larger operations",
          features: [
            "10 WhatsApp numbers",
            "20,000 messages/month",
            "Unlimited users",
            "Custom branding",
            "Priority support",
          ],
        },
      },
    },

    // Benefits Section
    benefits: {
      badge: "100% Self-Service",
      title: "No meetings, no complications",
      description:
        "Unlike other tools that require demos and sales calls, with WhatsBot you create your account and start using it right away. Everything designed for small business owners.",
      benefitsList: [
        "Answers questions about products and services",
        "Schedules appointments and times automatically",
        "Sends catalogs and price lists",
        "Processes orders and generates payment links",
        "Works 24/7, even when you're busy",
      ],
      timeIndicator: {
        number: "5 minutes",
        description: "From signup to bot working",
      },
    },

    // CTA Section
    cta: {
      title: "Transform your WhatsApp into an\nintelligent sales machine",
      description:
        "Free 14-day trial. No credit card, no commitment. If you don't like it, cancel anytime.",
      startTrialButton: "Start free trial now",
      talkToTeamButton: "Talk to our team",
    },

    // Footer
    footer: {
      brandName: "WhatsBot",
      copyright: "© 2024 WhatsBot - Intelligent chatbots for small businesses",
    },
  },
} as const;
