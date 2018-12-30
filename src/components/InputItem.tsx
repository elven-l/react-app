
import { Input } from 'antd';
import 'antd/dist/antd.css';
import * as React from 'react';

const Search = Input.Search;



class InputItem extends React.Component<object, object> {

 

  public render() {
    return (
            <Search
              placeholder="input search text"
              style={{ width: 200 }}
            />
    );
  }
}

export default InputItem;
