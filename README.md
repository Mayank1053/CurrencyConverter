Currency Converter
===============

A simple currency converter built with React. It allows users to convert between different currencies using real-time exchange rates.

Features
--------

* Fetches currency data from the @fawazahmed0/currency-api using the fetch API.
* Displays a dropdown menu with a list of available currencies.
* Allows users to convert currencies and calculates the converted amount based on the fetched exchange rates.
* Displays the converted amount in a clear and concise format.

Usage
-----

1. Clone the repository:

```bash
git clone https://github.com/Mayank1053/CurrencyConverter.git
```

2. Install dependencies:

```bash
npm install
```
3. Install Tailwind and Lucid Icons library

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
```bash
npm install lucide-react
```

4. Run the development server:

```bash
npm run dev
```

5. Access the application: Open <http://localhost:5173/> in your web browser.

Screenshot
----------
<img src="https://github.com/Mayank1053/CurrencyConverter/assets/96438897/a62346d6-92b9-4d73-b3f0-dd700e19f537" alt="BMI Calculator Screenshot" width="500"/>

Files
-----

* `src/App.jsx`: Main component of the application.
* `src/hooks/useCurrencyInfo.js`: Custom hook for fetching currency data.

Notes
-----

* The application uses the @fawazahmed0/currency-api for real-time exchange rates.
* The `useCurrencyInfo` hook fetches data only when the selected currency changes.
* The application is responsive and works on different screen sizes.
