<script setup>

</script>



<template>
  <form action="https://example.com/submit" method="POST">

    <label for="name">Your Name:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <hr />
    <label for="service">What service are you interested in:</label>
    <select name="service" id="service">
      <option value="embed">Embed us within your development team</option>
      <option value="train">Training or mentorship</option>
      <option value="speak">Speak at your event</option>
    </select>

    <label for="details">Project Details:</label>
    <textarea id="details" name="details" rows="5" required></textarea>

    <button type="submit">Submit</button>
  </form>
</template>



<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

label {
  font-weight: bold;
  margin-bottom: 0.25rem;
}

input,
select,
textarea,
button {
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--vp-pointw-accent);
  box-shadow: 0 0 0 2px var(--vp-pointw-background);
}

button {
  cursor: pointer;
  background-color: var(--vp-pointw-primary);
  color: var(--vp-c-bg);
  font-weight: bold;
  border: none;
  transition: background-color 0.2s, box-shadow 0.2s;
}

button:hover {
  background-color: var(--vp-pointw-accent);
}

button:active {
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.2);
}


form select {
  appearance: none; /* Removes the default dropdown styling */
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
}

form select:focus {
  border-color: var(--vp-pointw-accent);
  box-shadow: 0 0 0 2px var(--vp-pointw-background);
  outline: none;
}

/* Adjust padding to avoid overlap with the arrow */
form select {
  padding-right: 2.5rem;
}
</style>