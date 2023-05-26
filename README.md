# ScienceDirect Topics Web Scraper
ScienceDirect Topics Web Scraper is a simple, efficient Node.js script that automates the process of extracting topic data from ScienceDirect Topics. Utilizing Puppeteer, a powerful web scraping library, it navigates to the page, fetches topic names, corresponding URLs, and subtopic counts, and neatly compiles the data into a JSON file. Whether you're conducting academic research, doing market analysis, or simply curious about what's out there, this tool provides a streamlined way to gather valuable data.

## Description
In more detail, the script scrapes data including the main topic names, the corresponding URLs, and the number of subtopics under each topic from the ScienceDirect Topics website. The scraped data is saved locally in a JSON file, located in a subdirectory named 'sciencedirect'.

## Getting Started

### Dependencies
* Node.js
* Puppeteer
* fs (File System)
* path

### Installing
* Make sure Node.js is installed on your system. If not, download and install it from [here](https://nodejs.org/en/download/).
* Clone the repository to your local machine.
* Navigate to the cloned repository's directory.
* Run `npm install` to install the required Node.js dependencies.

### Executing program
* Run `node webscrapper.js` in your terminal to start the script.

## Help
If you encounter any problems or have any questions, feel free to open an issue in this repository.

## License
This project is licensed under the MIT License.

## Acknowledgments
Thanks to the Puppeteer developers and contributors for their wonderful work on the Puppeteer library.

## Work in Progress
This project is currently a work in progress. More features and improvements will be added in the future. Contributions, issues, and feature requests are welcome.
