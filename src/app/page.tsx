"use client";

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
  MessageCircle,
  Smartphone,
  Sheet,
  Zap,
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
  Upload,
  Link,
  Users,
  CreditCard,
  FileSpreadsheet,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">{t.brandName}</span>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {t.ctaButton}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 brasil-gradient-subtle"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge variant="brasil" className="mb-6 animate-float">
            {t.badge}
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent whitespace-pre-line">
            {t.heroTitle}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
            >
              {t.startFreeButton}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              {t.watchDemoButton}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-chart-2" />
              <span>{t.features.setup}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-chart-2" />
              <span>{t.features.selfService}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-chart-2" />
              <span>{t.features.freeTrial}</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.howItWorks.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {t.howItWorks.steps.connect.title}
              </h3>
              <p className="text-muted-foreground">
                {t.howItWorks.steps.connect.description}
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileSpreadsheet className="w-8 h-8 text-chart-2" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {t.howItWorks.steps.addData.title}
              </h3>
              <p className="text-muted-foreground">
                {t.howItWorks.steps.addData.description}
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-chart-3/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-chart-3" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {t.howItWorks.steps.goLive.title}
              </h3>
              <p className="text-muted-foreground">
                {t.howItWorks.steps.goLive.description}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {t.featuresSection.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.featuresSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 animate-float">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>
                  {t.featuresSection.features.smartReplies.title}
                </CardTitle>
                <CardDescription>
                  {t.featuresSection.features.smartReplies.description}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-chart-2/20 animate-float-delay">
              <CardHeader>
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-chart-2/20 transition-colors">
                  <Sheet className="w-6 h-6 text-chart-2" />
                </div>
                <CardTitle>{t.featuresSection.features.sheets.title}</CardTitle>
                <CardDescription>
                  {t.featuresSection.features.sheets.description}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-chart-3/20 animate-float">
              <CardHeader>
                <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-chart-3/20 transition-colors">
                  <Upload className="w-6 h-6 text-chart-3" />
                </div>
                <CardTitle>
                  {t.featuresSection.features.uploads.title}
                </CardTitle>
                <CardDescription>
                  {t.featuresSection.features.uploads.description}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 animate-float-delay">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>
                  {t.featuresSection.features.dashboard.title}
                </CardTitle>
                <CardDescription>
                  {t.featuresSection.features.dashboard.description}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-chart-2/20 animate-float">
              <CardHeader>
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-chart-2/20 transition-colors">
                  <CreditCard className="w-6 h-6 text-chart-2" />
                </div>
                <CardTitle>{t.featuresSection.features.pix.title}</CardTitle>
                <CardDescription>
                  {t.featuresSection.features.pix.description}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-chart-3/20 animate-float-delay">
              <CardHeader>
                <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-chart-3/20 transition-colors">
                  <Users className="w-6 h-6 text-chart-3" />
                </div>
                <CardTitle>{t.featuresSection.features.team.title}</CardTitle>
                <CardDescription>
                  {t.featuresSection.features.team.description}
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
            <h2 className="text-4xl font-bold mb-4">
              {t.targetBusiness.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.targetBusiness.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                icon: Utensils,
                label: t.targetBusiness.businesses.restaurants,
                color: "text-chart-1",
              },
              {
                icon: Stethoscope,
                label: t.targetBusiness.businesses.clinics,
                color: "text-chart-2",
              },
              {
                icon: Scissors,
                label: t.targetBusiness.businesses.salons,
                color: "text-chart-3",
              },
              {
                icon: Dumbbell,
                label: t.targetBusiness.businesses.gyms,
                color: "text-chart-1",
              },
              {
                icon: Heart,
                label: t.targetBusiness.businesses.petshops,
                color: "text-chart-2",
              },
              {
                icon: Building2,
                label: t.targetBusiness.businesses.ecommerce,
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

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.pricing.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">
                  {t.pricing.plans.starter.name}
                </h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  {t.pricing.plans.starter.price}
                  <span className="text-lg text-muted-foreground">
                    {t.pricing.plans.starter.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  {t.pricing.plans.starter.description}
                </p>
                <ul className="space-y-3 mb-8 text-left">
                  {t.pricing.plans.starter.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-chart-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">{t.pricing.startFreeButton}</Button>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-primary/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">
                  {t.pricing.mostPopular}
                </Badge>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">
                  {t.pricing.plans.professional.name}
                </h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  {t.pricing.plans.professional.price}
                  <span className="text-lg text-muted-foreground">
                    {t.pricing.plans.professional.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  {t.pricing.plans.professional.description}
                </p>
                <ul className="space-y-3 mb-8 text-left">
                  {t.pricing.plans.professional.features.map(
                    (feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-chart-2" />
                        <span>{feature}</span>
                      </li>
                    )
                  )}
                </ul>
                <Button className="w-full">{t.pricing.startFreeButton}</Button>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">
                  {t.pricing.plans.enterprise.name}
                </h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  {t.pricing.plans.enterprise.price}
                  <span className="text-lg text-muted-foreground">
                    {t.pricing.plans.enterprise.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  {t.pricing.plans.enterprise.description}
                </p>
                <ul className="space-y-3 mb-8 text-left">
                  {t.pricing.plans.enterprise.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-chart-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">{t.pricing.startFreeButton}</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="brasil" className="mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                {t.benefits.badge}
              </Badge>
              <h2 className="text-4xl font-bold mb-6">{t.benefits.title}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t.benefits.description}
              </p>
              <div className="space-y-4">
                {t.benefits.benefitsList.map((benefit, index) => (
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
                  <h3 className="text-2xl font-bold mb-2">
                    {t.benefits.timeIndicator.number}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.benefits.timeIndicator.description}
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
          <h2 className="text-4xl font-bold mb-6 whitespace-pre-line">
            {t.cta.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
            >
              {t.cta.startTrialButton}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              {t.cta.talkToTeamButton}
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
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">{t.footer.brandName}</span>
            </div>
            <p className="text-muted-foreground text-center md:text-right">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
