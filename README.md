# 🎵 Gessika Koenigkan

> Projeto web desenvolvido para apresentar uma experiência digital personalizada, com identidade visual própria, foco em experiência do usuário e interface responsiva.

[![Status](https://img.shields.io/badge/status-concluído-success?style=for-the-badge)](https://github.com/tayna-goes/Gessika-Koenigkan)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/SCSS-CF649A?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)

---

## 📌 Sobre o projeto

**Gessika Koenigkan** é uma aplicação front-end criada com foco em apresentação visual, organização de conteúdo, responsividade e experiência do usuário.

O projeto foi estruturado para manter uma separação clara entre:

- estrutura e conteúdo;
- apresentação visual;
- estilos fonte em SCSS;
- CSS compilado;
- interações JavaScript;
- recursos visuais.

### Objetivos

- Criar uma interface visualmente consistente.
- Garantir boa experiência em dispositivos móveis.
- Organizar os estilos utilizando SCSS.
- Separar responsabilidades entre estrutura, apresentação e comportamento.
- Facilitar manutenção e evolução do código.
- Aplicar boas práticas de desenvolvimento front-end.

---

## 🛠️ Tecnologias

| Tecnologia | Utilização |
|---|---|
| **HTML5** | Estrutura semântica das páginas |
| **CSS3** | Estilização e apresentação |
| **SCSS** | Organização e manutenção dos estilos |
| **JavaScript** | Interações e comportamento da interface |

---

## 📁 Estrutura do projeto

```text
Gessika-Koenigkan/
│
├── css/
│   └── Arquivos CSS compilados
│
├── images/
│   └── Imagens e recursos visuais
│
├── js/
│   └── Scripts JavaScript
│
├── scss/
│   └── Arquivos fonte SCSS
│
├── favicon.ico
├── index.html
└── README.md
```

### Responsabilidades

**`index.html`**  
Estrutura principal e conteúdo da aplicação.

**`scss/`**  
Arquivos-fonte dos estilos, permitindo maior organização, reutilização e manutenção.

**`css/`**  
Arquivos CSS compilados utilizados pelo navegador.

**`js/`**  
Scripts responsáveis pelas interações e comportamentos dinâmicos.

**`images/`**  
Recursos visuais utilizados pela aplicação.

---

## 🎨 Arquitetura visual

A interface foi pensada considerando:

- hierarquia visual;
- espaçamento;
- tipografia;
- contraste;
- composição;
- responsividade;
- transições;
- interação;
- consistência entre componentes.

A utilização de SCSS como fonte dos estilos facilita a evolução da identidade visual e reduz a concentração de regras em um único arquivo.

---

## 📱 Responsividade

A aplicação considera diferentes tamanhos de tela:

```text
Desktop
   ↓
Tablet
   ↓
Mobile
```

São considerados aspectos como:

- dimensões;
- espaçamentos;
- tipografia;
- navegação;
- imagens;
- componentes interativos;
- distribuição do conteúdo.

O objetivo é preservar a experiência visual e a usabilidade independentemente do dispositivo.

---

## ⚡ Performance

Boas práticas consideradas para o projeto:

- organização dos recursos;
- separação dos arquivos de estilo;
- utilização adequada de imagens;
- JavaScript apenas quando necessário;
- preocupação com dispositivos móveis;
- estrutura simples de arquivos.

### Recomendações para produção

- Converter imagens para **WebP/AVIF** quando aplicável.
- Utilizar `loading="lazy"` em imagens fora do primeiro viewport.
- Minificar CSS e JavaScript no build de produção.
- Utilizar `defer` para scripts não críticos.
- Definir dimensões das imagens para evitar layout shift.
- Realizar auditoria com Lighthouse.
- Configurar cache adequado no servidor.

---

## ♿ Acessibilidade

A aplicação deve priorizar:

- HTML semântico;
- textos alternativos para imagens;
- contraste adequado;
- navegação por teclado;
- estados de foco;
- hierarquia correta de títulos;
- elementos interativos semanticamente apropriados.

Exemplo:

```html
<img
    src="./images/exemplo.jpg"
    alt="Descrição objetiva da imagem"
>
```

---

## 🚀 Como executar

O projeto é front-end e pode ser executado localmente sem necessidade de backend.

### 1. Clone o repositório

```bash
git clone https://github.com/tayna-goes/Gessika-Koenigkan.git
```

### 2. Entre no diretório

```bash
cd Gessika-Koenigkan
```

### 3. Execute

Abra o arquivo:

```text
index.html
```

no navegador.

Para desenvolvimento, recomenda-se utilizar um servidor local, como **Live Server** no VS Code.

---

## 🔧 Desenvolvimento com SCSS

Caso sejam feitas alterações nos arquivos `.scss`, os estilos devem ser recompilados antes da publicação.

Exemplo utilizando Sass:

```bash
sass scss/main.scss css/main.css --watch
```

> Ajuste o caminho do arquivo de entrada conforme a estrutura atual do projeto.

Fluxo:

```text
SCSS
  ↓
Compilação
  ↓
CSS
  ↓
Navegador
```

---

## 🧩 Fluxo de desenvolvimento

```text
1. Alterar SCSS
       ↓
2. Compilar CSS
       ↓
3. Testar no navegador
       ↓
4. Validar responsividade
       ↓
5. Testar interações
       ↓
6. Revisar console
       ↓
7. Commit
       ↓
8. Push
```

---

## 🔍 Checklist de qualidade

Antes de publicar alterações:

- [ ] Testar desktop
- [ ] Testar tablet
- [ ] Testar mobile
- [ ] Verificar imagens
- [ ] Verificar links
- [ ] Verificar console do navegador
- [ ] Validar HTML
- [ ] Validar CSS
- [ ] Verificar acessibilidade
- [ ] Otimizar imagens
- [ ] Compilar SCSS
- [ ] Revisar JavaScript
- [ ] Testar em mais de um navegador

---

## 📐 Boas práticas

### Código

- Evitar duplicação.
- Preferir estruturas reutilizáveis.
- Manter nomes de classes previsíveis.
- Evitar estilos inline sem necessidade.
- Evitar JavaScript diretamente acoplado ao HTML.
- Manter funções com responsabilidade única.

### CSS/SCSS

- Evitar especificidade excessiva.
- Centralizar variáveis reutilizáveis.
- Organizar estilos por responsabilidade.
- Evitar `!important` sem necessidade.
- Manter breakpoints consistentes.

### JavaScript

- Evitar manipulações desnecessárias do DOM.
- Utilizar `const` e `let`.
- Preferir funções com responsabilidade única.
- Validar elementos antes de utilizá-los.
- Evitar código duplicado.

---

## 🧠 Decisões técnicas

A utilização de **HTML + SCSS + CSS + JavaScript** mantém o projeto leve e adequado para uma aplicação essencialmente front-end.

O SCSS permite organizar melhor a camada visual sem adicionar dependências complexas ao runtime.

A separação entre os arquivos-fonte SCSS e o CSS final também facilita o desenvolvimento, manutenção e publicação.

---

## 🌐 Compatibilidade

O projeto deve ser validado nos principais navegadores modernos:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

E em diferentes dispositivos:

- Desktop
- Tablet
- Android
- iOS

---

## 📚 Visão técnica

```text
┌─────────────────────────────┐
│          index.html         │
│     Estrutura da página     │
└──────────────┬──────────────┘
               │
       ┌───────┴────────┐
       ↓                ↓
┌─────────────┐  ┌─────────────┐
│    SCSS     │  │ JavaScript  │
│   Visual    │  │  Interação  │
└──────┬──────┘  └─────────────┘
       ↓
┌─────────────┐
│     CSS     │
│    Final    │
└─────────────┘
```

---

## 🔮 Roadmap

- [ ] Melhorar otimização de imagens
- [ ] Implementar lazy loading onde aplicável
- [ ] Melhorar acessibilidade
- [ ] Executar auditoria Lighthouse
- [ ] Otimizar CSS e JavaScript
- [ ] Documentar componentes
- [ ] Automatizar build de produção
- [ ] Adicionar CI para validações
- [ ] Criar preview/demo online
- [ ] Adicionar testes automatizados quando houver lógica suficiente

---

## 🤝 Contribuição

Para contribuir:

```bash
git checkout -b feature/minha-feature
```

Depois das alterações:

```bash
git add .
git commit -m "feat: adiciona minha feature"
git push origin feature/minha-feature
```

Em seguida, abra um Pull Request.

---

## 📝 Padrão de commits

Recomenda-se utilizar mensagens de commit claras:

```text
feat: adiciona nova seção
fix: corrige responsividade mobile
style: ajusta espaçamento da página
refactor: reorganiza estilos
perf: otimiza carregamento das imagens
docs: atualiza documentação
```

---

## 👩‍💻 Autoria

**Tayná Goes**

Desenvolvimento Web / Front-end

Tecnologias:

```text
HTML5
CSS3
SCSS
JavaScript
PHP
SQL
Git
REST APIs
```

---

## 📄 Licença

Este projeto é disponibilizado para fins de apresentação e portfólio.

Os direitos sobre imagens, textos, marcas e demais recursos de terceiros permanecem pertencentes aos seus respectivos proprietários.

---

## 🔗 Repositório

**GitHub:**  
https://github.com/tayna-goes/Gessika-Koenigkan

---

<div align="center">

### 🎵 Gessika Koenigkan

**Design, código e experiência em uma única aplicação.**

<br>

⭐ Se este projeto foi útil ou interessante, considere deixar uma estrela no repositório.

</div>
