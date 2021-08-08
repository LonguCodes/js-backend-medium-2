import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

const router = new Router();

let counter: number = 0;


router.get('/start',(context:Koa.Context)=>{
    context.body = "Hello World"
})
router.post('/count',(context:Koa.Context)=>{
    counter += context.request.body.add;
    context.body = counter;
})


const app = new Koa();

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())
app.use(notFoundAlternative)
app.listen(3000)



function notFoundAlternative(context:Koa.Context, next:Koa.Next){
    context.body = 'wrong place mate'
    context.status = 404;
}