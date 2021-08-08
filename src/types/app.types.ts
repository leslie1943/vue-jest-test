export type TypeA = {
  us_foot: number
  cn_foot: number
  ind_foot: number
  jp_foot: number
}
export type TypeB = {
  leader_id: string
  memember_count: number
}

export type Type_A_AND_B = TypeA & TypeB
const A_AND_B: Type_A_AND_B = {
  us_foot: 22,
  cn_foot: 22,
  ind_foot: 22,
  jp_foot: 22,
  leader_id: '1001',
  memember_count: 200,
}
console.log('🚀 ~ file: app.types.ts ~ line 14 ~ epro', A_AND_B)

// ------------------------------------------------
/**
 * & => all connect props need to have: 满足所有的类型定义
 */
// ------------------------------------------------

// ------------------------------------------------
/**
 * | => match at least 1 type define: 至少满足一个类型的定义
 */
// ------------------------------------------------

const A_OR_B_1: TypeA | TypeB = {
  // TypeA's all props - start
  us_foot: 2012,
  cn_foot: 2012,
  ind_foot: 2012,
  jp_foot: 2012,
  // TypeA's all props - end
}
console.log('🚀 ~ file: app.types.ts ~ line 14 ~ epro', A_OR_B_1)

const A_OR_B_2: TypeA | TypeB = {
  // TypeB's all props - start
  leader_id: '1001',
  memember_count: 200,
  // TypeB's all props - end

  // Some TypeA's props
  us_foot: 22,
}
console.log('🚀 ~ file: app.types.ts ~ line 14 ~ epro', A_OR_B_2)
