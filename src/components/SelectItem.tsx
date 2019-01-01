
import { Select } from 'antd';
import 'antd/dist/antd.css';
import * as React from 'react';

const Option = Select.Option;

export interface IProps {
    eventHander : (value:string, elementId:string) => void,
    elementId : string
  }

class SelectItem extends React.Component<IProps, object> {

   constructor(props: IProps) 
   {
        super(props);
      
      
       // console.log(this.props)
   }
 


  public render() {
    return (
        <Select defaultValue="two" style={{ width: 200 }} onChange = {this.props.eventHander.bind(null, this.props.elementId)}>
            <Option value="one">第一个输入框显示</Option>
            <Option value="two">第二个输入框显示</Option>
       </Select>
    );
  }
}

export default SelectItem;
