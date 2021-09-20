import '@testing-library/jest-dom/extend-expect';

const RESET_MODULE_EXCEPTIONS = [
  'react',
];

let mockActualRegistry: any = {};

// https://github.com/facebook/jest/issues/8987
RESET_MODULE_EXCEPTIONS.forEach(moduleName => {
  jest.doMock(moduleName, () => {
    if (!mockActualRegistry[moduleName]) {
      mockActualRegistry[moduleName] = jest.requireActual(moduleName);
    }
    return mockActualRegistry[moduleName];
  });
});

// Mock Classes
class StorageMock {
  store: any;

  constructor() {
    this.store = {};
  }

  clear(): void {
    this.store = {};
  }

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  setItem(key: string, value: string): void {
    this.store[key] = value.toString();
  }

  removeItem(key: string): void {
    delete this.store[key];
  }
}

global.console.debug = function () {}; // NodeJS does not have console.debug, but React uses it.

Object.assign(global.window, {
  localStorage: new StorageMock(),
  sessionStorage: new StorageMock()
});

const userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Mobile Safari/537.36';
Object.defineProperty(window.navigator, 'userAgent', { value: userAgent });
