export interface ComentariosResponse {
   comentarios: Comentario[];
   total:       number;
}

export interface Comentario {
   id:         number;
   nombre:     string;
   foto:       string;
   comentario: string;
   fecha:      Date;
   activo:     number;
   orden:      number;
}
