import React, { useEffect, useState } from 'react';
import Tag from '../../components/Tag/';
import FormControl from '../../components/FormControl/';
import button_shorten from '../../assets/button_shorten.svg';
import arrow_down from '../../assets/arrow_down.svg';
import red_check from '../../assets/red_check.svg';
import black_plus from '../../assets/black_plus.svg';
import launch_arrow from '../../assets/launch_arrow.svg';
import cyan_plus from '../../assets/cyan-plus.svg';
import blue_plus from '../../assets/blue-plus.svg';
import purple_plus from '../../assets/purple-plus.svg';
import StatsInfo from '../../components/StatsInfo/';
import Chart from 'react-apexcharts';
import chartOptions from '../../options/chart';
import './style.scss';

class Index2 extends React.Component {
  state: any;
  constructor(props: object) {
    super(props);
    this.state = chartOptions;


  }

  render() {
    return (
      <>
        <section className="section">
          <div className="article">
            <h1>DASHBOARD</h1>
            <div className="section__form-controls">
              <div className="section__form-controls--first" >
                <FormControl placeholder="ENTER YOUR LONG URL HERE" label="DESTINATION URL" />
              </div>
              <div className="section__form-controls--last" >
                <FormControl placeholder="found.ee" label="DOMAINS" buttonIcon={<img src={button_shorten} alt="button_shorten" />} helpIcon={<img src={arrow_down} alt="arrow_down" />} />
              </div>
            </div>
            <div>
              <Tag active icon={<img src={red_check} alt="red_check" />}>SHORT LINKS</Tag>
              <Tag icon={<img src={black_plus} alt="red_check" />}>GEO LINKS</Tag>
              <Tag icon={<img src={black_plus} alt="red_check" />}>MULTISTORE</Tag>
            </div>
            <div className="growth-area">
              <div className="growth-area__text">
                <h1>AUDIENCE GROWTH</h1>
                <div>
                  <b>Double your audience</b>
                </div>
                <div>
                  <span>for as little as $25.</span>
                </div>
                <div>
                  <span>Launch ads now. <img src={launch_arrow} alt="launch_arrow" /></span>
                </div>
              </div>
              <div className="growth-area__stats">
                <StatsInfo icon={<img src={cyan_plus} alt="cyan_plus" />} rate={357} >Spotify Listeners</StatsInfo>
                <StatsInfo icon={<img src={blue_plus} alt="blue_plus" />} rate={315} >Ticket Buyers</StatsInfo>
                <StatsInfo icon={<img src={purple_plus} alt="purple_plus" />} rate={432} >Music Purchasers</StatsInfo>
              </div>
            </div>
            
          </div>
          <div className="absolute-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="area"
                width="100%"
              />
            </div>
        </section>
      </>
    );
  }
}


const Index: React.FC = () => {
  return (
    <>
      <h1>DASHBOARD</h1>
      <div style={{ width: '70%', paddingRight: '68px', display: 'inline-block' }}>
        <FormControl placeholder="ENTER YOUR LONG URL HERE" label="DESTINATION URL" />
      </div>
      <div style={{ width: '30%', display: 'inline-block' }}>
        <FormControl placeholder="found.ee" label="DOMAINS" buttonIcon={<img src={button_shorten} alt="button_shorten" />} helpIcon={<img src={arrow_down} alt="arrow_down" />} />
      </div>
      <div className="tags">
        <Tag active icon={<img src={red_check} alt="red_check" />}>SHORT LINKS</Tag>
        <Tag icon={<img src={black_plus} alt="red_check" />}>GEO LINKS</Tag>
        <Tag icon={<img src={black_plus} alt="red_check" />}>MULTISTORE</Tag>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: 227, display: 'inline-block' }} className="growth">
          <h1>AUDIENCE GROWTH</h1>
          <div>
            <b>Double your audience</b>
          </div>
          <div>
            <span>for as little as $25.</span>
          </div>
          <div>
            <span>Launch ads now. <img src={launch_arrow} alt="launch_arrow" /></span>
          </div>
        </div>
        <div style={{ marginLeft: 280, marginTop: 126, width: 500, display: 'inline-block' }}>
          <StatsInfo icon={<img src={cyan_plus} alt="cyan_plus" />} rate={357} >Spotify Listeners</StatsInfo>
          <StatsInfo icon={<img src={blue_plus} alt="blue_plus" />} rate={315} >Ticket Buyers</StatsInfo>
          <StatsInfo icon={<img src={purple_plus} alt="purple_plus" />} rate={432} >Music Purchasers</StatsInfo>
        </div>
        <div id="#chart" style={{ width: '100%', height: 400, background: 'red' }}></div>
      </div>
    </>
  );
}

export default Index2;
