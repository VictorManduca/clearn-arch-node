import { serve, setup } from 'swagger-ui-express'
import { Express, Response } from 'express'

import { noCache } from '../middlewares/no-cache'
import env from './env'
import swaggerConfig from '../docs'

export default (app: Express): void => {
  if (env.NODE_ENV !== 'production') {
    app.use('/docs', noCache, serve, setup(swaggerConfig))
    app.use('/docs.json', (_, res: Response) => res.send(swaggerConfig))
  }
}
