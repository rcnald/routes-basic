export class Router {
  constructor(){
    this.routes = {}
  }
  add(pathName, page){
    this.routes[pathName] = page
  }
  route(e){
    e.preventDefault()
    const pathname = e.target.href
    history.pushState(null, null, pathname);
    this.handle()
  }
  handle(){
    const {pathname} = window.location
    const main = document.getElementsByTagName('main')[0]
    const route = this.routes[pathname]

    fetch(route)
      .then(data => data.text())
      .then(html => main.innerHTML = html)
  }
}