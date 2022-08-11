export interface Book {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  publishedDate: Date;
  description: string;
  pageCount: number;
  categories: string[];
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
    small?: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
  }
  language: string;
  listPrice: {
    price: number;
    isOnSale: boolean;
  }
}
