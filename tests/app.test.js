import {describe, expect, it, beforeAll} from 'vitest'
import {JSDOM} from 'jsdom'
import {redColor, grayColor, blackColor} from '../src/js/app';

describe('APP',()=>{
    let virtualDOM;
    let imgSimulation;
    let buttonSimulation;
    let tagSimulation;

    beforeAll(async () => {
      virtualDOM = await JSDOM.fromFile("./index.html", {
          resources: "usable",
        });

        imgSimulation = document.createElement("div");
        imgSimulation.classList.add("product-image");
        document.body.appendChild(imgSimulation);

        buttonSimulation = document.createElement("button");
        buttonSimulation.setAttribute("id", "button");
        document.body.appendChild(buttonSimulation);

        tagSimulation = document.createElement("h3");
        tagSimulation.classList.add("tag");
        document.body.appendChild(tagSimulation);
      });


      it("has to transform the color of the elements to red", async () => {
        buttonSimulation.style.backgroundColor = "rgb(0, 0, 0)";
        imgSimulation.style.backgroundImage = 'url("../../public/img/graycar.jpg")';
        tagSimulation.style.backgroundColor = "rgb(0, 0, 0)";

        redColor();
        expect(buttonSimulation.style.backgroundColor).toBe("red");
        expect(imgSimulation.style.backgroundImage).toBe("url(../../public/img/redcar.jpg)");
        expect(tagSimulation.style.backgroundColor).toBe("red");
      });

      it("has to transform the color of the elements  to gray", async () => {
        buttonSimulation.style.backgroundColor = "rgb(0, 0, 0)";
        imgSimulation.style.backgroundImage = 'url("../../public/img/redcar.jpg")';
        tagSimulation.style.backgroundColor = "rgb(0, 0, 0)";

        grayColor();
        expect(buttonSimulation.style.backgroundColor).toBe("gray");
        expect(imgSimulation.style.backgroundImage).toBe("url(../../public/img/graycar.jpg)");
        expect(tagSimulation.style.backgroundColor).toBe("gray");
      });

      it("has to transform the color of the elements to black", async () => {
        buttonSimulation.style.backgroundColor = "rgb(0, 0, 0)";
        imgSimulation.style.backgroundImage = 'url("../../public/img/redcar.jpg")';
        tagSimulation.style.backgroundColor = "rgb(0, 0, 0)";

        blackColor();
        expect(buttonSimulation.style.backgroundColor).toBe("black");
        expect(imgSimulation.style.backgroundImage).toBe("url(../../public/img/blackcar.jpg)");
        expect(tagSimulation.style.backgroundColor).toBe("black");
      });
      
});