"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Wrench,
  FileSpreadsheet,
  Camera,
  Coins,
  BellRing,
  ShieldCheck,
  X,
  CheckCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Grupo, Item, Revelar } from "./animacoes";
import { Botao, LINK_APP_STORE, LINK_GOOGLE_PLAY } from "./shared";

interface RecursoDetalhe {
  id: string;
  icon: React.ElementType;
  tag: string;
  norma: string;
  title: string;
  resumo: string;
  detalheCompleto: string;
  beneficios: string[];
  responsabilidadeTecnica: string;
}

const RECURSOS_DATA: RecursoDetalhe[] = [
  {
    id: "nbr5674",
    icon: Wrench,
    tag: "Norma Técnica",
    norma: "ABNT NBR 5674",
    title: "Plano de Manutenção Preventiva",
    resumo:
      "Controle contínuo do ciclo de vida das instalações do edifício com rotinas diárias, semanais, mensais e anuais.",
    detalheCompleto:
      "A NBR 5674 estabelece os requisitos para o sistema de gestão de manutenção predial. O SGP Condomínios programa automaticamente as inspeções de bombas d'água, grupo gerador, para-raios (SPDA), impermeabilizações e elevadores, alertando o síndico antes do vencimento.",
    beneficios: [
      "Histórico técnico auditável em caso de sinistros ou fiscalização",
      "Redução de até 35% nos custos com reparos emergenciais",
      "Garantia de atendimento às exigências das seguradoras",
      "Checklists operacionais com fotos e assinaturas digitais",
    ],
    responsabilidadeTecnica: "Supervisionado por Engenheiro Civil com ART no CREA-DF.",
  },
  {
    id: "cotacoes",
    icon: FileSpreadsheet,
    tag: "Governança",
    norma: "Auditoria & Compliance",
    title: "Comparador com 3 Cotações",
    resumo:
      "Bloqueio automático contra aprovação de obras ou serviços sem no mínimo três orçamentos comparados lado a lado.",
    detalheCompleto:
      "O sistema protege o síndico contra contestações em assembleias e suspeitas de favorecimento. Para liberar a aprovação de uma obra ou compra, é mandatório cadastrar 3 fornecedores diferentes com propostas comerciais e CNPJ, comparando preço, prazo e garantia.",
    beneficios: [
      "Quórum obrigatório de 3 orçamentos para aprovação",
      "Comparativo de escopo técnico, marcas e garantias",
      "Relatório gerado em PDF para prestação de contas no conselho fiscal",
      "Histórico de todos os orçamentos arquivado na nuvem",
    ],
    responsabilidadeTecnica: "Em conformidade com as boas práticas de governança e auditoria condominial.",
  },
  {
    id: "laudos",
    icon: Camera,
    tag: "Engenharia Legal",
    norma: "Perícias & ART",
    title: "Laudo Fotográfico Antes & Depois",
    resumo:
      "Inspeções prediais com registro de patologias, fotos comparativas e emissão de laudo conclusivo com ART.",
    detalheCompleto:
      "Cada vistoria realizada pela BSB Engenharia gera um laudo fotográfico em alta resolução. O documento confronta o estado anterior e a recuperação executada, acompanhado da Anotação de Responsabilidade Técnica (ART) oficial emitida junto ao CREA-DF.",
    beneficios: [
      "Comprovação visual irrefutável do serviço executado",
      "Validade jurídica plena perante o Poder Judiciário e seguradoras",
      "Layout padronizado pronto para apresentação em assembleia",
      "Download em PDF ou impressão em formato A4 institucional",
    ],
    responsabilidadeTecnica: "Emitido e assinado por perito com registro ativo no CREA-DF.",
  },
  {
    id: "financeiro",
    icon: Coins,
    tag: "Transparência",
    norma: "Gestão Financeira",
    title: "Balancetes & Transparência",
    resumo:
      "Contas a pagar unificadas, múltiplos comprovantes bancários anexados e conciliação de extratos OFX.",
    detalheCompleto:
      "Elimine a perda de notas fiscais e comprovantes. O módulo financeiro do SGP Condomínios permite lançar pagamentos com notas em PDF, recibos e comprovantes de PIX. O extrato bancário (OFX) é conciliado em um clique.",
    beneficios: [
      "Múltiplos anexos de notas fiscais e recibos em cada pagamento",
      "Conciliação bancária inteligente sem perder o extrato",
      "Balancete mensal exportável em PDF e planilha Excel",
      "Transparência em tempo real para o síndico e conselheiros",
    ],
    responsabilidadeTecnica: "Integração contábil e auditoria financeira transparente.",
  },
  {
    id: "notificacoes",
    icon: BellRing,
    tag: "Comunicação",
    norma: "Atendimento Rápido",
    title: "Chamados & Notificações Push",
    resumo:
      "Abertura de chamados com fotos direto pelo celular e acompanhamento de status em tempo real.",
    detalheCompleto:
      "Quando ocorre um imprevisto nas áreas comuns (vazamento, falha em portão ou iluminação), o chamado é registrado pelo aplicativo com envio de foto e localização. Síndico e zeladoria são notificados na hora.",
    beneficios: [
      "Notificações instantâneas no celular de todos os responsáveis",
      "Registro com fotos e comentários da equipe técnica",
      "Fila organizada por nível de urgência e departamento",
      "Redução drástica de mensagens dispersas em WhatsApp",
    ],
    responsabilidadeTecnica: "Centralização operacional com rastreabilidade total.",
  },
  {
    id: "seguranca",
    icon: ShieldCheck,
    tag: "Resguardo Jurídico",
    norma: "Código Civil Art. 1.348",
    title: "Proteção Cível e Criminal do Síndico",
    resumo:
      "Blindagem técnica e jurídica para o gestor condominial perante sinistros e responsabilidade de conservação.",
    detalheCompleto:
      "O Código Civil responsabiliza o síndico pessoalmente pela omissão na conservação do condomínio. Ao utilizar o SGP Condomínios com o suporte da BSB Engenharia, todas as decisões contam com laudo técnico e plano de manutenção com ART registrada.",
    beneficios: [
      "Proteção pessoal do patrimônio do síndico em caso de processos",
      "Conformidade com a NBR 16280 para controle de reformas em apartamentos",
      "Documentação pericial que impede a perda de cobertura de seguros",
      "Suporte de engenheiros especialistas em Brasília",
    ],
    responsabilidadeTecnica: "Amparo técnico de empresa com CREA-DF ativo.",
  },
];

export function RecursosComModal() {
  const [selecionado, setSelecionado] = useState<RecursoDetalhe | null>(null);

  return (
    <section id="recursos" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Revelar className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#F0582C]">
            TECNOLOGIA + ENGENHARIA DE VERDADE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Tudo o que um condomínio profissional precisa, na palma da mão.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Clique em qualquer funcionalidade abaixo para entender como o SGP Condomínios
            e a BSB Engenharia blindam a sua gestão predial.
          </p>
        </Revelar>

        {/* Features Grid */}
        <Grupo className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" intervalo={0.09}>
          {RECURSOS_DATA.map((item) => {
            const Icon = item.icon;
            return (
              <Item key={item.id}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-xs hover:border-orange-300 hover:shadow-xl transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#F0582C] group-hover:bg-[#F0582C] group-hover:text-white transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600">
                        {item.norma}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#F0582C] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {item.resumo}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelecionado(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F0582C] hover:text-[#D44820] transition-colors"
                    >
                      <span>Ver detalhes no app</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <span className="text-[10px] font-bold uppercase text-slate-400">
                      {item.tag}
                    </span>
                  </div>
                </motion.div>
              </Item>
            );
          })}
        </Grupo>
      </div>

      {/* Interactive Detail Modal / Drawer */}
      <AnimatePresence>
        {selecionado && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelecionado(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-[32px] bg-white p-7 sm:p-9 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelecionado(null)}
                className="absolute right-6 top-6 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-[#F0582C]">
                  <selecionado.icon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#F0582C]">
                    {selecionado.norma} • {selecionado.tag}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">{selecionado.title}</h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="mt-6 space-y-4 text-sm text-slate-600 leading-relaxed">
                <p className="text-base text-slate-800 font-medium">
                  {selecionado.detalheCompleto}
                </p>

                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-700 mb-2.5">
                    Benefícios diretos para a gestão do condomínio:
                  </h4>
                  <ul className="space-y-2">
                    {selecionado.beneficios.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-orange-50 p-3 text-xs font-semibold text-orange-800 border border-orange-200">
                  <ShieldCheck className="h-4 w-4 text-[#F0582C] shrink-0" />
                  <span>{selecionado.responsabilidadeTecnica}</span>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                  <span>Baixar aplicativo nas lojas:</span>
                </div>
                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <Botao href={LINK_APP_STORE} variante="escuro" className="!text-xs !py-2.5 !px-4">
                    App Store
                  </Botao>
                  <Botao href={LINK_GOOGLE_PLAY} variante="laranja" className="!text-xs !py-2.5 !px-4">
                    Google Play
                  </Botao>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
