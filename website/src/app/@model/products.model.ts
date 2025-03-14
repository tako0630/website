export interface product {
    id: number; // 商品ID，自增主键
    name: string; // 商品名称
    price: number; // 商品价格，保留两位小数
    description: string; // 商品描述
    image_url: string;//圖片位址
    stock_quantity: number; // 商品库存数量
    category_id: number;//商品種類id

}
export class product {
    id!: number;
    description: string = 'this is init description';
    price: number = 100;
    stock_quantity: number = 10;
    category_id!: number;

    constructor(_description: string, _price: number, _stock_quantity: number, _category_id: number) {
        this.description = _description;
        this.price = _price;
        this.stock_quantity = _stock_quantity;
        this.category_id = _category_id;
    }
}