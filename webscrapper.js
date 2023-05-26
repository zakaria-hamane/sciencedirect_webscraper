const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0;Win64) AppleWebkit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36');

    await page.goto('https://www.sciencedirect.com/topics');
    await page.waitForTimeout(5000); // wait for 5 seconds

    // Get all the h1 and h2 elements
    const data = await page.evaluate(() => {
        const h1Tags = Array.from(document.querySelectorAll('h1'));
        const topicAnchors = Array.from(document.querySelectorAll('.child-domain-block'));

        let result = {
            h1: h1Tags.map(h1 => h1.innerText.trim()),
            h2: topicAnchors.map(a => ({
                text: a.querySelector('h2').innerText.trim(),
                url: a.href,
                count: a.querySelector('.child-domain-count').innerText.trim(),
            })),
        };
        return result;
    });

    // Create directory if it doesn't exist
    const dir = './sciencedirect';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    // Write data to a file in the directory
    fs.writeFile(path.join(dir, 'data.json'), JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("File has been created");
    });

    await browser.close();
}

run();
