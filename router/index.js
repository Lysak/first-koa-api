const Router = require('koa-router');
const router = new Router();

const Task = require('../api/task');

router.post('/addTask', async(ctx) => {
    try {
        const result = await Task.addTask();
        ctx.body = result;
    } catch (err) {
        console.log('err', err);
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
})

router.get('/', async(ctx) => {
    ctx.body = 'Its works';
});

module.exports = router;