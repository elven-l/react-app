import * as React from 'react';
import InputItem from './components/InputItem';
import SelectItem from './components/SelectItem';



interface IHtmlModel {
    type: string,
    id : string
}

interface IState {
     html : IHtmlModel[],
     events : any
}


class App extends React.Component<object, IState> {

  constructor (props:any)
  {
      super(props);
      this.handleEvents =  this.handleEvents.bind(this);
      this.state  = { 
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
      console.log(this.state);
      
  }


  public handleEvents(value: string, elementId: string)
  {
     console.log(value,elementId);
    //  this.state.events.forEach((element:any) => {
          
    //  });
  }



  public render() {

    return (
      <div className="App">
           {
                
                this.state.html.map((item:any) => {
                    if (item.type === 'input') {
                      return <InputItem key={item.id} />
                    } else {
                      return <SelectItem key={item.id} eventHander = {this.handleEvents} elementId= {item.id}  />
                    }  
                })            
                
           }  
      </div>
    );
  }
}

export default App;
