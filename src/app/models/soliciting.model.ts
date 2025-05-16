export interface Soliciting {

  ticketNumber: string;
  lastUpdate: Date;
  client: string;
  subject: string;
  type: string;
  deadline: Date;
  status: 'En cours' | 'À traiter' | 'Clôturé';
}
