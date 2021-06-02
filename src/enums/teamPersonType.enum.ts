enum TeamPersonType {
  DORA = 'Acc',
  MARK = 'SBIS',
  JUSTIN = 'Stanley',
  DONG = 'ANGLE',
  NEO = 'FIL',
  LESLIE = 'FMR',
}

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace TeamPersonType {
  // eslint-disable-next-line no-inner-declarations
  export function isInternal(name: string): boolean {
    return (
      name === TeamPersonType.DONG ||
      name === TeamPersonType.DORA ||
      name === TeamPersonType.JUSTIN ||
      name === TeamPersonType.LESLIE ||
      name === TeamPersonType.MARK ||
      name === TeamPersonType.NEO
    )
  }
}

export default TeamPersonType
