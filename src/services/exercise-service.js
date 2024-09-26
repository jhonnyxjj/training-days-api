import * as exerciseRepository from "../repository/exercise-repository.js";

export const listAllExercises = () => {
    return exerciseRepository.getAll();
}

export const registerExercise = (exercise) => {
    if (!exercise.name) { throw new Error("O nome do exercício é obrigatório."); }
    exerciseRepository.create(exercise);
    const newExercise = exerciseRepository.getAll();
    return newExercise;
}

export const updateExercise = (exerciseId, updatedExercise) => {
    if (!updatedExercise.name) { throw new Error("O nome do exercício é obrigatório."); }

    const exercise = exerciseRepository.update(exerciseId, updatedExercise);
    return exercise;

}

export const removeExercise = (exerciseId) => {
    if (!exerciseId) { throw new Error("O ID do exercício é obrigatório."); }

    const exercise = exerciseRepository.remove(exerciseId);
    return exercise;

}