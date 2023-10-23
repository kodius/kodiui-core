@kodiui/cli helps you easily drop Kodi UI's responsive layout components into your React project. Crafted with Tailwind CSS and inspired by "Every Layout CSS," these components are super versatile, and they'll adapt to your design needs in no time. Install, tweak, and watch your layout game level up!

## Available Components 🛠

1. **center.tsx** 🎯

   - Centrally aligns content both vertically and horizontally.

2. **cluster.tsx** 🍇

   - Groups and spaces out items within a layout.

3. **flex-box.tsx** 🏗

   - Leverages Flexbox for creating responsive and adaptable layouts.

4. **hidden.tsx** 🙈

   - Provides an easy way to hide or show elements based on specific design requirements.

5. **reel.tsx** 🎞

   - A horizontal scrolling component, ideal for showcasing a list of items.

6. **sidebar.tsx** 📑

   - Incorporates a sidebar into your layout, perfect for additional content or navigation.

7. **split.tsx** 🧩

   - Divides content into distinct sections.

8. **stack.tsx** 📚

   - Vertically stacks content, ensuring a clean and organized layout.

9. **switcher.tsx** 🔀
   - A flexible component that enables seamless switching between different views or content.

## Getting Started 🚀

To incorporate Kodi UI's primitive components into your project, simply follow these steps:

1. **Install the Components**

   Run the following command to launch the CLI and install the primitive components:

```
npx @kodiui/cli@latest
```

When prompted, select "Install Primitives".

2. **Configure Tailwind CSS**

After installation, you'll need to integrate the spacing token into your Tailwind CSS configuration. Open your Tailwind config file and include the spacing token like so:

```javascript
// tailwind.config.js

import type { Config } from "tailwindcss";
import { spacing } from "@/components/primitives/tokens/spacing";

const config: Config = {
  content: [
    // ... (your other content paths)
  ],
  theme: {
    // ...
    extend: {
      // ...
      spacing: spacing,
    },
  },
};

export default config;
```

And that's it! You're now ready to harness the power of Kodi UI's primitive components in your React project. Enjoy crafting beautiful, responsive layouts with ease!
