export default class StaticClass {
  static mainFun(paramA: string, paramB: number): boolean {
    if (StaticClass.fnA(paramA, paramB)) {
      return false
    }

    if (!StaticClass.fnB(paramA, paramB)) {
      return false
    }

    if (StaticClass.fnC(paramA, paramB)) {
      return false
    }

    if (StaticClass.fnD(paramA)) {
      return false
    }
    return true
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private static fnA(a: string, b: number): boolean {
    return true
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private static fnB(a: string, b: number): boolean {
    return false
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private static fnC(a: string, b: number): boolean {
    return true
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private static fnD(a: string): boolean {
    return false
  }
}
