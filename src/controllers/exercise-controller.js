import * as exerciseService from '../services/exercise-service.js';


export const initialize = (app) => {
    app.get('/exercises', getExercises);
    app.post('/exercises', createExercises);
    app.patch('/exercises/:id', updateExercise);
    app.delete('/exercises/:id', deleteExercise);
}


export const getExercises = (req, res, next) => {
    try {
        const exercises = exerciseService.listAllExercises();
        res.status(200).json(exercises);
    } catch (e) {
        res.status(500).send({error: e.message});
    }
}

export const createExercises = (req, res, next) => {
    try {
        const exercise = req.body;
        const newExercise = exerciseService.registerExercise(exercise);
        res.status(201).json(newExercise);
    } catch (e) {
        next(e);


    }
}

export const updateExercise = (req, res, next) => {
    try {
        const exerciseId = req.params.id;
        const updateExercise = req.body;
        const exercise = exerciseService.updateExercise(exerciseId, updateExercise);
        res.status(200).json(exercise);
    } catch (e) {
        next(e);
    }
}

export const deleteExercise = (req, res, next) => {
    try {
        const exerciseId = req.params.id;
        exerciseService.removeExercise(exerciseId);
        res.status(200).send({message: "Exercício removido com sucesso."});
    } catch (e) {
        next(e);
    }
}
