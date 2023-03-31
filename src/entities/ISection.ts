import { IItem } from "./IItem";

export interface ISection {
  title: string;
  subTitle?: string;
  items: IItem[];
}
