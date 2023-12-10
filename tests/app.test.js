import { expect, test } from 'vitest';
import { blackColor, redColor, grayColor, cartButton, itemTag, imgCard } from '../src/js/app.js';

test('Cambio de color al hacer clic en botones', async () => {

  redColor.click();
expect(imgCard.style.backgroundImage).toBe('url("../../public/img/redcar.jpg")');
  expect(cartButton.style.backgroundColor).toBe('red');
  expect(itemTag.style.backgroundColor).toBe('red');


  blackColor.click();
  expect(imgCard.style.backgroundImage).toBe('url("../../public/img/blackcar.jpg")');
  expect(cartButton.style.backgroundColor).toBe('black');
  expect(itemTag.style.backgroundColor).toBe('black');


  grayColor.click();
  expect(imgCard.style.backgroundImage).toBe('url("../../public/img/graycar.jpg")');
  expect(cartButton.style.backgroundColor).toBe('gray');
  expect(itemTag.style.backgroundColor).toBe('gray');

});
