# Grupo Souza MKT

Agencia de growth marketing e infraestrutura de aquisicao.

## O que e este projeto

QG estrategico do Grupo Souza MKT. Centraliza posicionamento, identidade de marca,
processos operacionais, skills do Claude, e contexto estrategico de cada cliente.

## Como usar

1. Abrir este projeto no Claude (Cowork ou Claude Code)
2. O Claude le o `CLAUDE.md` automaticamente e sabe como operar
3. Para trabalhar com um cliente, o Claude le `clientes/{slug}/` antes de qualquer entrega
4. Skills em `.claude/skills/` automatizam entregas padronizadas

## Estrutura

| Pasta | Conteudo |
|-------|---------|
| `docs/estrategia/` | Missao, visao, SWOT, ICP, posicionamento |
| `docs/marca/` | Paleta de cores, tipografia, brand voice |
| `docs/servicos/` | Catalogo, pacotes, precificacao, SLA |
| `docs/comercial/` | Funil de vendas, proposta, contrato |
| `docs/operacao/` | Jornada do cliente, playbooks |
| `docs/financeiro/` | Modelo de receita, projecao, capacidade |
| `assets/` | Logos e assets visuais |
| `clientes/` | Contexto estrategico por cliente |
| `.claude/skills/` | Skills para entregas padronizadas |

## Ecossistema

Este projeto se conecta com:
- **plataforma-email** — SaaS de email marketing (leads, disparos, tracking, dashboards)
- **maquina-producao** — Pipeline de video/conteudo por IA
- **ClickUp** — Gestao de tarefas e processos
- **Make/n8n** — Automacoes
- **Supabase** — Backend e banco de dados
- **Vercel** — Deploy de sites e LPs
