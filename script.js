// Smooth scrolling
document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Theme Toggle
  const toggleBtn = document.getElementById('themeToggle');
  const body = document.body;
  const sidebar = document.querySelector('.sidebar');
  const content = document.querySelector('.content');
  
  // Set initial colors for broader part as white
  content.style.backgroundColor = '#ffffff';
  content.style.color = '#333333';

  // Load saved theme
  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    sidebar.style.backgroundColor = '#f5f5f5';
    content.style.backgroundColor = '#ffffff';
    content.style.color = '#333333';
  } else {
    sidebar.style.backgroundColor = '#9b59b6';
    content.style.backgroundColor = '#ffffff';
    content.style.color = '#333333';
  }
  
  // Fix toggle button to only change sidebar background color
  const toggleSidebarColor = () => {
    const isPurple = sidebar.style.backgroundColor === 'rgb(155, 89, 182)'; // Check if current color is purple

    if (isPurple) {
      sidebar.style.backgroundColor = '#187BCD'; // Blue
    } else {
      sidebar.style.backgroundColor = '#9b59b6'; // Purple
    }
  };

  toggleBtn.addEventListener('click', () => {
    toggleSidebarColor();
  });

  // Ensure broader part background remains white
  content.style.backgroundColor = '#ffffff';
  content.style.color = '#333333';
