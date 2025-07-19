# Tailwind CDN

No exemplo acima, o Tailwind CSS está incluído via CDN, o que é a forma mais rápida e simples de usar o Tailwind sem configurar um ambiente de build. Veja esta linha no <head> do HTML:

html
Copy
Edit
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.3/dist/tailwind.min.css" rel="stylesheet">
✅ Vantagens do uso via CDN:
Ideal para testes rápidos ou projetos simples.

Não precisa instalar Node.js ou configurar PostCSS/Tailwind CLI.

Já vem com todas as classes utilitárias do Tailwind prontos para uso.

⚠️ Limitações do uso via CDN:
O tamanho do arquivo CSS é grande (~3MB), pois ele contém todas as classes.

Sem suporte para purgar classes não utilizadas (isso só via build).

Não permite classes personalizadas, temas customizados ou plugins.
