export class Producto {

    _id?: string;
    producto: string;
    categoria: string;
    descripcion: string;
    precio: number;
    imagen: string;

    constructor(producto:string, categoria:string, descripcion: string, precio: number, imagen: string){
        this.producto = producto;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }

}