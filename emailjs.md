# Modelo de Template para EmailJS

## Instruções

1. Acesse o painel do [EmailJS](https://dashboard.emailjs.com/).
2. Vá em **Email Templates** e clique em **Create New Template**.
3. Dê um nome ao template (ex: `contato_portfolio`).
4. Copie e cole o exemplo abaixo no campo de conteúdo do template.
5. Salve o template e utilize o `TEMPLATE_ID` gerado no seu código.

---

## Exemplo de Template (HTML ou Texto)

```
Nova mensagem recebida pelo portfólio!

Nome: {{from_name}}
E-mail: {{from_email}}
Assunto: {{subject}}
Mensagem:
{{message}}
```

---

## Variáveis disponíveis

- `{{from_name}}` — Nome do remetente
- `{{from_email}}` — E-mail do remetente
- `{{subject}}` — Assunto da mensagem
- `{{message}}` — Conteúdo da mensagem

Você pode personalizar o layout, adicionar HTML, ou incluir outras variáveis conforme desejar no painel do EmailJS.

---

**Dica:** Ative as notificações no EmailJS para ser avisado sempre que receber um novo contato pelo site!

---

## Exemplo de Template HTML

Copie e cole este exemplo no campo de conteúdo do seu template no painel do EmailJS, escolhendo a opção HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Novo Contato - Portfólio</title>
    <style>
      body {
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        font-family: "Segoe UI", Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      .container {
        background: #fff;
        border-radius: 16px;
        max-width: 480px;
        margin: 40px auto;
        box-shadow: 0 8px 32px rgba(95, 46, 234, 0.1), 0 1.5px 8px #5f2eea22;
        padding: 40px 32px 32px 32px;
        border: 1.5px solid #e0e7ff;
      }
      .header {
        text-align: center;
        margin-bottom: 32px;
      }
      .logo {
        width: 48px;
        height: 48px;
        margin-bottom: 8px;
      }
      .title {
        color: #5f2eea;
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 6px;
        letter-spacing: 0.5px;
      }
      .subtitle {
        color: #888;
        font-size: 15px;
        margin-bottom: 24px;
      }
      .label {
        font-weight: 600;
        color: #5f2eea;
        margin-top: 18px;
        margin-bottom: 2px;
        font-size: 15px;
      }
      .value {
        color: #222;
        background: #f4f7ff;
        border-radius: 6px;
        padding: 8px 12px;
        font-size: 16px;
        margin-bottom: 2px;
      }
      .message {
        color: #333;
        background: #f9f9fb;
        border-radius: 6px;
        padding: 14px 14px;
        font-size: 16px;
        margin-bottom: 2px;
        white-space: pre-line;
      }
      .footer {
        margin-top: 36px;
        text-align: center;
        font-size: 13px;
        color: #aaa;
        border-top: 1px solid #ececec;
        padding-top: 18px;
        letter-spacing: 0.2px;
      }
      @media (max-width: 600px) {
        .container {
          padding: 18px 4vw;
        }
        .title {
          font-size: 20px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <!-- Se quiser, coloque seu logo aqui -->
        <!-- <img src="https://seusite.com/logo.png" class="logo" alt="Logo" /> -->
        <div class="title">Nova mensagem recebida pelo portfólio!</div>
        <div class="subtitle">
          Você recebeu um novo contato através do site DmCode Solutions.
        </div>
      </div>
      <div class="label">Nome</div>
      <div class="value">{{from_name}}</div>
      <div class="label">E-mail</div>
      <div class="value">{{from_email}}</div>
      <div class="label">Assunto</div>
      <div class="value">{{subject}}</div>
      <div class="label">Mensagem</div>
      <div class="message">{{message}}</div>
      <div class="footer">
        Enviado automaticamente pelo site <b>DmCode Solutions</b><br />
        <span style="color:#5f2eea;"
          >&copy; {new Date().getFullYear()} Daniel Mendes</span
        >
      </div>
    </div>
  </body>
</html>
```

Você pode personalizar as cores, fontes, adicionar seu logo e ajustar o layout conforme desejar. As variáveis entre `{{ }}` serão substituídas automaticamente pelo EmailJS.
