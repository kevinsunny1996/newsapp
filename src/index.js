//when react is not imported, error is react must be in scope when using jsx react/react-in-jsx-scope
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//external components
import Header from './components/header';
import JSON from './ db.json';
import NewsList from './components/news_list';

//same as var app = function(){
//}
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      news:JSON,
      filtered:JSON
    }
  }

  filterNews(keywords){
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keywords) > -1;
    })
    this.setState({filtered})
  }//same as filtered:filtered

  render(){
    return(
      <div>
        <Header newsSearch={keywords=>this.filterNews(keywords)}/>
        <NewsList news={this.state.filtered}/>
      </div>
    )
  }
}
//pass component<App/> not the variable App
ReactDOM.render(<App/>,document.querySelector('#root'));
