This is an NLP project that generates and extracts  News and summarises it for the entered user query.
The Model develops an interactive platform that leverages advanced language processing
techniques to filter articles based on user inputs and provide concise, relevant summaries.
The model also produces output of images hyperlinked to various reliable websites to access the  furthur information

Proposed Approach towards the solution:
• A web-based interface: interactive, easy-to-use and instinctive.
• A custom search engine: filter the web against the input query for most relevant articles.
• Web (HTML) Scraper: for accessing the text in the articles.
• Text summarization tool: with customizable output length*
• Generative AI (LLM): to generate Keywords based on the text.


Programming Languages:
• Frontend: HTML, CSS, JavaScript
• Backend (+ NLP Tool): Python, JavaScript

Packages, Libraries & Tools:

• Text Summarization: Hugging Face Transformers Library

• Search Engine: LangChain Google Search, Google Custom Programmable Search API

• Keyword Extraction: Google PaLM API

• Web Scraping: BeautifulSoup4 (bs4), Python Requests Library

• Database and Backend: MongoDB, Express.JS

![prototype](/home/aishanya/Desktop)

• Frontend and Styling: React.JS, Material UI, Tailwind

• Web Framework & Deployment: Flask, Vercel, Netlify

• Repository Server: GitHub

Workflow:

• We use the query input in order to
fetch related articles from the web
using LangChain Google Search
API (via Custom Programmable
Search)

• Then summarize the text using
BART large model

• We go onto generate keywords
using PaLM API

• Transfer the output as JSON
object.

• The backend fetches the output
object and the front end renders it.

