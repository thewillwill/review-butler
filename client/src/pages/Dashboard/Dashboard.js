import React, { Component } from "react";
import Moment from 'moment';
import API from "../../utils/API";
import StarIcon from "../../components/StarIcon";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine, Label, BarChart, Bar } from "recharts";
//import Graph from "../../components/Graph";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      selectedReview: null
    };
    this.loadReviews();
  }

  loadReviews() {
    API.getReviews()
      .then(res =>
        this.setState({
          reviews: res.data,
          selectedReview: res.data[0]
        })

      )
      .catch(err => console.log(err));
  }

  render() {
    var data = [];
    var totalRating = 0;
    for (var i = 0; i < this.state.reviews.length; i++) {
      totalRating += this.state.reviews[i].rating;
      var mini = new Object();
      mini.name = i + 1;
      mini.value = this.state.reviews[i].rating;
      data.push(mini);
    }
    var average = totalRating / this.state.reviews.length;
    var ones = 0;
    var twos = 0;
    var threes = 0;
    var fours = 0;
    var fives = 0;
    for (var j = 0; j < data.length; j++) {
      if(data[j].value == 1) {
          ones++;
      } 
      if(data[j].value == 2) {
        twos++;
      }
      if(data[j].value == 3) {
        threes++;
      }
      if(data[j].value == 4) {
        fours++;
      }
      if(data[j].value == 5) {
        fives++;
      }
    }
    var data2 = [];
    data2.push(
      {name: "1 Star", count: ones}, 
      {name: "2 Stars", count: twos}, 
      {name: "3 Stars", count: threes}, 
      {name: "4 Stars", count: fours}, 
      {name: "5 Stars", count: fives}
    );
    
    return (
      <div className="float-md-left">
         <div className="dashboard-container full-height">
              <div>Average Star Rating: {average} -- See Green Line</div>
               <LineChart width={1000} height={600} data={data}>
                  <XAxis dataKey="name" >
                    <Label value="Most Recent Reviews" offset={535} position="top" />
                  </XAxis>
                  <YAxis type="number" domain={[0, 'dataMax']} padding={{ top: 50}} scale="linear" >
                    <Label value="Star Rating" offset={5} position="insideLeft" width={20}/>
                  </YAxis>
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                  <ReferenceLine y={average} stroke="green" strokeDasharray="3 3" />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
                <BarChart width={1000} height={600} data={data2}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
         </div>
     </div>
    );
  }
}

export default Dashboard;
