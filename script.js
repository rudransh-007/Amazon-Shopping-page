// Simple form validation (no backend needed)
const form = document.getElementById('authForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();                       // stop page reload
    let ok = true;
    form.querySelectorAll('input[data-rule]').forEach(function (input) {
      const err = input.parentElement.querySelector('.error');
      const v = input.value.trim();
      let msg = '';
      if (input.dataset.rule === 'required' && !v) msg = 'This field is required.';
      if (input.dataset.rule === 'email' && !/^\S+@\S+\.\S+$/.test(v)) msg = 'Enter a valid email address.';
      if (input.dataset.rule === 'password' && v.length < 6) msg = 'Password must be at least 6 characters.';
      if (input.dataset.rule === 'match' && v !== document.getElementById('password').value) msg = 'Passwords do not match.';
      err.textContent = msg;
      err.style.display = msg ? 'block' : 'none';
      if (msg) ok = false;
    });
    if (ok) document.getElementById('success').style.display = 'block';
  });
}
