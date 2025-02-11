import React from "react";

const Error404 = () => {
  return (
    <div>
      <div
        class="text-center"
        style={{
          backgroundColor: "lightgray",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 class="text-6xl font-bold text-red-500">404</h1>
        <p class="text-2xl mt-4 text-gray-700">Oops! Page not found.</p>
        <p class="mt-2 text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/home"
          class="mt-6 inline-block bg-blue-500 text-white px-4 py-2 
                   rounded-lg shadow hover:bg-blue-600 transition duration-300"
          style={{ backgroundColor: "gray" }}
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default Error404;
