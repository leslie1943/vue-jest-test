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

  private static fnA(a: string, b: number): boolean {
    return true
  }

  private static fnB(a: string, b: number): boolean {
    return false
  }

  private static fnC(a: string, b: number): boolean {
    return true
  }

  private static fnD(a: string): boolean {
    return false
  }
}
