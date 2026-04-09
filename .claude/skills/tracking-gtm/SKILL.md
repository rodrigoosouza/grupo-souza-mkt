# Skill: Tracking GTM — Grupo Souza MKT

> Aprovado em: 01/04/2026

---

## Visão Geral

Sistema proprietário de tracking para landing pages e sites de clientes. Captura a jornada completa do lead — do primeiro clique ao envio do formulário — com atribuição first-touch e last-touch.

**Container GTM padrão:** GTM-TKXT9V2H (Grupo Souza)
**GA4 padrão:** G-KY781GPXZC

---

## Arquitetura

```
Visitante chega na LP
  ↓
Script de tracking (antes do </body>)
  ↓
1. Captura UTMs da URL (first-touch → cookies)
2. Captura click IDs (gclid, fbclid, ttclid, etc.)
3. Detecta referrer (Google, Instagram, ChatGPT, etc.)
4. Gera session_id único
5. Salva cookies (2 anos, cross-domain)
6. Preenche 27 hidden inputs do formulário
7. Push dataLayer (first-touch + last-touch)
8. Monitora scroll depth (25%, 50%, 75%, 90%)
9. Heartbeat de tempo na página (30s intervals)
  ↓
Lead submete formulário
  ↓
10. Evento form_submit no dataLayer
11. Payload JSON enviado para webhook (n8n)
12. Feedback visual (thank you page inline)
13. Evento thank_you_page_view no dataLayer
```

---

## 27 Campos Ocultos (Hidden Inputs)

Todo formulário de LP deve ter estes 27 campos ocultos, preenchidos automaticamente pelo script:

### UTMs (5 campos)
```html
<input type="hidden" name="utm_source" data-field-id="utm_source">
<input type="hidden" name="utm_medium" data-field-id="utm_medium">
<input type="hidden" name="utm_campaign" data-field-id="utm_campaign">
<input type="hidden" name="utm_content" data-field-id="utm_content">
<input type="hidden" name="utm_term" data-field-id="utm_term">
```

### Click IDs (10 campos)
```html
<input type="hidden" name="gclid" data-field-id="gclid">         <!-- Google Ads -->
<input type="hidden" name="gbraid" data-field-id="gbraid">       <!-- Google Ads (iOS) -->
<input type="hidden" name="wbraid" data-field-id="wbraid">       <!-- Google Ads (web) -->
<input type="hidden" name="fbclid" data-field-id="fbclid">       <!-- Meta/Facebook -->
<input type="hidden" name="ttclid" data-field-id="ttclid">       <!-- TikTok -->
<input type="hidden" name="gad_campaignid" data-field-id="gad_campaignid">  <!-- Google Ads campaign -->
<input type="hidden" name="gad_source" data-field-id="gad_source">          <!-- Google Ads source -->
<input type="hidden" name="msclkid" data-field-id="msclkid">     <!-- Microsoft Ads -->
<input type="hidden" name="li_fat_id" data-field-id="li_fat_id"> <!-- LinkedIn -->
<input type="hidden" name="sck" data-field-id="sck">             <!-- Snapchat -->
```

### Dados de Sessão (4 campos)
```html
<input type="hidden" name="session_id" id="hidden_session_id">
<input type="hidden" name="landing_page" data-field-id="landing_page">
<input type="hidden" name="origin_page" data-field-id="origin_page">
<input type="hidden" name="session_attributes_encoded" data-field-id="session_attributes_encoded">
```

### Campos de Lead (6 campos visíveis padrão)
```html
<input type="text" name="name" required>           <!-- Nome completo -->
<input type="email" name="email" required>         <!-- E-mail -->
<input type="tel" name="phone" required>           <!-- WhatsApp -->
<input type="text" name="company" required>        <!-- Empresa -->
<input type="text" name="role">                    <!-- Cargo -->
<select name="revenue" required>                   <!-- Faturamento -->
```

### Campos adicionados no submit (2 campos)
- `first_name` — extraído do name
- `last_name` — extraído do name

**Total: 5 UTMs + 10 Click IDs + 4 Sessão + 6 Lead + 2 Auto = 27 campos**

---

## Configuração por Cliente

Duas variáveis no topo do script:

```javascript
var DOMAIN      = '{{COOKIE_DOMAIN}}';  // Ex: '.dominiocliente.com.br'
var WEBHOOK_URL = '{{WEBHOOK_URL}}';    // Ex: 'https://n8n.dominio.com/webhook/abc123'
```

| Placeholder | Exemplo | Onde configurar |
|-------------|---------|-----------------|
| `{{COOKIE_DOMAIN}}` | `.dominiocliente.com.br` | Variável DOMAIN no script |
| `{{WEBHOOK_URL}}` | `https://n8n.dominio.com/webhook/abc` | Variável WEBHOOK_URL no script |
| `{{TEXTO_CTA}}` | `QUERO MINHA VAGA` | Botão do formulário |

**Regras:**
- Cookie domain sempre com ponto no início (`.site.com.br`)
- HTTPS obrigatório (cookies com SameSite=None; Secure)
- Cookies duram 2 anos (63072000 segundos)

---

## Referrer Mapping (Detecção Automática)

Quando o visitante chega sem UTMs, o script detecta a origem pelo referrer:

| Referrer | utm_source | utm_medium |
|----------|-----------|------------|
| google.com | google | organic |
| bing.com | bing | organic |
| instagram.com | instagram | organic |
| facebook.com | facebook | organic |
| youtube.com | youtube | organic |
| linkedin.com | linkedin | organic |
| tiktok.com | tiktok | organic |
| twitter.com / x.com | twitter | organic |
| whatsapp.com | whatsapp | organic |
| telegram.org | telegram | organic |
| chatgpt.com / chat.openai.com | chatgpt | ai |
| gemini.google.com | gemini | ai |
| claude.ai | claude | ai |
| poe.com | poe | ai |
| wikipedia.org | wikipedia | referral |
| github.com | github | referral |

---

## Eventos do DataLayer

### custom_page_view (a cada pageview)
```json
{
  "event": "custom_page_view",
  "session_id": "...",
  "page_url": "...",
  "page_path": "...",
  "page_hostname": "...",
  "referrer": "..."
}
```

### scroll_depth (25%, 50%, 75%, 90%)
```json
{
  "event": "scroll_depth",
  "session_id": "...",
  "scroll_depth": 50,
  "time_on_page": 45,
  "page_path": "..."
}
```

### time_on_page_heartbeat (a cada 30s, max 20 = 10min)
```json
{
  "event": "time_on_page_heartbeat",
  "session_id": "...",
  "time_on_page": 30,
  "heartbeat": 1,
  "page_path": "..."
}
```

### form_submit (ao enviar formulário)
```json
{
  "event": "form_submit",
  "session_id": "...",
  "lead_name": "...",
  "lead_email": "...",
  "lead_phone": "...",
  "lead_company": "...",
  "lead_role": "...",
  "lead_revenue": "...",
  "lead_first_name": "...",
  "lead_last_name": "...",
  "time_on_page_at_submit": 120
}
```

### thank_you_page_view (após submit com sucesso)
```json
{
  "event": "thank_you_page_view",
  "session_id": "...",
  "page_url": "..."
}
```

---

## GTM — Configuração Padrão

### Snippet no `<head>`
```html
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','{{GTM_ID}}');</script>
```

### Noscript após `<body>`
```html
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{GTM_ID}}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

### Tags configuradas no GTM
- GA4 Config Tag → dispara em All Pages
- GA4 Event Tag → form_submit → captura variáveis do dataLayer
- Meta Pixel → PageView em All Pages + Lead em form_submit
- Google Ads Conversion → form_submit
- Scroll depth → evento scroll_depth no dataLayer

---

## Payload JSON do Webhook

Quando o lead submete o form, o webhook (n8n) recebe:

```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "11999999999",
  "company": "Empresa Exemplo LTDA",
  "role": "Diretor",
  "revenue": "100k-500k",
  "first_name": "João",
  "last_name": "Silva",
  "session_id": "1708901234_abc123def",
  "page_url": "https://dominio.com/lp-oferta",
  "page_path": "/lp-oferta",
  "referrer": "https://google.com",
  "submitted_at": "2026-02-23T14:30:00.000Z",
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "campanha-x",
  "utm_content": "anuncio-1",
  "utm_term": "palavra-chave",
  "gclid": "abc123...",
  "fbclid": "",
  "landing_page": "https://dominio.com/lp-oferta?utm_source=google&...",
  "origin_page": "https://google.com",
  "session_attributes_encoded": "eyJ1dG1fc291cmNlIjoiZ29vZ2xlIi..."
}
```

---

## Feedback Visual (Thank You Page)

Após o form submit com sucesso, o script substitui o `document.body` com uma thank you page inline que:
- Usa as CSS variables da LP (--primary, --bg, --text, --font-main)
- Exibe ícone de check, título, mensagem e botão de voltar
- Dispara `thank_you_page_view` no dataLayer
- Não precisa de página separada — funciona em single-page

---

## Máscara de Telefone

Campo `#phone` recebe máscara automática: `(XX) XXXXX-XXXX`

---

## Checklist de Implementação

Ao criar uma LP para um cliente:

- [ ] Script de tracking inserido antes do `</body>`
- [ ] DOMAIN e WEBHOOK_URL configurados
- [ ] GTM snippet no `<head>` + noscript após `<body>`
- [ ] Formulário com id `lead-form`
- [ ] 27 campos ocultos presentes no form
- [ ] Campos visíveis com names corretos (name, email, phone, company, role, revenue)
- [ ] Campo de telefone com id `phone` (para máscara)
- [ ] CSS de feedback incluído (form-success, form-error)
- [ ] HTTPS habilitado no domínio
- [ ] Cookie domain configurado com ponto no início
- [ ] Testar: preencher form com UTMs na URL, verificar se chegam no webhook
- [ ] Testar: verificar dataLayer no console (custom_page_view, form_submit)
- [ ] Testar: scroll depth disparando nos milestones

---

## Referência Completa

O código-fonte completo do script está em:
`plataforma-email/context/references/tracking-integration.md`

**NUNCA modificar o arquivo original.** Copiar e configurar por cliente.
