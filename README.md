# Portfólio Profissional — Ícaro Abraão Frazão

Portfólio responsivo desenvolvido com HTML, CSS e Bootstrap 5, com uma estrutura opcional preparada para conectar ao Supabase futuramente.

## Visualizar localmente
1. Extraia a pasta do projeto.
2. Abra a pasta no VS Code.
3. Inicie o `index.html` com a extensão Live Server.
4. É necessário estar conectado à internet para carregar Bootstrap, Bootstrap Icons, Google Fonts e a biblioteca do Supabase via CDN.

## Personalizações antes de entregar
- Confira o nome e o texto de apresentação.
- Troque `assets/img/avatar.svg` por uma foto ou avatar seu, se desejar.
- Substitua `SEU-USUARIO` pelos seus dados reais do GitHub.
- Substitua `SEU-PERFIL` pelo seu perfil do LinkedIn.
- Substitua `SEU-EMAIL@EXEMPLO.COM` pelo e-mail que deseja divulgar.
- Troque os links genéricos dos projetos pelos repositórios correspondentes.
- Confira se as descrições representam trabalhos que você realmente desenvolveu.

## Supabase: estrutura preparada, mas opcional
Atualmente, você informou que conectou sua conta do GitHub ao Supabase, mas ainda não criou/configurou um projeto de banco de dados. Por isso, o portfólio continua funcionando normalmente sem Supabase.

Quando quiser preparar a conexão:
1. Acesse https://supabase.com/ e crie um projeto.
2. No painel do projeto, entre em **Project Settings → API**.
3. Copie a **Project URL** e a chave **publishable** (ou `anon`, dependendo da versão do painel).
4. Abra `js/supabase.js` e substitua os dois textos `COLE_AQUI...` pelos valores correspondentes.
5. Salve e teste o site pelo Live Server.

### Segurança
- A chave publishable/anon é destinada ao uso no navegador, mas só deve ser usada com políticas de segurança adequadas.
- Nunca coloque a chave `service_role` ou qualquer chave secreta no HTML, JavaScript do navegador ou repositório GitHub.
- Antes de criar tabelas ou armazenar dados, habilite/configure RLS (Row Level Security) e crie políticas apropriadas.
- Esta versão apenas prepara o cliente Supabase. Ela ainda não lê nem grava dados no banco.

## GitHub
Crie um repositório público no GitHub. No terminal do VS Code, dentro da pasta do projeto, execute:

```bash
git init
git add .
git commit -m "feat: cria portfolio com Bootstrap e estrutura Supabase"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/portfolio-bootstrap.git
git push -u origin main
```

Troque `SEU-USUARIO` pelo seu usuário real do GitHub. Se a pasta já estiver conectada a um repositório, não repita `git init` nem `git remote add origin`; confira o remoto com `git remote -v`.

## Vercel
1. Entre em https://vercel.com/ com sua conta.
2. Escolha **Add New → Project**.
3. Importe o repositório do GitHub.
4. Como o projeto é HTML/CSS/JS estático, não precisa configurar comando de build.
5. Clique em **Deploy**.

## Arquivos principais
- `index.html`: conteúdo e estrutura do portfólio.
- `css/style.css`: identidade visual e responsividade.
- `js/supabase.js`: ponto opcional de configuração do Supabase.
- `assets/img/avatar.svg`: avatar provisório.
