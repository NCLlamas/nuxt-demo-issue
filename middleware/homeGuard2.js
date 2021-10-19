export default function (context) {
  if (context.route.path === '/') {
    return context.redirect('/queue')
  }
}
