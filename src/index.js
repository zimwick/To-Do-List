"use strict";
import "./style.css";
import displayController from "./display-controller.js";
import { seedData } from "./storage-controller.js";

seedData();
displayController();
