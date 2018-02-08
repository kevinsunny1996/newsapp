import React,{Component} from 'react';

/*const Header = () => {
  return <div>Header</div>
}//functional component*/

//class components
class Header extends Component{
  //bind this class to React by extending
  //styles must be defined inside the render method
  constructor(props){
    super(props);
    this.state={
      keywords:'',
      color:'#03a9f4',
    }
  }
  /*this.countryData = [
    { value: 'USA', name: 'USA' },
    { value: 'CANADA', name: 'CANADA' }
];

<select name="country" value={this.state.data.country}>
    {this.countryData.map((e, key) => {
        return <option key={key} value={e.value}>{e.name}</option>;
    })}
</select>*/


  inputChange(event){
    this.setState({keywords:event.target.value})
    this.props.newsSearch(event.target.value)
  }

  handleChange(event){
    this.setState({color:event.target.value});
  }

  render(){
    //styles.header to add style to the header
    this.colorSelect = [
      {id:'1', name:'Red', value:'#ea232d'},
      {id:'2', name:'Yellow', value:'#ea7c23'},
      {id:'3', name:'Blue', value:'#03a9f4'}
    ];
    return(
      <header>
        <div className="logo"
        onCLick={()=>console.log('clicked')}
        >Logo</div>
        <input onChange={this.inputChange.bind(this)}/>
        <select name="color" value={this.state.color} onClick={this.handleChange.bind(this)}>{this.colorSelect.map((e,key) =>{
            return <option key={key} value={e.value}>{e.name}</option>;
          })}
        </select>
      </header>//remove the () to log multiple times
      //define the scope of inputchange with the keyword this
    )
  }

}

export default Header;//send Header to index
