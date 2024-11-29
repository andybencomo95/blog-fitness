import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Exercise {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  instructions: string[];
  muscleGroups: string[];
  difficulty: string;
  duration: string;
  equipment: string[];
  benefits: string[];
  tips: string[];
}

// Mock data - replace with actual API call later
const exerciseDetails: Record<number, Exercise> = {
  1: {
    id: 1,
    title: "High-Intensity Boxing Workout",
    description: "Combine boxing techniques with cardio intervals for an intense full-body workout that burns calories and builds endurance.",
    imageUrl: "https://images.pexels.com/photos/4754146/pexels-photo-4754146.jpeg",
    instructions: [
      "Start with a dynamic warm-up focusing on shoulders and hips",
      "Practice basic punches: jab, cross, hook, and uppercut",
      "Perform 3-minute rounds of boxing combinations",
      "Alternate with 1-minute high-intensity cardio intervals",
      "Cool down with light stretching and mobility work"
    ],
    muscleGroups: ["Arms", "Shoulders", "Core", "Legs", "Cardiovascular System"],
    difficulty: "Intermediate to Advanced",
    duration: "45-60 minutes",
    equipment: ["Boxing gloves", "Hand wraps", "Punching bag (optional)"],
    benefits: [
      "Improves cardiovascular endurance",
      "Builds upper body strength",
      "Enhances hand-eye coordination",
      "Reduces stress",
      "Burns significant calories"
    ],
    tips: [
      "Keep your guard up to protect your face",
      "Stay light on your feet",
      "Breathe rhythmically with your punches",
      "Start slow and focus on proper form",
      "Stay hydrated throughout the workout"
    ]
  },
  // Add more exercise details here...
};

const ExerciseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [exercise, setExercise] = useState<Exercise | null>(null);

  useEffect(() => {
    if (id) {
      // In a real app, this would be an API call
      setExercise(exerciseDetails[parseInt(id)]);
    }
  }, [id]);

  if (!exercise) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-button"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden">
        <img
          src={exercise.imageUrl}
          alt={exercise.title}
          className="w-full h-96 object-cover"
        />
        
        <div className="p-6 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-header dark:text-dark-text mb-2">
              {exercise.title}
            </h1>
            <p className="text-body dark:text-dark-text/80 text-lg">
              {exercise.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 dark:bg-dark-bg/50 p-4 rounded-lg">
            <div>
              <h3 className="font-semibold text-header dark:text-dark-text">Difficulty</h3>
              <p className="text-body dark:text-dark-text/80">{exercise.difficulty}</p>
            </div>
            <div>
              <h3 className="font-semibold text-header dark:text-dark-text">Duration</h3>
              <p className="text-body dark:text-dark-text/80">{exercise.duration}</p>
            </div>
            <div>
              <h3 className="font-semibold text-header dark:text-dark-text">Equipment</h3>
              <p className="text-body dark:text-dark-text/80">{exercise.equipment.join(', ')}</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-header dark:text-dark-text mb-4">
              Target Muscle Groups
            </h2>
            <div className="flex flex-wrap gap-2">
              {exercise.muscleGroups.map((muscle, index) => (
                <span
                  key={index}
                  className="bg-button text-white px-3 py-1 rounded-full text-sm"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-header dark:text-dark-text mb-4">
              Key Benefits
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {exercise.benefits.map((benefit, index) => (
                <li key={index} className="text-body dark:text-dark-text/80">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-header dark:text-dark-text mb-4">
              Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-3">
              {exercise.instructions.map((instruction, index) => (
                <li key={index} className="text-body dark:text-dark-text/80">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-header dark:text-dark-text mb-4">
              Pro Tips
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {exercise.tips.map((tip, index) => (
                <li key={index} className="text-body dark:text-dark-text/80">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
