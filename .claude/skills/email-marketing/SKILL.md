# Skill: Email Marketing — Grupo Souza MKT

> Aprovado em: 01/04/2026

---

## Visão Geral

Sequências automatizadas, campanhas segmentadas e templates responsivos usando a plataforma própria de email (substitui RD Station). Stack: Next.js + Supabase + MailerSend + n8n.

---

## Plataforma Própria

A plataforma de email do Grupo Souza é multi-tenant (um Supabase, múltiplas organizações). Cada cliente é uma organização com dados isolados via RLS.

**Referência técnica:** `plataforma-email/` (NÃO modificar — só consultar)

---

## Tipos de Sequência

### 1. Boas-vindas (Welcome)
- Dispara: após captura do lead (webhook do formulário)
- Emails: 3-5 emails em 7-14 dias
- Objetivo: apresentar, construir confiança, entregar valor

**Estrutura padrão:**
- **Email 1 (imediato):** Obrigado + entrega do que prometeu (ebook, acesso, etc.)
- **Email 2 (dia 2):** Sua história / credibilidade / caso de sucesso
- **Email 3 (dia 5):** Conteúdo de valor relacionado à dor do lead
- **Email 4 (dia 7):** Prova social (depoimento, números)
- **Email 5 (dia 10-14):** CTA direto (agendar call, solicitar proposta)

### 2. Nutrição (Nurture)
- Dispara: após welcome, para leads que não converteram
- Emails: contínuo (semanal ou quinzenal)
- Objetivo: manter presença, educar, aquecer para conversão

### 3. Reengajamento
- Dispara: leads inativos (30+ dias sem interação)
- Emails: 2-3 emails
- Objetivo: recuperar atenção ou limpar base

### 4. Pós-venda (Onboarding)
- Dispara: após fechamento do contrato
- Emails: 3-5 emails nas primeiras 2 semanas
- Objetivo: alinhar expectativas, pedir acessos, construir relação

### 5. Campanhas pontuais
- Lançamentos, promoções, eventos, webinars
- Disparo único ou mini-sequência (3 emails)

---

## Estrutura de um Email

```
Assunto: [máx 50 chars, gerar curiosidade ou dor]
Preview text: [máx 90 chars, complementa o assunto]

---

[Saudação pessoal — usar primeiro nome]

[1-2 parágrafos curtos — contexto + valor]

[CTA claro — botão ou link]

[Assinatura com nome, cargo, empresa]
```

### Regras de copywriting
- Assunto curto (≤50 chars), sem clickbait barato
- Preview text complementa o assunto (nunca repete)
- Parágrafos curtos (2-3 linhas máx)
- Um CTA por email (não confundir)
- Tom do brand voice do cliente (consultar `branding.json`)
- Personalização: {{primeiro_nome}}, {{empresa}}, {{segmento}}
- Não usar imagens pesadas — emails text-based convertem mais

---

## Templates

### Template HTML responsivo (base)
- Max-width: 600px
- Font-family: sistema (Arial, Helvetica, sans-serif)
- Background: #ffffff
- Text: #333333
- CTA button: cor primária do cliente
- Responsivo (media queries para mobile)
- Testado: Gmail, Outlook, Apple Mail

### Variáveis de merge
| Variável | Valor |
|----------|-------|
| `{{primeiro_nome}}` | Primeiro nome do lead |
| `{{empresa}}` | Empresa do lead |
| `{{email}}` | Email do lead |
| `{{link_material}}` | URL do lead magnet/material |
| `{{link_agendamento}}` | URL de agendamento (Calendly, etc.) |
| `{{link_unsubscribe}}` | Link de descadastro |

---

## Automações (n8n)

### Fluxo padrão de lead novo
```
Webhook (form submit)
  → Salvar lead no Supabase
  → Verificar se já existe (dedup por email)
  → Adicionar à sequência de boas-vindas
  → Email 1 (imediato via MailerSend)
  → Wait 2 dias → Email 2
  → Wait 3 dias → Email 3
  → ...
  → Se abriu email 3 → Tag "engajado"
  → Se não abriu nenhum em 14 dias → Tag "frio"
```

### Triggers comportamentais
- Abriu email → próximo email da sequência
- Clicou em link → tag de interesse + notificação
- Respondeu → alerta para time comercial
- Não abriu 3+ emails → mover para reengajamento
- Clicou em CTA de agendamento → marcar como SQL

---

## Métricas de Referência

| Métrica | Meta |
|---------|------|
| Taxa de abertura | >25% |
| Taxa de clique | >3% |
| Taxa de resposta | >1% |
| Taxa de descadastro | <0.5% por envio |
| Bounce rate | <2% |

---

## Checklist por Cliente

### Setup inicial
- [ ] Organização criada na plataforma de email
- [ ] Domínio de envio configurado (SPF, DKIM, DMARC)
- [ ] Templates criados com branding do cliente
- [ ] Sequência de boas-vindas montada
- [ ] Webhook do formulário conectado ao n8n
- [ ] Teste de envio realizado

### Por campanha
- [ ] Segmentação definida
- [ ] Copy revisada (assunto, preview, corpo, CTA)
- [ ] Personalização funcionando (variáveis de merge)
- [ ] Link de descadastro presente
- [ ] Teste de envio para email pessoal antes
- [ ] Agendamento definido (dia e hora)

---

## Regras

- NUNCA enviar email sem link de descadastro
- NUNCA comprar lista de emails
- Respeitar LGPD — consentimento explícito
- Limpar base a cada 3 meses (remover bounces e inativos crônicos)
- Máximo 1 email/dia por lead (exceto emergência)
- Consultar `branding.json` do cliente para tom de voz e palavras proibidas
