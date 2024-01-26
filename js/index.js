import { Router } from "./route.js"

const router = new Router
router.add('/','/pages/home.html')
router.add('/explore','/pages/explore.html')
router.add('/universe','/pages/universe.html')

const links = Array.from(document.getElementsByTagName('a'))

links.forEach(link => {
  link.addEventListener('click', (e) => {
    router.route(e)
  })
})

window.onpopstate = router.handle()
