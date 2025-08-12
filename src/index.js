"use strict";
import "./style.css";
import displayController from "./display-controller.js";
import { seedData } from "./storage-controller.js";
import { initialEventListener } from "./input-controller.js";

seedData();
initialEventListener();
displayController();
