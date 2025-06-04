import Index from "@/components/Index.vue";
import { App } from "vue";

Index.install = function(app: App) {
  app.component("Test", Index);
};

export default Index;
