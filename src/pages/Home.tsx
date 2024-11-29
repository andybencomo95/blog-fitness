import { useState, useMemo, useCallback, Suspense, lazy } from 'react';
import { allExercises } from '../data/exercises';
import Pagination from '../components/Pagination';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiVite, SiReactrouter } from 'react-icons/si';

// Lazy load the ExerciseCard component
const ExerciseCard = lazy(() => import('../components/ExerciseCard'));

const EXERCISES_PER_PAGE = 12;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Memoize filtered exercises
  const filteredExercises = useMemo(() => {
    return allExercises.filter(exercise => {
      const matchesSearch = exercise.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || exercise.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Calculate total pages based on filtered exercises
  const totalPages = Math.ceil(filteredExercises.length / EXERCISES_PER_PAGE);

  // Memoize current page exercises
  const currentExercises = useMemo(() => {
    const startIndex = (currentPage - 1) * EXERCISES_PER_PAGE;
    const endIndex = startIndex + EXERCISES_PER_PAGE;
    return filteredExercises.slice(startIndex, endIndex);
  }, [currentPage, filteredExercises]);

  // Memoize unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(allExercises.map(exercise => exercise.category)));
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  }, []);

  const handleCategoryChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Discover Your Perfect Workout
        </h1>
        <p className="text-lg text-gray-300">
          Explore our diverse collection of workouts designed for all fitness levels.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-3xl mx-auto">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-500"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Exercise Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Suspense fallback={<div className="text-white">Loading exercises...</div>}>
          {currentExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </Suspense>
      </div>

      {/* Show message if no results */}
      {filteredExercises.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No exercises found matching your criteria
        </div>
      )}

      {/* Pagination */}
      {filteredExercises.length > 0 && (
        <div className="mt-4 mb-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center space-y-8">
            {/* Creator Section */}
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-white mb-2">
                Andy Bencomo Del Rio
              </h3>
              <p className="text-lg text-gray-300">
                Full Stack Developer
              </p>
            </div>

            {/* Technologies Section */}
            <div className="flex flex-col items-center">
              <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-4">
                Built with
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-opacity-10 bg-white backdrop-blur-sm border border-gray-700 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-opacity-20 transition-colors duration-200">
                  <FaReact className="text-[#61DAFB] text-lg" />
                  <span className="text-gray-200">React</span>
                </span>
                <span className="px-4 py-2 bg-opacity-10 bg-white backdrop-blur-sm border border-gray-700 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-opacity-20 transition-colors duration-200">
                  <SiTypescript className="text-[#3178C6] text-lg" />
                  <span className="text-gray-200">TypeScript</span>
                </span>
                <span className="px-4 py-2 bg-opacity-10 bg-white backdrop-blur-sm border border-gray-700 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-opacity-20 transition-colors duration-200">
                  <SiTailwindcss className="text-[#06B6D4] text-lg" />
                  <span className="text-gray-200">Tailwind CSS</span>
                </span>
                <span className="px-4 py-2 bg-opacity-10 bg-white backdrop-blur-sm border border-gray-700 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-opacity-20 transition-colors duration-200">
                  <SiVite className="text-[#646CFF] text-lg" />
                  <span className="text-gray-200">Vite</span>
                </span>
                <span className="px-4 py-2 bg-opacity-10 bg-white backdrop-blur-sm border border-gray-700 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-opacity-20 transition-colors duration-200">
                  <SiReactrouter className="text-[#CA4245] text-lg" />
                  <span className="text-gray-200">React Router</span>
                </span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400 pt-8 border-t border-gray-800 w-full text-center">
              &copy; {new Date().getFullYear()} Fitness Exercise Catalog. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;