
---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Modern Web Development Best Practices
  A comprehensive guide for today's developers
drawings:
  persist: false
transition: slide-left
title: Modern Web Development Best Practices
---

# Modern Web Development Best Practices

A comprehensive guide for today's developers

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="View on GitHub" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
layout: default
---

# Table of Contents

<Toc maxDepth="1"></Toc>

---
layout: section
---

# 1. Modern Architecture Patterns

---
layout: two-cols
---

# Frontend Architecture

<v-clicks>

- Component-based design
- Micro-frontends
- Islands architecture
- Atomic design principles
- State management strategies
- Server components

</v-clicks>

::right::

<div class="ml-4">
  <div v-click class="mt-12 flex justify-center">
    <div class="architecture-diagram">
      <div class="box primary">UI Components</div>
      <div class="arrow">↓</div>
      <div class="box secondary">State Management</div>
      <div class="arrow">↓</div>
      <div class="box accent">Data Fetching</div>
      <div class="arrow">↓</div>
      <div class="box neutral">API Layer</div>
    </div>
  </div>
</div>

<style>
.architecture-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.box {
  padding: 12px 24px;
  border-radius: 8px;
  width: 200px;
  text-align: center;
  font-weight: bold;
}
.primary {
  background: #4f46e5;
  color: white;
}
.secondary {
  background: #8b5cf6;
  color: white;
}
.accent {
  background: #ec4899;
  color: white;
}
.neutral {
  background: #6b7280;
  color: white;
}
.arrow {
  font-size: 20px;
  color: #6b7280;
}
</style>

---

# Backend Architecture Patterns

<div class="grid grid-cols-2 gap-4 mt-4">
<div>
<v-clicks>

## Monolithic
- Simple to develop initially
- Easier deployment
- Tightly coupled components
- Scaling challenges

## Microservices
- Independent services
- Technology diversity
- Resilience
- Complex orchestration

</v-clicks>
</div>

<div>
<v-clicks>

## Serverless
- Pay per execution
- Auto-scaling
- Reduced operational costs
- Cold starts

## Event-Driven
- Loose coupling
- Real-time processing
- Asynchronous communication
- Complex debugging

</v-clicks>
</div>
</div>

---
layout: section
---

# 2. Performance Optimization

---

# Core Web Vitals

<div class="grid grid-cols-3 gap-4 mt-8">
  <div v-click class="p-4 border rounded-lg text-center">
    <div class="text-4xl text-green-500 mb-2">LCP</div>
    <div class="font-bold">Largest Contentful Paint</div>
    <div class="text-sm mt-2">Target: < 2.5s</div>
    <div class="mt-4 text-sm">Measures loading performance</div>
  </div>
  
  <div v-click class="p-4 border rounded-lg text-center">
    <div class="text-4xl text-blue-500 mb-2">FID</div>
    <div class="font-bold">First Input Delay</div>
    <div class="text-sm mt-2">Target: < 100ms</div>
    <div class="mt-4 text-sm">Measures interactivity</div>
  </div>
  
  <div v-click class="p-4 border rounded-lg text-center">
    <div class="text-4xl text-purple-500 mb-2">CLS</div>
    <div class="font-bold">Cumulative Layout Shift</div>
    <div class="text-sm mt-2">Target: < 0.1</div>
    <div class="mt-4 text-sm">Measures visual stability</div>
  </div>
</div>

<div v-click class="mt-8 text-center text-sm">
  <carbon:information class="inline mr-1"/> Core Web Vitals are essential metrics for measuring user experience
</div>

---

# Code Splitting & Lazy Loading

```js {all|1-3|5-11|13-19|all}
// Before: Importing everything upfront
import { HeavyComponent } from './HeavyComponent';
import { RarelyUsedFeature } from './RarelyUsedFeature';

// After: Route-based code splitting
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Component will only be loaded when rendered
<Suspense fallback={<LoadingSpinner />}>
  <HeavyComponent />
</Suspense>

// Component-level code splitting
const Button = ({ showFeature, ...props }) => {
  const [Feature, setFeature] = useState(null);
  
  const loadFeature = async () => {
    const module = await import('./RarelyUsedFeature');
    setFeature(() => module.RarelyUsedFeature);
  };
  
  return (
    <>
      <button onClick={loadFeature} {...props}>
        Load Feature
      </button>
      {Feature && <Feature />}
    </>
  );
};
```

<arrow v-click x1="350" y1="380" x2="250" y2="320" color="#564" width="3" arrowSize="1" />

---

# Image Optimization

<div class="grid grid-cols-2 gap-8">
<div>

## Common Issues
<v-clicks>

- Oversized images
- Wrong format selection
- Missing responsive images
- No lazy loading
- Render-blocking images

</v-clicks>

</div>
<div>

## Best Practices
<v-clicks>

```html
<!-- Responsive images -->
<img 
  src="image-800w.jpg"
  srcset="
    image-400w.jpg 400w,
    image-800w.jpg 800w,
    image-1200w.jpg 1200w
  "
  sizes="(max-width: 600px) 400px,
         (max-width: 1200px) 800px,
         1200px"
  loading="lazy"
  decoding="async"
  alt="Description of image"
/>
```

- Use modern formats (WebP, AVIF)
- Compress appropriately
- Consider image CDNs

</v-clicks>

</div>
</div>

---
layout: section
---

# 3. Modern JavaScript & TypeScript

---

# TypeScript: Type Safety

```typescript {all|1-6|8-14|16-25|all}
// Basic types
let name: string = 'John';
let age: number = 30;
let isActive: boolean = true;
let hobbies: string[] = ['reading', 'coding'];
let tuple: [string, number] = ['position', 42];

// Interfaces
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  metadata?: Record<string, unknown>;
}

// Generic types
function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}

// Type guards
function processValue(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase(); // TypeScript knows value is a string
  }
  return value * 2; // TypeScript knows value is a number
}
```

---

# Modern JavaScript Features

```javascript {all|1-5|7-12|14-19|21-26|all}
// Nullish coalescing
const count = data.count ?? 0;
// Optional chaining
const userName = user?.profile?.name;
const firstItem = items?.[0];

// Destructuring
const { name, age, ...rest } = person;
const [first, second, ...others] = items;
// With default values
const { status = 'pending', message = '' } = response;
const [value = 0] = numbers;

// Spread operator
const newArray = [...oldArray, newItem];
const updatedObject = { 
  ...oldObject, 
  [dynamicKey]: newValue 
};

// Template literals
const greeting = `Hello, ${name}!`;
const multiline = `
  This is a
  multi-line string
`;
```

---

# Async JavaScript Patterns

```javascript {all|1-9|11-22|24-36|all}
// Promises
function fetchData() {
  return fetch('/api/data')
    .then(response => {
      if (!response.ok) throw new Error('Network error');
      return response.json();
    })
    .then(data => processData(data))
    .catch(error => handleError(error));
}

// Async/await
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    
    if (!response.ok) throw new Error('Network error');
    
    const data = await response.json();
    return processData(data);
  } catch (error) {
    handleError(error);
  }
}

// Promise combinators
async function fetchAllData() {
  // Parallel requests
  const [users, posts, comments] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json()),
    fetch('/api/comments').then(r => r.json())
  ]);
  
  // First to complete
  const fastestResponse = await Promise.race([
    fetch('/api/server1/data'),
    fetch('/api/server2/data')
  ]);
}
```

---
layout: section
---

# 4. Testing Strategies

---

# Testing Pyramid

<div class="flex justify-center">
  <div class="testing-pyramid">
    <div v-click class="level e2e">
      <div class="label">E2E Tests</div>
      <div class="description">Cypress, Playwright</div>
    </div>
    <div v-click class="level integration">
      <div class="label">Integration Tests</div>
      <div class="description">React Testing Library, Supertest</div>
    </div>
    <div v-click class="level unit">
      <div class="label">Unit Tests</div>
      <div class="description">Jest, Vitest</div>
    </div>
  </div>
</div>

<style>
.testing-pyramid {
  width: 500px;
  margin-top: 40px;
}
.level {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0 auto;
  padding: 20px;
  position: relative;
}
.level .label {
  font-weight: bold;
  font-size: 1.2em;
}
.level .description {
  font-size: 0.8em;
  opacity: 0.8;
  margin-left: 20px;
}
.e2e {
  background: #ef4444;
  width: 80%;
  border-radius: 4px 4px 0 0;
}
.integration {
  background: #8b5cf6;
  width: 90%;
}
.unit {
  background: #3b82f6;
  width: 100%;
  border-radius: 0 0 4px 4px;
}
</style>

<v-clicks>
<div class="mt-12 text-center text-sm">
  <carbon:information class="inline mr-1"/> Balance your testing strategy with the right mix of tests
</div>
</v-clicks>

---

# Unit Testing Example

```typescript {all|1-9|11-21|23-36|all}
// Function to test
function calculateTotal(items: Array<{ price: number; quantity: number }>) {
  return items.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );
}

// Export for testing
export { calculateTotal };

// Test file (calculateTotal.test.ts)
import { describe, it, expect } from 'vitest';
import { calculateTotal } from './calculateTotal';

describe('calculateTotal', () => {
  it('returns 0 for empty array', () => {
    expect(calculateTotal([])).toBe(0);
  });
  
  it('calculates total for single item', () => {
    expect(calculateTotal([{ price: 10, quantity: 2 }])).toBe(20);
  });
  
  it('calculates total for multiple items', () => {
    const items = [
      { price: 10, quantity: 2 },
      { price: 15, quantity: 1 },
      { price: 5, quantity: 4 }
    ];
    
    // 10*2 + 15*1 + 5*4 = 20 + 15 + 20 = 55
    expect(calculateTotal(items)).toBe(55);
  });
  
  it('handles decimal prices correctly', () => {
    expect(calculateTotal([{ price: 10.5, quantity: 2 }])).toBe(21);
  });
});
```

---

# Component Testing

```tsx {all|1-15|17-37|all}
// Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="btn">
      {label}
    </button>
  );
};

// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { vi } from 'vitest';

describe('Button component', () => {
  it('renders with label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button label="Click me" onClick={() => {}} disabled={true} />);
    expect(screen.getByText('Click me')).toBeDisabled();
  });
});
```

---
layout: section
---

# 5. API Design & Data Fetching

---

# REST API Best Practices

<div class="grid grid-cols-2 gap-4">
<div>

## URL Structure
<v-clicks>

- Use nouns, not verbs
- Use plural nouns for collections
- Use hierarchical relationships
- Use query parameters for filtering

</v-clicks>

## HTTP Methods
<v-clicks>

- GET: Read resources
- POST: Create resources
- PUT: Update resources (full)
- PATCH: Update resources (partial)
- DELETE: Remove resources

</v-clicks>

</div>
<div>

## Status Codes
<v-clicks>

- 200: OK
- 201: Created
- 204: No Content
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Server Error

</v-clicks>

## Versioning
<v-clicks>

- URL path: `/api/v1/users`
- Header: `Accept: application/vnd.api+json;version=1.0`
- Query parameter: `/api/users?version=1`

</v-clicks>

</div>
</div>

---

# Modern Data Fetching

```tsx {all|1-13|15-30|32-47|all}
// Basic fetch with error handling
async function fetchData(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// React Query example
import { useQuery, useMutation, QueryClient } from '@tanstack/react-query';

// Query hook
function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => fetchData('/api/users'),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3
  });
}

// Mutation hook
function useCreateUser() {
  return useMutation({
    mutationFn: (newUser) => fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(newUser)
    }).then(res => res.json()),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['users'] })
    }
  });
}

// SWR example
import useSWR from 'swr';

function useUser(id) {
  const { data, error, isLoading } = useSWR(
    id ? `/api/users/${id}` : null,
    fetchData
  );
  
  return {
    user: data,
    isLoading,
    isError: error
  };
}
```

---

# GraphQL Basics

```graphql {all|1-14|16-26|28-38|all}
# Schema definition
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}

# Query
query GetUserWithPosts($userId: ID!) {
  user(id: $userId) {
    id
    name
    posts {
      id
      title
    }
  }
}

# Mutation
mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    content
    author {
      id
      name
    }
  }
}
```

<div v-click class="mt-4">
```tsx
// React component with Apollo Client
function UserProfile({ userId }) {
  const { loading, error, data } = useQuery(GET_USER_WITH_POSTS, {
    variables: { userId }
  });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <div>
      <h1>{data.user.name}</h1>
      <h2>Posts:</h2>
      <ul>
        {data.user.posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```
</div>

---
layout: section
---

# 6. Security Best Practices

---

# OWASP Top 10

<div class="grid grid-cols-2 gap-4">
<div>

<v-clicks>

1. **Broken Access Control**
   - Implement proper authorization
   - Use principle of least privilege

2. **Cryptographic Failures**
   - Use HTTPS everywhere
   - Proper key management
   - Modern encryption algorithms

3. **Injection**
   - Parameterized queries
   - Input validation
   - Content Security Policy

4. **Insecure Design**
   - Threat modeling
   - Security requirements
   - Secure by design

5. **Security Misconfiguration**
   - Hardened configurations
   - Remove default accounts
   - Keep software updated

</v-clicks>

</div>
<div>

<v-clicks>

6. **Vulnerable Components**
   - Dependency scanning
   - Regular updates
   - Software composition analysis

7. **Auth Failures**
   - Multi-factor authentication
   - Strong password policies
   - Secure session management

8. **Software & Data Integrity**
   - Verify integrity of dependencies
   - CI/CD pipeline security
   - Signed commits

9. **Logging & Monitoring**
   - Centralized logging
   - Alerting for suspicious activity
   - Audit trails

10. **Server-Side Request Forgery**
    - Validate and sanitize input
    - Network segmentation
    - Deny by default policies

</v-clicks>

</div>
</div>

---

# XSS Prevention

```jsx {all|1-11|13-23|25-35|all}
// Dangerous: Direct HTML insertion
function DangerousComponent({ userContent }) {
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: userContent }}
    />
  );
  
  // Or in vanilla JS:
  // element.innerHTML = userContent;
}

// Safe: React auto-escapes content
function SafeComponent({ userContent }) {
  return <div>{userContent}</div>;
}

// Content Security Policy
// In your HTML head or HTTP header:
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self';
           script-src 'self' https://trusted-cdn.com;
           style-src 'self' https://trusted-cdn.com;
           img-src 'self' https://trusted-cdn.com data:;"
/>

// Input validation
function validateUserInput(input) {
  // Remove potentially dangerous HTML
  const sanitized = DOMPurify.sanitize(input);
  
  // Or restrict to specific format
  if (!/^[a-zA-Z0-9\s.,!?]*$/.test(input)) {
    throw new Error('Invalid input');
  }
  
  return sanitized;
}
```

---

# CSRF Protection

```jsx {all|1-14|16-30|all}
// Server-side: Generate CSRF token
app.use((req, res, next) => {
  // Generate token and store in session
  const csrfToken = crypto.randomBytes(16).toString('hex');
  req.session.csrfToken = csrfToken;
  
  // Make token available to templates
  res.locals.csrfToken = csrfToken;
  next();
});

// Server-side: Validate token
app.post('/api/data', (req, res) => {
  if (req.body._csrf !== req.session.csrfToken) {
    return res.status(403).send('CSRF token validation failed');
  }
  // Process the request...
});

// Client-side: Include token in forms
function ContactForm() {
  return (
    <form action="/api/contact" method="post">
      <input type="hidden" name="_csrf" value={csrfToken} />
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}

// Client-side: Include token in AJAX requests
axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

fetch('/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrfToken
  },
  body: JSON.stringify(data)
});
```

---
layout: section
---

# 7. Accessibility (a11y)

---

# WCAG Principles

<div class="grid grid-cols-2 gap-8">
<div>

## Perceivable
<v-clicks>

- Text alternatives for non-text content
- Captions and alternatives for media
- Content can be presented in different ways
- Content is easy to see and hear

</v-clicks>

## Operable
<v-clicks>

- All functionality available from keyboard
- Users have enough time to read and use content
- Content doesn't cause seizures
- Users can navigate and find content

</v-clicks>

</div>
<div>

## Understandable
<v-clicks>

- Text is readable and understandable
- Content appears and operates in predictable ways
- Users are helped to avoid and correct mistakes

</v-clicks>

## Robust
<v-clicks>

- Content is compatible with current and future tools
- Works with assistive technologies
- Follows web standards

</v-clicks>

</div>
</div>

---

# Semantic HTML

```html {all|1-10|12-22|24-34|all}
<!-- Bad: Div soup -->
<div class="header">
  <div class="logo">Company Name</div>
  <div class="nav">
    <div class="nav-item">Home</div>
    <div class="nav-item">About</div>
    <div class="nav-item">Contact</div>
  </div>
</div>

<!-- Good: Semantic HTML -->
<header>
  <h1>Company Name</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>

<!-- More semantic elements -->
<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content...</p>
    <figure>
      <img src="image.jpg" alt="Descriptive alt text">
      <figcaption>Image caption</figcaption>
    </figure>
  </article>
  <aside>
    <h3>Related content</h3>
    <!-- ... -->
  </aside>
</main>
<footer>
  <p>&copy; 2023 Company Name</p>
</footer>
```

---

# ARIA Attributes

```html {all|1-12|14-25|27-38|all}
<!-- ARIA roles -->
<div role="alert">Important notification</div>

<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel-1">Tab 1</button>
  <button role="tab" aria-selected="false" aria-controls="panel-2">Tab 2</button>
</div>

<div id="panel-1" role="tabpanel" aria-labelledby="tab-1">
  Content for tab 1
</div>

<!-- ARIA states and properties -->
<button 
  aria-expanded="false"
  aria-controls="dropdown-menu"
>
  Toggle Menu
</button>

<div 
  id="dropdown-menu" 
  aria-hidden="true"
>
  <!-- Menu items -->
</div>

<!-- Accessible form elements -->
<label for="username">Username</label>
<input 
  id="username" 
  type="text" 
  aria-required="true" 
  aria-invalid="false"
/>

<div role="status" aria-live="polite">
  Form submitted successfully!
</div>
```

---

# Focus Management

```jsx {all|1-14|16-30|32-46|all}
// Trap focus in modal
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);
  
  useEffect(() => {
    if (!isOpen) return;
    
    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    firstElement.focus();
    
    // ... trap focus logic
  }, [isOpen]);
  
  // ... rest of component
}

// Skip to content link
function Layout({ children }) {
  return (
    <>
      <a 
        href="#main-content" 
        className="skip-link"
      >
        Skip to main content
      </a>
      <header>...</header>
      <main id="main-content" tabIndex="-1">
        {children}
      </main>
      <footer>...</footer>
    </>
  );
}

// Focus management after form submission
function ContactForm() {
  const statusRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit form logic...
    setSubmitted(true);
    
    // Move focus to status message
    setTimeout(() => {
      statusRef.current?.focus();
    }, 100);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      {submitted && (
        <div ref={statusRef} tabIndex="-1" role="status">
          Thank you for your submission!
        </div>
      )}
    </form>
  );
}
```

---
layout: section
---

# 8. DevOps & CI/CD

---

# CI/CD Pipeline

<div class="mermaid">
graph LR
    A[Code Commit] --> B[Automated Tests]
    B --> C{Tests Pass?}
    C -->|Yes| D[Build]
    C -->|No| A
    D --> E[Deploy to Staging]
    E --> F[Integration Tests]
    F --> G{Tests Pass?}
    G -->|Yes| H[Deploy to Production]
    G -->|No| A
    
    style A fill:#d1d5db
    style B fill:#93c5fd
    style C fill:#fde68a
    style D fill:#93c5fd
    style E fill:#93c5fd
    style F fill:#93c5fd
    style G fill:#fde68a
    style H fill:#86efac
</div>

<v-clicks>
<div class="mt-8 grid grid-cols-3 gap-4">
  <div class="p-4 border rounded-lg">
    <h3 class="font-bold">Continuous Integration</h3>
    <ul class="text-sm mt-2">
      <li>Frequent code merges</li>
      <li>Automated testing</li>
      <li>Early bug detection</li>
    </ul>
  </div>
  
  <div class="p-4 border rounded-lg">
    <h3 class="font-bold">Continuous Delivery</h3>
    <ul class="text-sm mt-2">
      <li>Automated builds</li>
      <li>Deployment-ready artifacts</li>
      <li>One-click deployments</li>
    </ul>
  </div>
  
  <div class="p-4 border rounded-lg">
    <h3 class="font-bold">Continuous Deployment</h3>
    <ul class="text-sm mt-2">
      <li>Fully automated pipeline</li>
      <li>Production deployments</li>
      <li>Automated rollbacks</li>
    </ul>
  </div>
</div>
</v-clicks>

---

# GitHub Actions Example

```yaml {all|1-9|11-19|21-32|all}
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  workflow_dispatch:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build
          path: dist/
```

<div v-click>
```yaml
  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build
          path: dist
      - name: Deploy to production
        uses: some-deployment-action@v1
        with:
          api-key: ${{ secrets.DEPLOY_API_KEY }}
          app-name: 'my-application'
```
</div>

---

# Docker & Containerization

```dockerfile {all}
# Use an official Node runtime as the base image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

<div v-click class="mt-4">
```yaml
# docker-compose.yml
version: '3.8'

services:
  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - api
  
  api:
    build: ./api
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://user:password@db:5432/app
    depends_on:
      - db
  
  db:
    image: postgres:14
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=password
      - POSTGRES_USER=user
      - POSTGRES_DB=app

volumes:
  postgres_data:
```
</div>

---
layout: section
---

# 9. Future Trends

---
layout: two-cols
---

# Emerging Technologies

<v-clicks>

- WebAssembly (WASM)
- Web Components
- Progressive Web Apps 2.0
- Edge Computing
- WebGPU
- WebTransport
- WebCodecs
- WebXR
- AI-assisted development
- Low-code/No-code platforms

</v-clicks>

::right::

<div class="ml-4">
<v-clicks>

## WebAssembly

```rust
// Rust code compiled to WASM
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

```js
// JavaScript using WASM
const importObject = {
  env: {
    memory: new WebAssembly.Memory({ initial: 1 })
  }
};

WebAssembly.instantiateStreaming(
  fetch('math.wasm'), 
  importObject
).then(result => {
  const add = result.instance.exports.add;
  console.log(add(5, 7)); // 12
});
```

</v-clicks>
</div>

---

# Sustainable Web Development

<div class="grid grid-cols-2 gap-8">
<div>

## Environmental Impact
<v-clicks>

- Global IT: ~4% of carbon emissions
- Average webpage: 2MB+ and growing
- Data centers: Significant energy usage
- Mobile device battery drain

</v-clicks>

## Optimization Strategies
<v-clicks>

- Reduce asset sizes
- Efficient caching
- Lazy loading
- Server-side rendering
- Green hosting providers
- Dark mode (OLED screens)

</v-clicks>

</div>
<div>

## Measuring Impact
<v-clicks>

```js
// Example: Measuring resource timing
performance.getEntriesByType('resource').forEach(resource => {
  console.log(`${resource.name}: ${resource.transferSize} bytes`);
});

// Calculate total transfer size
const totalBytes = performance
  .getEntriesByType('resource')
  .reduce((total, resource) => total + resource.transferSize, 0);

console.log(`Total transferred: ${totalBytes / 1024} KB`);
```

- Tools:
  - Website Carbon Calculator
  - Lighthouse Performance Score
  - WebPageTest
  - GreenFrame

</v-clicks>

</div>
</div>

---
layout: center
class: text-center
---

# Thank You!

[Slidev Documentation](https://sli.dev) · [GitHub Repo](https://github.com/slidevjs/slidev)
