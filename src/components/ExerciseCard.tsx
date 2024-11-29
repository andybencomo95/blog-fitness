import { Link } from 'react-router-dom';
import { Exercise } from '../types/exercise';
import { useState } from 'react';

interface ExerciseCardProps {
  exercise: Exercise;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-500';
    case 'Intermediate':
      return 'bg-yellow-500';
    case 'Advanced':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const difficultyColor = getDifficultyColor(exercise.difficulty);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const fallbackImage = "/placeholder.jpg";

  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
        <img
          src={imageError ? fallbackImage : exercise.imageUrl}
          alt={exercise.title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
          onError={handleImageError}
          onLoad={() => setIsLoading(false)}
          width={400}
          height={300}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-slate-700 text-white">
            {exercise.category}
          </span>
          <span className={`px-3 py-1 text-sm font-medium rounded-full ${difficultyColor} text-white`}>
            {exercise.difficulty}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          {exercise.title}
        </h3>
        <p className="text-slate-600 mb-4 flex-grow">
          {exercise.description}
        </p>
      </div>
    </Link>
  );
};

export default ExerciseCard;
