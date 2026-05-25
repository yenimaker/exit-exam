// Error page renderer for client-side
export const renderErrorPage = () => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Error</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            background: #f5f5f5;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          .error-container {
            background: white;
            border-radius: 8px;
            padding: 40px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 500px;
          }
          h1 {
            color: #d32f2f;
            margin: 0 0 10px 0;
          }
          p {
            color: #666;
            margin: 0;
          }
        </style>
      </head>
      <body>
        <div class="error-container">
          <h1>500 - Internal Server Error</h1>
          <p>Something went wrong. Please try refreshing the page.</p>
        </div>
      </body>
    </html>
  `;
};
