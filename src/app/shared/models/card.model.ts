export interface Card{
  id?: number;
  professorId?: number;
  deletedAt?: Date | null;
  description: string;
  name: string;
  image: string;
  date: number;
}
