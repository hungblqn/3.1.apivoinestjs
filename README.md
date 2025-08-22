# apivoinestjs

setup: npm i<br/>
run project: npm run start<br/>
jest unit test: npm test<br/>
swagger docs: localhost:3000/docs<br/>
<br/>
dùng seed.ts để tạo nhiều bản ghi phục vụ cho mục đích test 100 bản ghi<br/>

unit test result:<br/>
npm test<br/>
<br/>
> nestjs-tasks-mongo@1.0.0 test
> jest

 PASS  test/tasks.service.spec.ts (6.757 s)
  TasksService
    √ should create a task (17 ms)
    √ should get all tasks (lean array) (5 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        8.451 s
Ran all test suites.


get 100 tasks test with postman -> 12ms result
<img width="1354" height="841" alt="image" src="https://github.com/user-attachments/assets/bee5112e-88ba-4d56-83a7-75e660c855ab" />
