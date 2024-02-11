import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  arrNoticias : INoticia[]= [
    {
      'titulo':"Modelo ‘sexigenaria’ desfila y posa para hacer “visibles” a las mujeres de más de 50 años",
      'imagen':"./assets/noticia_3.jpg",
      'cuerpo':"Con su larga cabellera plateada, la sexagenaria Caroline Ida Ours desfila y posa para las grandes marcas de lencería francesa para hacer “visibles” a las mujeres de más de 50 años. Su imagen en ropa interior para la última campaña de la marca Darjeeling provocó una avalancha de comentarios, unos entusiastas y otros de odio. Realmente no tengo el físico que podrían pedir las casas de lencería”, dice sonriendo Caroline Ida Ours, de 61 años, que se lanzó en el mundo de los castings hace tres años. Desde entonces, su trayectoria no dejó de mejorar.",
      'fechaPublicacion':"2024/02/08"
    },
    {
      'titulo':"Emotivo discurso de la fashionista Chiara Ferragni en el festival Sanremo 2023",
      'imagen':"./assets/noticia_2.jpg",
      'cuerpo':"Había grandes expectativas por el debut de Chiara Ferragni en el festival de Sanremo, el concurso más popular de la música italiana y ceremonia de entrega de premios, celebrado en Sanremo, Liguria. La bloguera de modas y emprendedora digital debutó en la segunda rueda de prensa del Festival, a pocas horas de su debut en los escenarios la primera noche del festival, el martes 7 de febrero. “No soy ni presentadora, ni actriz”, empezó Ferragni. “Así que lo daré todo. Tengo gente conmigo en el escenario, que me han hecho sentir muy bienvenida. Me acerqué a este desafío con un gran deseo de lanzarme e intentarlo. Siempre intentaré ser espontánea. ¿Tengo futuro en la televisión? Nunca digas nunca, pero no creo que ese sea mi lenguaje.",
      'fechaPublicacion':"2024/02/09"
    }

  ];

    cargarNoticia(): string {
    let html: string = "";
    this.arrNoticias.forEach((noticia : any) =>{
 
      html+=`<article class="noticia">
                <h2 class="tituloNoticia">${noticia.titulo}</h2>
                <img class="imagenNoticia" src="${noticia.imagen}">
                <div class="textoNoticia">${noticia.cuerpo}</div>
                <footer class="fechaNoticia">Noticia publicada el  ${noticia.fechaPublicacion}</footer>
            </article>`;
    });
    return html;
  }

}
