import React, { Component } from "react";
import classes from "./Graphs.module.css";
import Datapoints from "./Datapoints/Datapoints";
import graph1 from "../../../Media/graph1.JPG";

import graph2 from "../../../Media/graph2.JPG";
class Graphs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          newFeedbacks: 0,
          totalProfit: 0,
          newOrders: 0,
          BrandPopularity: 0
        };
      }
      
  componentWillMount() {
    const getData = () => {
      fetch(`http://www.mocky.io/v2/5d018fbd3100005400ab2968`)
        // .then(res => res.json())
        .then(res => {
            let totals =  {
                newFeedbacks: 500, 
                totalProfit: 15000000, 
                newOrders: 0, 
                BrandPopularity: .99
            }

            console.log(totals.BrandPopularity)
            this.setState({
                newFeedbacks: totals.newFeedbacks ,
          totalProfit: numberWithCommas(totals.totalProfit) ,
          newOrders: totals.newOrders ,
          BrandPopularity: totals.BrandPopularity
            })
        })
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    };

    getData();

  }
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.main}>
          <div className={classes.header}>
            Totals&nbsp; <span className={classes.subheader}>Last Week</span>
          </div>
          <div className={classes.data}>
            <Datapoints data={this.state.newFeedbacks} data2={"News Feedbacks"} />
            <span className={classes.space} />
            <Datapoints data={this.state.totalProfit} data2={"Total Profit"} />
            <span className={`${classes.space} ${classes.hide}`} />
            <Datapoints data={this.state.newOrders} data2={"New Orders"} />
            <span className={classes.space}/>
            <Datapoints data={this.state.BrandPopularity} data2={"Brand Popularity"} />
          </div>
          <div className={classes.graphs}>
            <div className={classes.left}>
              <div className={classes.header2}>
                <div>
                  Site visits &nbsp;{" "}
                  <span className={classes.subheader}> Weekly Stats</span>
                </div>
                <div>
                  <span className={classes.button}>New</span>
                  <span className={classes.button}>Returning</span>
                </div>
              </div>
              <img className={classes.image} src={graph1} />
            </div>
            <div className={classes.right}>
              <div className={classes.header2}>
                <div>
                  Revenue &nbsp;{" "}
                  <span className={classes.subheader}> Monthly Stats</span>
                </div>
                <div className={classes.range}>Filter range &nbsp; ˅</div>
              </div>
              <img className={classes.image} src={graph2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Graphs;
