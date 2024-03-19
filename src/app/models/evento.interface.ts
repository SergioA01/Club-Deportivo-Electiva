export interface Evento{
    id: number;
    nombre: string;
    descripcion: string;
    fecha: Date;
    editar?: () => void;
    eliminar?: () => void;
}