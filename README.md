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
> nestjs-tasks-mongo@1.0.0 test<br/>
> jest<br/>
<br/>
 PASS  test/tasks.service.spec.ts (6.757 s)<br/>
  TasksService<br/>
    √ should create a task (17 ms)<br/>
    √ should get all tasks (lean array) (5 ms)<br/>
<br/>
Test Suites: 1 passed, 1 total<br/>
Tests:       2 passed, 2 total<br/>
Snapshots:   0 total<br/>
Time:        8.451 s<br/>
Ran all test suites.<br/>
<br/>
<br/>
get 100 tasks test with postman -> 12ms result
<br/>
<img width="1354" height="841" alt="image" src="https://github.com/user-attachments/assets/bee5112e-88ba-4d56-83a7-75e660c855ab" />
