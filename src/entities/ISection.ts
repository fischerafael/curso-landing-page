import { IItem } from "./IItem";

export interface ISection<T = IItem> {
  title: string;
  subTitle?: string;
  items: T[];
}
