import { Menu, Button, Dropdown, Checkbox, message } from "antd";
import { MenuOutlined, DeleteOutlined } from "@ant-design/icons";
import "./index.css";

const TaskContainer = ({ task, note }) => {
  function onChange(e) {
    e.target.checked
      ? message.success("Task checked")
      : message.success("Task unchecked");
  }

  function handleMenuClick(e) {
    message.success("Task deleted");
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<DeleteOutlined />}>
        Delete task
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="flex flex-col gap-5 p-6 rounded border bg-light_container dark:bg-dark_container border-light_border dark:border-dark_border">
      <header className="w-full flex items-start justify-between">
        <Checkbox onChange={onChange}>
          <h4 className="text-lg text-semibold break-normal sm:break-words md:break-all lg:truncate xl:break-normal pl-3 m-0 text-light_primary dark:text-dark_primary">
            {task}
          </h4>
        </Checkbox>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button type="link" shape="circle" icon={<MenuOutlined />} />
        </Dropdown>
      </header>
      <div className="w-full py-2 px-4 h-12 overflow-y-auto scrolling-auto rounded bg-light_sub_container dark:bg-dark_sub_container border border-light_border dark:border-dark_border">
        <p className="text-light_tertiary dark:text-dark_tertiary font-normal m-0">
          {note}
        </p>
      </div>
    </div>
  );
};

export default TaskContainer;
