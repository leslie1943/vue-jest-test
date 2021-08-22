export class VLeaderRepository {
  findListByCode(code: string) {
    const sql = `SELECT code FROM v_leader START WITH code = :code`
    return (this as any)
      .createQueryBuilder('group')
      .leftJoinAndSelect('group.stat', 'stat')
      .where(`group.code in (${sql})`, { code })
      .orderBy('group.level')
      .getMany()
  }
  createQueryBuilder(sql: string) {
    return sql
  }
}
