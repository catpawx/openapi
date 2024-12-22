import type { GenerateServiceProps } from '@umijs/openapi'
import {
  type APIDataType,
  ServiceGenerator,
} from '@umijs/openapi/dist/serviceGenerator'

const config: GenerateServiceProps = {
  schemaPath: 'http://localhost:3000/swagger-ui-json',
  serversPath: './test/front',
  projectName: 'api',
  namespace: 'API',
  requestImportStatement: "import request from '@/request'",
  hook: {
    customClassName: (tagName: string) => {
      const name = tagName.slice(tagName.search(/[A-Z]/))
      // 将name第一个字母小写
      return name[0].toLowerCase() + name.slice(1)
    },
    customFunctionName: (data: APIDataType) => {
      return (
        data.method +
        ServiceGenerator.prototype.genDefaultFunctionName(data.path)
      )
    },
  },
}

export default config
