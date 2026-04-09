# Skill: Onboarding de Cliente — Grupo Souza MKT

> Aprovado em: 01/04/2026

---

## Visão Geral

Processo padronizado de entrada de um novo cliente na agência. Do contrato assinado ao setup técnico completo. Referência: `qg/docs/operacao/jornada-do-cliente.md`.

---

## Passo a Passo

### 1. Criar pasta do cliente

```bash
# Estrutura
clientes/{slug}/
  contexto.md
  branding.json
  historico-decisoes.md
```

Usar o template em `qg/clientes/_template/` como base.

**Slug:** lowercase, hifens. Ex: `minha-empresa`, `clinica-odonto`.

### 2. Reunião de Kickoff (60 min)

**Agenda:**
- Apresentar como a agência trabalha (processo, ferramentas, prazos)
- Alinhar expectativas do pacote contratado
- Coletar informações do negócio (ver questionário abaixo)
- Definir responsáveis e canais de comunicação
- Agendar próximas entregas

### 3. Questionário de Contexto

Preencher durante ou após o kickoff. Todas as respostas vão para `contexto.md`.

**Dados do negócio:**
- Nome da empresa
- Site atual (se houver)
- Segmento/nicho
- Tempo de mercado
- Faturamento médio mensal (faixa)
- Número de funcionários (faixa)
- Região de atuação

**ICP do cliente:**
- Quem é o cliente ideal dele?
- Qual o ticket médio?
- B2B ou B2C?
- Decisor: cargo, perfil
- Objeções mais comuns

**Posicionamento:**
- O que o diferencia da concorrência?
- Como quer ser percebido?
- O que NÃO quer ser associado?
- Concorrentes diretos (2-3)

**Marketing atual:**
- Já investe em mídia paga? Quanto?
- Tem site/LP? Performance atual?
- Usa CRM? Qual?
- Tem base de leads? Tamanho?
- Redes sociais ativas?
- Já fez automação de email?

**Branding:**
- Cores da marca (hex)
- Fonte principal
- Tom de voz (formal/informal/técnico)
- Palavras que usa / palavras proibidas
- Logo (pedir arquivos)

### 4. Coleta de Acessos

**Obrigatórios (todos os pacotes):**
- [ ] Google Ads — acesso de administrador (ID MCC ou convite)
- [ ] Meta Business Suite — acesso ao gerenciador de anúncios
- [ ] Google Analytics (GA4) — acesso de editor
- [ ] Google Tag Manager — acesso de publicar
- [ ] Domínio — acesso ao DNS ou painel do registrador

**Opcionais (conforme pacote):**
- [ ] CRM atual — acesso admin ou de integração
- [ ] Redes sociais — acesso admin (se gerir conteúdo)
- [ ] MailerSend / ferramenta de email — acesso ou criar conta
- [ ] Hospedagem / servidor — acesso para instalar tracking

### 5. Preencher Arquivos do Cliente

#### contexto.md
Usar template de `qg/clientes/_template/contexto.md`. Preencher com as respostas do questionário.

#### branding.json
```json
{
  "nome": "Nome da Empresa",
  "slug": "nome-da-empresa",
  "cores": {
    "primaria": "#hex",
    "secundaria": "#hex",
    "fundo": "#hex",
    "texto": "#hex"
  },
  "tipografia": {
    "principal": "Nome da Fonte",
    "secundaria": "Nome da Fonte"
  },
  "tom_de_voz": {
    "estilo": "profissional / informal / técnico",
    "descricao": "Como o cliente quer que a marca soe"
  },
  "palavras_proibidas": ["palavra1", "palavra2"],
  "logo_url": "/qg/assets/clientes/slug/logo.png"
}
```

#### historico-decisoes.md
Iniciar com a primeira entrada:
```markdown
# Histórico de Decisões — {Nome da Empresa}

## 01/04/2026 — Onboarding
- Pacote contratado: {Ignição/Aceleração/Máquina}
- Verba de mídia: R${valor}/mês
- Plataformas: {Google Ads, Meta Ads}
- Prioridade inicial: {LP + tráfego / CRM / automação}
- Notas: {observações relevantes}
```

### 6. Setup na Plataforma de Email

- Criar organização do cliente no Supabase
- Configurar domínio de envio (SPF, DKIM, DMARC)
- Criar templates base com branding do cliente
- Configurar webhook do formulário no n8n

### 7. Setup Técnico (ver jornada-do-cliente.md — Fase 3)

Conforme o pacote contratado:
- Instalar GTM (skill: `tracking-gtm`)
- Criar LP (skill: `landing-pages`)
- Configurar automações (skill: `email-marketing`)
- Implementar AIEO/GEO se aplicável (skill: `aieo-geo`)

---

## Timeline Padrão

| Etapa | Prazo |
|-------|-------|
| Kickoff | Até 3 dias após assinatura |
| Coleta de acessos | Até 7 dias após kickoff |
| contexto.md + branding.json preenchidos | Até 10 dias |
| Setup técnico completo | Até 15 dias úteis após onboarding |
| Campanhas rodando | Até 20 dias úteis após assinatura |

---

## Checklist Completo de Onboarding

### Documentação
- [ ] Pasta `qg/clientes/{slug}/` criada
- [ ] `contexto.md` preenchido
- [ ] `branding.json` preenchido
- [ ] `historico-decisoes.md` iniciado
- [ ] Logo e assets recebidos

### Acessos
- [ ] Google Ads
- [ ] Meta Business Suite
- [ ] GA4
- [ ] GTM
- [ ] Domínio (DNS)
- [ ] CRM (se aplicável)

### Plataforma
- [ ] Organização criada na plataforma de email
- [ ] Domínio de envio configurado
- [ ] Templates com branding

### Técnico
- [ ] GTM instalado no site/LP
- [ ] Pixels configurados
- [ ] Tracking validado (27 campos)
- [ ] LP publicada
- [ ] Automações testadas (se aplicável)

### Campanhas
- [ ] Estrutura de campanhas montada
- [ ] Aprovação do cliente
- [ ] Campanhas ativadas
- [ ] Relatório de baseline documentado

---

## Regras

- NUNCA criar conteúdo para o cliente sem ler `contexto.md` e `branding.json` primeiro
- NUNCA armazenar credenciais em documentos — usar gerenciador de senhas
- Dados financeiros do cliente são confidenciais — nunca compartilhar entre clientes
- Toda decisão estratégica deve ser registrada em `historico-decisoes.md`
- Se o cliente não enviar os acessos em 10 dias, escalar com Rodrigo
