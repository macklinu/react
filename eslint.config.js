import base from '@macklinu/eslint-config'
import react from '@macklinu/eslint-config/react.js'
import vitest from '@macklinu/eslint-config/vitest.js'

const config = [...base, ...react, ...vitest]

export default config
