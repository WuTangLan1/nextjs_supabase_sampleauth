// src/app/page.tsx

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <main className="flex flex-col gap-6 items-center bg-white dark:bg-gray-800 p-10 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold">Welcome to SecureAuth</h1>
        <p className="text-center">
          This is a sample homepage for the SecureAuth authentication website. Explore the features and learn how our system can securely manage your user authentication needs.
        </p>
        <div className="flex flex-col gap-4 w-full">
          <button className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
            Get Started
          </button>
          <button className="rounded bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4">
            Learn More
          </button>
        </div>
      </main>
      <footer className="mt-8 text-sm">
        &copy; {new Date().getFullYear()} SecureAuth. All rights reserved.
      </footer>
    </div>
  );
}
