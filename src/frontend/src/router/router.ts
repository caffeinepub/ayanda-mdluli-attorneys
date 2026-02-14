import React from 'react';

type RouteHandler = () => void;

class Router {
  private routes: Map<string, () => React.ReactElement> = new Map();
  private notFoundHandler: (() => React.ReactElement) | null = null;
  private listeners: Set<RouteHandler> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', () => this.notify());
      window.addEventListener('hashchange', () => this.notify());
    }
  }

  register(path: string, handler: () => React.ReactElement) {
    this.routes.set(path, handler);
  }

  setNotFound(handler: () => React.ReactElement) {
    this.notFoundHandler = handler;
  }

  navigate(path: string) {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      this.notify();
    }
  }

  getCurrentPath(): string {
    if (typeof window === 'undefined') return '/';
    // Strip hash from pathname for route matching
    return window.location.pathname;
  }

  resolve(): React.ReactElement {
    const path = this.getCurrentPath();
    const handler = this.routes.get(path);
    
    if (handler) {
      return handler();
    }
    
    if (this.notFoundHandler) {
      return this.notFoundHandler();
    }
    
    throw new Error(`No route found for path: ${path}`);
  }

  subscribe(listener: RouteHandler) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach(listener => listener());
  }
}

export const router = new Router();

export function navigate(path: string) {
  router.navigate(path);
}

export function useRouter() {
  const [, setTick] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = router.subscribe(() => {
      setTick(tick => tick + 1);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return { navigate, currentPath: router.getCurrentPath() };
}
