import { Middleware } from '@nuxt/types'

const myMiddleware: Middleware = (context) => {
  if (context.route.path === '/') {
    return context.redirect('/queue')
  }
  else return
}

export default myMiddleware
