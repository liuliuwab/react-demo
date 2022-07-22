import './App.css';
import { Form, Input, Button } from '@arco-design/web-react';
import Page from "./page"
// Input, Button
import {
  HashRouter,
  Route
} from 'react-router-dom'
// 引入路由提供的link 在页面中用link去替换a标签,a标签的href改成to
const FormItem = Form.Item;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <FormItem label='用户名'>
            <Input placeholder='please enter your username...' />
          </FormItem>
          <FormItem label='密码'>
            <Input placeholder='please enter your post...' />
          </FormItem>
          {/* <FormItem wrapperCol={{ offset: 5 }}> */}
          {/* <Checkbox>I have read the manual</Checkbox> */}
          {/* </FormItem> */}
          <FormItem wrapperCol={{ offset: 5 }}>
            <Button type='primary' status='warning'>提交</Button>
          </FormItem>
          <HashRouter>
            {/* <Link exact to="./page">跳转Page</Link> */}
            <Route path="/page" component={Page}/>
          </HashRouter>
        </Form>
      </header>
    </div>
  );
}

export default App;
