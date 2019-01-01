
import { Input } from 'antd';
import 'antd/dist/antd.css';
import * as React from 'react';


const Search = Input.Search;

interface IProps {
  status : string,
  value : string
}

class InputItem extends React.Component<IProps, object> {

  constructor(props: IProps)
  {
      super(props);
  }
 

  public render() {
          return (
            <Search
                placeholder= {this.props.value}
                style={{ width: 200, display : this.props.status}}
              />   
              );
          
    
  }
}

export default InputItem;
