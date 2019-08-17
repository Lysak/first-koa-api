const Task = require('../db/models/task');

exports.addTask = ({title, description}) => new Promise(async (resolve, reject) => {
    try {
        if (!title) {
            resolve({
                success: false,
                message: 'title is required'
            });
            return;
        }

        const newTask = new Task({
            title,
            description
        });

        const task = await newTask.save();

        resolve({
            success: true,
            data: task
        });
    }
    catch(err) {
        reject(err);
    }
});

exports.getTask = ({id}) => new Promise(async (resolve, reject) => {
    try {
        if (!id) {
            resolve({
                success: false,
                message: 'id is required'
            });
            return;
        }

        const task = await Task.findById(id);

        resolve({
            success: true,
            data: task
        });
    }
    catch(err) {
        reject(err);
    }
});

exports.getTasks = () => new Promise(async (resolve, reject) => {
    try {
        const tasks = await Task.find();

        resolve({
            success: true,
            data: tasks
        });
    }
    catch(err) {
        reject(err);
    }
});

exports.updateTask = ({id, description}) => new Promise(async (resolve, reject) => {
    try {
        if (!id) {
            resolve({
                success: false,
                message: 'id is required'
            });
            return;
        }

        const task = await Task.findById(id);
        
        task.set({description});
        await task.save();

        resolve({
            success: true,
            data: task
        });
    }
    catch(err) {
        reject(err);
    }
});
