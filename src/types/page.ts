import { Content } from './content';

export interface Page {
  title: string;
  icon: string;
  url: string;
  content: Content[];
}
