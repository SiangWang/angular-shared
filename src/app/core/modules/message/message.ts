export type MessageType = 'primary' | 'success' | 'danger' | 'warning';

export class Message {
  type?: MessageType;
  content!: string;
}