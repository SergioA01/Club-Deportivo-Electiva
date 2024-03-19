export interface Disciplina{
    id: number;
    nombre: string;
    modalidad: string;
    editar?: () => void;
    eliminar?: () => void;
}