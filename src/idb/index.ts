import { openDB, DBSchema } from 'idb'
import { getUsers } from '@/utils/gen-user'

interface WorkforceDB extends DBSchema {
  assocaites: {
    key: string
    value: any[]
  }
  entities: {
    key: string
    value: any[]
  }
}

/**
 * 初始化 IndexDB 数据库
 */
export async function initialize() {
  await openDB<WorkforceDB>('workforce', 1, {
    upgrade(db) {
      db.createObjectStore('assocaites')
      db.createObjectStore('entities')
    },
  })
}

// 初始化 entity 数据
export async function IDBSetEntity() {
  const db = await openDB<WorkforceDB>('workforce')
  const entities = []
  for (let i = 0; i < 100; i++) {
    entities.push({ name: `AH${i}`, id: i })
  }
  await db.put('entities', entities, 'Entity')
}

// 初始化 associate 数据
export async function IDBSetAssocaites() {
  const db = await openDB<WorkforceDB>('workforce')
  const users = await getUsers()
  await db.put('assocaites', users, 'Associate')
}

export async function IDBGetAssocaites() {
  const db = await openDB<WorkforceDB>('workforce')
  const now_start = performance.now()
  const data = await db.getAll('assocaites')
  const now_end = performance.now()
  console.info('spent', now_end - now_start)
  return data
}

export async function IDBGetEntity() {
  const db = await openDB<WorkforceDB>('workforce')
  const now_start = performance.now()
  const data = await db.getAll('entities')
  const now_end = performance.now()
  console.info('spent', now_end - now_start)
  return data
}
