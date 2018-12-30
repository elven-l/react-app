import * as React from 'react';
import InputItem from './components/InputItem';
import SelectItem from './components/SelectItem';


export interface IState {
     html : any ,
     events : any
}


class App extends React.Component<object, IState> {

  constructor (props:any)
  {
      super(props);
      this.handleEvents.bind(this);
      this.state = { 
          html : [
            {
              type : "select",
              id   : "input-1"
            },
            {
              type : "input",
              id   : "input-2"
            },
            {
              type : "input",
              id   : "input-3"
            }
          ],
          events : [
            {
               change_id : "input-1",
               seletcted : "one",
               target_id : "input-2",
               action : "show"  
            },
            {
              change_id : "input-1",
              seletcted : "two",
              target_id : "input-3",
              action : "hide"  
           }
          ]
      }
  }


  public handleEvents(value:string)
  {
     alert(value);
     
  }



  public render() {
    const html = this.state.html;

    return (
      <div className="App">
           {
                
                html.map((item:any) => {
                    if (item.type === 'input') {
                      return <InputItem key={item.id} />
                    } else {
                      return <SelectItem key={item.id} eventHander = {this.handleEvents} test="hahah"   />
                    }  
                })            
                
           }  
      </div>
    );
  }
}

export default App;
