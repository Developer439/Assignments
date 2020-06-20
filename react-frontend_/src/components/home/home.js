import React from 'react';
import '../../style/common/common.scss';
import './home.scss';
import inr_ico from '../../img/common/rupee-indian.svg';
import timer_ico from '../../img/common/timer.svg';
import logo from '../../logo.svg';
import { getHomeData } from '../../services/apis';
import { date_diff } from '../common/date';
import { redirectToTargetPush } from '../common/url';


class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      showLoader: false,
      networkproblem: false,
      banners: [],
      sports: [],
      challenges: [],
      challengesToShow: [],
      isAllActive: true,
      active_sports: { id: 0, name: '' }
    }
  }

  componentDidMount = () => {
    const that = this
    const result = getHomeData();
    result.then(function (res) {
      if (res.data) {
        const data = res.data
        let banners = [], sports = [], challenges = [], challengesToShow = [];
        banners = data.banners;
        sports = data.sports;
        challenges = data.challenges;
        challengesToShow = challenges;
        that.setState({ banners, sports, challenges, challengesToShow });
      }
      else {
        // that.NetworkError();
      }
    })
      .catch(function (error) {
        // that.NetworkError();
      });
  }

  showCards = (banners = []) => {
    let that = this
    return <div className="cards_sec">
      {
        banners.map(function (banner, i) {
          return <div key={"banners_" + i}
            onClick={() => {
              if (banner.redirect && banner.route)
                redirectToTargetPush(that.props.history, banner.route)
            }}
            className="ui_card ui_card1"> <img src={banner.img_url}></img> </div>
        })}

    </div>
  }

  showContestCategories = (sports = []) => {
    const that = this;
    const isAllActive = that.state.isAllActive;
    const active_sports_id = that.state.active_sports.id;
    return <div className="contest_categories">
      <div className={isAllActive ? "contest_category active" : "contest_category"}>
        <div className="contest_category_img">
          <img src={logo}></img>
        </div>
        <div className="contest_category_name" onClick={() => that.sportsFilter(true)} >All</div>
      </div>
      {
        sports.map(function (sport, i) {
          const isCurrentlyActive = (!isAllActive && (active_sports_id == sport.sports_id));
          return <div className={isCurrentlyActive ? "contest_category  active" : " contest_category  "}
            key={"sports_" + i}
            onClick={() => that.sportsFilter(false, sport.sports_id, sport.sports_name)}
          >
            <div className="contest_category_img">
              <img className={!isCurrentlyActive ? "inactive" : ""} src={sport.sports_img_url}></img>
              <img className={isCurrentlyActive ? "inactive" : ""} src={sport.sports_unselected_img_url}></img>
            </div>
            <div className="contest_category_name">{sport.sports_name}</div>
          </div>
        })
      }
    </div>
  }

  showContestDetails = (challenges = []) => {
    const that = this
    return <div className="contest_details_sec">
      <div className="title"> {that.state.isAllActive ? 'All' : that.state.active_sports.name}
        <span className="noC">({that.state.challengesToShow.length})</span>
      </div>
      <div className="contest_cards">
        {challenges.map(function (data, i) {
          const parties = data.match_parties;
          return <div className="contest_card ui_card ui_card2" key={"challenges_" + i}>
            <div className="contest_top">{data.game_mode}</div>
            <div className="contest_mid">
              <img className="party_img" src={parties[0].party_img_url}></img>
              <div className="match_details">
                <div className="challenge_name">
                  <span className="party_short_name txt_right">
                    {(parties[0].meta_info && parties[0].meta_info.party_short_name) ? parties[0].meta_info.party_short_name : parties[0].party_name}
                  </span><span> VS </span><span className="party_short_name txt_left">
                    {(parties[1].meta_info && parties[1].meta_info.party_short_name) ? parties[1].meta_info.party_short_name : parties[1].party_name}</span>
                </div>
                <div className="challenge_details">
                  <div className="desc txt_right">{data.desc}</div>
                  <div className="live_dot"><div></div></div>
                  <div className="txt_left">Live Score Updates</div>
                </div>
              </div>
              <img className="party_img right" src={parties[1].party_img_url} ></img>
            </div>
            <div className="contest_bot">
              <div className="money_sec">
                <img className="curncy_ico" src={inr_ico}></img>
                <div className="prize_money">{data.prize_money}</div>
              </div>
              <div className="time_sec">
                <img className="timer_ico" src={timer_ico}></img>
                <div className="start_time">{that.showTimer(data.start_time)}</div>
              </div>
            </div>
          </div>
        })}

      </div>
      <div className="contest_cards">
        {challenges.map(function (data, i) {
          const parties = data.match_parties;
          return <div className="contest_card ui_card ui_card2" key={"challenges__" + i}>
            <div className="contest_top">{data.game_mode}</div>
            <div className="contest_mid">
              <img className="party_img" src={parties[0].party_img_url}></img>
              <div className="match_details">
                <div className="challenge_name">
                  <span className="party_short_name txt_right">
                    {(parties[0].meta_info && parties[0].meta_info.party_short_name) ? parties[0].meta_info.party_short_name : parties[0].party_name}
                  </span><span> VS </span><span className="party_short_name txt_left">
                    {(parties[1].meta_info && parties[1].meta_info.party_short_name) ? parties[1].meta_info.party_short_name : parties[1].party_name}</span>
                </div>
                <div className="challenge_details">
                  <div className="desc txt_right">{data.desc}</div>
                  <div className="live_dot"><div></div></div>
                  <div className="txt_left">Live Score Updates</div>
                </div>
              </div>
              <img className="party_img right" src={parties[1].party_img_url} ></img>
            </div>
            <div className="contest_bot">
              <div className="money_sec">
                <img className="curncy_ico" src={inr_ico}></img>
                <div className="prize_money">{data.prize_money}</div>
              </div>
              <div className="time_sec">
                <img className="timer_ico" src={timer_ico}></img>
                <div className="start_time">{that.showTimer(data.start_time)}</div>
              </div>
            </div>
          </div>
        })}

      </div>
    </div>
  }

  sportsFilter = (isAll, sports_id, sports_name) => {
    const that = this;
    let isAllActive = true, active_sports = { id: 0, name: '' }
    let challengesToShow = [];
    if (!isAll) {
      isAllActive = false;
      active_sports.id = sports_id;
      active_sports.name = sports_name;
      challengesToShow = that.state.challenges.filter((challenge) => challenge.sports_id == sports_id)
    } else {
      challengesToShow = that.state.challenges
    }
    that.setState({ challengesToShow, isAllActive, active_sports })
  }

  showTimer = (start_time) => {
    const dt_diff = date_diff(start_time);
    return dt_diff.hrs + 'h ' + (dt_diff.mins % 60) + 'm';
  }

  render() {
    const that = this;
    return <div className="home">
      <div className="top_sec">
        <div className='header_title center'> Home </div>
        {that.showCards(that.state.banners)}
      </div>
      <div className="content_sec">
        {that.showContestCategories(that.state.sports)}
        {that.showContestDetails(that.state.challengesToShow)}
      </div>

    </div>;
  }
}

export default Home;