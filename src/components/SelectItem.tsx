
import { Select } from 'antd';
import 'antd/dist/antd.css';
import * as React from 'react';

const Option = Select.Option;

class SelectItem extends React.Component {
  public render() {
    return (
        <Select defaultValue="two" style={{ width: 200 }}>
            <Option value="one">第一个输入框显示</Option>
            <Option value="two">第一个输入框显示</Option>
       </Select>
    );
  }
}

export default SelectItem;
