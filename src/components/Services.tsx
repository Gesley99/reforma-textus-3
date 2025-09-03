import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, GraduationCap, Users, Clock, CheckCircle } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

function getDialogBullets(title: string): string[] {
  switch (title) {
    case "Mentoria para TCC e Monografias":
      return ["Delimitação do tema e objetivos", "Roteiro e cronograma por etapas", "Normalização ABNT e revisão orientativa"];
    case "Criação de Slides Acadêmicos":
      return ["Roteiro visual e padronização", "Slides prontos para banca", "Orientações de apresentação e tempo"];
    case "Apresentações & Pitch":
      return ["Roteiro de fala", "Simulação com feedback", "Checklist de tempo e impacto"];
    case "Revisão, Normalização & Checagem de Citações":
      return ["Revisão gramatical e estilo", "ABNT/Vancouver/APA e referências", "Correções comentadas para aprendizado"];
    default:
      return [];
  }
}


const services = [
  {
    icon: GraduationCap,
    title: "Mentoria para TCC e Monografias",
    description: "Acompanhamento passo a passo na estruturação, redação e normalização do seu TCC/monografia.",
    features: ["Delimitação de tema", "Roteiro e cronograma", "Normalização ABNT", "Revisão crítica"],
  },
  {
    icon: FileText,
    title: "Orientação para Projetos de Extensão",
    description: "Planejamento e acompanhamento de projetos extensionistas, com orientação sobre objetivos, indicadores e relatórios.",
    features: ["Objetivos e indicadores", "Plano de ação", "Modelos de relatório"],
  },
  {
    icon: BookOpen,
    title: "Mentoria para Artigos Científicos",
    description: "Mentoria para redação e submissão de artigos científicos, do esboço à resposta de pareceres.",
    features: ["Produção de textos acadêmicos originais", "Referências atualizadas conforme a área", "Estruturação segundo normas científicas"],
  },
  {
    icon: Users,
    title: "Criação de Slides Acadêmicos",
    description: "Design e narrativa para apresentações acadêmicas (TCC, bancas, seminários e resultados de pesquisa).",
    features: ["Roteiro visual e storytelling", "Padronização de layout e tipografia", "Exportação pronta para apresentação"],
  },
  {
    icon: Clock,
    title: "Apresentações & Pitch",
    description: "Treinamento para defesa/apresentação: roteiro, ensaio com feedback e estratégias de tempo.",
    features: ["Roteiro de defesa", "Simulação de banca com feedback", "Checklist de tempo e impacto"],
  },
  {
    icon: CheckCircle,
    title: "Revisão, Normalização & Checagem de Citações",
    description: "Revisão acadêmica e gramatical, normalização ABNT/Vancouver/APA e checagem de referências.",
    features: ["Correção ortográfica", "Adequação ABNT/Vancouver/APA", "Melhoria textual"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Nossos <span className="gradient-primary bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Oferecemos soluções completas para todas as suas necessidades acadêmicas, 
            com qualidade garantida e suporte especializado.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="academic-grid max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="shadow-card hover:shadow-elegant transition-smooth group hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-playfair text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                  

<div className="pt-4">
  {service.title === "Mentoria para TCC e Monografias" ? (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="hero" className="w-full">Saiba Mais</Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Mentoria para TCC e Monografias — Como funciona</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-foreground">
          <ul className="list-disc pl-5 space-y-1">
            <li>Delimitação do tema e objetivos</li>\n            <li>Roteiro e cronograma por etapas</li>\n            <li>Normalização ABNT e revisão orientativa</li>\n          </ul>
        </div>
      </DialogContent>
    </Dialog>
) : service.title === "Orientação para Projetos de Extensão" ? (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="hero" className="w-full">Saiba Mais</Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Orientação para Projetos de Extensão — Como funciona</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="space-y-6 text-foreground">
          <div>
            <h4 className="font-semibold mb-2">O que fazemos</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Estruturamos o projeto conforme as diretrizes acadêmicas.</li>
              <li>Elaboramos cronograma, metodologia e relatórios.</li>
              <li>Orientamos sobre instrumentos de coleta de dados.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">O que não fazemos</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Não coletamos fotos, dados pessoais ou entrevistas.</li>
              <li>Não executamos atividades de campo.</li>
              <li>Essas ações ficam sob responsabilidade da equipe do aluno.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Entregamos</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Documento do projeto.</li>
              <li>Cronograma básico.</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  ) : service.title === "Mentoria para Artigos Científicos" ? (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="hero" className="w-full">Saiba Mais</Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Mentoria para Artigos Científicos — Como funciona</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="space-y-6 text-foreground">
          <div>
            <h4 className="font-semibold mb-2">Orientamos você a</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Estruturar o artigo conforme padrões científicos reconhecidos.</li>
              <li>Selecionar e utilizar referências atualizadas e confiáveis.</li>
              <li>Organizar introdução, metodologia, resultados e discussão de forma coesa.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Com a nossa orientação você terá</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Um artigo formatado segundo normas acadêmicas.</li>
              <li>Um material de apoio com referências revisadas e atuais.</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  ) : (
    <Button variant="hero" className="w-full">Saiba Mais</Button>
  )}
</div>


                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="gradient-subtle rounded-2xl p-8 shadow-elegant">
            <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
              Precisa de um serviço personalizado?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato conosco para discutir suas necessidades específicas. 
              Criamos soluções sob medida para cada projeto acadêmico.
            </p>
            <Button variant="cta" size="lg" onClick={() => window.open('https://wa.me/61996212692','_blank')}>
              Conversar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;