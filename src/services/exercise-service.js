import * as exerciseRepository from "../repository/exercise-repository.js";

export const listAllExercises = () => {
    return exerciseRepository.getAll();
}

export const registerExercise = (exercise) => {
    if (!exercise.name) { throw new Error("O nome do exercício é obrigatório."); }

    const existExercise = exerciseRepository.getAll().some(ex => ex.name === exercise.name);
    if (existExercise) { throw new Error("Já existe um exercício com esse nome."); }

    const newExercise = exerciseRepository.create(exercise);
    return newExercise;
}

export const updateExercise = (exerciseId, updatedExercise) => {
    if (!updatedExercise.name) { throw new Error("O nome do exercício é obrigatório."); }
    if (isNaN(exerciseId)) { throw new Error("O ID do exercício é inválido, ou não existe.") }

    const existExercise = exerciseRepository.getAll().some(ex => ex.name === updatedExercise.name);
    if (existExercise) { throw new Error("Já existe um exercício com esse nome."); }

    const exercise = exerciseRepository.update(exerciseId, updatedExercise);
    return exercise;

}

export const removeExercise = (exerciseId) => {
    if (isNaN(exerciseId)) { throw new Error("O ID do exercício é inválido, ou não existe."); }

    const exercise = exerciseRepository.remove(exerciseId);
    return exercise;

}