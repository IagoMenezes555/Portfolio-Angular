import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  projetos = [
    {
      nome: "To-Do List",
      descricao: "To-Do List é um projeto simples para organizar tarefas. Nele, o usuário pode adicionar, marcar como concluídas e excluir tarefas. Foi essencial para eu aprender e praticar o uso do localStorage em JavaScript.",
      link: "https://github.com/IagoMenezes555/To-Do-List"
    },
    {
      nome: "Urna Eletrônica",
      descricao: "Urna Eletrônica é um projeto feito em Angular que simula uma votação. Com ele, é possível digitar o número do candidato, confirmar, corrigir ou votar em branco. Foi importante para eu praticar componentização, serviços e manipulação de dados no Angular.",
      link: "https://github.com/IagoMenezes555/Urna-7"
    },
    {
      nome: "Estoque",
      descricao: "Estoque é um projeto voltado para monitorar e exibir os itens disponíveis no estoque de uma empresa. O objetivo é facilitar a organização e o gerenciamento eficiente dos produtos.",
      link: "https://github.com/IagoMenezes555/APP-de-Estoque"
    }
  ];

  abrirProjeto(nome: string) {
    const projeto = this.projetos.find((projeto) => projeto.nome === nome);
    if (projeto) {
      window.open(projeto.link, "_blank");
    }
  }
}
