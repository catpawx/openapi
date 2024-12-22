#!/usr/bin/env node
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { generateService } from '@umijs/openapi'
import {
  type APIDataType,
  ServiceGenerator,
} from '@umijs/openapi/dist/serviceGenerator'
import minimist from 'minimist'
import colors from 'picocolors'
import prompts from 'prompts'

const { red, reset } = colors

const argv = minimist<{
  template?: string
  help?: boolean
}>(process.argv.slice(2), {
  default: { help: false },
  alias: { h: 'help', t: 'template' },
  string: ['_'],
})

// prettier-ignore
const helpMessage = `\
Usage: cpx-openapi [OPTION]...

根据opeanAPI自动生成前端api.
无参数时，以交互模式启动CLI.
`

const defaultSchemaPath = 'http://localhost:3000/swagger-ui-json'
const defaultServersPath = './services'
const defaultProjectName = 'api'
const defaultNamespace = 'API'
const defaultRequestImportStatement = "import request from '@/request'"

/** 程序入口 */
async function init() {
  const help = argv.help
  if (help) {
    console.log(helpMessage)
  }
  let schemaPath = argv.schemaPath
  let serversPath = argv.serversPath
  let projectName = argv.projectName
  let namespace = argv.namespace
  const requestImportStatement =
    argv.requestImportStatement || defaultRequestImportStatement

  try {
    await prompts(
      [
        {
          type: schemaPath ? null : 'text',
          name: 'schemaPath',
          message: reset('schemaPath:'),
          initial: defaultSchemaPath,
          onState: state => {
            schemaPath = state.value
          },
        },
        {
          type: serversPath ? null : 'text',
          name: 'serversPath',
          message: reset('serversPath:'),
          initial: defaultServersPath,
          onState: state => {
            serversPath = state.value
          },
        },
        {
          type: projectName ? null : 'text',
          name: 'projectName',
          message: reset('projectName:'),
          initial: defaultProjectName,
          onState: state => {
            projectName = state.value
          },
        },
        {
          type: namespace ? null : 'text',
          name: 'namespace',
          message: reset('namespace:'),
          initial: defaultNamespace,
          onState: state => {
            namespace = state.value
          },
        },
      ],
      {
        onCancel: () => {
          throw new Error(red('✖') + ' 操作已取消')
        },
      },
    )
  } catch (cancelled: any) {
    console.log(cancelled.message)
  }

  await generateService({
    schemaPath,
    serversPath,
    projectName,
    namespace,
    requestImportStatement,
    hook: {
      customClassName: (tagName: string) => {
        const name = tagName.slice(tagName.search(/[A-Z]/))
        // 将name第一个字母小写
        return name[0].toLowerCase() + name.slice(1)
      },
      customFunctionName: (data: APIDataType) => {
        return (
          data.method +
          // @ts-expect-error
          ServiceGenerator.prototype.genDefaultFunctionName(data.path)
        )
      },
    },
  })
}

init().catch(e => {
  console.error(e)
})
