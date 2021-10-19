import { Middleware } from '@nuxt/types'

const homeGuard: Middleware = (context) => {
  if (context.route.path === '/') {
    return context.redirect('/queue')
  }
  else return
}

export default homeGuard
