const assuntos = new Assuntos();

//----------------ANIMATIONS----------------
assuntos.adicionarAssunto();

assuntos.adicionarLogo('../img/Animations.svg', 0);

assuntos.adicionarAnchors([
    {href: './iframes/animations/', text: '✍write text effect'},
    {href: './iframes/animations/aaa', text: 'teste'}
], 0);


//----------------TOOLS----------------
assuntos.adicionarAssunto();

assuntos.adicionarLogo('../img/Tools.svg', 1);

assuntos.adicionarAnchors([
    {href: './iframes/tools/', text: '🙋‍♀️CPF Functions'},
    {href: './iframes/tools/aaa', text: 'teste2'}
], 1);

// console.log(assuntos);
