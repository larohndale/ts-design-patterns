/* 
Prototype:
Allows objects to be clones of other objects, rather than extended via inheritance.
*/

const workout = {
    startWorkout() {
        return 'Start Workout';
    }

}

const bench = Object.create(workout, { name: { value: 'barbell bench' } });

bench.__proto__;
Object.getPrototypeOf(bench);

const benchSubset = Object.create(bench, { incline: { value: true } });

console.log(bench.name);
console.log(benchSubset.incline);