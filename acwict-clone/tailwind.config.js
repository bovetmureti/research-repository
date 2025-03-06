@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
  font-weight: 400;
}

body {
  margin: 0;
  min-height: 100vh;
}

@layer components {
  .btn-primary {
    @apply bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors;
  }
  
  .btn-secondary {
    @apply bg-secondary text-white px-6 py-2 rounded-md font-medium hover:bg-orange-600 transition-colors;
  }
  
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  
  .section-title {
    @apply text-3xl font-bold text-primary mb-6 text-center;
  }
}
