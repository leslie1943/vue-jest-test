### mockReset vs mockRestore

| api | jest.spyOn() | jest.fn() |
| -- | -- | -- |
| `mockReset` before | return custom impl. | return custom impl. |
| `mockReset` after  | return undefined | return undefined |
| `mockRestore` before| return custom impl.| return custom impl. |
| `mockRestore` after| return `original` impl.| return undefined |