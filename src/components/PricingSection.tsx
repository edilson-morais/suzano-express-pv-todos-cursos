import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ModernPricingCard } from "@/components/ui/modern-pricing-card";
export const PricingSection = () => {
  const features = ["Técnica invertida exclusiva", "Coordenação entre mão direita e esquerda", "7 sons essenciais do pandeiro", "Ritmos como samba, maracatu, baião e mais", "Adaptação para tocar com cajón, congas", "Fluidez, controle e criatividade na sua forma de tocar"];
  return <section id="oferta" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <ModernPricingCard
              tier="CURSO AFRO BRASIL - ATABAQUE E PANDEIRO"
              price="12x R$ 19,70"
              bestFor="ou R$ 197,00 à vista"
              CTA="QUERO COMEÇAR AGORA"
              highlighted={true}
              benefits={[
                { text: "MÓDULO EXERCÍCIOS – PANDEIRO", checked: true },
                { text: "MÓDULO CONGO", checked: true },
                { text: "MÓDULO ILÚ", checked: true },
                { text: "MÓDULO IJEXÁ", checked: true },
                { text: "MÓDULO AFRO LATINO", checked: true },
                { text: "MÓDULO AGUERÊ", checked: true },
                { text: "MÓDULO IBÍ", checked: true },
                { text: "MÓDULO BARRAVENTO", checked: true },
                { text: "MÓDULO JONGO", checked: true },
                { text: "MÓDULO BATUCADA CONGO + CABILA", checked: true }
              ]}
              link="https://sun.eduzz.com/631003?utm_source=afro+brasil+pv&utm_id=todos-os-cursos+pv"
              className="w-full"
            />
            
            <ModernPricingCard
              tier="PLANO MODERN GROOVES"
              price="12x R$ 14,70"
              bestFor="ou R$ 147,00 à vista"
              CTA="QUERO COMEÇAR AGORA"
              highlighted={true}
              benefits={[
                { text: "MÉTODO EXCLUSIVO CRIADO POR SUZANO (Técnica Invertida)", checked: true },
                { text: "MÓDULO 0 COM EXERCÍCIOS", checked: true },
                { text: "ELETRO MÓDULO (Pandeiro com Pedais e Sampler)", checked: true },
                { text: "FUNK 1", checked: true },
                { text: "FUNK 2", checked: true },
                { text: "REGGAE", checked: true },
                { text: "ALÉM (criado por Suzano)", checked: true },
                { text: "AFRO LATINO", checked: true },
                { text: "JUNGLE", checked: true },
                { text: "DRUM'N BASS", checked: true },
                { text: "GROOVE BACK BEAT", checked: true }
              ]}
              link="https://sun.eduzz.com/51752?utm_source=afro+brasil+pv&utm_id=todos-os-cursos+pv"
              className="w-full"
            />
            
            <ModernPricingCard
              tier="PLANO INICIANTE"
              price="12x R$ 6,70"
              bestFor="ou R$ 67,00 à vista"
              CTA="QUERO COMEÇAR AGORA"
              highlighted={true}
              benefits={[
                { text: "42 aulas em vídeo HD (INCLUSIVE EM CÂMERA LENTA)", checked: true },
                { text: "Acesso por 2 anos", checked: true },
                { text: "PDF de apoio (APOSTILA COM TODOS OS RITMOS E VARIAÇÕES)", checked: true },
                { text: "Suporte por IA (inteligência artificial) no WhatsApp", checked: true },
                { text: "o Suzano Bot responderá todas as suas dúvidas", checked: true }
              ]}
              link="https://sun.eduzz.com/50299?utm_source=afro+brasil+pv&utm_id=todos-os-cursos+pv"
              className="w-full"
            />
            
            <ModernPricingCard
              tier="Plano PRO"
              price="12x de R$22,70"
              bestFor="De R$ 397,00 por apenas | Ou R$ 227 à vista no Pix"
              CTA="QUERO COMEÇAR AGORA"
              highlighted={true}
              benefits={features.map(feature => ({ text: feature, checked: true }))}
              className="w-full"
            />
          </div>
          
          <div className="bg-card/50 border border-primary/20 rounded-2xl p-8 space-y-8 max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                CONHEÇA NOSSA GARANTIA
              </h2>
              
              <div className="flex items-center justify-center space-x-6">
                <img 
                  src="/lovable-uploads/4cc49268-bdc5-4fef-863d-ca0cb802c917.png" 
                  alt="Garantia 15 dias incondicional"
                  className="w-24 h-24 object-contain"
                />
                <div className="text-left space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Estás Protegido por nossa</h3>
                  <p className="text-primary font-bold text-lg">★ Garantia Incondicional de Satisfação ★</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Fazendo sua inscrição hoje, seu risco é zero, pois conta com nossa garantia total e incondicional de satisfação do Suzano Express.
              </p>
              
              <p>
                Se não ficares satisfeito com o método, solo envíanos um email dentro de 15 dias e devolveremos 100% de tu dinero, sem nenhuma pergunta.
              </p>
              
              <p>
                Acreditamos que NÃO vamos chegar a esse ponto, mas, se realmente estás preocupado se isso vai funcionar para ti ou não, fica tranquilo, pois tens garantia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};