const assuntos = new Assuntos();

//----------------ANIMATIONS----------------
assuntos.adicionarAssunto();

assuntos.adicionarLogo('../img/Animations.svg', 0);

assuntos.adicionarAnchors([
    {href: './iframes/animations/', icon:'', text: 'write text effect'},
    {href: './iframes/animations/aaa', icon:'', text: 'teste'}
], 0);


//----------------TOOLS----------------
assuntos.adicionarAssunto();

assuntos.adicionarLogo('../img/Tools.svg', 1);
	
assuntos.adicionarAnchors([
    {href: './iframes/tools/', icon:'\&#9829', text: 'CPF Functions'},
    {href: './iframes/tools/aaa', icon:'', text: 'teste2'}
], 1);