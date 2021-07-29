import { PageComponent } from "./components/page.js";
import { ImageComponent } from "./page/item/image.js";
import { NoteComponent } from "./page/item/note.js";
import { TodoComponent } from "./page/item/todo.js";
import { VideoComponent } from "./page/item/video.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("Image Title", "https://picsum.photos/600/300");
        image.attachTo(appRoot, "beforeend");
        const video = new VideoComponent("Video Title", "https://www.youtube.com/embed/37EpZkwOMww");
        video.attachTo(appRoot, "beforeend");
        const note = new NoteComponent("Note Title", "Note Body");
        note.attachTo(appRoot, "beforeend");
        const todo = new TodoComponent("Todo Title", "Todo Item");
        todo.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));
