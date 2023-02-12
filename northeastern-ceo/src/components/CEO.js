import React from "react"
import money from '../assets/money.png'
import video from '../assets/video copy.png'
import dice from '../assets/dice copy.png'
import hoosky from '../assets/Hoosky.png'
import campus from '../assets/school.png'
import bribery from '../assets/Bribery.png'

/*Positive Reputation: {this.state.posReputation} Negative Reputation: {this.state.negReputation}*/

/*Positive Reputation: {this.state.posReputation} Negative Reputation: {this.state.negReputation}*/

class CEO extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 1,
            displayBalance: 1,
            students: 0,
            displayStudents: 0.0,
            campuses: 1,
            seconds: 0,
            displaySeconds: 0.0,
            autoBribe: false,
            displayAutoBribe: "OFF",
            displayStudentCost: 5.0,
            reputation: 0,
            displayReputation: 0,
            posReputation: 0,
            negReputation: 0,
            balanceRepMultiplier: 0.0001,
            studentRepMultiplier: 0.1,
            studentOverflow: 0, 
            studentOverflowMulitplier: 0.0012,
            numDonations: 0,
            displayMarketingCost: 12.0,
            displayPerHour: 0
        };
        // this.handleChange = this.handleChange.bind(this);
        this.handleMakeMoney = this.handleMakeMoney.bind(this);
        this.handleBribeChild = this.handleBribeChild.bind(this);
        this.handleMarketing = this.handleMarketing.bind(this);
        this.handleSurpriseMechanics = this.handleSurpriseMechanics.bind(this);
        this.handleDonationsToHungryHuskies = this.handleDonationsToHungryHuskies.bind(this);
        this.handleMakeCampuses = this.handleCampuses.bind(this);
        this.handleAutoBribe = this.handleAutoBribe.bind(this);
    }

    render() {
        return (
            <div className='info'>
                <div className='data'>
                    <p>Total: ${this.state.displayBalance}</p>
                    <p>Students: {this.state.displayStudents}  ($/sec: +{this.state.displayPerHour})</p>
                    <p>Reputation: {this.state.displayReputation}</p>
                    <p>Time played: {this.state.displaySeconds}s</p>
                    <form onSubmit={this.handleAutoBribe}>
                    <button title="Auto bribes child when there is enough total $$$">
                        AutoBribe: {this.state.displayAutoBribe}
                    </button>
                </form>
                </div>
                <div className='modifiers'>
                    <ol className='orderedList'>
                        <li><form onSubmit={this.handleMakeMoney}>
                            <button>
                                <img src={money} className="App-logo" alt="" />
                                <p className="text"> $
                                <br></br>
                                Cost: 0
                                </p>
                            </button>
                        </form></li>

                        <li><form onSubmit={this.handleBribeChild}>
                            <button>
                                <img src={bribery} className="App-logo" alt="" />
                                <p className="text">Bribe a child (+ 1 student)
                                <br></br>
                                Cost: {this.state.displayStudentCost}
                                </p>
                            </button>
                        </form></li>

                        <li><form onSubmit={this.handleMarketing}>
                            <button>
                                <img src={video} className="App-logo" alt="" />
                                <p className="text">Make a marketing video (+ 0-4 students)
                                    <br></br>
                                    Cost: {this.state.displayMarketingCost}
                                </p>
                            </button>
                        </form></li>

                        <li><form onSubmit={this.handleSurpriseMechanics}>
                            <button>
                                <img src={dice} className="App-logo" alt="" />
                                <p className="text">Legally indulge in surprise mechanics! 
                                    <br></br>
                                    Cost $100</p>
                            </button>
                        </form></li>

                        <li><form onSubmit={this.handleDonationsToHungryHuskies}>
                            <button>
                                <img src={hoosky} className="App-logo" alt="" />
                                <p className="text">Donate to hungry huskies.
                                    <br></br> 
                                    Cost $250</p>
                            </button>
                        </form></li>
                        
                        <li><form onSubmit={this.handleMakeCampuses}>
                            <button>
                                <img src={campus} className="App-logo" alt="" />
                                <p className="text">Build a new campus! 
                                    <br></br>
                                    Cost $10,000</p>
                            </button>
                        </form></li>
                    </ol>
                </div>
            </div>
        );
    }


    handleMakeMoney(e) {
        e.preventDefault();
        this.setState(state => ({
            balance: state.balance + 1,
            displayBalance: parseInt(state.balance + 1),
        }));
    }

    // handles bribery of children
    handleBribeChild(e) {
        e.preventDefault();
        let expo = this.state.displayStudents * 0.15;
        if (this.state.balance < this.state.displayStudentCost) {
            return;
        }
        let newStudents = 1;
        this.setState(state => ({
            balance: state.balance - state.displayStudentCost,
            students: state.students + newStudents,
            studentOverflow : state.students > state.campuses * 1000 ? state.studentOverflow + 1 : state.studentOverflow,
            displayBalance : parseInt(state.balance - state.displayStudentCost),
            displayStudents : parseInt(state.students + newStudents),
        }));

        let multiplier = (this.state.reputation > 10 ? 0.1 * Math.pow(0.9, 0.1 * this.state.reputation - 1): 0.1); //(Math.random() / 2);
        let newCost = Math.floor(this.state.displayStudentCost * (1 + multiplier));
        this.setState(state => ({
            displayStudentCost: parseInt(newCost) === state.displayStudentCost ? state.displayStudentCost + 1 : parseInt(newCost),
        }))
    }

    handleBribeChild2() {
        let expo = this.state.displayStudents * 0.15;
        if (this.state.balance < this.state.displayStudentCost) {
            return;
        }
        let newStudents = 1;
        this.setState(state => ({
            balance: state.balance - state.displayStudentCost,
            students: state.students + newStudents,
            studentOverflow : state.students > state.campuses * 1000 ? state.studentOverflow + 1 : state.studentOverflow,
            displayBalance : parseInt(state.balance - state.displayStudentCost),
            displayStudents : parseInt(state.students + newStudents),
        }));

        let multiplier = (this.state.reputation > 10 ? 0.1 * Math.pow(0.9, 0.1 * this.state.reputation - 1): 0.1); //(Math.random() / 2);
        let newCost = Math.floor(this.state.displayStudentCost * (1 + multiplier));
        this.setState(state => ({
            displayStudentCost: parseInt(newCost) === state.displayStudentCost ? state.displayStudentCost + 1 : parseInt(newCost),
        }))
    }

    handleAutoBribe(e) {
        e.preventDefault();
        if(this.state.autoBribe) {
            this.setState(state => ({
                autoBribe: false,
                displayAutoBribe: "OFF"
            }))
        } else {
            this.setState(state => ({
                autoBribe: true,
                displayAutoBribe: "ON"
            }))
        }
    }


    handleCampuses(e) {
        e.preventDefault();
        if (this.state.balance < 10000) {
            return;
        }
        let newStudents = 100;
        this.setState(state => ({
            balance: state.balance - 10000,
            students: state.students + newStudents,
            displayBalance : parseInt(state.balance - 10000),
            campuses : state.campuses + 1,
            displayStudents : parseInt(state.students + newStudents)
        }))
    }


    handleMarketing(e) {
        e.preventDefault();
        if (this.state.balance < this.state.displayMarketingCost) {
            return;
        }
        let newStudents = Math.floor(Math.random() * 4);
        let newCost = Math.floor(this.state.displayMarketingCost * (1 + (this.state.reputation > 10 ? 0.2 * Math.pow(0.9, 0.1 * this.state.reputation - 1): 0.2)));
        if (this.state.displayMarketingCost < 30) {
            this.setState(state => ({
                balance: state.balance - state.displayMarketingCost,
                students: state.students + newStudents,
                studentOverflow: state.students > state.campuses * 1000 ? state.studentOverflow + newStudents : state.studentOverflow,
                displayBalance : parseInt(state.balance - 10),
                displayStudents : parseInt(state.students + newStudents),
                displayMarketingCost : state.displayMarketingCost + 2
            }));
        } else {
            this.setState(state => ({
                balance: state.balance - state.displayMarketingCost,
                students: state.students + newStudents,
                studentOverflow: state.students > state.campuses * 1000 ? state.studentOverflow + newStudents : state.studentOverflow,
                displayBalance : parseInt(state.balance - state.displayMarketingCost),
                displayStudents : parseInt(state.students + newStudents),
                displayMarketingCost : newCost
            }));
        }
    }

    handleSurpriseMechanics(e) {
        e.preventDefault(); // DON'T remove this
        if (this.state.balance < 100) {
            return;
        }
        let newStudents = Math.floor(Math.random() * 80) - 30;
        let projectedUpdatedStudentCount = this.state.students + newStudents
        if (projectedUpdatedStudentCount < 0) {
            projectedUpdatedStudentCount = 0
        }
        this.setState(state => ({
            balance: state.balance - 100,
            students: projectedUpdatedStudentCount,
            studentOverflow: state.students > state.campuses * 1000 ? state.studentOverflow + projectedUpdatedStudentCount : state.studentOverflow,
            displayBalance: parseInt(state.balance - 100),
            displayStudents: parseInt(projectedUpdatedStudentCount),
            negReputation: state.negReputation + 10,
        }));
    }

    handleDonationsToHungryHuskies(e) {
        e.preventDefault(); // DON'T remove this
        if (this.state.balance < 250) {
            return;
        }
        this.setState(state => ({
            balance: state.balance - 250,
            displayBalance : parseInt(state.balance - 250),
            numDonations : state.numDonations + 1
        }));
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 0.1,
            displaySeconds: parseInt(state.seconds + 0.1),
            //studentRepMultiplier: state.reputation < -10 ? 0.1 * Math.pow(0.9, state.reputation + 10): 0.1,
            posReputation: state.balance * state.balanceRepMultiplier + state.displayStudents * state.studentRepMultiplier + state.numDonations * 5 + Math.floor(state.reputation / 1000),
            negReputation : state.negReputation + state.studentOverflow * state.studentOverflowMulitplier,
            reputation: state.posReputation - state.negReputation,
            displayReputation: parseInt(state.reputation * 10) / 10,
            displayPerHour : Math.floor(state.displayStudents * 1.15)

        }));
        if (this.state.students > 0) {
            this.setState(state => ({
                balance: state.balance + state.displayPerHour * (state.reputation < -10 ? 0.1 * Math.pow(1.1, 0.1 * state.reputation + 1): 0.1),
                displayBalance: parseInt(state.balance + state.students * (state.reputation < -10 ? 0.1 * Math.pow(1.1, 0.1 * state.reputation + 1): 0.1))
            }));
        }
        if (this.state.autoBribe && (this.state.balance >= this.state.displayStudentCost)) {
            this.handleBribeChild2();
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

}

export default CEO
