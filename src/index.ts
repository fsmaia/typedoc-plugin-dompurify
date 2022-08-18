import { Application, PageEvent } from "typedoc";
import { sanitize } from "isomorphic-dompurify";

export function load(app: Application) {
  app.renderer.on(PageEvent.END, onPageRendered);

  function onPageRendered(page: PageEvent) {
    page.contents = sanitize(page.contents || "");
  }
}
