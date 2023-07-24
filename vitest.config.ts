import { defineConfig } from 'vitest/config'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    exclude:[
      ...configDefaults.exclude,
      'tests/example.spec.ts'
    ],
    typecheck: {
      tsconfig: 'tsconfig.test.json'
    }
  },
})