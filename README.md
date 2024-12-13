Walmart Clone
A clone of the Walmart search and product display page built with Next.js, Tailwind CSS, Clerk Authentication, and ShadCN. This project demonstrates how to fetch product information and display it in a user-friendly interface, while integrating modern web technologies.

Technologies Used
Next.js: React framework for building the application.
Tailwind CSS: Utility-first CSS framework for styling the application.
Clerk Authentication: For user authentication and session management.
ShadCN: Custom UI components library.
TypeScript: For type safety and better development experience.
CSS: Additional custom styles for the project.
Oxylabs: API for scraping Walmart data (did not work out).
Features
Search Functionality: Allows users to search for products on Walmart's platform.
Product Display: Shows details like title, price, rating, and availability.
Pagination: Navigate between multiple pages of search results.
Authentication: Users can sign up, log in, and manage their sessions with Clerk authentication.
Setup
1. Clone the repository
bash
Copy code
git clone https://github.com/yourusername/walmart-clone.git
cd walmart-clone
2. Install dependencies
Make sure you have Node.js installed. Then, run the following command to install dependencies:

bash
Copy code
npm install
3. Environment Variables
Create a .env.local file in the root of the project and add your Clerk credentials and any necessary API keys.

bash
Copy code
NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
CLERK_API_KEY=your-clerk-api-key
If you plan to use Oxylabs, ensure you set up your credentials in the lib/fetchSearch.ts file.

4. Run the Development Server
Once everything is set up, start the development server:

bash
Copy code
npm run dev
Navigate to http://localhost:3000 to view the application.

Project Structure
app/: Contains the main pages and components of the application.
search/page.tsx: Search page where results are displayed.
lib/: Contains utility files for fetching data.
fetchSearch.ts: Contains the logic for fetching data (Oxylabs API, or other data sources).
typings/: Contains TypeScript type definitions for search results.
searchTypings.ts: Type definitions for search results and product data.
styles/: Contains custom CSS if needed (though Tailwind handles most styling).
Issues with Oxylabs
The original plan to use Oxylabs for fetching product data from Walmart did not work as expected. The data parsing did not provide the expected results and there were inconsistencies in the response. The integration is therefore not fully functional at the moment, and alternative solutions are being explored.

Future Improvements
API Integration: Find an alternative API or solution for fetching Walmart product data.
Authentication Enhancements: Improve Clerk authentication and session management.
UI Enhancements: Add more features such as sorting, filtering, and advanced pagination.
Product Detail Pages: Create dedicated pages for viewing individual products with more details.

=> Props to Sonny Sangha for such a wonderful tutorial

License
This project is licensed under the MIT License - see the LICENSE file for details.

