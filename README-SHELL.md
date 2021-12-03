### Fix the set-executionpolicy 
```sh
 # set-executionpolicy remotesignet
```

### Steps
具体步骤
- 以管理员身份打开终端(或者vs code)
- 在终端执行: get-ExecutionPolicy, 显示Restricted(表示状态是禁止的)
- 在终端执行: set-ExecutionPolicy RemoteSigned
- 在终端执行: get-ExecutionPolicy, 显示RemoteSigned