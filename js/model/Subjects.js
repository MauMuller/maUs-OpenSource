class Assuntos{
    constructor(){
        this.objSubjects = [];
    }

    adicionarAssunto(){
        let obj = {logo: '', links: []};
        this.objSubjects.push(obj);
    }

    adicionarLogo(src, indSubject){
        this.objSubjects.forEach((objInterno,indObj)=>{
            if(indObj === indSubject){
                objInterno.logo = src;
            }
        });
    }

    adicionarAnchors(arrAnchors, indSubject){
        this.objSubjects.forEach((objInterno, indObj)=>{
            if(indObj === indSubject){
                arrAnchors.forEach((objAnchors, indObjAnchors)=>{
                    objInterno.links.push(objAnchors);
                });
            }
        });
    }
}