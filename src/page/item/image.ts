import { BaseComponent } from "../../components/component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {

    super(`<section class="image">
             <div class="image_holder"><img src="" alt="" class="image__thumbnail"></div>
             <h2 class="image__title"></h2>
           </section>`);

    const imageElement:HTMLImageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement:HTMLParagraphElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
    titleElement.textContent = title;
}

}
