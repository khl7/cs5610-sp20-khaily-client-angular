import { Injectable } from "@angular/core";
@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch("https://cs5610-sp20-kl-a8-server-node.herokuapp.com/api/quizzes").then(response =>
      response.json()
    );
  findQuizById = qid =>
    fetch(`https://cs5610-sp20-kl-a8-server-node.herokuapp.com/api/quizzes/${qid}`).then(response =>
      response.json()
    );
}
