const Router = require('koa-router');
const router = new Router();

const Task = require('../api/task');

router.post('/addTask', async(ctx) => {
    try {
        const result = await Task.addTask({...ctx.request.body});
        ctx.body = result;
    } catch (err) {
        console.log('err', err);
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
});

router.get('/task/:id', async(ctx) => {
    try {
        const result = await Task.getTask({id: ctx.params.id});
        ctx.body = result;
    } catch (err) {
        console.log('err', err);
        ctx.status = 500;
        ctx.body = err.message || 'Internal error';
    }
});

router.get('/task/', async(ctx) => {
    try {
        const result = await Task.getTasks();
        ctx.body = result;
    } catch (err) {
        console.log('err', err);
        ctx.status = 500;
        ctx.body = err.message || 'Internal error';
    }
});

router.patch('/updateTask', async(ctx) => {
        try {
            const result = await Task.updateTask({...ctx.request.body});
            ctx.body = result;
        } catch (err) {
            console.log('err', err);
            ctx.status = 500;
            ctx.body = err.message || 'Internal error';
        }
    });

router.get('/', async(ctx) => {
    ctx.body = 'Its works';
});

module.exports = router;