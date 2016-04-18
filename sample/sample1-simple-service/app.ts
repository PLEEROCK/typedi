import {Container} from "../../src/typedi";
import {CarFactory} from "./CarFactory";
import {Counter} from "./Counter";

let carFactory = Container.get(CarFactory);
carFactory.create();

let counter = Container.get(Counter);
counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());