import React from 'react';
import '../../style/common/common.scss';
import './wallet.scss';
import logo from '../../logo.svg';
import { getWalletInfo } from '../../services/apis';


class Wallet extends React.Component {


  constructor() {
    super();
    this.state = {
      showLoader: false,
      networkproblem: false,
      wallet_balance: 0,
      transactions: [],
      withdrawals: [],
      withdrawal_info: {
        's': { count: 0, amt: 0 },
        'f': { count: 0, amt: 0 },
        'ip': { count: 0, amt: 0 },
      }
    }
  }

  componentDidMount = () => {
    const that = this
    const result = getWalletInfo();
    result.then(function (res) {
      if (res.data) {
        const data = res.data
        console.log(data)
        let { wallet_balance, transactions, withdrawals, withdrawal_info } = that.state
        let wallet_balanceL = data.wallet_balance, transactionsL = data.transactions, withdrawalsL = data.withdrawals;
        if (wallet_balanceL && wallet_balanceL > 0) wallet_balance = wallet_balanceL;
        if (transactionsL && transactionsL.length > 0) transactions = transactionsL;
        if (withdrawalsL && withdrawalsL.length > 0) {
          withdrawals = withdrawalsL;
          withdrawals.forEach(withdrawal => {
            if (withdrawal.status == 'in_progress') {
              withdrawal_info.ip.count++; withdrawal_info.ip.amt += withdrawal.amount;
            }
            else if (withdrawal.status == 'success') {
              withdrawal_info.s.count++; withdrawal_info.s.amt += withdrawal.amount;
            }
            else if (withdrawal.status == 'failed') {
              withdrawal_info.f.count++; withdrawal_info.f.amt += withdrawal.amount;
            }
          });
        }
        that.setState({ wallet_balance, transactions, withdrawals, withdrawal_info });
      }
      else {
        // that.NetworkError();
      }
    })
      .catch(function (error) {
        // that.NetworkError();
      });
  }

  getTransactionCards = (transactions = [], transaction_type) =>
    (<div className={"transactions_sec " + transaction_type}>
      {
        transactions.map((transaction, key) => {
          const txnTxt = this.getTransactionTxt(transaction)
          return <div className={txnTxt !== '' ? "ui_card dispFlex txn_card" : "dispNone"} key={'transactions_sec' + ' ' + key}>
            <div className="dispFlex top">
              <div className="amt_sec"><span className="rupee"></span>{transaction.amount}<span>&nbsp;</span></div>
              <div className="contest_category_img"> <img src={logo}></img> </div>
            </div>
            <div className="txn_det_txt"> {txnTxt}</div>
          </div>
        }
        )}
    </div>)


  showTransactons = (transactions = []) => {
    const that = this
    let walletTransactions = transactions.filter((transaction) => transaction.type != "join_contest"),
      contestTransactions = transactions.filter((transaction) => transaction.type == "join_contest");
    console.log(transactions)
    return (
      <div>
        {that.getTransactionCards(walletTransactions, 'wallet')}
        {that.getTransactionCards(contestTransactions, 'contest')}
      </div>
    )

  }

  getTransactionTxt = (transaction) => {
    let that = this
    let txnTxt = '', txnStatus = '';
    switch (transaction.type) {
      case "add_to_wallet": txnTxt = "Add money "; txnStatus = that.getTransactionStatus(transaction.status); break;
      case "remove_from_wallet": txnTxt = "Remove money "; txnStatus = that.getTransactionStatus(transaction.status); break;
      case "join_contest": txnTxt = "Join a paid Contest"; break;
    }
    return txnTxt.trim() != '' ? txnTxt + ' ' + txnStatus : '';
  }

  getTransactionStatus = (status) => status == 'success' ? "Successful" : "Unsuccessful";


  render() {
    const that = this
    console.log(that.state)
    return (<div className="wallet">
      <div className="top_sec center dispFlex">
        <i className="arrow left back_arrow"
          onClick={() => that.props.history.goBack()}
        ></i>
        <div className='header_title dispFlex'> Trasaction History
        </div>
      </div>
      <div className="content_sec">
        <div className="dispFlex balance_card">
          <div className="top">TOTAL BALANCE<span>&nbsp;</span> <span className="rupee"></span>{that.state.wallet_balance}</div>
          <div className="bottom">{that.state.withdrawal_info.ip.count} withdrawal in progress</div>
        </div>
        <div className="ui_card dispFlex wip_card">
          <div className="contest_category_img"> <img src={logo}></img> </div>
          <div className="details_sec">
            <div className="top">
              <span className="rupee"></span>{that.state.withdrawal_info.ip.amt}<span>&nbsp;</span> withdrawal in progress
              </div>
            <div className="bottom"> withdrawan from your winnings</div>
          </div>
        </div>
        {that.showTransactons(that.state.transactions)}
        {/* {that.showContestCategories(that.state.contest_types)}
          {that.showContestDetails(that.state.contestsToShow)} */}
      </div>
    </div>)
  }
}

export default Wallet;