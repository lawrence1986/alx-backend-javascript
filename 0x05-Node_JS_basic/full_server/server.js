// full_server/server.js
import express from 'express';
import routes from './routes';

const app = express();
const PORT = 1245;

// Use the routes defined in full_server/routes/index.js
app.use('/', routes);

// Export your express app at the end of server.js
export default app;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
