# Jornada do Cliente — Grupo Souza MKT

> Aprovado em: 01/04/2026

---

## Visão Geral

A jornada do cliente tem 5 fases. Cada fase tem entregáveis claros e critérios de passagem para a próxima.

```
Prospecção → Onboarding → Setup Técnico → Operação Mensal → Evolução
```

---

## Fase 1 — Prospecção e Venda

**Objetivo:** qualificar o lead e fechar contrato.

**Etapas:**
1. Lead chega (indicação, conteúdo, prospecção ativa)
2. Qualificação rápida — se encaixa no ICP? Tem verba mínima (R$2.500 fee + mídia)?
3. Reunião de diagnóstico (30min) — entender o negócio, dores, o que já tentou
4. Proposta comercial com pacote recomendado (Ignição, Aceleração ou Máquina)
5. Negociação e fechamento
6. Assinatura de contrato (mínimo 3 meses)

**Critérios de passagem:**
- Contrato assinado
- Primeiro pagamento confirmado
- Pacote definido

**Responsável:** Rodrigo

---

## Fase 2 — Onboarding (Semana 1-2)

**Objetivo:** coletar tudo que é necessário para começar a operar.

**Etapas:**
1. Reunião de kickoff (60min) — apresentar o processo, alinhar expectativas, cronograma
2. Coleta de acessos:
   - Google Ads (acesso de administrador)
   - Meta Business Suite / Ads Manager
   - Google Analytics (GA4)
   - Google Tag Manager
   - Domínio (DNS ou painel do registrador)
   - CRM atual (se houver)
   - Redes sociais (se aplicável)
3. Briefing do negócio:
   - ICP do cliente (quem é o cliente ideal dele?)
   - Ofertas e serviços principais
   - Diferenciais e concorrentes
   - Tom de voz e palavras proibidas
   - Histórico de campanhas (o que já rodou, o que funcionou)
4. Criação da pasta do cliente no projeto:
   - `clientes/{slug}/contexto.md`
   - `clientes/{slug}/branding.json`
   - `clientes/{slug}/historico-decisoes.md`
5. Configuração na plataforma de email (organização, domínio de envio)

**Critérios de passagem:**
- Todos os acessos recebidos e testados
- contexto.md e branding.json preenchidos
- Cliente configurado na plataforma de email

**Prazo:** até 10 dias úteis após assinatura

---

## Fase 3 — Setup Técnico (Semana 2-4)

**Objetivo:** montar a infraestrutura de aquisição do cliente.

**Etapas (variam por pacote):**

### Todos os pacotes
- Instalar GTM no site/LP do cliente
- Configurar pixels (Meta, Google, outros conforme necessidade)
- Implementar sistema de tracking (27 campos ocultos)
- Configurar GA4 (eventos, conversões, audiências)
- Criar landing page(s) com CRO e tracking integrado
- Estruturar campanhas de tráfego pago

### Aceleração e Máquina
- Estruturar CRM (pipeline, etapas, regras de passagem)
- Criar automações de nutrição (fluxos no n8n)
- Configurar dashboard de performance

### Máquina
- Setup completo de email marketing (templates, sequências)
- Implementar AIEO/GEO (schema, llms.txt, conteúdo otimizado)
- Dashboard em tempo real

**Critérios de passagem:**
- Tracking validado (eventos disparando corretamente)
- LP publicada e funcionando
- Campanhas aprovadas pelo cliente e prontas para ativar
- Automações testadas

**Prazo:** até 15 dias úteis após onboarding completo

---

## Fase 4 — Operação Mensal (Recorrente)

**Objetivo:** operar, otimizar e reportar resultados.

### Rotina semanal
- Análise de métricas das campanhas
- Otimizações de lance, segmentação, criativos
- Monitoramento de automações e fluxos
- Verificação de tracking (dados chegando corretamente)

### Rotina quinzenal (Aceleração e Máquina)
- Relatório de performance com análise de funil
- Reunião de alinhamento com o cliente (Máquina)

### Rotina mensal
- Relatório completo de performance (todos os pacotes)
- Análise de CAC, CPL, taxa de conversão, ROAS
- Recomendações de próximos passos
- Revisão de verba e alocação entre canais

### Entregas recorrentes por pacote

| Entrega | Ignição | Aceleração | Máquina |
|---------|---------|------------|---------|
| Otimização de campanhas | Semanal | Semanal | Semanal |
| Relatório de performance | Mensal | Quinzenal | Semanal |
| Reunião de alinhamento | Mensal | Mensal | Quinzenal |
| Novas LPs | Sob demanda | Até 1/mês | Ilimitadas |
| Novos fluxos de automação | — | Sob demanda | Incluso |
| Testes A/B | — | Sim | Sim |
| Revisão de CRM | — | Trimestral | Mensal |

---

## Fase 5 — Evolução (Trimestral)

**Objetivo:** avaliar resultados, identificar oportunidades e crescer.

**Etapas:**
1. Análise trimestral de resultados vs. objetivos
2. Revisão de ICP e posicionamento do cliente (mudou algo?)
3. Identificar gargalos no funil (onde está perdendo lead?)
4. Propor novos canais, testes ou estratégias
5. Avaliar upgrade de pacote (se fizer sentido para o cliente)
6. Atualizar `historico-decisoes.md` com mudanças estratégicas

**Entregas:**
- Relatório trimestral com análise de tendência
- Recomendações de evolução
- Atualização do contexto do cliente

---

## Regras Gerais

- Dados e acessos permanecem com o cliente — sem lock-in
- Toda decisão estratégica é registrada em `historico-decisoes.md`
- Nunca criar conteúdo sem consultar `contexto.md` e `branding.json` do cliente
- Custos de ferramentas de terceiros são repassados ao cliente (custo real)
- Verba de mídia é sempre separada do fee

---

## SLA de Resposta

| Canal | Tempo de resposta |
|-------|------------------|
| WhatsApp | Até 4h em horário comercial |
| Email | Até 24h úteis |
| Reunião emergencial | Agendar em até 48h |
| Bug/tracking quebrado | Prioridade máxima — até 4h |
