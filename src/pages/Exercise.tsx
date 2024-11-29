import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { allExercises } from '../data/exercises';
import { Exercise as ExerciseType } from '../types/exercise';

const Exercise = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState<ExerciseType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundExercise = allExercises.find(ex => ex.id === Number(id));
      setExercise(foundExercise || null);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [id]);

  const handleImageError = () => {
    setImageError(true);
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (!exercise) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Exercise Not Found</h1>
        <Link to="/" className="text-button hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  const fallbackImage = "https://images.pexels.com/photos/4162435/pexels-photo-4162435.jpeg";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="text-button hover:underline mb-4 inline-block">
        ← Back to Exercises
      </Link>
      
      <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96">
          <img
            src={imageError ? fallbackImage : exercise.imageUrl}
            alt={exercise.title}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-button text-white">
              {exercise.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
              exercise.difficulty === 'Beginner' ? 'bg-green-500' :
              exercise.difficulty === 'Intermediate' ? 'bg-yellow-500' : 'bg-red-500'
            }`}>
              {exercise.difficulty}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-header dark:text-dark-text mb-4">
              {exercise.title}
            </h1>
            <p className="text-lg text-body dark:text-dark-text/80">
              {exercise.description}
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 dark:bg-dark-bg p-4 rounded-lg">
              <h3 className="font-semibold text-header dark:text-dark-text">Duration</h3>
              <p className="text-body dark:text-dark-text/80">{exercise.duration}</p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-bg p-4 rounded-lg">
              <h3 className="font-semibold text-header dark:text-dark-text">Calories</h3>
              <p className="text-body dark:text-dark-text/80">{exercise.calories}</p>
            </div>
            {exercise.sets && (
              <div className="bg-gray-50 dark:bg-dark-bg p-4 rounded-lg">
                <h3 className="font-semibold text-header dark:text-dark-text">Sets</h3>
                <p className="text-body dark:text-dark-text/80">{exercise.sets}</p>
              </div>
            )}
            {exercise.reps && (
              <div className="bg-gray-50 dark:bg-dark-bg p-4 rounded-lg">
                <h3 className="font-semibold text-header dark:text-dark-text">Reps</h3>
                <p className="text-body dark:text-dark-text/80">{exercise.reps}</p>
              </div>
            )}
          </div>

          {/* Muscle Groups */}
          <div>
            <h2 className="text-xl font-bold text-header dark:text-dark-text mb-2">Muscle Groups</h2>
            <div className="flex flex-wrap gap-2">
              {exercise.muscleGroups.map((muscle, index) => (
                <span key={index} className="bg-gray-200 dark:bg-dark-bg px-3 py-1 rounded-full text-sm">
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          {/* Equipment */}
          <div>
            <h2 className="text-xl font-bold text-header dark:text-dark-text mb-2">Equipment Needed</h2>
            <ul className="list-disc list-inside space-y-1 text-body dark:text-dark-text/80">
              {exercise.equipment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-xl font-bold text-header dark:text-dark-text mb-2">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2 text-body dark:text-dark-text/80">
              {exercise.instructions.map((instruction, index) => (
                <li key={index} className="pl-2">{instruction}</li>
              ))}
            </ol>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-xl font-bold text-header dark:text-dark-text mb-2">Benefits</h2>
            <ul className="list-disc list-inside space-y-1 text-body dark:text-dark-text/80">
              {exercise.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Tips */}
          <div>
            <h2 className="text-xl font-bold text-header dark:text-dark-text mb-2">Tips</h2>
            <ul className="list-disc list-inside space-y-1 text-body dark:text-dark-text/80">
              {exercise.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>

          {exercise.restTime && (
            <div>
              <h2 className="text-xl font-bold text-header dark:text-dark-text mb-2">Rest Time</h2>
              <p className="text-body dark:text-dark-text/80">{exercise.restTime}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exercise;
