import React from "react"
import money from '../assets/money.png'

/*Positive Reputation: {this.state.posReputation} Negative Reputation: {this.state.negReputation}*/

/*Positive Reputation: {this.state.posReputation} Negative Reputation: {this.state.negReputation}*/

class CEO extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 10000,
            displayBalance: 10000,
            students: 0,
            displayStudents: 0.0,
            campuses: 1,
            seconds: 0,
            displaySeconds: 0.0,
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
    }

    render() {
        return (
            <div className='info'>
                <div className='data'>
                    <p>Total: ${this.state.displayBalance}</p>
                    <p>Students: {this.state.displayStudents}  ($/sec: +{this.state.displayPerHour})</p>
                    <p>Reputation: {this.state.displayReputation}</p>
                    <p>Time played: {this.state.displaySeconds}s</p>
                </div>
                <div className='modifiers'>
                    <ol className='orderedList'>
                        <li><form onSubmit={this.handleMakeMoney}>
                            <button>
                                <img src={money} className="App-logo" alt="" />
                            </button>
                        </form></li>

                        <li><form onSubmit={this.handleBribeChild}>
                            <button>
                                Bribe a child (+ 1 student)
                            </button>
                        </form></li>

                        <p>Cost: {this.state.displayStudentCost}</p>

                        <li><form onSubmit={this.handleMarketing}>
                            <button>
                                Make a marketing video (+ 0-4 students)
                            </button>
                        </form></li>

                        <p> Cost: {this.state.displayMarketingCost}</p>

                        <li><form onSubmit={this.handleSurpriseMechanics}>
                            <button>
                                Legally indulge in surprise mechanics! (+/- 30-50 students). Cost $100 and decreases reputation
                            </button>
                        </form></li>

                        <li><form onSubmit={this.handleDonationsToHungryHuskies}>
                            <button>
                                Donate to hungry huskies. Cost $250
                            </button>
                        </form></li>
                        
                        <li><form onSubmit={this.handleMakeCampuses}>
                            <button>
                                Build a new campus! Cost $10,000
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
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

}

export default CEO
