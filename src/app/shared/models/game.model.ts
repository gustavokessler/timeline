import { Deck } from 'src/app/shared/models/deck.model';

export interface Game{
  id?: number;
  uid?: number;
  deck?: Deck,
  name?: string,
  professorId?: number
  deckId?: number
}
