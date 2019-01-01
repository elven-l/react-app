import * as React from 'react';
import InputItem from './components/InputItem';
import SelectItem from './components/SelectItem';



interface IHtmlModel {
    type: string,
    id : string,
    default_status : string
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
            id   : "input-1",
            default_status : "show"
          },
          {
            type : "input",
            id   : "input-2",
            default_status : "none"
          },
          {
            type : "input",
            id   : "input-3",
            default_status : "none"
          }
        ],
        events : [
          {
             change_id : "input-1",
             seletcted : "one",
             target_id : "input-2",
             action : "block"  
          },
          {
            change_id : "input-1",
            seletcted : "two",
            target_id : "input-3",
            action : "block"  
         }
        ]
      }

      
  }


  public handleEvents(elementId: string, value: string)
  {
      
      this.state.events.forEach((element:any) => { 
      
           if (element.change_id === elementId && element.seletcted === value) {
            
                const newHtml = this.state.html.map((htmlItem)=> {
                   if(htmlItem.id === element.target_id ) {
                      htmlItem.default_status = element.action;
                      return htmlItem;
                   } else {
                     return htmlItem;
                   }
               });
               this.setState({html: newHtml});
                
           }
           return false;
      });
  }



  public render() {

    return (
      <div className="App">
           {
                
                this.state.html.map((item:any) => {
                    if (item.type === 'input') {
                      return <InputItem key={item.id} status = {item.default_status} value = {item.id} />
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
