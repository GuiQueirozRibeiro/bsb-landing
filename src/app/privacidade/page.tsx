import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_NUMERO } from "@/components/shared";

export const metadata: Metadata = {
  title: "Política de Privacidade | SGP Condomínios",
  description:
    "Como os apps SGP Condomínios e SGP Morador e o site de gestão tratam os dados pessoais, de acordo com a LGPD.",
};

// Atualizar quando houver e-mail próprio para privacidade (encarregado/DPO).
const CONTATO_WHATSAPP = `https://wa.me/${WHATSAPP_NUMERO}`;
const ATUALIZADA_EM = "10 de novembro de 2026";

function Secao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-slate-900">{titulo}</h2>
      <div className="mt-3 space-y-3 text-slate-700 leading-relaxed">{children}</div>
    </section>
  );
}

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <Link href="/" className="text-sm text-[#F0582C] hover:underline">
          Voltar ao início
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight">Política de Privacidade</h1>
        <p className="mt-2 text-sm text-slate-500">Atualizada em {ATUALIZADA_EM}</p>

        <p className="mt-6 text-slate-700 leading-relaxed">
          Esta política explica como a BSB Engenharia Condominial trata os dados pessoais de quem
          usa o site de gestão SGP Condomínios, o app SGP Condomínios (síndicos e equipe) e o app
          SGP Morador, de acordo com a Lei Geral de Proteção de Dados (Lei 13.709/2018).
        </p>

        <Secao titulo="Quais dados coletamos">
          <p>
            <strong>Equipe e síndicos (site e app SGP Condomínios):</strong> nome, e-mail, telefone,
            CPF, data de nascimento, foto de perfil, condomínios em que atua, e as informações que
            registra no sistema, como solicitações com fotos, obras, manutenções e lançamentos
            financeiros.
          </p>
          <p>
            <strong>Moradores (app SGP Morador):</strong> nome, e-mail, telefone, condomínio, bloco,
            unidade e tipo de vínculo (proprietário, inquilino, dependente). Também guardamos o que
            o morador registra no app: ocorrências com até 3 fotos, reservas de áreas comuns,
            confirmação de retirada de encomendas e quais comunicados já leu.
          </p>
          <p>
            <strong>Dados do aparelho:</strong> um identificador para envio de notificações (token
            de push). Não coletamos localização, contatos nem dados de publicidade.
          </p>
        </Secao>

        <Secao titulo="Para que usamos">
          <ul className="list-disc pl-6 space-y-2">
            <li>Permitir o acesso à conta e confirmar que o morador pertence à unidade informada.</li>
            <li>
              Executar o serviço contratado pelo condomínio: comunicados, ocorrências, reservas,
              encomendas, documentos, obras e manutenções.
            </li>
            <li>Enviar notificações sobre comunicados, encomendas e respostas às ocorrências.</li>
            <li>Cumprir obrigações legais e registrar quem aprovou ou alterou cada informação.</li>
          </ul>
          <p>Não vendemos dados pessoais e não os usamos para publicidade.</p>
        </Secao>

        <Secao titulo="Com quem compartilhamos">
          <p>
            Os dados do morador ficam visíveis apenas para o síndico e a equipe de gestão do
            próprio condomínio, na medida necessária para cada função (por exemplo, a portaria vê a
            unidade para registrar encomendas). Moradores não veem dados de outros moradores.
          </p>
          <p>
            Usamos fornecedores para operar o serviço: Supabase (banco de dados, arquivos e login)
            e, para notificações, os serviços de push do Google (Firebase) e da Apple. Esses
            fornecedores tratam os dados apenas para prestar o serviço.
          </p>
        </Secao>

        <Secao titulo="Por quanto tempo guardamos">
          <p>
            Enquanto a conta estiver ativa e o condomínio usar o sistema. Quando a pessoa exclui a
            conta, apagamos os dados de perfil, as fotos enviadas pelo app e os identificadores de
            notificação. Registros que o condomínio precisa manter por obrigação legal ou de
            prestação de contas (como lançamentos financeiros) ficam guardados sem os dados
            pessoais de quem os criou.
          </p>
        </Secao>

        <Secao titulo="Segurança">
          <p>
            A comunicação é criptografada. O acesso no banco de dados é separado por condomínio e
            por função, e os arquivos internos só podem ser abertos pela equipe. No celular, a
            sessão de login do app SGP Morador fica guardada no cofre do sistema (Keychain no
            iPhone e Keystore no Android).
          </p>
        </Secao>

        <Secao titulo="Seus direitos">
          <p>
            Você pode pedir a confirmação de que tratamos seus dados, acesso, correção, exclusão,
            portabilidade e informações sobre compartilhamento, além de revogar o consentimento
            quando ele for a base do tratamento.
          </p>
          <p>
            Pelo próprio app é possível editar nome e telefone e excluir a conta (Perfil, Excluir
            conta). Para os demais pedidos, fale conosco.
          </p>
        </Secao>

        <Secao titulo="Contato">
          <p>
            BSB Engenharia Condominial. Pedidos sobre dados pessoais pelo{" "}
            <a href={CONTATO_WHATSAPP} className="text-[#F0582C] hover:underline">
              WhatsApp
            </a>
            . Respondemos em até 15 dias.
          </p>
        </Secao>

        <Secao titulo="Mudanças nesta política">
          <p>
            Quando esta política mudar, a data no topo será atualizada e, se a mudança for
            relevante, avisaremos pelos apps.
          </p>
        </Secao>
      </div>
    </main>
  );
}
