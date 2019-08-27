export class Product {

  public id: number;
  public productName: string;
  public price: number;
  public totalQuantity: number;
  public availableQuantity: number;
  public available: boolean = true;
  public description: string;
  public category: string;
  public targetSize: string;
  public imageUrl: string;
  public date: string = new Date().toISOString();

}
