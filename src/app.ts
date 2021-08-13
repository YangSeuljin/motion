import { Component } from "./components/component.js";
import { InputDialog } from "./components/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page.js";
import { ImageComponent } from "./page/item/image.js";
import { NoteComponent } from "./page/item/note.js";
import { TodoComponent } from "./page/item/todo.js";
import { VideoComponent } from "./page/item/video.js";

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    // const image = new ImageComponent(
    //   "Image Title",
    //   "https://picsum.photos/600/300"
    // );
    // this.page.addChild(image);

    //  const video = new VideoComponent(
    //    "Video Title",
    //    "https://www.youtube.com/embed/37EpZkwOMww"
    //  );
    //  this.page.addChild(video);

    // const note = new NoteComponent("Note Title", "Note Body");
    // this.page.addChild(note);

    // const todo = new TodoComponent("Todo Title", "Todo Item");
    // this.page.addChild(todo);

    const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;

    imageBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const inputSection = new MediaSectionInput();
      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.setOncloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const image = new ImageComponent(inputSection.title, inputSection.url);
        this.page.addChild(image);
        dialog.removeFrom(dialogRoot);
      });

      dialog.attachTo(document.body);
    });

    const videoBtn = document.querySelector("#new-video")! as HTMLButtonElement;

    videoBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const inputSection = new MediaSectionInput();
      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.setOncloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const image = new VideoComponent(inputSection.title, inputSection.url);
        this.page.addChild(image);
        dialog.removeFrom(dialogRoot);
      });

      dialog.attachTo(document.body);
    });

    const noteBtn = document.querySelector("#new-note")! as HTMLButtonElement;

    noteBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const inputSection = new TextSectionInput();
      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.setOncloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const image = new NoteComponent(inputSection.title, inputSection.body);
        this.page.addChild(image);
        dialog.removeFrom(dialogRoot);
      });

      dialog.attachTo(document.body);
    });

    const todoBtn = document.querySelector("#new-todo")! as HTMLButtonElement;

    todoBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const inputSection = new TextSectionInput();
      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.setOncloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const image = new TodoComponent(inputSection.title, inputSection.body);
        this.page.addChild(image);
        dialog.removeFrom(dialogRoot);
      });

      dialog.attachTo(document.body);
    });


  }
}

new App(document.querySelector(".document")! as HTMLElement, document.body);
