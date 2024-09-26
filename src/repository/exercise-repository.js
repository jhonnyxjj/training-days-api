const exercises = [];

let nextId = 0;

export const getAll = () => {
    return exercises;
}

export const create = (exercise) => {

    exercise.id = nextId++;
    exercises.push(exercise);
}

export const update = (id, updatedExercise) => {
    const exerciseId = Number(id);
    const index = exercises.findIndex(exercise => exercise.id === exerciseId);

    if (index === -1) return { message: "Exercício não foi encontrado." }

    exercises[index] = { ...exercises[index], ...updatedExercise };
    return exercises[index];
}

export const remove = (id) => {
    const exerciseId = Number(id);
    const index = exercises.findIndex(exercise => exercise.id === exerciseId);

    if (index === -1) return { message: "Exercício não foi encontrado." }

    const [deleteExercise] = exercises.splice(index, 1);;
    return deleteExercise;

}

