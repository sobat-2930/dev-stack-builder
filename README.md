
# Dev Stack Builder

A responsive web app where developers can browse popular frontend, backend, database, language, and DevOps technologies, and build their own ideal tech stack by adding/removing tools from a live sidebar.

## 🛠 Tech Stack
- React (Vite)
- TypeScript
- Tailwind CSS
- React Toastify
- Lucide React (icons)

## ✨ Features
1. **Browse & Filter Technologies** — 12+ technologies shown as cards with icon, category, difficulty, and rating, loaded dynamically from a JSON file.
2. **Build Your Stack** — Add technologies to a live "Your Stack" sidebar; duplicate adds are blocked with a warning toast, and added cards show a disabled "✓ Added to Stack" state.
3. **Manage Your Stack** — Remove individual items or clear the entire stack at once, with an empty-state message when nothing is selected.

---

## React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like code inside JavaScript. It's used because it makes describing the UI structure much easier to read and write than calling `React.createElement()` manually — React compiles it into regular JS under the hood.

**2. What is the difference between props and state?**
Props are data passed **into** a component from its parent — they're read-only inside that component. State is data a component **manages itself** and can change over time (using `useState`), which causes the component to re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component hold and update its own local data. In this project I used it for `technologies` (the fetched list), `stack` (the technologies the user has added), and `loading` (whether the JSON data is still being fetched).

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects — code that happens outside the normal render flow, like fetching data. I used it to `fetch()` the technologies JSON file once when the component first mounts, since data fetching shouldn't happen directly during render.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` prop helps React identify which items changed, were added, or removed, so it can update the DOM efficiently instead of re-rendering the whole list. Without a unique key, React can mix up items and cause bugs.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on a condition. I used it in `YourStack.tsx`:
```jsx
{stack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  stack.map((tech) => ...)
)}
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Parent → child: through **props**. For example `<TechGrid technologies={technologies} stack={stack} onAdd={handleAdd} />`. Child → parent: by calling a **function passed down as a prop**. For example, `TechnologyCard` calls `onAdd(tech)`, which triggers `handleAdd` in `App.tsx` and updates the parent's state.


