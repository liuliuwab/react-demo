// import './App.css';
// import { Form, Input, Button } from '@arco-design/web-react';
// import Page from "./page"
// // Input, Button
// import { BrowserRouter, Routes ,Route} from 'react-router-dom'
// const jumpTo = () => {
//   const w = window.open('_black') //这里是打开新窗口
//   // let url = '这里是url，可以写../../index，也可以写http://www.baidu.com'
//   let url = '/page'
//   w.location.href = url //这样就可以跳转了
// }
// // 引入路由提供的link 在页面中用link去替换a标签,a标签的href改成to
// const FormItem = Form.Item;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Form>
//           <FormItem label='用户名'>
//             <Input placeholder='please enter your username...' />
//           </FormItem>
//           <FormItem label='密码'>
//             <Input placeholder='please enter your post...' />
//           </FormItem>
//           {/* <FormItem wrapperCol={{ offset: 5 }}> */}
//           {/* <Checkbox>I have read the manual</Checkbox> */}
//           {/* </FormItem> */}
//           <FormItem wrapperCol={{ offset: 5 }}>
//             <Button type='primary' status='warning'>提交</Button>
//             <Button onClick={() => { jumpTo() }}></Button>
//           </FormItem>
//           <BrowserRouter>
//             {/* <Link exact to="./page">跳转Page</Link> */}
//             {/* <Route path="/page" component={Page}/> */}
//             {/* <Button onClick={()=>{jumpTo()}}></Button> */}
//           </BrowserRouter>
//           <Routes>
//           <Route path="/page" element={<Page />} />
//           </Routes>
//         </Form>
//       </header>
//     </div>
//   );
// }

// export default App;
import { Form, Input, Button } from '@arco-design/web-react';
import './App.css';
import Page from "./page"
import { BrowserRouter, Route, Routes } from "react-router-dom"
const FormItem = Form.Item;

function App() {

  // return <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/dashboard" element={<Dashboard />} />
  //     <Route path="/page" element={<Page />} />
  //   </Routes>
  // </BrowserRouter>
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
            {/* <Button onClick={() => { jumpTo() }}></Button> */}
          </FormItem>
        </Form>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


// const Home = () => {
//   return <div>hello world</div>
// }

const About = () => {
  return <div>这里是卡拉云的主页</div>
}

const Dashboard = () => {
  return <div>今日活跃用户: 42</div>
}
export default App;
