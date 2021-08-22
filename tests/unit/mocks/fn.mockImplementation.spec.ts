import { VLeaderRepository } from '../repositories/v-leader.repository'
describe('Test jet.fn.implementation', () => {
  it('Test Simple', () => {
    const mockFn = jest.fn().mockImplementation((num: number) => num + 2)
    const mockImp_A = mockFn(1)
    const mockImp_B = mockFn(10)
    expect(mockImp_A).toBe(3)
    expect(mockImp_B).toBe(12)
  })

  it('Test mockReturnValue & mockImplementation', async () => {
    const mockEntity = {
      code: 'PSQ',
      name: 'Branch DOR - Mar',
      type: 'Sea',
      leaderName: 'Leslie',
      subGroup: 'Car',
      status: 'Do',
    }
    const leader = new VLeaderRepository()

    /**
     * 🚀🚀🚀 Step-1 🚀🚀🚀
     * mockReturnValue: 返回了一个对象,包含4个方法 jest.fn(), 这里面都是要在测试实际方法时需要用到的
     * 其中 getMany 使用了 mockReturnValueOnce 返回了一个数组
     */
    const fakeQueryBuilder = jest.fn().mockReturnValue({
      leftJoinAndSelect: jest.fn().mockReturnThis(), // 返回 this 链式调用
      where: jest.fn().mockReturnThis(), // 返回 this 链式调用
      orderBy: jest.fn().mockReturnThis(), // 返回 this 链式调用
      getMany: jest.fn().mockReturnValueOnce([mockEntity]),
    })

    /**
     * 🚀🚀🚀 Step-2 🚀🚀🚀
     * 💛  mock 当前类的原型上的方法 createQueryBuilder (其实就是 Repository.createQueryBuilder 方法)
     * 此处的 VLeaderRepository.prototype as any 其实就是this, 在 repository.ts 中 this.createQueryBuilder()
     * 💛  使用 mockImplementation 方法 模拟 createQueryBuilder 的实现
     */
    jest
      .spyOn(VLeaderRepository.prototype as any, 'createQueryBuilder')
      .mockImplementation(fakeQueryBuilder)

    /**
     * 🚀🚀🚀 Step-3 🚀🚀🚀
     * 💛 测试类的实例方法, 方法内部的逻辑其实就是要用到 刚才 mock 的 this.createQueryBuilder
     * 💛 mock的 fakeQueryBuilder 中 具有其内部所需要的所有方法和执行方法的返回值
     * 然后进行 结果 expect 对比
     */
    const resp = await leader.findListByCode('test')
    expect(resp).toEqual([mockEntity])
  })
})
