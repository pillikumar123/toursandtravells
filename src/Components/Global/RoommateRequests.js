import React, {Component} from 'react'
import RoommateRequest from '../components/RoommateRequest'

class RoommateRequests extends Component{
    constructor(){
        super();

        this.state={
            roommateRequests:[],
            loading: false
        }

        this.getRoommateRequests=this.getRoommateRequests.bind(this)
    }

    getRoommateRequests(){
        var apiUrl="/api/roommaterequests";
        fetch(apiUrl)
        .then((response)=>response.json())
        .then((roommateRequests)=>{
            //console.log(JSON.stringify(roommaterequests))
            this.setState({
                roommateRequests,
                loading:true
            })
        })
    }

    componentDidMount(){
        this.getRoommateRequests();
    }

    render(){
        if(!this.state.loading){
            return(<div className="row mb-2">
                        <p>Loading..</p>
                    </div>)
        }
        else 
        {
            return(
                <div className="row mb-2"> 
                    {
                        this.state.roommateRequests.map((roommateRequest)=>{
                            console.log(JSON.stringify(roommateRequest))
                            return <RoommateRequest key={roommateRequest._id} roommateRequest={roommateRequest}/>
                        })
                    }
                </div>
            )
        }
        
    }
}

export default RoommateRequests;