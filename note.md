## 🧠 GIT CONVENTION

**Commit message format:**

| Prefix     | Purpose                                                 | Example                                 |
| ---------- | ------------------------------------------------------- | --------------------------------------- |
| `feat:`    | For **new features**                                    | `feat: add user authentication module`  |
| `fix:`     | For **bug fixes**                                       | `fix: incorrect email validation`       |
| `enhance:` | For **improvements** (UI, UX, performance, or refactor) | `enhance: optimize image loading speed` |
|            |                                                         |                                         |

> 💡 **Why:**  
> Clear and consistent commit messages make changelogs easier to read and filter.  
> You can quickly search commits, e.g. `git log --grep="feat"`.

---

## 🗂️ FOLDER STRUCTURE

Keep folders organized by responsibility — this improves readability, scalability, and team collaboration.

```
src/
│
├── assets/          # Static resources (images, fonts, videos, etc.)
│   ├── images/
│   ├── fonts/
│   └── videos/
│
├── components/      # Reusable UI components
│   ├── Header/
│   │   ├── Header.jsx
│   │   ├── Header.module.scss
│   │   └── index.js
│   └── Button/
│       ├── Button.jsx
│       ├── Button.module.scss
│       └── index.js
│
├── pages/           # Page-level components (route entries)
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── Home.module.scss
│   │   └── index.js
│
└── styles/          # Global styles (variables, mixins, reset)
    ├── _variables.scss
    ├── _mixins.scss
    └── globals.scss
```

> 💡 **Why:**
>
> - `components/`: only reusable, UI-driven building blocks.
> - `pages/`: top-level route components that compose other components.
> - `assets/`: keeps all static resources separate from logic.
> - `styles/`: for global or theme-related styles only.

---

## 🎨 STYLING GUIDELINES

- ✅ Always use **CSS Modules** (`.module.scss` or `.module.css`)  
   → avoids global naming collisions.
- ❌ Avoid using global CSS unless for resets or themes.

**Example:**

```jsx
// Button.jsx
import styles from './Button.module.scss';

export default function Button({ label }) {
  return <button className={styles.primary}>{label}</button>;
}
```

```scss
/* Button.module.scss */
.primary {
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #005fc1;
  }
}
```

> 💡 **Why:**  
> CSS Modules scope styles locally per component — safer when refactoring or renaming.

---

## 🖼️ IMAGE USAGE GUIDELINES

| Format       | Use Case                                   | Notes                                            |
| ------------ | ------------------------------------------ | ------------------------------------------------ |
| **SVG**      | Icons, vectors, strokes, line art          | Lightweight, scalable, and easy to color via CSS |
| **PNG**      | Backgrounds or UI assets with transparency | Retains quality and transparency                 |
| **WebM**     | Lightweight animations or videos           | Better compression than GIF                      |
| **JPG/JPEG** | 🚫 Avoid                                   | Lower quality and less flexible                  |

**Example:**

```html
`<img src="/assets/icons/check.svg" alt="Check icon" />`
```

> 💡 **Best Practices:**
>
> - Always include an `alt` attribute → improves SEO and accessibility.
> - Use `<Image />` (e.g. from Next.js) for automatic image optimization.

---

## 🧩 COMPONENT STRUCTURE

Keep each component self-contained for clarity and scalability.

```
components/
└── Header/
    ├── Header.jsx           # Component logic
    ├── Header.module.scss   # Scoped styles
    └── index.js             # Export entry point
```

**index.js**

```js
export { default } from './Header';
```

> 💡 **Why:**
>
> - Simplifies imports → `import Header from '@/components/Header'`
> - Keeps component code organized and modular.
> - Easier to test and refactor.
