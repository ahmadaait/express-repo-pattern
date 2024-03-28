import dotenv from 'dotenv';
import { http } from './src/config/http.js';
import { logger } from './src/core/logging/logging.js';

dotenv.config();

const port = process.env.PORT || 3000;

http.listen(port, () => {
  logger.info(`App start on port ${port}`);
});
