import { Card } from "./card.model";

export interface Deck{
  id: number;
  professorId: number;
  name: string;
  description: string;
  cards: Card[]
}
