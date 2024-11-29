import { Exercise } from '../types/exercise';

export const allExercises: Exercise[] = [
  {
    id: 1,
    title: "High-Intensity Boxing Workout",
    description: "Combine boxing techniques with cardio intervals for an intense full-body workout that burns calories and improves coordination.",
    imageUrl: "https://images.pexels.com/photos/4754146/pexels-photo-4754146.jpeg",
    category: "Boxing",
    difficulty: "Intermediate",
    instructions: [
      "Start with a 5-minute dynamic warm-up",
      "Practice basic punches: jab, cross, hook, uppercut",
      "Perform 3-minute rounds of boxing combinations",
      "Include 30-second bursts of high-intensity exercises between rounds",
      "Cool down with light stretching"
    ],
    muscleGroups: ["Arms", "Shoulders", "Core", "Legs", "Back"],
    duration: "45 minutes",
    equipment: ["Boxing gloves", "Hand wraps", "Punching bag (optional)"],
    benefits: [
      "Improves cardiovascular endurance",
      "Builds full-body strength",
      "Enhances coordination and agility",
      "Reduces stress",
      "Burns significant calories"
    ],
    tips: [
      "Keep your guard up to protect your face",
      "Stay light on your feet",
      "Breathe rhythmically with your punches",
      "Stay hydrated throughout the workout"
    ],
    calories: "400-600 kcal",
    sets: 10,
    reps: "3-minute rounds",
    restTime: "1 minute between rounds"
  },
  {
    id: 2,
    title: "Sprint Interval Training",
    description: "Explosive sprint workouts to boost speed, endurance, and metabolic rate through high-intensity intervals.",
    imageUrl: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg",
    category: "HIIT",
    difficulty: "Advanced",
    instructions: [
      "Warm up with light jogging for 5-10 minutes",
      "Sprint at maximum effort for 30 seconds",
      "Walk or jog slowly for 60 seconds to recover",
      "Repeat sprint-recovery cycles 8-10 times",
      "Cool down with light jogging and stretches"
    ],
    muscleGroups: ["Quadriceps", "Hamstrings", "Calves", "Glutes", "Core"],
    duration: "30 minutes",
    equipment: ["Running shoes", "Timer", "Flat running surface"],
    benefits: [
      "Increases maximum sprint speed",
      "Improves cardiovascular fitness",
      "Boosts metabolism for hours after workout",
      "Builds explosive power",
      "Enhances fat burning"
    ],
    tips: [
      "Focus on proper running form",
      "Start with fewer intervals and build up",
      "Stay hydrated",
      "Listen to your body and rest when needed"
    ],
    calories: "300-400 kcal",
    sets: 8,
    reps: "30-second sprints",
    restTime: "60 seconds"
  },
  {
    id: 3,
    title: "Mountain Climbers Circuit",
    description: "Dynamic full-body exercise that combines cardio and core strength through continuous mountain climber variations.",
    imageUrl: "https://images.pexels.com/photos/4162435/pexels-photo-4162435.jpeg",
    category: "HIIT",
    difficulty: "Intermediate",
    instructions: [
      "Start in a plank position with arms straight",
      "Alternate bringing knees to chest in a running motion",
      "Keep your core tight and back straight",
      "Perform for 30-second intervals",
      "Mix with other exercises for a complete circuit"
    ],
    muscleGroups: ["Core", "Shoulders", "Hip Flexors", "Legs"],
    duration: "20 minutes",
    equipment: ["Exercise mat", "Timer"],
    benefits: [
      "Improves core strength",
      "Enhances cardiovascular fitness",
      "Increases agility",
      "Burns calories efficiently",
      "Develops coordination"
    ],
    tips: [
      "Maintain a steady pace",
      "Keep your hips level",
      "Breathe consistently",
      "Modify speed based on fitness level"
    ],
    calories: "200-300 kcal",
    sets: 4,
    reps: "30 seconds each set",
    restTime: "30 seconds between sets"
  },
  {
    id: 4,
    title: "Yoga Flow Sequence",
    description: "Fluid sequence of yoga poses focusing on breath, flexibility, and mindful movement for total body wellness.",
    imageUrl: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
    category: "Yoga",
    difficulty: "Beginner",
    instructions: [
      "Begin in mountain pose with deep breaths",
      "Flow through sun salutations",
      "Hold each pose for 3-5 breaths",
      "Focus on proper alignment",
      "End with savasana relaxation"
    ],
    muscleGroups: ["Full Body", "Core", "Back", "Hips", "Shoulders"],
    duration: "40 minutes",
    equipment: ["Yoga mat", "Yoga blocks (optional)", "Strap (optional)"],
    benefits: [
      "Increases flexibility",
      "Improves balance",
      "Reduces stress",
      "Enhances body awareness",
      "Strengthens core muscles"
    ],
    tips: [
      "Listen to your body",
      "Focus on breath-movement connection",
      "Use props when needed",
      "Don't force any poses"
    ],
    calories: "150-200 kcal",
    sets: 1,
    reps: "Complete flow sequence",
    restTime: "As needed between poses"
  },
  {
    id: 5,
    title: "Kettlebell Swing Workout",
    description: "High-intensity kettlebell training focusing on explosive hip hinge movements for power and strength development.",
    imageUrl: "https://images.pexels.com/photos/4162438/pexels-photo-4162438.jpeg",
    category: "Strength",
    difficulty: "Intermediate",
    instructions: [
      "Start with feet shoulder-width apart",
      "Hinge at hips with slight knee bend",
      "Swing kettlebell between legs",
      "Thrust hips forward for upward swing",
      "Control the downward swing"
    ],
    muscleGroups: ["Glutes", "Hamstrings", "Core", "Back", "Shoulders"],
    duration: "25 minutes",
    equipment: ["Kettlebell", "Exercise mat"],
    benefits: [
      "Builds explosive power",
      "Improves hip mobility",
      "Strengthens posterior chain",
      "Enhances cardiovascular fitness",
      "Develops grip strength"
    ],
    tips: [
      "Keep back straight throughout movement",
      "Power comes from hips, not arms",
      "Start with lighter weight to perfect form",
      "Maintain controlled breathing"
    ],
    calories: "250-350 kcal",
    sets: 5,
    reps: "20 swings per set",
    restTime: "45 seconds between sets"
  },
  {
    id: 6,
    title: "Bodyweight HIIT Circuit",
    description: "High-intensity interval training using only bodyweight exercises for maximum calorie burn and strength building.",
    imageUrl: "https://images.pexels.com/photos/4162435/pexels-photo-4162435.jpeg",
    category: "HIIT",
    difficulty: "Intermediate",
    instructions: [
      "Warm up with light cardio for 5 minutes",
      "Perform each exercise for 45 seconds",
      "Rest for 15 seconds between exercises",
      "Complete all exercises in circuit",
      "Rest 1 minute between circuits"
    ],
    muscleGroups: ["Full Body", "Core", "Legs", "Chest", "Shoulders"],
    duration: "35 minutes",
    equipment: ["Timer", "Exercise mat"],
    benefits: [
      "Burns significant calories",
      "Improves endurance",
      "Builds strength",
      "Increases metabolism",
      "Enhances cardiovascular health"
    ],
    tips: [
      "Focus on form over speed",
      "Modify exercises as needed",
      "Stay hydrated throughout",
      "Breathe steadily and consistently"
    ],
    calories: "300-400 kcal",
    sets: 3,
    reps: "45 seconds per exercise",
    restTime: "15 seconds between exercises, 1 minute between circuits"
  },
  {
    id: 7,
    title: "Progressive Strength Training",
    description: "Structured weight training program focusing on gradual progression and proper form for optimal muscle development.",
    imageUrl: "https://images.pexels.com/photos/4162436/pexels-photo-4162436.jpeg",
    category: "Strength",
    difficulty: "Advanced",
    instructions: [
      "Begin with proper warm-up",
      "Start with compound exercises",
      "Progress to isolation movements",
      "Focus on controlled movements",
      "Cool down with stretching"
    ],
    muscleGroups: ["Chest", "Back", "Legs", "Shoulders", "Arms"],
    duration: "60 minutes",
    equipment: ["Dumbbells", "Barbell", "Weight bench", "Squat rack"],
    benefits: [
      "Builds muscle mass",
      "Increases strength",
      "Improves bone density",
      "Enhances joint stability",
      "Boosts metabolism"
    ],
    tips: [
      "Track your progress",
      "Increase weight gradually",
      "Maintain proper form",
      "Get adequate rest between sessions"
    ],
    calories: "400-500 kcal",
    sets: 4,
    reps: "8-12 per set",
    restTime: "90 seconds between sets"
  },
  {
    id: 8,
    title: "Core Stability Workout",
    description: "Comprehensive core training program targeting all aspects of core strength and stability for better posture and performance.",
    imageUrl: "https://images.pexels.com/photos/4162437/pexels-photo-4162437.jpeg",
    category: "Core",
    difficulty: "Intermediate",
    instructions: [
      "Start with activation exercises",
      "Progress through planks and holds",
      "Include rotational movements",
      "Add dynamic stability exercises",
      "Finish with stretching"
    ],
    muscleGroups: ["Core", "Obliques", "Lower Back", "Hip Flexors"],
    duration: "30 minutes",
    equipment: ["Exercise mat", "Medicine ball", "Resistance band"],
    benefits: [
      "Improves posture",
      "Reduces back pain",
      "Enhances athletic performance",
      "Increases stability",
      "Strengthens core muscles"
    ],
    tips: [
      "Engage core throughout exercises",
      "Focus on quality over quantity",
      "Breathe steadily",
      "Progress gradually to harder variations"
    ],
    calories: "200-250 kcal",
    sets: 3,
    reps: "12-15 per exercise",
    restTime: "30 seconds between exercises"
  },
  {
    id: 9,
    title: "Mobility Flow Routine",
    description: "Dynamic mobility exercises designed to improve range of motion, flexibility, and functional movement patterns.",
    imageUrl: "https://images.pexels.com/photos/4162438/pexels-photo-4162438.jpeg",
    category: "Mobility",
    difficulty: "Beginner",
    instructions: [
      "Begin with joint circles and rotations",
      "Progress through dynamic stretches",
      "Include controlled movement patterns",
      "Focus on problem areas",
      "End with static stretching"
    ],
    muscleGroups: ["Full Body", "Joints", "Hip Complex", "Shoulders", "Spine"],
    duration: "30 minutes",
    equipment: ["Foam roller", "Resistance band", "Yoga mat"],
    benefits: [
      "Increases range of motion",
      "Reduces injury risk",
      "Improves movement quality",
      "Enhances recovery",
      "Relieves muscle tension"
    ],
    tips: [
      "Move slowly and deliberately",
      "Don't force movements",
      "Focus on breathing",
      "Listen to your body"
    ],
    calories: "150-200 kcal",
    sets: 2,
    reps: "8-10 per movement",
    restTime: "Minimal rest between movements"
  },
  {
    id: 10,
    title: "Cardio Boxing Combinations",
    description: "Technical boxing combinations with cardio elements.",
    imageUrl: "https://images.pexels.com/photos/4761792/pexels-photo-4761792.jpeg",
    category: "Boxing",
    difficulty: "Intermediate",
    instructions: [
      "Start with a 5-minute dynamic warm-up",
      "Practice basic punches: jab, cross, hook, uppercut",
      "Perform 3-minute rounds of boxing combinations",
      "Include 30-second bursts of high-intensity exercises between rounds",
      "Cool down with light stretching"
    ],
    muscleGroups: ["Arms", "Shoulders", "Core", "Legs", "Back"],
    duration: "45 minutes",
    equipment: ["Boxing gloves", "Hand wraps", "Punching bag (optional)"],
    benefits: [
      "Improves cardiovascular endurance",
      "Builds full-body strength",
      "Enhances coordination and agility",
      "Reduces stress",
      "Burns significant calories"
    ],
    tips: [
      "Keep your guard up to protect your face",
      "Stay light on your feet",
      "Breathe rhythmically with your punches",
      "Stay hydrated throughout the workout"
    ],
    calories: "400-600 kcal",
    sets: 10,
    reps: "3-minute rounds",
    restTime: "1 minute between rounds"
  },
  {
    id: 11,
    title: "Functional Strength Circuit",
    description: "Circuit training focusing on functional movements that improve everyday strength, stability, and movement patterns.",
    imageUrl: "https://images.pexels.com/photos/4162440/pexels-photo-4162440.jpeg",
    category: "Strength",
    difficulty: "Intermediate",
    instructions: [
      "Perform dynamic warm-up",
      "Complete exercises in circuit format",
      "Focus on multi-joint movements",
      "Maintain proper form throughout",
      "Cool down with mobility work"
    ],
    muscleGroups: ["Full Body", "Core", "Posterior Chain", "Shoulders", "Legs"],
    duration: "50 minutes",
    equipment: ["Dumbbells", "Kettlebell", "Resistance bands", "Medicine ball"],
    benefits: [
      "Improves daily movement patterns",
      "Builds functional strength",
      "Enhances coordination",
      "Increases work capacity",
      "Develops better body awareness"
    ],
    tips: [
      "Quality over quantity",
      "Progress weight gradually",
      "Focus on movement patterns",
      "Rest as needed between sets"
    ],
    calories: "350-450 kcal",
    sets: 3,
    reps: "12-15 per exercise",
    restTime: "45 seconds between exercises"
  },
  {
    id: 12,
    title: "Advanced Calisthenics",
    description: "Progressive bodyweight training focusing on advanced movements and strength development using minimal equipment.",
    imageUrl: "https://images.pexels.com/photos/4162441/pexels-photo-4162441.jpeg",
    category: "Bodyweight",
    difficulty: "Advanced",
    instructions: [
      "Begin with joint mobility warm-up",
      "Practice skill progressions",
      "Perform strength elements",
      "Include hold positions",
      "End with flexibility work"
    ],
    muscleGroups: ["Full Body", "Core", "Upper Body", "Shoulders", "Back"],
    duration: "60 minutes",
    equipment: ["Pull-up bar", "Parallel bars", "Floor mat"],
    benefits: [
      "Builds incredible strength",
      "Improves body control",
      "Enhances flexibility",
      "Develops muscle definition",
      "Increases body awareness"
    ],
    tips: [
      "Master basics before progression",
      "Focus on form and control",
      "Practice consistently",
      "Be patient with skill development"
    ],
    calories: "400-500 kcal",
    sets: 4,
    reps: "5-8 per exercise",
    restTime: "2-3 minutes between sets"
  },
  {
    id: 13,
    title: "Powerlifting Basics",
    description: "Foundational powerlifting program focusing on the three main lifts: squat, bench press, and deadlift.",
    imageUrl: "https://images.pexels.com/photos/4162442/pexels-photo-4162442.jpeg",
    category: "Strength",
    difficulty: "Intermediate",
    instructions: [
      "Start with proper warm-up",
      "Practice technique with light weights",
      "Gradually increase working weight",
      "Focus on main lifts",
      "End with accessory work"
    ],
    muscleGroups: ["Legs", "Back", "Chest", "Core", "Full Body"],
    duration: "75 minutes",
    equipment: ["Barbell", "Weight plates", "Power rack", "Bench"],
    benefits: [
      "Develops maximal strength",
      "Improves bone density",
      "Builds muscle mass",
      "Enhances power output",
      "Increases overall strength"
    ],
    tips: [
      "Perfect form before adding weight",
      "Use proper breathing techniques",
      "Follow progressive overload",
      "Get adequate rest between sessions"
    ],
    calories: "400-600 kcal",
    sets: 5,
    reps: "3-5 per set",
    restTime: "3-5 minutes between sets"
  },
  {
    id: 14,
    title: "Dumbbell Strength",
    description: "Comprehensive dumbbell workouts for balanced strength.",
    imageUrl: "https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg",
    category: "Strength",
    difficulty: "Beginner",
    instructions: [
      "Start with proper warm-up",
      "Focus on compound exercises",
      "Progress to isolation movements",
      "Maintain proper form throughout",
      "Cool down with stretching"
    ],
    muscleGroups: ["Full Body", "Chest", "Back", "Legs", "Shoulders"],
    duration: "45 minutes",
    equipment: ["Dumbbells", "Exercise mat"],
    benefits: [
      "Builds overall strength",
      "Improves muscle balance",
      "Enhances bone density",
      "Increases metabolism",
      "Develops coordination"
    ],
    tips: [
      "Start with lighter weights",
      "Focus on proper form",
      "Increase weight gradually",
      "Rest adequately between sets"
    ],
    calories: "250-350 kcal",
    sets: 3,
    reps: "8-12 per set",
    restTime: "60-90 seconds between sets"
  },
  {
    id: 15,
    title: "Plyometric Power Training",
    description: "Explosive training program designed to build power, speed, and athletic performance through jumping and dynamic movements.",
    imageUrl: "https://images.pexels.com/photos/4162444/pexels-photo-4162444.jpeg",
    category: "Power",
    difficulty: "Advanced",
    instructions: [
      "Complete thorough dynamic warm-up",
      "Start with lower intensity exercises",
      "Progress to more explosive movements",
      "Focus on quality over quantity",
      "Include proper landing mechanics"
    ],
    muscleGroups: ["Legs", "Core", "Glutes", "Calves", "Hip Complex"],
    duration: "40 minutes",
    equipment: ["Plyo box", "Markers", "Exercise mat", "Medicine ball"],
    benefits: [
      "Increases explosive power",
      "Improves athletic performance",
      "Enhances speed and agility",
      "Develops better coordination",
      "Strengthens connective tissues"
    ],
    tips: [
      "Land softly and quietly",
      "Start with basics first",
      "Allow adequate recovery",
      "Stay focused on technique"
    ],
    calories: "400-500 kcal",
    sets: 4,
    reps: "6-10 per exercise",
    restTime: "90 seconds between sets"
  },
  {
    id: 16,
    title: "Resistance Band Total Body",
    description: "Complete full-body workout using resistance bands to build strength, improve flexibility, and enhance muscle tone.",
    imageUrl: "https://images.pexels.com/photos/4162445/pexels-photo-4162445.jpeg",
    category: "Strength",
    difficulty: "Beginner",
    instructions: [
      "Set up bands securely",
      "Warm up with light resistance",
      "Perform exercises with controlled movement",
      "Focus on full range of motion",
      "Progress through all muscle groups"
    ],
    muscleGroups: ["Full Body", "Core", "Arms", "Legs", "Back"],
    duration: "45 minutes",
    equipment: ["Resistance bands of varying strength", "Door anchor", "Exercise mat"],
    benefits: [
      "Builds functional strength",
      "Improves flexibility",
      "Enhances joint stability",
      "Perfect for home workouts",
      "Low impact on joints"
    ],
    tips: [
      "Check band integrity before use",
      "Maintain tension throughout movements",
      "Progress to stronger bands gradually",
      "Focus on form over resistance"
    ],
    calories: "200-300 kcal",
    sets: 3,
    reps: "12-15 per exercise",
    restTime: "45 seconds between exercises"
  },
  {
    id: 17,
    title: "Dynamic Mobility Flow",
    description: "Comprehensive mobility routine combining dynamic stretching, joint mobility, and movement patterns to improve flexibility and range of motion.",
    imageUrl: "https://images.pexels.com/photos/4162446/pexels-photo-4162446.jpeg",
    category: "Mobility",
    difficulty: "Intermediate",
    instructions: [
      "Start with gentle joint circles",
      "Progress through movement patterns",
      "Maintain steady breathing",
      "Focus on quality of movement",
      "Increase range gradually"
    ],
    muscleGroups: ["Full Body", "Hips", "Shoulders", "Spine", "Ankles"],
    duration: "30 minutes",
    equipment: ["Yoga mat", "Foam roller", "Mobility stick"],
    benefits: [
      "Improves joint mobility",
      "Reduces injury risk",
      "Enhances movement quality",
      "Relieves muscle tension",
      "Better posture"
    ],
    tips: [
      "Never force movements",
      "Stay within comfort zone",
      "Breathe deeply throughout",
      "Practice daily for best results"
    ],
    calories: "150-200 kcal",
    sets: 2,
    reps: "8-10 per movement",
    restTime: "Minimal rest between movements"
  },
  {
    id: 18,
    title: "Metabolic Conditioning Circuit",
    description: "High-intensity metabolic conditioning workout designed to boost cardiovascular fitness and accelerate fat burning through compound movements.",
    imageUrl: "https://images.pexels.com/photos/4162447/pexels-photo-4162447.jpeg",
    category: "Cardio",
    difficulty: "Intermediate",
    instructions: [
      "Complete dynamic warm-up",
      "Perform exercises in circuit format",
      "Maintain high intensity",
      "Minimize rest periods",
      "Focus on form despite fatigue"
    ],
    muscleGroups: ["Full Body", "Core", "Legs", "Cardiovascular System"],
    duration: "35 minutes",
    equipment: ["Kettlebell", "Jump rope", "Medicine ball", "Timer"],
    benefits: [
      "Improves cardiovascular endurance",
      "Accelerates fat burning",
      "Increases work capacity",
      "Enhances recovery ability",
      "Boosts metabolic rate"
    ],
    tips: [
      "Scale intensity as needed",
      "Stay hydrated throughout",
      "Monitor heart rate",
      "Rest when form deteriorates"
    ],
    calories: "400-600 kcal",
    sets: "4 rounds",
    reps: "45 seconds work/15 seconds rest",
    restTime: "1 minute between rounds"
  },
  {
    id: 19,
    title: "Pilates Core Flow",
    description: "Dynamic Pilates workout focusing on core strength, stability, and controlled movement patterns for improved posture and body awareness.",
    imageUrl: "https://images.pexels.com/photos/4162448/pexels-photo-4162448.jpeg",
    category: "Pilates",
    difficulty: "Intermediate",
    instructions: [
      "Begin with breathing exercises",
      "Engage core throughout",
      "Focus on precise movements",
      "Maintain neutral spine",
      "Control each exercise"
    ],
    muscleGroups: ["Core", "Lower Back", "Abs", "Obliques", "Pelvic Floor"],
    duration: "45 minutes",
    equipment: [
      "Pilates mat",
      "Small ball",
      "Resistance band",
      "Stability ball"
    ],
    benefits: [
      "Strengthens core muscles",
      "Improves posture",
      "Enhances body awareness",
      "Increases flexibility",
      "Reduces back pain"
    ],
    tips: [
      "Quality over quantity",
      "Focus on breathing pattern",
      "Maintain proper alignment",
      "Progress gradually"
    ],
    calories: "200-300 kcal",
    sets: 3,
    reps: "10-12 per exercise",
    restTime: "30 seconds between exercises"
  },
  {
    id: 20,
    title: "Functional Movement Screen",
    description: "Comprehensive movement assessment and corrective exercise program designed to identify and address movement limitations and asymmetries.",
    imageUrl: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg",
    category: "Assessment",
    difficulty: "Beginner",
    instructions: [
      "Complete movement screening tests",
      "Identify mobility limitations",
      "Address movement asymmetries",
      "Perform corrective exercises",
      "Track progress over time"
    ],
    muscleGroups: ["Full Body", "Core", "Hip Complex", "Shoulder Complex", "Spine"],
    duration: "60 minutes",
    equipment: [
      "FMS kit",
      "Exercise mat",
      "Dowel rod",
      "Resistance bands"
    ],
    benefits: [
      "Identifies movement limitations",
      "Prevents potential injuries",
      "Improves movement quality",
      "Enhances athletic performance",
      "Creates balanced fitness foundation"
    ],
    tips: [
      "Focus on quality movement",
      "Address limitations first",
      "Be patient with progress",
      "Maintain consistent practice"
    ],
    calories: "150-200 kcal",
    sets: "As needed",
    reps: "Based on assessment",
    restTime: "As needed between tests"
  },
  {
    id: 21,
    title: "Suspension Training Core",
    description: "Advanced core workout using suspension trainers to challenge stability, strength, and control through various planes of motion.",
    imageUrl: "https://images.pexels.com/photos/4162450/pexels-photo-4162450.jpeg",
    category: "Core",
    difficulty: "Advanced",
    instructions: [
      "Set up suspension trainer securely",
      "Adjust straps to appropriate length",
      "Begin with basic progressions",
      "Maintain core engagement",
      "Control all movements"
    ],
    muscleGroups: ["Core", "Abs", "Obliques", "Lower Back", "Hip Flexors"],
    duration: "40 minutes",
    equipment: ["Suspension trainer", "Timer", "Exercise mat"],
    benefits: [
      "Develops core stability",
      "Improves functional strength",
      "Enhances body control",
      "Increases muscle endurance",
      "Challenges balance"
    ],
    tips: [
      "Start with basic exercises",
      "Keep body aligned",
      "Adjust strap length as needed",
      "Progress gradually"
    ],
    calories: "300-400 kcal",
    sets: 4,
    reps: "30-45 seconds per exercise",
    restTime: "60 seconds between sets"
  },
  {
    id: 22,
    title: "Olympic Lifting Technique",
    description: "Technical training session focusing on the fundamentals of Olympic weightlifting movements, emphasizing proper form and progression.",
    imageUrl: "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg",
    category: "Olympic Lifting",
    difficulty: "Advanced",
    instructions: [
      "Complete thorough warm-up",
      "Practice movement patterns with PVC",
      "Progress to empty barbell",
      "Add weight gradually",
      "Focus on technique mastery"
    ],
    muscleGroups: ["Full Body", "Posterior Chain", "Quadriceps", "Shoulders", "Core"],
    duration: "90 minutes",
    equipment: [
      "Olympic barbell",
      "Bumper plates",
      "Platform",
      "Lifting shoes"
    ],
    benefits: [
      "Develops explosive power",
      "Improves coordination",
      "Builds overall strength",
      "Enhances athletic performance",
      "Increases mobility"
    ],
    tips: [
      "Focus on technique first",
      "Progress weight slowly",
      "Stay patient with learning",
      "Record lifts for analysis"
    ],
    calories: "400-500 kcal",
    sets: 5,
    reps: "3-5 per set",
    restTime: "2-3 minutes between sets"
  },
  {
    id: 23,
    title: "Recovery and Mobility Session",
    description: "Comprehensive recovery workout combining gentle mobility work, soft tissue release, and relaxation techniques to enhance recovery and reduce muscle tension.",
    imageUrl: "https://images.pexels.com/photos/4162452/pexels-photo-4162452.jpeg",
    category: "Recovery",
    difficulty: "Beginner",
    instructions: [
      "Start with foam rolling",
      "Progress to dynamic stretches",
      "Perform mobility drills",
      "Include breathing exercises",
      "End with static stretching"
    ],
    muscleGroups: ["Full Body", "Fascia", "Joint Complexes", "Muscle Tissue"],
    duration: "45 minutes",
    equipment: [
      "Foam roller",
      "Massage ball",
      "Yoga mat",
      "Resistance band"
    ],
    benefits: [
      "Accelerates recovery",
      "Reduces muscle soreness",
      "Improves tissue quality",
      "Enhances relaxation",
      "Prevents injuries"
    ],
    tips: [
      "Take time on tender spots",
      "Breathe through discomfort",
      "Stay relaxed throughout",
      "Listen to your body"
    ],
    calories: "100-150 kcal",
    sets: "As needed",
    reps: "1-2 minutes per area",
    restTime: "Flow between techniques"
  },
  {
    id: 24,
    title: "Kettlebell Flow Complex",
    description: "Advanced kettlebell workout combining fluid movements and transitions to build strength, power, and coordination through continuous flow patterns.",
    imageUrl: "https://images.pexels.com/photos/4162453/pexels-photo-4162453.jpeg",
    category: "Strength",
    difficulty: "Advanced",
    instructions: [
      "Master individual movements first",
      "Link movements together",
      "Maintain proper form",
      "Control breathing rhythm",
      "Progress weight gradually"
    ],
    muscleGroups: ["Full Body", "Core", "Posterior Chain", "Grip Strength"],
    duration: "50 minutes",
    equipment: [
      "Multiple kettlebells",
      "Exercise mat",
      "Timer",
      "Chalk"
    ],
    benefits: [
      "Improves movement fluidity",
      "Builds functional strength",
      "Enhances coordination",
      "Develops power endurance",
      "Increases work capacity"
    ],
    tips: [
      "Focus on technique first",
      "Start light and progress",
      "Keep core engaged",
      "Watch your form during fatigue"
    ],
    calories: "400-500 kcal",
    sets: "4-5 complexes",
    reps: "5-8 reps per movement",
    restTime: "90 seconds between complexes"
  },
  {
    id: 25,
    title: "Speed and Agility Drills",
    description: "High-intensity speed, agility, and quickness (SAQ) training program designed to improve athletic performance and reactive ability.",
    imageUrl: "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
    category: "Athletic",
    difficulty: "Intermediate",
    instructions: [
      "Complete dynamic warm-up",
      "Set up drill stations",
      "Focus on quick directional changes",
      "Maintain explosive movements",
      "Progress through complexity levels"
    ],
    muscleGroups: ["Lower Body", "Core", "Fast-Twitch Muscle Fibers", "Stabilizers"],
    duration: "45 minutes",
    equipment: [
      "Agility ladder",
      "Cones",
      "Speed hurdles",
      "Resistance parachute"
    ],
    benefits: [
      "Improves reaction time",
      "Enhances footwork",
      "Increases acceleration",
      "Develops change of direction",
      "Boosts athletic performance"
    ],
    tips: [
      "Quality over speed initially",
      "Stay light on your feet",
      "Keep core engaged",
      "Rest fully between sets"
    ],
    calories: "350-450 kcal",
    sets: 4,
    reps: "30-45 seconds per drill",
    restTime: "60-90 seconds between sets"
  },
  {
    id: 26,
    title: "Advanced Balance Training",
    description: "Challenging balance and proprioception workout incorporating unstable surfaces and dynamic movements to enhance stability and body control.",
    imageUrl: "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg",
    category: "Balance",
    difficulty: "Advanced",
    instructions: [
      "Begin with basic balance drills",
      "Progress to unstable surfaces",
      "Add dynamic movements",
      "Incorporate vision challenges",
      "Include reactive elements"
    ],
    muscleGroups: ["Core", "Stabilizers", "Lower Body", "Proprioceptors", "Balance Systems"],
    duration: "40 minutes",
    equipment: [
      "BOSU ball",
      "Balance board",
      "Stability cushions",
      "Resistance bands"
    ],
    benefits: [
      "Improves proprioception",
      "Enhances stability",
      "Strengthens small muscles",
      "Prevents injuries",
      "Develops body awareness"
    ],
    tips: [
      "Progress gradually",
      "Maintain proper posture",
      "Stay focused",
      "Create safe environment"
    ],
    calories: "200-300 kcal",
    sets: 3,
    reps: "45-60 seconds per exercise",
    restTime: "30-45 seconds between exercises"
  },
  {
    id: 27,
    title: "Endurance Running Program",
    description: "Progressive running program designed to build cardiovascular endurance and improve running economy through structured intervals and distance training.",
    imageUrl: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg",
    category: "Cardio",
    difficulty: "Intermediate",
    instructions: [
      "Complete dynamic warm-up",
      "Start with base building",
      "Incorporate interval training",
      "Include recovery runs",
      "Progress distance gradually"
    ],
    muscleGroups: ["Lower Body", "Cardiovascular System", "Core", "Running Muscles"],
    duration: "60-90 minutes",
    equipment: [
      "Running shoes",
      "Heart rate monitor",
      "Hydration system",
      "GPS watch"
    ],
    benefits: [
      "Improves cardiovascular endurance",
      "Enhances running economy",
      "Builds aerobic capacity",
      "Increases mental toughness",
      "Burns calories efficiently"
    ],
    tips: [
      "Follow progressive overload",
      "Listen to your body",
      "Stay properly hydrated",
      "Maintain good form"
    ],
    calories: "600-900 kcal",
    sets: "Varies by session",
    reps: "Distance or time-based",
    restTime: "Based on interval structure"
  },
  {
    id: 28,
    title: "Strongman Conditioning",
    description: "High-intensity strongman-style workout combining traditional strongman implements with conditioning elements for strength and endurance.",
    imageUrl: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg",
    category: "Strength",
    difficulty: "Advanced",
    instructions: [
      "Proper implement setup",
      "Review movement patterns",
      "Start with lighter weights",
      "Focus on work capacity",
      "Maintain safety protocols"
    ],
    muscleGroups: ["Full Body", "Core", "Posterior Chain", "Grip Strength", "Stabilizers"],
    duration: "75 minutes",
    equipment: [
      "Farmers handles",
      "Tire",
      "Sled",
      "Sandbag",
      "Atlas stones"
    ],
    benefits: [
      "Builds functional strength",
      "Improves work capacity",
      "Develops mental toughness",
      "Enhances grip strength",
      "Increases power output"
    ],
    tips: [
      "Perfect technique first",
      "Progress weight gradually",
      "Use proper safety gear",
      "Rest as needed"
    ],
    calories: "500-700 kcal",
    sets: 4,
    reps: "60-90 seconds per station",
    restTime: "2-3 minutes between rounds"
  },
  {
    id: 29,
    title: "Boxing Fundamentals",
    description: "Technical boxing workout focusing on proper form, combinations, and footwork while building cardiovascular endurance and upper body strength.",
    imageUrl: "https://images.pexels.com/photos/4162458/pexels-photo-4162458.jpeg",
    category: "Combat",
    difficulty: "Beginner",
    instructions: [
      "Complete boxing-specific warm-up",
      "Practice basic punches",
      "Learn proper footwork",
      "Work on combinations",
      "Include defensive movements"
    ],
    muscleGroups: ["Upper Body", "Core", "Legs", "Shoulders", "Cardiovascular System"],
    duration: "60 minutes",
    equipment: [
      "Boxing gloves",
      "Hand wraps",
      "Heavy bag",
      "Speed bag",
      "Timer"
    ],
    benefits: [
      "Improves hand-eye coordination",
      "Builds upper body strength",
      "Enhances cardiovascular fitness",
      "Develops footwork agility",
      "Reduces stress"
    ],
    tips: [
      "Focus on proper form",
      "Keep hands up",
      "Stay light on feet",
      "Breathe with punches"
    ],
    calories: "400-600 kcal",
    sets: 6,
    reps: "3-minute rounds",
    restTime: "1 minute between rounds"
  },
  {
    id: 30,
    title: "Isometric Strength Training",
    description: "Advanced isometric training program focusing on building strength and muscle control through static holds and tension-based exercises.",
    imageUrl: "https://images.pexels.com/photos/4162459/pexels-photo-4162459.jpeg",
    category: "Strength",
    difficulty: "Advanced",
    instructions: [
      "Warm up thoroughly",
      "Begin with shorter holds",
      "Focus on maximum tension",
      "Maintain proper breathing",
      "Progress hold duration"
    ],
    muscleGroups: ["Full Body", "Core", "Major Muscle Groups", "Stabilizers"],
    duration: "45 minutes",
    equipment: [
      "Resistance bands",
      "Pull-up bar",
      "Parallel bars",
      "Timer"
    ],
    benefits: [
      "Develops strength endurance",
      "Improves muscle control",
      "Enhances mind-muscle connection",
      "Builds static strength",
      "Low impact on joints"
    ],
    tips: [
      "Quality of tension matters",
      "Don't hold breath",
      "Stay within time limits",
      "Monitor form carefully"
    ],
    calories: "200-300 kcal",
    sets: 4,
    reps: "30-60 second holds",
    restTime: "60-90 seconds between holds"
  },
  {
    id: 31,
    title: "Core Power Flow",
    description: "Dynamic core strengthening workout combining Pilates principles with power movements for enhanced core stability and strength.",
    imageUrl: "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg",
    category: "Core",
    difficulty: "Intermediate",
    instructions: [
      "Begin with core activation",
      "Progress through dynamic movements",
      "Maintain proper breathing",
      "Focus on controlled power",
      "Include all core regions"
    ],
    muscleGroups: ["Core", "Obliques", "Lower Back", "Hip Flexors", "Transverse Abdominis"],
    duration: "45 minutes",
    equipment: [
      "Exercise mat",
      "Medicine ball",
      "Resistance band",
      "Stability ball"
    ],
    benefits: [
      "Develops core power",
      "Improves rotational strength",
      "Enhances stability",
      "Builds functional strength",
      "Reduces injury risk"
    ],
    tips: [
      "Maintain core engagement",
      "Control each movement",
      "Focus on form over speed",
      "Progress gradually"
    ],
    calories: "300-400 kcal",
    sets: 4,
    reps: "12-15 per exercise",
    restTime: "45 seconds between sets"
  },
  {
    id: 32,
    title: "Functional Movement Integration",
    description: "Comprehensive workout focusing on integrating fundamental movement patterns for improved daily function and athletic performance.",
    imageUrl: "https://images.pexels.com/photos/4162488/pexels-photo-4162488.jpeg",
    category: "Functional",
    difficulty: "Intermediate",
    instructions: [
      "Start with movement assessment",
      "Practice basic patterns",
      "Integrate movements",
      "Add complexity gradually",
      "Focus on quality"
    ],
    muscleGroups: ["Full Body", "Core", "Hip Complex", "Shoulder Girdle", "Movement Chains"],
    duration: "60 minutes",
    equipment: [
      "Resistance bands",
      "Kettlebell",
      "Foam roller",
      "Exercise mat"
    ],
    benefits: [
      "Improves movement quality",
      "Enhances coordination",
      "Reduces movement compensations",
      "Increases body awareness",
      "Prevents injuries"
    ],
    tips: [
      "Focus on movement quality",
      "Build patterns progressively",
      "Stay mindful throughout",
      "Maintain proper alignment"
    ],
    calories: "350-450 kcal",
    sets: 3,
    reps: "10-12 per pattern",
    restTime: "60 seconds between sets"
  },
  {
    id: 33,
    title: "Dynamic Flexibility Flow",
    description: "Progressive flexibility training combining dynamic stretching, mobility work, and movement flows for improved range of motion.",
    imageUrl: "https://images.pexels.com/photos/4162489/pexels-photo-4162489.jpeg",
    category: "Flexibility",
    difficulty: "Beginner",
    instructions: [
      "Begin with joint mobility",
      "Progress to dynamic stretches",
      "Include movement flows",
      "Focus on key areas",
      "Cool down with static stretches"
    ],
    muscleGroups: ["Full Body", "Hip Flexors", "Shoulders", "Spine", "Posterior Chain"],
    duration: "40 minutes",
    equipment: [
      "Yoga mat",
      "Resistance band",
      "Foam roller",
      "Mobility stick"
    ],
    benefits: [
      "Increases flexibility",
      "Improves joint mobility",
      "Enhances movement quality",
      "Reduces muscle tension",
      "Prevents injuries"
    ],
    tips: [
      "Move through full range",
      "Breathe consistently",
      "Stay within comfort zone",
      "Progress gradually"
    ],
    calories: "200-300 kcal",
    sets: 2,
    reps: "30-45 seconds per movement",
    restTime: "Minimal rest between moves"
  },
  {
    id: 34,
    title: "Power Endurance Circuit",
    description: "High-intensity circuit combining power movements with endurance work for improved athletic performance and work capacity.",
    imageUrl: "https://images.pexels.com/photos/4162490/pexels-photo-4162490.jpeg",
    category: "Circuit",
    difficulty: "Advanced",
    instructions: [
      "Complete thorough warm-up",
      "Alternate power and endurance",
      "Maintain work intensity",
      "Focus on form",
      "Include recovery periods"
    ],
    muscleGroups: ["Full Body", "Power Systems", "Cardiovascular System", "Major Muscle Groups"],
    duration: "50 minutes",
    equipment: [
      "Plyo box",
      "Kettlebells",
      "Battle ropes",
      "Medicine ball"
    ],
    benefits: [
      "Builds power endurance",
      "Improves work capacity",
      "Enhances athletic performance",
      "Increases stamina",
      "Develops mental toughness"
    ],
    tips: [
      "Scale intensity as needed",
      "Maintain proper form",
      "Stay hydrated",
      "Listen to your body"
    ],
    calories: "500-600 kcal",
    sets: 5,
    reps: "40 seconds work/20 seconds rest",
    restTime: "2 minutes between rounds"
  },
  {
    id: 35,
    title: "Lower Abs Focus",
    description: "Targeted lower ab exercises.",
    imageUrl: "https://images.pexels.com/photos/4162579/pexels-photo-4162579.jpeg",
    category: "Core",
    difficulty: "Advanced",
    instructions: [
      "Start with basic lower ab exercises",
      "Progress to more challenging movements",
      "Focus on controlled movements",
      "Engage core throughout",
      "Maintain proper form"
    ],
    muscleGroups: ["Lower Abs", "Obliques", "Hip Flexors"],
    duration: "30 minutes",
    equipment: ["Exercise mat", "Swiss ball"],
    benefits: [
      "Strengthens lower abs",
      "Improves core stability",
      "Enhances athletic performance",
      "Reduces lower back pain",
      "Tones abdominal muscles"
    ],
    tips: [
      "Focus on slow and controlled movements",
      "Engage core throughout exercises",
      "Progress gradually to more challenging movements",
      "Maintain proper form"
    ],
    calories: "200-300 kcal",
    sets: 3,
    reps: "12-15 per exercise",
    restTime: "45 seconds between sets"
  },
  {
    id: 36,
    title: "Mobility Flow Sequence",
    description: "Comprehensive mobility routine combining dynamic stretches and controlled movements to improve joint range of motion and movement quality.",
    imageUrl: "https://images.pexels.com/photos/4162492/pexels-photo-4162492.jpeg",
    category: "Mobility",
    difficulty: "Intermediate",
    instructions: [
      "Begin with gentle joint mobilization",
      "Progress through movement patterns",
      "Focus on quality and control",
      "Increase range gradually",
      "Maintain proper alignment"
    ],
    muscleGroups: ["Full Body", "Joints", "Connective Tissue", "Stabilizer Muscles"],
    duration: "45 minutes",
    equipment: [
      "Foam roller",
      "Resistance band",
      "Yoga mat",
      "Mobility tools"
    ],
    benefits: [
      "Improves joint mobility",
      "Enhances movement quality",
      "Reduces injury risk",
      "Increases flexibility",
      "Better posture"
    ],
    tips: [
      "Move with control",
      "Focus on problem areas",
      "Stay within pain-free range",
      "Be consistent with practice"
    ],
    calories: "200-300 kcal",
    sets: "Flow-based",
    reps: "8-12 reps per movement",
    restTime: "Minimal, flow between movements"
  },
  {
    id: 37,
    title: "Athletic Performance Circuit",
    description: "High-intensity athletic training circuit designed to enhance speed, agility, power, and sports-specific performance.",
    imageUrl: "https://images.pexels.com/photos/4162493/pexels-photo-4162493.jpeg",
    category: "Athletic",
    difficulty: "Advanced",
    instructions: [
      "Complete dynamic warm-up",
      "Focus on explosive movements",
      "Maintain proper technique",
      "Progress through stations",
      "Include active recovery"
    ],
    muscleGroups: ["Full Body", "Fast-Twitch Fibers", "Core", "Power Systems"],
    duration: "75 minutes",
    equipment: [
      "Agility ladder",
      "Resistance bands",
      "Medicine balls",
      "Cones",
      "Speed hurdles"
    ],
    benefits: [
      "Enhances athletic performance",
      "Improves sport-specific skills",
      "Builds conditioning",
      "Increases power output",
      "Develops agility"
    ],
    tips: [
      "Maintain proper form",
      "Scale intensity as needed",
      "Stay explosive",
      "Focus on quality"
    ],
    calories: "600-800 kcal",
    sets: 4,
    reps: "30-45 seconds per station",
    restTime: "60 seconds between rounds"
  },
  {
    id: 38,
    title: "Recovery and Regeneration",
    description: "Comprehensive recovery session combining gentle mobility work, soft tissue release, and relaxation techniques to enhance recovery and reduce muscle tension.",
    imageUrl: "https://images.pexels.com/photos/4162494/pexels-photo-4162494.jpeg",
    category: "Recovery",
    difficulty: "Beginner",
    instructions: [
      "Start with breathing exercises",
      "Progress through gentle mobility",
      "Include foam rolling",
      "Practice stretching sequences",
      "End with relaxation"
    ],
    muscleGroups: ["Full Body", "Fascia", "Nervous System", "Major Muscle Groups"],
    duration: "45 minutes",
    equipment: [
      "Foam roller",
      "Massage balls",
      "Yoga mat",
      "Resistance band"
    ],
    benefits: [
      "Accelerates recovery",
      "Reduces muscle tension",
      "Improves tissue quality",
      "Enhances relaxation",
      "Prevents overtraining"
    ],
    tips: [
      "Focus on problem areas",
      "Use appropriate pressure",
      "Stay relaxed throughout",
      "Breathe deeply"
    ],
    calories: "100-150 kcal",
    sets: "Continuous flow",
    reps: "2-3 minutes per area",
    restTime: "As needed between techniques"
  },
  {
    id: 39,
    title: "Advanced Strength Integration",
    description: "Complex strength training program combining compound movements with advanced lifting techniques for total body strength development.",
    imageUrl: "https://images.pexels.com/photos/4162495/pexels-photo-4162495.jpeg",
    category: "Strength",
    difficulty: "Advanced",
    instructions: [
      "Complete comprehensive warm-up",
      "Focus on compound movements first",
      "Progress to accessory work",
      "Maintain strict form",
      "Include proper cool-down"
    ],
    muscleGroups: ["Full Body", "Major Muscle Groups", "Stabilizers", "Core"],
    duration: "90 minutes",
    equipment: [
      "Barbell and plates",
      "Dumbbells",
      "Power rack",
      "Bench",
      "Resistance bands"
    ],
    benefits: [
      "Maximizes strength gains",
      "Improves muscle coordination",
      "Enhances lifting technique",
      "Builds functional strength",
      "Increases muscle mass"
    ],
    tips: [
      "Prioritize form over weight",
      "Progress systematically",
      "Focus on mind-muscle connection",
      "Rest adequately between sets"
    ],
    calories: "500-700 kcal",
    sets: "4-5 per exercise",
    reps: "3-8 depending on movement",
    restTime: "2-3 minutes between sets"
  },
  {
    id: 40,
    title: "Metabolic Conditioning",
    description: "High-intensity metabolic workout designed to maximize calorie burn and improve cardiovascular endurance through varied movement patterns.",
    imageUrl: "https://images.pexels.com/photos/4162496/pexels-photo-4162496.jpeg",
    category: "Cardio",
    difficulty: "Advanced",
    instructions: [
      "Begin with dynamic warm-up",
      "Cycle through movement patterns",
      "Maintain high intensity",
      "Monitor heart rate",
      "Include active recovery"
    ],
    muscleGroups: ["Full Body", "Cardiovascular System", "Core", "Major Muscle Groups"],
    duration: "45 minutes",
    equipment: [
      "Kettlebells",
      "Jump rope",
      "Medicine ball",
      "Rower",
      "Battle ropes"
    ],
    benefits: [
      "Increases metabolic rate",
      "Improves cardiovascular fitness",
      "Enhances fat burning",
      "Builds endurance",
      "Develops work capacity"
    ],
    tips: [
      "Scale intensity as needed",
      "Focus on form during fatigue",
      "Stay hydrated",
      "Monitor recovery between rounds"
    ],
    calories: "400-600 kcal",
    sets: "5-6 rounds",
    reps: "45 seconds work/15 seconds rest",
    restTime: "1 minute between rounds"
  },
  {
    id: 41,
    title: "Yoga Power Flow",
    description: "Dynamic yoga sequence combining strength, balance, and flexibility through challenging poses and fluid transitions.",
    imageUrl: "https://images.pexels.com/photos/4162497/pexels-photo-4162497.jpeg",
    category: "Yoga",
    difficulty: "Intermediate",
    instructions: [
      "Begin with sun salutations",
      "Progress through standing poses",
      "Include balance work",
      "Add strength elements",
      "Cool down with stretches"
    ],
    muscleGroups: ["Full Body", "Core", "Upper Body", "Lower Body", "Balance Systems"],
    duration: "60 minutes",
    equipment: [
      "Yoga mat",
      "Yoga blocks",
      "Strap",
      "Bolster"
    ],
    benefits: [
      "Builds strength and flexibility",
      "Improves balance",
      "Enhances mind-body connection",
      "Increases body awareness",
      "Reduces stress"
    ],
    tips: [
      "Focus on breath control",
      "Maintain proper alignment",
      "Use modifications as needed",
      "Progress at your own pace"
    ],
    calories: "300-400 kcal",
    sets: "Flow-based practice",
    reps: "5-8 breaths per pose",
    restTime: "Child's pose as needed"
  },
  {
    id: 42,
    title: "Combat Conditioning",
    description: "High-intensity martial arts-inspired workout combining striking, footwork, and defensive movements for improved combat fitness.",
    imageUrl: "https://images.pexels.com/photos/4162498/pexels-photo-4162498.jpeg",
    category: "Combat",
    difficulty: "Advanced",
    instructions: [
      "Start with shadow boxing",
      "Practice combination drills",
      "Include defensive movements",
      "Add footwork patterns",
      "Finish with power strikes"
    ],
    muscleGroups: ["Full Body", "Core", "Shoulders", "Legs", "Cardiovascular System"],
    duration: "60 minutes",
    equipment: [
      "Boxing gloves",
      "Heavy bag",
      "Jump rope",
      "Focus mitts",
      "Timer"
    ],
    benefits: [
      "Improves striking technique",
      "Enhances cardiovascular fitness",
      "Develops coordination",
      "Builds functional strength",
      "Increases agility"
    ],
    tips: [
      "Focus on proper form",
      "Start slow and build speed",
      "Keep hands up for defense",
      "Stay light on your feet"
    ],
    calories: "600-800 kcal",
    sets: "8-10 rounds",
    reps: "3 minutes work/1 minute rest",
    restTime: "60 seconds between rounds"
  },
  {
    id: 43,
    title: "Stretch & Release",
    description: "Combination of stretching and self-massage.",
    imageUrl: "https://images.pexels.com/photos/4162435/pexels-photo-4162435.jpeg",
    category: "Recovery",
    difficulty: "Beginner",
    instructions: [
      "Start with breathing exercises",
      "Progress through gentle mobility",
      "Include foam rolling",
      "Practice stretching sequences",
      "End with relaxation"
    ],
    muscleGroups: ["Full Body", "Fascia", "Nervous System", "Major Muscle Groups"],
    duration: "45 minutes",
    equipment: [
      "Foam roller",
      "Massage balls",
      "Yoga mat",
      "Resistance band"
    ],
    benefits: [
      "Accelerates recovery",
      "Reduces muscle tension",
      "Improves tissue quality",
      "Enhances relaxation",
      "Prevents overtraining"
    ],
    tips: [
      "Focus on problem areas",
      "Use appropriate pressure",
      "Stay relaxed throughout",
      "Breathe deeply"
    ],
    calories: "100-150 kcal",
    sets: "Continuous flow",
    reps: "2-3 minutes per area",
    restTime: "As needed between techniques"
  },
  {
    id: 44,
    title: "Kettlebell Complex",
    description: "Advanced kettlebell workout combining strength, power, and endurance movements into flowing sequences.",
    imageUrl: "https://images.pexels.com/photos/4162500/pexels-photo-4162500.jpeg",
    category: "Strength",
    difficulty: "Advanced",
    instructions: [
      "Master individual movements first",
      "Link movements together",
      "Maintain proper form",
      "Control breathing rhythm",
      "Progress weight gradually"
    ],
    muscleGroups: ["Full Body", "Core", "Posterior Chain", "Grip Strength"],
    duration: "50 minutes",
    equipment: [
      "Multiple kettlebells",
      "Exercise mat",
      "Timer",
      "Chalk"
    ],
    benefits: [
      "Improves movement fluidity",
      "Builds functional strength",
      "Enhances coordination",
      "Develops power endurance",
      "Increases work capacity"
    ],
    tips: [
      "Focus on technique first",
      "Start light and progress",
      "Keep core engaged",
      "Watch your form during fatigue"
    ],
    calories: "450-600 kcal",
    sets: "4-5 complexes",
    reps: "5-8 reps per movement",
    restTime: "90 seconds between complexes"
  },
  {
    id: 45,
    title: "Cool Down Flow",
    description: "Post-workout recovery routine.",
    imageUrl: "https://images.pexels.com/photos/4162501/pexels-photo-4162501.jpeg",
    category: "Recovery",
    difficulty: "Beginner",
    instructions: [
      "Start with dynamic warm-up",
      "Build base mileage first",
      "Incorporate speed work",
      "Practice pacing strategy",
      "Include recovery runs"
    ],
    muscleGroups: ["Lower Body", "Core", "Cardiovascular System", "Respiratory System"],
    duration: "60-90 minutes",
    equipment: [
      "Running shoes",
      "Heart rate monitor",
      "Hydration pack",
      "Running watch"
    ],
    benefits: [
      "Improves cardiovascular endurance",
      "Enhances running economy",
      "Builds aerobic capacity",
      "Increases mental toughness",
      "Burns calories efficiently"
    ],
    tips: [
      "Progress mileage gradually",
      "Listen to your body",
      "Stay properly hydrated",
      "Maintain good form"
    ],
    calories: "600-900 kcal",
    sets: "Various intervals",
    reps: "Distance-based goals",
    restTime: "Active recovery between intervals"
  },
  {
    id: 46,
    title: "Functional Strength Circuit",
    description: "Comprehensive circuit training program combining functional movements with strength training for improved daily performance and overall fitness.",
    imageUrl: "https://images.pexels.com/photos/4162502/pexels-photo-4162502.jpeg",
    category: "Circuit",
    difficulty: "Intermediate",
    instructions: [
      "Begin with mobility work",
      "Progress through stations",
      "Focus on movement quality",
      "Maintain consistent pace",
      "Include all movement patterns"
    ],
    muscleGroups: ["Full Body", "Core", "Major Movement Patterns", "Stabilizers"],
    duration: "55 minutes",
    equipment: [
      "Dumbbells",
      "Kettlebells",
      "Resistance bands",
      "TRX",
      "Medicine ball"
    ],
    benefits: [
      "Improves functional strength",
      "Enhances movement quality",
      "Increases work capacity",
      "Builds practical fitness",
      "Develops overall strength"
    ],
    tips: [
      "Focus on form first",
      "Progress weight gradually",
      "Maintain breathing rhythm",
      "Scale as needed"
    ],
    calories: "400-500 kcal",
    sets: 3,
    reps: "12-15 per exercise",
    restTime: "30 seconds between exercises"
  },
  {
    id: 47,
    title: "Advanced Pilates Flow",
    description: "Challenging Pilates sequence incorporating advanced asanas, transitions, and inversions for experienced practitioners.",
    imageUrl: "https://images.pexels.com/photos/4162503/pexels-photo-4162503.jpeg",
    category: "Pilates",
    difficulty: "Advanced",
    instructions: [
      "Begin with breathing exercises",
      "Warm up with basic movements",
      "Progress to advanced sequences",
      "Practice inversions",
      "End with deep stretching"
    ],
    muscleGroups: ["Core", "Deep Stabilizers", "Spinal Muscles", "Pelvic Floor"],
    duration: "60 minutes",
    equipment: [
      "Pilates mat",
      "Foam roller",
      "Magic circle",
      "Small ball",
      "Resistance band"
    ],
    benefits: [
      "Enhances core strength",
      "Improves posture",
      "Increases body control",
      "Develops flexibility",
      "Builds muscular endurance"
    ],
    tips: [
      "Focus on precision",
      "Maintain proper breathing",
      "Keep core engaged",
      "Progress gradually"
    ],
    calories: "300-400 kcal",
    sets: "3-4 per exercise",
    reps: "10-12 controlled reps",
    restTime: "Minimal between exercises"
  },
  {
    id: 48,
    title: "Tennis Conditioning",
    description: "Tennis-specific strength and agility.",
    imageUrl: "https://images.pexels.com/photos/4162504/pexels-photo-4162504.jpeg",
    category: "Sports",
    difficulty: "Advanced",
    instructions: [
      "Complete mobility preparation",
      "Practice position drills",
      "Work on movement patterns",
      "Progress to full lifts",
      "Focus on technique refinement"
    ],
    muscleGroups: ["Full Body", "Posterior Chain", "Explosive Power", "Core"],
    duration: "90 minutes",
    equipment: [
      "Olympic barbell",
      "Bumper plates",
      "Lifting platform",
      "Weightlifting shoes",
      "Lifting straps"
    ],
    benefits: [
      "Develops explosive power",
      "Improves coordination",
      "Enhances athletic performance",
      "Builds overall strength",
      "Increases mobility"
    ],
    tips: [
      "Focus on perfect form",
      "Progress weight slowly",
      "Stay patient with learning",
      "Film your lifts"
    ],
    calories: "400-500 kcal",
    sets: "5-6 per movement",
    reps: "2-3 reps per set",
    restTime: "2-3 minutes between sets"
  },
  {
    id: 49,
    title: "Swimming Dryland",
    description: "Dry-land training for swimmers.",
    imageUrl: "https://images.pexels.com/photos/4162435/pexels-photo-4162435.jpeg",
    category: "Sports",
    difficulty: "Intermediate",
    instructions: [
      "Complete dynamic warm-up",
      "Focus on upper body strength",
      "Incorporate lower body power",
      "Practice core stabilization",
      "Cool down with stretching"
    ],
    muscleGroups: ["Full Body", "Shoulders", "Back", "Core", "Legs"],
    duration: "60 minutes",
    equipment: [
      "Resistance bands",
      "Pull-up bar",
      "Medicine ball",
      "Exercise mat"
    ],
    benefits: [
      "Improves swimming efficiency",
      "Enhances endurance",
      "Builds strength and power",
      "Increases flexibility",
      "Reduces injury risk"
    ],
    tips: [
      "Focus on proper form",
      "Start with lighter weights",
      "Progress gradually",
      "Stay hydrated throughout"
    ],
    calories: "400-500 kcal",
    sets: 4,
    reps: "10-12 per exercise",
    restTime: "60 seconds between sets"
  },
  {
    id: 50,
    title: "Dynamic Balance Training",
    description: "Comprehensive balance and stability program incorporating progressive challenges and dynamic movements for improved proprioception and control.",
    imageUrl: "https://images.pexels.com/photos/4162506/pexels-photo-4162506.jpeg",
    category: "Balance",
    difficulty: "Intermediate",
    instructions: [
      "Start with static balance",
      "Progress to dynamic movements",
      "Add unstable surfaces",
      "Incorporate directional changes",
      "Challenge visual systems"
    ],
    muscleGroups: ["Stabilizers", "Core", "Lower Body", "Proprioceptive System"],
    duration: "45 minutes",
    equipment: [
      "Balance board",
      "BOSU ball",
      "Stability cushions",
      "Resistance bands",
      "Exercise mat"
    ],
    benefits: [
      "Improves balance and stability",
      "Enhances proprioception",
      "Reduces fall risk",
      "Strengthens stabilizer muscles",
      "Develops body awareness"
    ],
    tips: [
      "Start with basics",
      "Progress gradually",
      "Stay focused",
      "Maintain proper posture"
    ],
    calories: "200-300 kcal",
    sets: "3-4 per exercise",
    reps: "30-45 seconds per position",
    restTime: "30-45 seconds between exercises"
  },
  {
    id: 51,
    title: "Functional Mobility Flow",
    description: "Comprehensive mobility routine combining dynamic stretching, joint mobilization, and movement patterns for improved range of motion and functional flexibility.",
    imageUrl: "https://images.pexels.com/photos/4162507/pexels-photo-4162507.jpeg",
    category: "Mobility",
    difficulty: "Intermediate",
    instructions: [
      "Begin with joint circles",
      "Progress to dynamic stretches",
      "Include movement patterns",
      "Focus on problem areas",
      "End with controlled movements"
    ],
    muscleGroups: ["Full Body", "Joint Systems", "Connective Tissue", "Movement Chains"],
    duration: "50 minutes",
    equipment: [
      "Foam roller",
      "Mobility bands",
      "Yoga mat",
      "Lacrosse ball",
      "Mobility stick"
    ],
    benefits: [
      "Improves joint mobility",
      "Enhances movement quality",
      "Reduces movement restrictions",
      "Prevents injuries",
      "Optimizes performance"
    ],
    tips: [
      "Move with control",
      "Breathe deeply",
      "Stay within comfort zone",
      "Be consistent"
    ],
    calories: "200-300 kcal",
    sets: "2-3 rounds",
    reps: "8-10 reps per movement",
    restTime: "Minimal between movements"
  },
  {
    id: 52,
    title: "Athletic Power Development",
    description: "Advanced power training program focusing on explosive movements and athletic performance enhancement through varied training modalities.",
    imageUrl: "https://images.pexels.com/photos/4162508/pexels-photo-4162508.jpeg",
    category: "Power",
    difficulty: "Advanced",
    instructions: [
      "Complete thorough warm-up",
      "Focus on explosive movements",
      "Maintain perfect form",
      "Progress intensity gradually",
      "Include proper recovery"
    ],
    muscleGroups: ["Full Body", "Fast-Twitch Fibers", "Power Systems", "Core"],
    duration: "75 minutes",
    equipment: [
      "Plyo boxes",
      "Medicine balls",
      "Kettlebells",
      "Resistance bands",
      "Olympic platform"
    ],
    benefits: [
      "Develops explosive power",
      "Improves athletic performance",
      "Enhances speed and agility",
      "Builds functional strength",
      "Increases power output"
    ],
    tips: [
      "Focus on quality movements",
      "Rest adequately between sets",
      "Stay explosive throughout",
      "Monitor fatigue levels"
    ],
    calories: "500-700 kcal",
    sets: "4-5 per exercise",
    reps: "3-5 explosive reps",
    restTime: "2-3 minutes between sets"
  },
  {
    id: 53,
    title: "Mindful Movement Practice",
    description: "Integrative mind-body workout combining gentle movement, breath awareness, and mindfulness techniques for improved body awareness and stress reduction.",
    imageUrl: "https://images.pexels.com/photos/4162509/pexels-photo-4162509.jpeg",
    category: "Mind-Body",
    difficulty: "Beginner",
    instructions: [
      "Begin with breath awareness",
      "Add gentle movements",
      "Focus on mind-body connection",
      "Practice mindful transitions",
      "Include meditation periods"
    ],
    muscleGroups: ["Full Body", "Core", "Stabilizers", "Nervous System"],
    duration: "45 minutes",
    equipment: [
      "Yoga mat",
      "Meditation cushion",
      "Blanket",
      "Soft lighting"
    ],
    benefits: [
      "Reduces stress",
      "Improves body awareness",
      "Enhances mental clarity",
      "Promotes relaxation",
      "Develops mindfulness"
    ],
    tips: [
      "Stay present",
      "Focus on breath",
      "Move with awareness",
      "Honor your limits"
    ],
    calories: "150-200 kcal",
    sets: "Continuous practice",
    reps: "Flow-based movements",
    restTime: "As needed for mindfulness"
  },
  {
    id: 54,
    title: "Sports Performance Circuit",
    description: "High-intensity circuit training designed specifically for athletes, combining sport-specific movements with conditioning to enhance athletic performance.",
    imageUrl: "https://images.pexels.com/photos/4162510/pexels-photo-4162510.jpeg",
    category: "Sports",
    difficulty: "Advanced",
    instructions: [
      "Complete dynamic warm-up",
      "Rotate through stations",
      "Maintain intensity",
      "Focus on sport-specific movements",
      "Include active recovery"
    ],
    muscleGroups: ["Full Body", "Sport-Specific Muscles", "Core", "Power Systems"],
    duration: "70 minutes",
    equipment: [
      "Agility ladder",
      "Resistance bands",
      "Medicine balls",
      "Cones",
      "Speed hurdles"
    ],
    benefits: [
      "Enhances athletic performance",
      "Improves sport-specific skills",
      "Builds conditioning",
      "Increases power output",
      "Develops agility"
    ],
    tips: [
      "Maintain proper form",
      "Scale intensity as needed",
      "Stay explosive",
      "Focus on quality"
    ],
    calories: "500-700 kcal",
    sets: 4,
    reps: "30-45 seconds per station",
    restTime: "15 seconds between stations"
  },
  {
    id: 55,
    title: "Advanced Core Integration",
    description: "Comprehensive core training program that focuses on all aspects of core function including stabilization, rotation, anti-rotation, and dynamic movement patterns.",
    imageUrl: "https://images.pexels.com/photos/4162511/pexels-photo-4162511.jpeg",
    category: "Core",
    difficulty: "Advanced",
    instructions: [
      "Begin with core activation",
      "Progress through movement planes",
      "Include rotational elements",
      "Challenge stability",
      "Integrate dynamic movements"
    ],
    muscleGroups: [
      "Core",
      "Obliques",
      "Lower Back",
      "Deep Stabilizers",
      "Hip Complex"
    ],
    duration: "55 minutes",
    equipment: [
      "Stability ball",
      "Medicine ball",
      "Cable machine",
      "TRX",
      "Balance board"
    ],
    benefits: [
      "Enhances core stability",
      "Improves rotational power",
      "Develops functional strength",
      "Prevents back pain",
      "Increases athletic performance"
    ],
    tips: [
      "Maintain neutral spine",
      "Control breathing",
      "Focus on quality",
      "Progress systematically"
    ],
    calories: "350-450 kcal",
    sets: 4,
    reps: "12-15 or 30-45 seconds",
    restTime: "45-60 seconds between sets"
  },
  {
    id: 56,
    title: "Endurance Training Complex",
    description: "Advanced endurance-focused workout combining cardiovascular conditioning, stamina building, and metabolic enhancement through varied training modalities.",
    imageUrl: "https://images.pexels.com/photos/4162512/pexels-photo-4162512.jpeg",
    category: "Cardio",
    difficulty: "Advanced",
    instructions: [
      "Start with dynamic warm-up",
      "Build intensity progressively",
      "Maintain steady state periods",
      "Include interval bursts",
      "Cool down properly"
    ],
    muscleGroups: [
      "Cardiovascular System",
      "Full Body",
      "Aerobic System",
      "Muscular Endurance"
    ],
    duration: "90 minutes",
    equipment: [
      "Treadmill",
      "Rowing machine",
      "Bike",
      "Jump rope",
      "Step platform"
    ],
    benefits: [
      "Improves cardiovascular fitness",
      "Increases endurance capacity",
      "Enhances recovery ability",
      "Boosts metabolic rate",
      "Develops mental toughness"
    ],
    tips: [
      "Pace yourself appropriately",
      "Stay hydrated",
      "Monitor heart rate",
      "Listen to your body"
    ],
    calories: "700-900 kcal",
    sets: "Multiple intervals",
    reps: "Time-based intervals",
    restTime: "Active recovery periods"
  },
  {
    id: 57,
    title: "Functional Strength Integration",
    description: "Comprehensive functional training program combining compound movements, stability work, and practical strength development for real-world application.",
    imageUrl: "https://images.pexels.com/photos/4162513/pexels-photo-4162513.jpeg",
    category: "Strength",
    difficulty: "Intermediate",
    instructions: [
      "Begin with movement prep",
      "Focus on compound exercises",
      "Incorporate stability work",
      "Progress movement complexity",
      "Include functional patterns"
    ],
    muscleGroups: [
      "Full Body",
      "Core Integration",
      "Movement Chains",
      "Stabilizer Systems"
    ],
    duration: "65 minutes",
    equipment: [
      "Kettlebells",
      "Dumbbells",
      "Resistance bands",
      "Suspension trainer",
      "Medicine balls"
    ],
    benefits: [
      "Improves functional strength",
      "Enhances movement quality",
      "Develops practical fitness",
      "Increases work capacity",
      "Builds real-world strength"
    ],
    tips: [
      "Focus on form",
      "Progress gradually",
      "Maintain control",
      "Think movement patterns"
    ],
    calories: "400-600 kcal",
    sets: "3-4 per exercise",
    reps: "8-12 per movement",
    restTime: "60-90 seconds between sets"
  },
  {
    id: 58,
    title: "Combat Conditioning Circuit",
    description: "High-intensity combat sports conditioning workout combining striking, footwork, and athletic movements for improved fighting performance and overall fitness.",
    imageUrl: "https://images.pexels.com/photos/4162514/pexels-photo-4162514.jpeg",
    category: "Combat",
    difficulty: "Advanced",
    instructions: [
      "Complete thorough warm-up",
      "Practice technique drills",
      "Incorporate combination work",
      "Add conditioning elements",
      "Include defensive movements"
    ],
    muscleGroups: [
      "Full Body",
      "Core",
      "Fast-Twitch Fibers",
      "Stabilizers",
      "Combat Muscles"
    ],
    duration: "75 minutes",
    equipment: [
      "Heavy bag",
      "Focus mitts",
      "Jump rope",
      "Timer",
      "Hand wraps"
    ],
    benefits: [
      "Improves fighting skills",
      "Enhances conditioning",
      "Develops power",
      "Builds endurance",
      "Increases agility"
    ],
    tips: [
      "Maintain proper form",
      "Stay light on feet",
      "Control breathing",
      "Keep hands up"
    ],
    calories: "600-800 kcal",
    sets: "5-6 rounds",
    reps: "3 minutes per round",
    restTime: "1 minute between rounds"
  },
  {
    id: 59,
    title: "Olympic Lifting Technique",
    description: "Technical Olympic weightlifting session focusing on the clean and jerk and snatch movements, emphasizing proper form and progressive loading.",
    imageUrl: "https://images.pexels.com/photos/4162515/pexels-photo-4162515.jpeg",
    category: "Strength",
    difficulty: "Advanced",
    instructions: [
      "Perform mobility work",
      "Practice technique with PVC",
      "Progress to empty bar",
      "Add weight gradually",
      "Focus on position work"
    ],
    muscleGroups: [
      "Full Body",
      "Posterior Chain",
      "Triple Extension",
      "Core",
      "Shoulder Complex"
    ],
    duration: "90 minutes",
    equipment: [
      "Olympic barbell",
      "Bumper plates",
      "Platform",
      "Weightlifting shoes",
      "Lifting belt"
    ],
    benefits: [
      "Develops explosive power",
      "Improves technique",
      "Builds strength",
      "Enhances coordination",
      "Increases power output"
    ],
    tips: [
      "Focus on technique first",
      "Stay patient with progress",
      "Keep core engaged",
      "Maintain positions"
    ],
    calories: "400-600 kcal",
    sets: "5-6 per movement",
    reps: "2-3 per set",
    restTime: "2-3 minutes between sets"
  },
  {
    id: 60,
    title: "Advanced Gymnastics Skills",
    description: "Progressive gymnastics training focusing on advanced body control, strength elements, and skill development for improved gymnastic ability.",
    imageUrl: "https://images.pexels.com/photos/4162516/pexels-photo-4162516.jpeg",
    category: "Gymnastics",
    difficulty: "Advanced",
    instructions: [
      "Complete thorough warm-up",
      "Practice basic positions",
      "Work skill progressions",
      "Include strength elements",
      "End with flexibility work"
    ],
    muscleGroups: [
      "Full Body",
      "Core",
      "Upper Body",
      "Shoulder Girdle",
      "Straight Arm Strength"
    ],
    duration: "120 minutes",
    equipment: [
      "Gymnastics rings",
      "Parallel bars",
      "Floor space",
      "Mats",
      "Resistance bands"
    ],
    benefits: [
      "Develops body control",
      "Improves strength",
      "Enhances flexibility",
      "Builds spatial awareness",
      "Increases body tension"
    ],
    tips: [
      "Master basics first",
      "Progress systematically",
      "Focus on alignment",
      "Build strength gradually"
    ],
    calories: "500-700 kcal",
    sets: "4-5 per skill",
    reps: "3-5 per set",
    restTime: "2-3 minutes between sets"
  },
  {
    id: 61,
    title: "Advanced Yoga Flow",
    description: "Dynamic and challenging yoga sequence incorporating advanced asanas, transitions, and inversions for experienced practitioners.",
    imageUrl: "https://images.pexels.com/photos/4162517/pexels-photo-4162517.jpeg",
    category: "Yoga",
    difficulty: "Advanced",
    instructions: [
      "Begin with meditation",
      "Warm up with Sun Salutations",
      "Progress to advanced poses",
      "Practice inversions",
      "End with deep stretching"
    ],
    muscleGroups: [
      "Full Body",
      "Core",
      "Balance Systems",
      "Deep Stabilizers",
      "Flexibility Chain"
    ],
    duration: "90 minutes",
    equipment: [
      "Yoga mat",
      "Blocks",
      "Straps",
      "Bolster",
      "Blankets"
    ],
    benefits: [
      "Deepens practice",
      "Improves flexibility",
      "Builds strength",
      "Enhances balance",
      "Develops mindfulness"
    ],
    tips: [
      "Listen to your body",
      "Breathe consciously",
      "Stay focused",
      "Practice regularly"
    ],
    calories: "350-450 kcal",
    sets: "Full sequence",
    reps: "Hold poses 30-60 seconds",
    restTime: "Child's pose as needed"
  },
  {
    id: 62,
    title: "Speed and Agility Development",
    description: "Comprehensive training program focusing on improving acceleration, top-end speed, change of direction, and reactive agility.",
    imageUrl: "https://images.pexels.com/photos/4162518/pexels-photo-4162518.jpeg",
    category: "Athletic",
    difficulty: "Advanced",
    instructions: [
      "Complete dynamic warm-up",
      "Practice acceleration drills",
      "Work on directional changes",
      "Include reactive elements",
      "Focus on technique quality"
    ],
    muscleGroups: [
      "Lower Body",
      "Core",
      "Fast-Twitch Fibers",
      "Stabilizers",
      "Movement Systems"
    ],
    duration: "75 minutes",
    equipment: [
      "Agility ladder",
      "Speed cones",
      "Resistance bands",
      "Hurdles",
      "Timing gates"
    ],
    benefits: [
      "Improves acceleration",
      "Enhances top speed",
      "Develops agility",
      "Increases reaction time",
      "Builds explosive power"
    ],
    tips: [
      "Focus on quick feet",
      "Stay light and balanced",
      "Maintain proper form",
      "Progress gradually"
    ],
    calories: "500-700 kcal",
    sets: "4-6 per drill",
    reps: "3-5 per set",
    restTime: "Full recovery (1-2 minutes)"
  },
  {
    id: 63,
    title: "Advanced Mobility Flow",
    description: "Comprehensive mobility training combining dynamic movement patterns, joint preparation, and advanced mobility techniques for optimal movement quality.",
    imageUrl: "https://images.pexels.com/photos/4162519/pexels-photo-4162519.jpeg",
    category: "Mobility",
    difficulty: "Advanced",
    instructions: [
      "Begin with joint preparation",
      "Progress through movement patterns",
      "Add dynamic elements",
      "Include controlled elements",
      "End with integration work"
    ],
    muscleGroups: [
      "Full Body",
      "Joint Systems",
      "Fascial Lines",
      "Movement Chains",
      "Deep Stabilizers"
    ],
    duration: "60 minutes",
    equipment: [
      "Mobility tools",
      "Resistance bands",
      "Foam roller",
      "Movement props",
      "Yoga blocks"
    ],
    benefits: [
      "Improves movement quality",
      "Enhances joint health",
      "Develops body control",
      "Reduces movement restrictions",
      "Increases functional range"
    ],
    tips: [
      "Move with control",
      "Focus on quality",
      "Breathe deeply",
      "Progress gradually"
    ],
    calories: "300-400 kcal",
    sets: "3-4 flows",
    reps: "5-8 minutes per flow",
    restTime: "1-2 minutes between flows"
  },
  {
    id: 64,
    title: "Power Endurance Complex",
    description: "High-intensity workout combining power movements with endurance elements to build both explosive strength and stamina.",
    imageUrl: "https://images.pexels.com/photos/4162520/pexels-photo-4162520.jpeg",
    category: "Power",
    difficulty: "Advanced",
    instructions: [
      "Complete thorough warm-up",
      "Start with power movements",
      "Add endurance elements",
      "Maintain movement quality",
      "Include active recovery"
    ],
    muscleGroups: [
      "Full Body",
      "Power Systems",
      "Cardiovascular System",
      "Fast-Twitch Fibers",
      "Core"
    ],
    duration: "75 minutes",
    equipment: [
      "Kettlebells",
      "Plyo boxes",
      "Battle ropes",
      "Medicine balls",
      "Rowing machine"
    ],
    benefits: [
      "Builds power endurance",
      "Improves work capacity",
      "Develops explosiveness",
      "Enhances conditioning",
      "Increases metabolic rate"
    ],
    tips: [
      "Quality over quantity",
      "Scale as needed",
      "Stay hydrated",
      "Monitor intensity"
    ],
    calories: "600-800 kcal",
    sets: "5-6 rounds",
    reps: "45-60 seconds work",
    restTime: "30-45 seconds between exercises"
  },
  {
    id: 65,
    title: "Advanced Plyometric Training",
    description: "High-intensity plyometric workout focusing on explosive power, reactive strength, and athletic performance through advanced jumping and bounding exercises.",
    imageUrl: "https://images.pexels.com/photos/4162521/pexels-photo-4162521.jpeg",
    category: "Plyometrics",
    difficulty: "Advanced",
    instructions: [
      "Complete thorough dynamic warm-up",
      "Start with basic jumps",
      "Progress to complex movements",
      "Focus on landing mechanics",
      "Include reactive drills"
    ],
    muscleGroups: [
      "Lower Body",
      "Fast-Twitch Fibers",
      "Core",
      "Stabilizers",
      "Power Systems"
    ],
    duration: "60 minutes",
    equipment: [
      "Plyo boxes",
      "Hurdles",
      "Medicine balls",
      "Shock-absorbing mat",
      "Resistance bands"
    ],
    benefits: [
      "Develops explosive power",
      "Improves reactive strength",
      "Enhances athletic performance",
      "Increases vertical jump",
      "Builds speed-strength"
    ],
    tips: [
      "Land softly",
      "Quality over quantity",
      "Full recovery between sets",
      "Progress gradually"
    ],
    calories: "500-700 kcal",
    sets: "4-5 per exercise",
    reps: "6-8 per set",
    restTime: "2-3 minutes between sets"
  },
  {
    id: 66,
    title: "Advanced Kettlebell Complex",
    description: "Challenging kettlebell workout combining strength, power, and endurance movements into complex chains for full-body conditioning.",
    imageUrl: "https://images.pexels.com/photos/4162522/pexels-photo-4162522.jpeg",
    category: "Strength",
    difficulty: "Advanced",
    instructions: [
      "Begin with joint mobility",
      "Master individual movements first",
      "Link exercises together",
      "Maintain proper form",
      "Progress weight gradually"
    ],
    muscleGroups: [
      "Full Body",
      "Core",
      "Posterior Chain",
      "Grip Strength",
      "Power Systems"
    ],
    duration: "65 minutes",
    equipment: [
      "Multiple kettlebells",
      "Exercise mat",
      "Timer",
      "Chalk",
      "Heart rate monitor"
    ],
    benefits: [
      "Builds functional strength",
      "Improves power output",
      "Enhances work capacity",
      "Develops coordination",
      "Increases metabolic rate"
    ],
    tips: [
      "Focus on technique",
      "Start light and progress",
      "Keep core engaged",
      "Control breathing"
    ],
    calories: "500-700 kcal",
    sets: "4-5 complexes",
    reps: "6-8 per movement",
    restTime: "90-120 seconds between complexes"
  },
  {
    id: 67,
    title: "Advanced Bodyweight Mastery",
    description: "Complex bodyweight training program focusing on advanced calisthenics skills, strength elements, and movement control for complete body mastery.",
    imageUrl: "https://images.pexels.com/photos/4162523/pexels-photo-4162523.jpeg",
    category: "Calisthenics",
    difficulty: "Advanced",
    instructions: [
      "Begin with joint mobility warm-up",
      "Practice skill progressions",
      "Perform strength elements",
      "Include hold positions",
      "End with flexibility work"
    ],
    muscleGroups: [
      "Full Body",
      "Core",
      "Upper Body",
      "Straight Arm Strength",
      "Stabilizers"
    ],
    duration: "90 minutes",
    equipment: [
      "Pull-up bar",
      "Parallel bars",
      "Gymnastics rings",
      "Floor space",
      "Resistance bands"
    ],
    benefits: [
      "Develops body control",
      "Builds relative strength",
      "Improves proprioception",
      "Enhances mobility",
      "Increases body awareness"
    ],
    tips: [
      "Master basics before progression",
      "Focus on form and control",
      "Practice consistently",
      "Be patient with skill development"
    ],
    calories: "400-500 kcal",
    sets: "4-5 per skill",
    reps: "5-8 per exercise",
    restTime: "2-3 minutes between sets"
  },
  {
    id: 68,
    title: "Advanced HIIT Protocol",
    description: "High-intensity interval training program combining complex movements, metabolic conditioning, and advanced exercise variations for maximum fitness gains.",
    imageUrl: "https://images.pexels.com/photos/4162524/pexels-photo-4162524.jpeg",
    category: "HIIT",
    difficulty: "Advanced",
    instructions: [
      "Complete dynamic warm-up",
      "Start with skill review",
      "Perform intense intervals",
      "Maintain work-rest ratio",
      "Include active recovery"
    ],
    muscleGroups: [
      "Full Body",
      "Cardiovascular System",
      "Power Systems",
      "Core",
      "Major Muscle Groups"
    ],
    duration: "45 minutes",
    equipment: [
      "Kettlebells",
      "Battle ropes",
      "Plyo box",
      "Medicine balls",
      "Rowing machine"
    ],
    benefits: [
      "Maximizes calorie burn",
      "Improves conditioning",
      "Builds work capacity",
      "Enhances recovery ability",
      "Increases metabolic rate"
    ],
    tips: [
      "Maintain intensity",
      "Focus on form",
      "Scale as needed",
      "Stay hydrated"
    ],
    calories: "500-700 kcal",
    sets: "6-8 rounds",
    reps: "30 seconds work/15 seconds rest",
    restTime: "1 minute between rounds"
  },
  {
    id: 69,
    title: "Advanced Movement Flow",
    description: "Complex movement training combining elements of dance, martial arts, and gymnastics for improved coordination, agility, and body control.",
    imageUrl: "https://images.pexels.com/photos/4162525/pexels-photo-4162525.jpeg",
    category: "Movement",
    difficulty: "Advanced",
    instructions: [
      "Begin with mobility work",
      "Practice basic patterns",
      "Link movements together",
      "Add dynamic elements",
      "Flow between transitions"
    ],
    muscleGroups: [
      "Full Body",
      "Core",
      "Movement Chains",
      "Stabilizers",
      "Coordination Systems"
    ],
    duration: "75 minutes",
    equipment: [
      "Open floor space",
      "Exercise mat",
      "Movement props",
      "Balance tools",
      "Light weights"
    ],
    benefits: [
      "Improves coordination",
      "Enhances body control",
      "Develops fluidity",
      "Builds movement vocabulary",
      "Increases spatial awareness"
    ],
    tips: [
      "Focus on smooth transitions",
      "Stay mindful",
      "Explore movement",
      "Practice regularly"
    ],
    calories: "300-500 kcal",
    sets: "3-4 flow sequences",
    reps: "8-10 minutes per sequence",
    restTime: "2 minutes between sequences"
  },
  {
    id: 70,
    title: "Advanced Strength Conditioning",
    description: "Comprehensive strength training program combining compound lifts, accessory work, and conditioning elements for complete physical development.",
    imageUrl: "https://images.pexels.com/photos/4162526/pexels-photo-4162526.jpeg",
    category: "Strength",
    difficulty: "Advanced",
    instructions: [
      "Complete thorough warm-up",
      "Start with compound lifts",
      "Add accessory movements",
      "Include conditioning work",
      "Focus on proper recovery"
    ],
    muscleGroups: [
      "Full Body",
      "Major Muscle Groups",
      "Core",
      "Stabilizers",
      "Power Systems"
    ],
    duration: "90 minutes",
    equipment: [
      "Barbell and plates",
      "Dumbbells",
      "Power rack",
      "Bench",
      "Cable machine"
    ],
    benefits: [
      "Builds overall strength",
      "Improves muscle mass",
      "Enhances work capacity",
      "Develops power output",
      "Increases functional fitness"
    ],
    tips: [
      "Focus on form",
      "Progress systematically",
      "Track your numbers",
      "Prioritize recovery"
    ],
    calories: "600-800 kcal",
    sets: "4-5 per exercise",
    reps: "5-8 for compounds, 8-12 for accessories",
    restTime: "2-3 minutes for compounds, 60-90 seconds for accessories"
  },
  {
    id: 71,
    title: "Sport-Specific Agility",
    description: "Advanced agility training program designed to enhance sport-specific movement patterns, reaction time, and directional changes for athletic performance.",
    imageUrl: "https://images.pexels.com/photos/4162527/pexels-photo-4162527.jpeg",
    category: "Athletic",
    difficulty: "Advanced",
    instructions: [
      "Complete dynamic warm-up",
      "Practice fundamental patterns",
      "Add reactive elements",
      "Incorporate sport specificity",
      "Include speed work"
    ],
    muscleGroups: [
      "Lower Body",
      "Core",
      "Fast-Twitch Fibers",
      "Stabilizers",
      "Movement Systems"
    ],
    duration: "60 minutes",
    equipment: [
      "Agility ladder",
      "Cones",
      "Speed hurdles",
      "Reaction balls",
      "Resistance bands"
    ],
    benefits: [
      "Improves change of direction",
      "Enhances reaction time",
      "Develops sport-specific agility",
      "Increases foot speed",
      "Builds athletic performance"
    ],
    tips: [
      "Focus on quick feet",
      "Stay light and balanced",
      "Maintain proper form",
      "Progress gradually"
    ],
    calories: "400-600 kcal",
    sets: "6-8 drills",
    reps: "45-60 seconds per drill",
    restTime: "30-45 seconds between drills"
  },
  {
    id: 72,
    title: "Advanced Circuit Training",
    description: "High-intensity circuit training program combining strength, power, and endurance exercises for comprehensive fitness development.",
    imageUrl: "https://images.pexels.com/photos/4162528/pexels-photo-4162528.jpeg",
    category: "Circuit",
    difficulty: "Advanced",
    instructions: [
      "Complete thorough warm-up",
      "Review exercise technique",
      "Rotate through stations",
      "Maintain work intensity",
      "Include active recovery"
    ],
    muscleGroups: [
      "Full Body",
      "Major Muscle Groups",
      "Core",
      "Cardiovascular System",
      "Power Systems"
    ],
    duration: "60 minutes",
    equipment: [
      "Dumbbells",
      "Kettlebells",
      "Resistance bands",
      "Medicine balls",
      "Bodyweight stations"
    ],
    benefits: [
      "Improves overall fitness",
      "Enhances work capacity",
      "Builds strength endurance",
      "Increases metabolic rate",
      "Develops cardiovascular fitness"
    ],
    tips: [
      "Pace yourself",
      "Maintain form",
      "Scale as needed",
      "Stay hydrated"
    ],
    calories: "500-700 kcal",
    sets: "3-4 circuits",
    reps: "45 seconds per station",
    restTime: "15 seconds between stations, 2 minutes between circuits"
  },
  {
    id: 73,
    title: "Advanced Flexibility Training",
    description: "Comprehensive flexibility program combining dynamic and static stretching, mobility work, and advanced stretching techniques for improved range of motion.",
    imageUrl: "https://images.pexels.com/photos/4162529/pexels-photo-4162529.jpeg",
    category: "Flexibility",
    difficulty: "Advanced",
    instructions: [
      "Begin with light cardio",
      "Progress to dynamic stretches",
      "Include PNF techniques",
      "Add isometric holds",
      "End with static stretches"
    ],
    muscleGroups: [
      "Full Body",
      "Joint Systems",
      "Muscle Groups",
      "Connective Tissue",
      "Movement Chains"
    ],
    duration: "75 minutes",
    equipment: [
      "Yoga mat",
      "Resistance bands",
      "Foam roller",
      "Stretching straps",
      "Mobility tools"
    ],
    benefits: [
      "Increases flexibility",
      "Improves joint mobility",
      "Enhances movement quality",
      "Reduces injury risk",
      "Promotes recovery"
    ],
    tips: [
      "Never force stretches",
      "Breathe deeply",
      "Stay within limits",
      "Be consistent"
    ],
    calories: "200-300 kcal",
    sets: "2-3 per stretch",
    reps: "Hold 30-60 seconds",
    restTime: "15-30 seconds between stretches"
  },
  {
    id: 74,
    title: "Advanced Olympic Lifting",
    description: "Technical Olympic weightlifting program focusing on the snatch and clean & jerk, including progressions and technique refinement for advanced lifters.",
    imageUrl: "https://images.pexels.com/photos/4162530/pexels-photo-4162530.jpeg",
    category: "Olympic Lifting",
    difficulty: "Advanced",
    instructions: [
      "Complete mobility preparation",
      "Practice position drills",
      "Work on technique refinement",
      "Build to working weights",
      "Include accessory work"
    ],
    muscleGroups: [
      "Full Body",
      "Posterior Chain",
      "Power Systems",
      "Core",
      "Olympic Movement Patterns"
    ],
    duration: "120 minutes",
    equipment: [
      "Olympic barbell",
      "Bumper plates",
      "Lifting platform",
      "Weightlifting shoes",
      "Lifting blocks"
    ],
    benefits: [
      "Develops explosive power",
      "Improves technique mastery",
      "Enhances athletic performance",
      "Builds overall strength",
      "Increases power output"
    ],
    tips: [
      "Focus on technique",
      "Progress methodically",
      "Stay patient",
      "Maintain mobility"
    ],
    calories: "500-700 kcal",
    sets: "5-8 per movement",
    reps: "1-3 per set",
    restTime: "2-3 minutes between sets"
  },
  {
    id: 75,
    title: "Advanced Gymnastics Strength",
    description: "Advanced bodyweight strength training program incorporating gymnastics elements, holds, and progressions for superior body control and strength.",
    imageUrl: "https://images.pexels.com/photos/4162531/pexels-photo-4162531.jpeg",
    category: "Gymnastics",
    difficulty: "Advanced",
    instructions: [
      "Complete joint preparation",
      "Practice basic holds",
      "Progress to dynamic movements",
      "Work on skill elements",
      "Include strength work"
    ],
    muscleGroups: [
      "Full Body",
      "Core",
      "Upper Body",
      "Stabilizers",
      "Straight Arm Strength"
    ],
    duration: "90 minutes",
    equipment: [
      "Gymnastics rings",
      "Parallel bars",
      "Pull-up bar",
      "Floor mat",
      "Resistance bands"
    ],
    benefits: [
      "Builds body control",
      "Improves strength-to-weight ratio",
      "Develops straight arm strength",
      "Enhances body awareness",
      "Increases overall strength"
    ],
    tips: [
      "Master basics first",
      "Progress gradually",
      "Focus on alignment",
      "Build time under tension"
    ],
    calories: "400-600 kcal",
    sets: "4-6 per element",
    reps: "5-8 or hold 20-45 seconds",
    restTime: "90-120 seconds between sets"
  },
  {
    id: 76,
    title: "Advanced Endurance Training",
    description: "Comprehensive endurance program combining various cardio modalities, threshold training, and stamina development for peak endurance performance.",
    imageUrl: "https://images.pexels.com/photos/4162532/pexels-photo-4162532.jpeg",
    category: "Endurance",
    difficulty: "Advanced",
    instructions: [
      "Begin with dynamic warm-up",
      "Build base intensity",
      "Include threshold intervals",
      "Add tempo sections",
      "Cool down properly"
    ],
    muscleGroups: [
      "Cardiovascular System",
      "Slow-Twitch Fibers",
      "Core",
      "Lower Body",
      "Respiratory System"
    ],
    duration: "120-180 minutes",
    equipment: [
      "Heart rate monitor",
      "Bike trainer",
      "Treadmill",
      "Rowing machine",
      "Hydration system"
    ],
    benefits: [
      "Improves aerobic capacity",
      "Builds endurance base",
      "Enhances recovery ability",
      "Develops mental toughness",
      "Increases stamina"
    ],
    tips: [
      "Pace appropriately",
      "Stay well hydrated",
      "Monitor heart rate",
      "Build progressively"
    ],
    calories: "800-1200 kcal",
    sets: "Various intervals",
    reps: "Time/distance based",
    restTime: "Active recovery periods"
  },
  {
    id: 77,
    title: "Advanced Power Development",
    description: "Specialized power training program incorporating plyometrics, ballistics, and explosive movements for maximum power output development.",
    imageUrl: "https://images.pexels.com/photos/4162533/pexels-photo-4162533.jpeg",
    category: "Power",
    difficulty: "Advanced",
    instructions: [
      "Complete thorough warm-up",
      "Practice technique drills",
      "Build explosive power",
      "Include reactive work",
      "Proper cool-down"
    ],
    muscleGroups: [
      "Fast-Twitch Fibers",
      "Power Systems",
      "Lower Body",
      "Core",
      "Neural Drive"
    ],
    duration: "75 minutes",
    equipment: [
      "Plyo boxes",
      "Medicine balls",
      "Resistance bands",
      "Safety mats",
      "Weighted vests"
    ],
    benefits: [
      "Increases power output",
      "Improves rate of force development",
      "Enhances athletic performance",
      "Develops explosive strength",
      "Builds reactive ability"
    ],
    tips: [
      "Quality over quantity",
      "Full recovery between sets",
      "Perfect technique first",
      "Progress systematically"
    ],
    calories: "400-600 kcal",
    sets: "4-6 per movement",
    reps: "3-8 per set",
    restTime: "2-3 minutes between sets"
  },
  {
    id: 78,
    title: "Advanced Martial Arts Conditioning",
    description: "Specialized conditioning program designed for martial artists, combining combat sports specific drills, power development, and endurance work.",
    imageUrl: "https://images.pexels.com/photos/4162534/pexels-photo-4162534.jpeg",
    category: "Combat",
    difficulty: "Advanced",
    instructions: [
      "Complete mobility warm-up",
      "Practice technique drills",
      "Include combination work",
      "Add power elements",
      "Finish with conditioning"
    ],
    muscleGroups: [
      "Full Body",
      "Core",
      "Fast-Twitch Fibers",
      "Stabilizers",
      "Combat Systems"
    ],
    duration: "90 minutes",
    equipment: [
      "Heavy bag",
      "Focus mitts",
      "Jump rope",
      "Medicine ball",
      "Resistance bands"
    ],
    benefits: [
      "Improves combat fitness",
      "Enhances striking power",
      "Builds functional strength",
      "Increases endurance",
      "Develops coordination"
    ],
    tips: [
      "Focus on technique",
      "Build combinations",
      "Stay balanced",
      "Control breathing"
    ],
    calories: "600-800 kcal",
    sets: "5-7 rounds",
    reps: "3-5 minutes per round",
    restTime: "1 minute between rounds"
  },
  {
    id: 79,
    title: "Advanced Mobility Flow",
    description: "Comprehensive mobility program combining dynamic movement patterns, joint preparation, and advanced mobility techniques for optimal movement quality.",
    imageUrl: "https://images.pexels.com/photos/4162535/pexels-photo-4162535.jpeg",
    category: "Mobility",
    difficulty: "Advanced",
    instructions: [
      "Begin with joint preparation",
      "Progress through movement patterns",
      "Add dynamic elements",
      "Include controlled elements",
      "End with integration work"
    ],
    muscleGroups: [
      "Full Body",
      "Joint Systems",
      "Movement Chains",
      "Fascial System",
      "Stabilizers"
    ],
    duration: "60 minutes",
    equipment: [
      "Mobility tools",
      "Resistance bands",
      "Foam roller",
      "Movement props",
      "Yoga blocks"
    ],
    benefits: [
      "Improves movement quality",
      "Enhances joint health",
      "Develops body control",
      "Reduces movement restrictions",
      "Increases functional range"
    ],
    tips: [
      "Move with control",
      "Focus on quality",
      "Stay within limits",
      "Practice regularly"
    ],
    calories: "200-300 kcal",
    sets: "3-4 flows",
    reps: "8-10 minutes per flow",
    restTime: "1-2 minutes between flows"
  },
  {
    id: 80,
    title: "Advanced Athletic Performance",
    description: "Elite-level athletic performance training combining speed, agility, power, and sport-specific conditioning for peak athletic development.",
    imageUrl: "https://images.pexels.com/photos/4162536/pexels-photo-4162536.jpeg",
    category: "Athletic",
    difficulty: "Advanced",
    instructions: [
      "Complete dynamic preparation",
      "Practice movement skills",
      "Build athletic qualities",
      "Include sport specificity",
      "End with conditioning"
    ],
    muscleGroups: [
      "Full Body",
      "Power Systems",
      "Speed-Strength",
      "Core",
      "Energy Systems"
    ],
    duration: "90 minutes",
    equipment: [
      "Speed ladder",
      "Resistance equipment",
      "Plyo boxes",
      "Timing system",
      "Sport implements"
    ],
    benefits: [
      "Enhances athletic performance",
      "Improves sport-specific skills",
      "Develops power and speed",
      "Increases work capacity",
      "Builds overall athleticism"
    ],
    tips: [
      "Focus on quality",
      "Train with purpose",
      "Maintain intensity",
      "Recovery is key"
    ],
    calories: "600-800 kcal",
    sets: "Multiple complexes",
    reps: "Varies by drill",
    restTime: "Work-to-rest ratio based on intensity"
  }
];

export default allExercises;
