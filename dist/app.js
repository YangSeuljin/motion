import { InputDialog } from "./components/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { PageComponent, PageItemComponent, } from "./components/page.js";
import { ImageComponent } from "./page/item/image.js";
import { NoteComponent } from "./page/item/note.js";
import { TodoComponent } from "./page/item/todo.js";
import { VideoComponent } from "./page/item/video.js";
class App {
    constructor(appRoot, dialogRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const imageBtn = document.querySelector("#new-image");
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
        const videoBtn = document.querySelector("#new-video");
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
        const noteBtn = document.querySelector("#new-note");
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
        const todoBtn = document.querySelector("#new-todo");
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
new App(document.querySelector(".document"), document.body);
