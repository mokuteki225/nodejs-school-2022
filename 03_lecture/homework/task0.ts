import * as fs from 'fs';
import puppeteer from 'puppeteer/lib/cjs/puppeteer/node-puppeteer-core';

const main = async () => {
  const path = process.argv[2];

  if (!fs.existsSync(path)) {
    throw new Error('Given path does not exist');
  }

  const fileName = path.split('/').pop().split('.')[0];
  const folderPath = fileName + '_pages';

  const data = await fs.promises.readFile(path);
  const parsedData = JSON.parse(data.toString());

  if (!fs.existsSync(folderPath)) {
    await fs.promises.mkdir(folderPath);
  }

  for (let i = 0; i < parsedData.length; i++) {
    const content = await getPageContent(parsedData[i]);

    await fs.promises.writeFile(folderPath + `/${i}.txt`, content);
  }
}

const getPageContent = async (url: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);
  await page.goto(url);

  const content = await page.content();

  browser.close();

  return content;
}

main();
