import React, { useState, useReducer, useEffect } from 'react';
import { Input, Radio, Form, Button, message, Drawer } from 'antd';
import HandleStorage from '~/util/localStorage.js';
import { HandleTime } from '~/util/HandleTime.js';
import styles from './note.module.less';

// const list = [
//   {
//     id: '1',
//     content: '加油,努力',
//     date: '04.11',
//     state: 'normal'
//   },
//   {
//     id: '2',
//     content: '明天会更加精彩',
//     date: '04.11',
//     state: 'medium'
//   },
//   {
//     id: '3',
//     content: '世界因为你而更加精彩',
//     date: '04.11',
//     state: 'importent'
//   },
//   {
//     id: '4',
//     content: '朋友加油努力,相信自己你一定行',
//     date: '04.11',
//     state: 'medium'
//   },
//   {
//     id: '5',
//     content: '未来是属于我们的,只要你愿意付出努力,就会获得很多东西',
//     date: '04.11',
//     state: 'importent'
//   }
// ];

function init(inital) {
  return { todolist: inital };
}

function reducer(state, action) {
  switch (action.type) {
    case 'delete': {
      const index = state.todolist.indexOf(action.id);
      state.todolist.splice(index, 1);
      return { todolist: state.todolist };
    }

    case 'add':
      state.todolist.push(action.id);
      return { todolist: state.todolist };
    default:
      return new Error();
  }
}

export default function DateChart() {
  const [form] = Form.useForm();
  const handleStorage = new HandleStorage();
  const handleTime = new HandleTime();
  const { TextArea } = Input;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [state, dispatch] = useReducer(reducer, [], init);
  const [initalList, setInitialList] = useState([]);

  // 打开弹窗
  const showModal = () => {
    setIsModalVisible(true);
  };

  // 清除form内容
  const onReset = () => {
    form.resetFields();
  };

  // 获取弹窗中输入框的内容
  const onfinish = (v) => {
    if (!v.content || !v.radio) {
      message.warn('请完整输入');
      return;
    }

    const rand = Math.floor(Math.random() * 1000);
    const tid = `${handleTime.month()}${handleTime.today()}${rand}`;
    initalList.push({
      id: tid,
      content: v.content,
      state: v.radio,
      date: `${handleTime.month()}.${handleTime.today()}`
    });
    handleStorage.setItem('todolist', initalList);
    onReset();
  };

  // 取消
  const handleCancel = () => {
    onReset();
    setIsModalVisible(false);
  };

  // 选中框
  const onChecking = (e, info) => {
    function deleteItem(id) {
      for (let i = 0; i < initalList.length; i++) {
        if (initalList[i].id === id) {
          initalList.splice(i, 1);
        }
      }
    }
    if (e.target.checked) {
      dispatch({ type: 'add', id: info.id });
      deleteItem(info.id);
      handleStorage.removeItem('todolist', info.id);
    } else {
      dispatch({ type: 'delete', id: info.id });
      initalList.push(info);
      handleStorage.addItem('todolist', info);
    }
  };

  useEffect(() => {
    let ismouted = false;
    if (!ismouted) {
      setInitialList(handleStorage.getItem('todolist') || []);
    }

    () => {
      ismouted = true;
    };
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <p className={styles.appName}>待办事项</p>
        <div className={styles.addIcon} onClick={() => showModal()}>
          <p></p>
        </div>
      </section>
      <hr />
      <section className={styles.mainContent}>
        {initalList.map((item) => (
          <div className={styles.todolist} key={item.id + item.content}>
            <input type="checkbox" className={styles.checkBox} onChange={(e) => onChecking(e, item)} />
            <p
              className={styles.content}
              data-state={item.state}
              style={{ textDecorationLine: state.todolist.includes(item.id) ? 'line-through' : '' }}
            >
              {item.content}
            </p>
            <p className={styles.date}>{item.date}</p>
          </div>
        ))}

        {/* <div className={styles.todolist} key={item.id + item.content}>
          <input type="checkbox" className={styles.checkBox} />
          <p className={styles.content}>今天任务完成了吗?</p>
          <p className={styles.date}>04.22</p>
        </div> */}
      </section>

      <Drawer title="待办事项" placement="right" width={500} onClose={handleCancel} visible={isModalVisible}>
        <Form name="addTodolist" form={form} onFinish={onfinish}>
          <Form.Item label="任务内容" name="content">
            <TextArea allowClear showCount placeholder="你今天的任务完成了吗" maxLength={50} />
          </Form.Item>
          <Form.Item label="任务状态" name="radio">
            <Radio.Group>
              <Radio value="normal">普通</Radio>
              <Radio value="medium">中等</Radio>
              <Radio value="importent">紧急</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
