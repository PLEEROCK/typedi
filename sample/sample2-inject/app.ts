import {Container} from "../../src/typedi";
import {CoffeeMaker} from "./CoffeeMaker";

let coffeeMaker = Container.get(CoffeeMaker);
coffeeMaker.make();