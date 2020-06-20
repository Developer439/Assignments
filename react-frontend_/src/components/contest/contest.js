import React from 'react';
import '../../style/common/common.scss';
import './contest.scss';
import { getContests } from '../../services/apis';

class Contest extends React.Component {

  constructor() {
    super();
    this.state = {
      showLoader: false,
      networkproblem: false,
      contests: [],
      contestsToShow: [],
      contest_types:[],
      contest_types_count:{},
      isAllActive: true,
      active_contest_type:'ALL',
    }
  }

  componentDidMount = () => {
    const that = this
    const result = getContests();
    result.then(function (res) {
      if (res.data) {
        const data = res.data
        let  contests = [], contestsToShow = [], contest_types = [], contest_types_count ={}
        contests = data.contests;
        contestsToShow = contests;
        if(contests && contests.length>0){
          contest_types = contests.map((contest,index) => contest.contest_type)
          contest_types_count =contest_types.reduce((a,b)=>a.set(b,a.get(b)+1||1),new Map)
          contest_types = [...new Set(contest_types)]
        }
        that.setState({ contests, contestsToShow, contest_types, contest_types_count });
      }
      else {
        // that.NetworkError();
      }
    })
      .catch(function (error) {
        // that.NetworkError();
      });
  }

  showContestCategories = (contest_types = []) => {
    const that = this;
    const isAllActive = that.state.isAllActive;
    const active_contest_type = that.state.active_contest_type;
    return  <div className="contest_categories">
      <div className={isAllActive ? "contest_category active" : "contest_category"}>
        <div className="contest_category_name" onClick={() => that.contestTypeFilter(true)} >All({that.state.contests.length})</div>
      </div>
      {
        contest_types.map(function (contest_type, i) {
          const isCurrentlyActive = (!isAllActive && (active_contest_type == contest_type));
          return <div className={isCurrentlyActive ? "contest_category  active" : " contest_category  "}
            key={"sports_" + i}
            onClick={() => that.contestTypeFilter(false, contest_type)}
          >
            <div className="contest_category_name">{contest_type}({that.state.contest_types_count.get(contest_type)})</div>
          </div>
        })
      }
    </div>
  }

  showContestDetails = (contestsToShow = []) => {
    const that = this
    return <div className="contest_details_sec">
        {that.state.isAllActive && <div className="title_sec"> 
                            <div><span className="title">All Contests</span>
                            <span className="sub_title">Differnt types</span></div>
                            <div>Contest Info</div>
                        </div>
        }
        {/* <span className="noC">({contestsToShow.length})</span> */}
      
      <div className="contest_cards">
        {contestsToShow.map(function (contest, i) {
          // const parties = data.match_parties;
          return <div className="contest_card ui_card ui_card2" key={"challenges_" + i}>
            <div className="contest_top">
              <div className="top dispFlex">
                <div className="contest_name"><span className="rupee"></span><span>{contest.name}</span></div>
                <div className="scrNpayOut"> <span className="scrType"><span>{contest.score_type}</span></span>
                      <span className="payoutType"><span>{contest.payout_type}</span></span> 
                </div>
              </div>
              <div className="bottom dispFlex">
                <div><span>{}</span><span>{contest.max_participants} Members</span></div>
                <div><span>{}</span><span>Top {contest.max_winners} wins </span></div>
              </div>
            </div>
            <div className="contest_mid dispFlex">
                <div className="prize_sec">
                PRIZES<div><span className="rupee"></span><span>{contest.prizes}</span><span className="rt_trgnl_sml"></span></div>
                </div>
                <div className="entry_fee">
                ENTRY FEE<div><span className="rupee"></span><span>{contest.fee}</span><span className="rt_trgnl_sml"></span></div>
                </div>
                <div className='btn join'>JOIN</div>
            </div>
            <div className="contest_bot"> 
             {contest.filled_rooms>0 && 
                        <div>{contest.filled_rooms} {' '} Rooms Filled <span className="dot extreme_small"></span> {contest.filling_rooms} Filling </div>
             }{
               contest.filled_rooms==0&&<div>Rooms Available</div>
             }
            </div>
          </div>
        })}

      </div>
    </div>
  }

  
  contestTypeFilter = (isAll, contest_type) => {
    const that = this;
    let isAllActive = true, active_contest_type = 'ALL'
    let contestsToShow = [];
    if (!isAll) {
      isAllActive = false;
      active_contest_type = contest_type
      contestsToShow = that.state.contests.filter((contest) => contest.contest_type == contest_type)
    } else {
      contestsToShow = that.state.contests
    }
    that.setState({ contestsToShow, isAllActive, active_contest_type })
  }


    render() {
      const that = this;
      return <div className="contest">
        <div className="top_sec dispFlex">
          <i className="arrow left back_arrow"
          onClick ={()=>that.props.history.goBack()}
          ></i>
          <div className='header_title dispFlex'> <span>Choose a contest </span>
          <span>01h 58m 17s </span></div>
          {/* {that.showCards(that.state.banners)} */}
        </div>
        <div className="content_sec">
          {that.showContestCategories(that.state.contest_types)}
          {that.showContestDetails(that.state.contestsToShow)}
        </div>
  
      </div>;
    }
  }

  export default Contest;