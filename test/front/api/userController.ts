// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** 用户新增 POST /user */
export async function postUser(
  body: API.CreateUserDto,
  options?: { [key: string]: any },
) {
  return request<any>('/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 用户详情 GET /user/${param0} */
export async function getUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params
  return request<any>(`/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  })
}

/** 用户更新 PUT /user/${param0} */
export async function putUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putUserIdParams,
  body: API.UpdateUserDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params
  return request<any>(`/user/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  })
}

/** 用户删除 DELETE /user/${param0} */
export async function deleteUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params
  return request<any>(`/user/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  })
}

/** 用户列表 GET /user/list */
export async function getUserList(options?: { [key: string]: any }) {
  return request<any>('/user/list', {
    method: 'GET',
    ...(options || {}),
  })
}
