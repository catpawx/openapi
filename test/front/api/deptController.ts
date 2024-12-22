// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** 部门列表 GET /dept */
export async function getDept(options?: { [key: string]: any }) {
  return request<any>('/dept', {
    method: 'GET',
    ...(options || {}),
  })
}

/** 部门新增 POST /dept */
export async function postDept(
  body: API.CreateDeptDto,
  options?: { [key: string]: any },
) {
  return request<any>('/dept', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 部门详情 GET /dept/${param0} */
export async function getDeptId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDeptIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params
  return request<any>(`/dept/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  })
}

/** 部门更新 PUT /dept/${param0} */
export async function putDeptId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putDeptIdParams,
  body: API.UpdateDeptDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params
  return request<any>(`/dept/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  })
}

/** 部门删除 DELETE /dept/${param0} */
export async function deleteDeptId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteDeptIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params
  return request<any>(`/dept/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  })
}
