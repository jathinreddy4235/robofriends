import Card from './Card';
import reportWebVitals from './reportWebVitals';
import { people } from './people';
import SearchBox from './SearchBox'
import { Component } from 'react';


class App extends Component{
    constructor(){
        super();
        this.state = {
        robots : [],
        searchfield: ''
    }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots : users}));
    }
    
    onSearchChange = (event)=>{
        //console.log(event.target.value);
        this.setState({searchfield: event.target.value});
    }
render(){
    const filteredrobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return(
        <div className='bg-green-200'>
            <div className='text-center sticky top-0 z-50 border-b-2 border-black'>
                <h1 className='font-bold text-5xl bg-blue-400 py-5'>Robo App</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                </div>
                <div className='grid grid-cols-4 gap-4 p-5 text-center'>
                    {filteredrobots.map((p,key) =>  <Card key ={key} name = {p.name} id = {p.id} mail = {p.email} />)}
                </div>
        </div>
    );
}
}

export default App;
