Walmart Clone
A clone of the Walmart search and product display page built with Next.js, Tailwind CSS, and ShadCN. This project demonstrates how to fetch product information and display it in a user-friendly interface using modern web technologies.

Technologies Used
Next.js is used as the React framework for building the application. Tailwind CSS is the utility-first CSS framework for styling. ShadCN is a custom UI components library. TypeScript is used for type safety and better development experience, while additional custom CSS is added as needed. Oxylabs was used for scraping Walmart data, but this integration did not work out.

Features
The app allows users to search for products, display product details like title, price, and availability, and navigate between pages of search results.

Setup
Clone the repository:
git clone https://github.com/yourusername/walmart-clone.git
cd walmart-clone

Install dependencies:
npm install

Create a .env.local file and add any necessary API keys.

Run the development server:
npm run dev

Visit http://localhost:3000 to view the application.

Project Structure
The project contains the main pages and components under the app/ directory, with search/page.tsx being the search page where results are displayed. The lib/ folder contains utility files, including fetchSearch.ts for fetching data, and the typings/ folder holds TypeScript type definitions, with searchTypings.ts for search result and product data.

Issues with Oxylabs
The original plan to use Oxylabs for fetching product data from Walmart did not work as expected. The data parsing did not provide the expected results and there were inconsistencies in the response. The integration is therefore not fully functional, and alternative solutions are being explored.

Future Improvements
An alternative API or solution will be explored for fetching Walmart product data. Enhancements will be made to the authentication and session management, along with UI improvements such as sorting, filtering, and advanced pagination. Product detail pages will be added for individual product views.

=> Props to Sonny Sangha for such a wonderful tutorial

License
This project is licensed under the MIT License - see the LICENSE file for details.
