import * as React from 'react';
import InputItem from './components/InputItem';
import SelectItem from './components/SelectItem';

export interface IState {
     html : Array<T>
}

class App extends React.Component<object, IState> {

  constructor (props:any)
  {
      super(props);
      this.state = { 
          html : [
            {
              type : "select",
              id   : "backfkdfjk"
            },
            {
              type : "input",
              id   : "sdfhgdfga"
            },
            {
              type : "input",
              id   : "hjdtghjkyj"
            }
          ]
      }
  }

  public render() {
    const html = this.state.html;
    
    return (
      <div className="App">
           {console.log(html)
                html.forEach(function (item:object) {
                        if (item.type ='input'){
                            return  <InputItem />
                        }  
                        if (item.type ='select'){
                            return   <SelectItem />
                        }    
                })
           }
           
         
          
      </div>
    );
  }
}

export default App;
