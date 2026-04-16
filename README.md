# Interactive Data Explorer - Frontend Assignment

This project is a modern, responsive Single Page Application (SPA) built as part of the Frontend Developer Intern assessment. It fetches real-time data from an external API and provides a seamless interface for users to browse and search for products.

## 🚀 Live Demo
**Live Deployment:** https://interactive-data-explorer-lovat.vercel.app/
**Video Demonstration:** https://drive.google.com/file/d/1zbRUQkBqN9Uu5ZkFKNoGXmk7xrBNi_7m/view?usp=drivesdk

## 🛠️ Chosen Technologies
- **React.js (Vite):** Chosen for its efficient rendering and component-based architecture.
- **Tailwind CSS:** Utilized for rapid styling and ensuring a highly responsive design with minimal custom CSS.
- **JavaScript (ES6+):** Employed modern syntax like Async/Await, Destructuring, and Optional Chaining for clean code.
- **Fake Store API:** Used as the primary data source for its reliable e-commerce dataset.

## 📡 API Integration
The application consumes the **Fake Store API** (`https://fakestoreapi.com/products`). 
- **Fetching Logic:** Data is retrieved using the `fetch()` API within a `useEffect` hook to ensure data is available on initial component mount.
- **State Handling:** Integrated robust loading and error states to enhance User Experience (UX) during network requests.

## 🏗️ Architectural Decisions

### 1. Component Structure
The project follows a modular, atomic-design-inspired structure to ensure maintainability and scalability:
- **Navbar:** A functional component handling the application's branding and the search input logic.
- **Loader:** A reusable UI component that provides visual feedback during data fetching.
- **ProductList:** A container component responsible for mapping through the filtered data and managing the grid layout.
- **ProductCard:** A presentational component focused on displaying individual item details (Image, Title, Description, and Price).

### 2. State Management Approach
- **Local State (Hooks):** I utilized React’s built-in `useState` for managing products, search queries, loading status, and error messages.
- **Lifting State Up:** The search state is managed in the `App.jsx` and passed down to the `Navbar`, ensuring that the `ProductList` reacts instantly to user input (Search-as-you-type).

### 3. Responsiveness & UI/UX
- **Mobile-First Design:** Using Tailwind's responsive utilities (`sm`, `md`, `lg`), the grid system adapts from 1 column on mobile to 4 columns on large desktops.
- **Currency Localization:** Prices are dynamically converted from USD to INR (using a fixed conversion rate) and formatted using the `en-IN` locale for a better localized experience.

## 💻 Setup Instructions

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Prerna-Singh-90/Interactive-Data-Explorer.git
2. **Navigate to Directory:**
   ```Bash
   cd interactive-data-explorer
3. **Install Dependencies:**
    ```Bash
   npm install
4. **Run the Project:**
   ```Bash
   npm run dev
   
## 👩‍💻 Author
Prerna Frontend Developer

