type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: ["front-end", "UX/UI"],
        idade: 27
    },
    {
        nome: "Ana",
        cursos: ["front-end", "Python"],
        idade: 23
    }
]



const novoAluno: aluno = {
    nome: "Lucas",
    idade: 32,
}




function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}