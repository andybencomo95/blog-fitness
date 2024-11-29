export interface Exercise {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  instructions: string[];
  muscleGroups: string[];
  duration: string;
  equipment: string[];
  benefits: string[];
  tips: string[];
  calories: string;
  sets?: number;
  reps?: string;
  restTime?: string;
}

export interface ExerciseDetail extends Exercise {
}
