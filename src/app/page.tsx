import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Phone,
  Calendar,
  BarChart3,
  Settings,
  HeadphonesIcon,
  CheckCircle,
  Utensils,
  Stethoscope,
  Scissors,
  Dumbbell,
  Heart,
  Building2,
  ArrowRight,
  Sparkles,
  Clock,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Atende.ai</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Falar com especialista
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 brasil-gradient-subtle"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge variant="brasil" className="mb-6 animate-float">
            🇧🇷 Feito no Brasil para empresas brasileiras
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
            Atendimento inteligente.
            <br />
            Escalável. 24/7.
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A plataforma brasileira de agentes de voz com IA que automatiza o
            atendimento por telefone da sua empresa. Ideal para restaurantes,
            clínicas, salões e qualquer negócio que recebe muitas ligações.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
            >
              Comece agora grátis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              Ver demonstração
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-chart-2" />
              <span>Setup em minutos</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-chart-2" />
              <span>Suporte humano 24/7</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-chart-2" />
              <span>Português nativo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Funcionalidades principais
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para automatizar e melhorar o atendimento da
              sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 animate-float">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Agente de voz personalizado</CardTitle>
                <CardDescription>
                  IA treinada especificamente para o seu negócio, entendendo
                  contexto e fluxos únicos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-chart-2/20 animate-float-delay">
              <CardHeader>
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-chart-2/20 transition-colors">
                  <Phone className="w-6 h-6 text-chart-2" />
                </div>
                <CardTitle>Atendimento receptivo e ativo</CardTitle>
                <CardDescription>
                  Recebe ligações dos clientes e faz chamadas automáticas para
                  lembretes e cobranças
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-chart-3/20 animate-float">
              <CardHeader>
                <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-chart-3/20 transition-colors">
                  <Settings className="w-6 h-6 text-chart-3" />
                </div>
                <CardTitle>Integração com seus sistemas</CardTitle>
                <CardDescription>
                  Conecta com seu CRM, sistema de agendamento e outras
                  ferramentas que você já usa
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 animate-float-delay">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Painel com métricas</CardTitle>
                <CardDescription>
                  Acompanhe histórico de interações, performance e resultados em
                  tempo real
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-chart-2/20 animate-float">
              <CardHeader>
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-chart-2/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-chart-2" />
                </div>
                <CardTitle>Treinamento contínuo</CardTitle>
                <CardDescription>
                  O agente aprende constantemente com os dados da sua empresa
                  para melhorar
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-chart-3/20 animate-float-delay">
              <CardHeader>
                <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-chart-3/20 transition-colors">
                  <HeadphonesIcon className="w-6 h-6 text-chart-3" />
                </div>
                <CardTitle>Suporte humano</CardTitle>
                <CardDescription>
                  Equipe Atende.ai disponível durante todo o processo de
                  implementação
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Businesses Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Empresas ideais</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Perfeito para negócios que recebem muitas ligações e querem
              otimizar o atendimento
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                icon: Utensils,
                label: "Restaurantes e delivery",
                color: "text-chart-1",
              },
              {
                icon: Stethoscope,
                label: "Clínicas e consultórios",
                color: "text-chart-2",
              },
              {
                icon: Scissors,
                label: "Salões e barbearias",
                color: "text-chart-3",
              },
              {
                icon: Dumbbell,
                label: "Academias e estúdios",
                color: "text-chart-1",
              },
              { icon: Heart, label: "Petshops", color: "text-chart-2" },
              {
                icon: Building2,
                label: "Negócios locais",
                color: "text-chart-3",
              },
            ].map((business, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <business.icon
                  className={`w-12 h-12 mx-auto mb-4 ${business.color} group-hover:scale-110 transition-transform`}
                />
                <p className="font-medium text-sm">{business.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="brasil" className="mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Nosso diferencial
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Nós cuidamos de tudo para você
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sua empresa só precisa nos fornecer as informações ou integrar
                com seus sistemas atuais. A partir disso, configuramos um agente
                personalizado que entende seu negócio.
              </p>
              <div className="space-y-4">
                {[
                  "Confirma agendamentos automaticamente",
                  "Responde dúvidas frequentes dos clientes",
                  "Envia lembretes por telefone",
                  "Faz cobranças de forma natural",
                  "Oferece suporte técnico básico",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-chart-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-chart-2/20 to-chart-3/20 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Clock className="w-24 h-24 mx-auto mb-6 text-primary animate-pulse" />
                  <h3 className="text-2xl font-bold mb-2">24/7</h3>
                  <p className="text-muted-foreground">
                    Sempre disponível para seus clientes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-card via-card to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 brasil-gradient-subtle"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Deixe que a inteligência artificial
            <br />
            atenda por você
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fale com a Atende.ai e transforme o atendimento da sua empresa.
            Setup rápido, suporte completo e resultados desde o primeiro dia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
            >
              Começar agora - É grátis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              Agendar demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Atende.ai</span>
            </div>
            <p className="text-muted-foreground text-center md:text-right">
              © 2024 Atende.ai - Atendimento inteligente para empresas
              brasileiras
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
