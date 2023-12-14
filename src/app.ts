import { createApp } from "nativescript-vue";
import { bootApp } from "@/boot";

import Home from "./components/Home.vue";

const app = createApp(Home);

bootApp(app);

app.start();
