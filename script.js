let buttons = document.querySelectorAll('.question');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    let answer = this.nextElementSibling;
    answer.classList.toggle('show');
  });
}
const toggleBtn = document.createElement('button');
toggleBtn.id = 'dark-mode-toggle';
toggleBtn.textContent = '🌙';
document.body.appendChild(toggleBtn);

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});