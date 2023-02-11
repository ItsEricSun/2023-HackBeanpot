import React from "react"

/*Positive Reputation: {this.state.posReputation} Negative Reputation: {this.state.negReputation}*/

class CEO extends React.Component {
    constructor(props) {
        super(props);
        this.state = { balance: 1, displayBalance: 1.0, students: 0, displayStudents: 0.0, campuses: 1, seconds: 0, displaySeconds: 0.0, reputation: 0, displayReputation: 0, posReputation: 0, negReputation: 0, balanceRepMultiplier: 0.0001, studentRepMultiplier: 0.1, studentOverflow: 0, studentOverflowMulitplier: 0.0012, numDonations: 0};
        //   this.handleChange = this.handleChange.bind(this);
        this.handleMakeMoney = this.handleMakeMoney.bind(this);
        this.handleBribeChild = this.handleBribeChild.bind(this);
        this.handleMarketing = this.handleMarketing.bind(this);
        this.handleSurpriseMechanics = this.handleSurpriseMechanics.bind(this);
        this.handleDonationsToHungryHuskies = this.handleDonationsToHungryHuskies.bind(this);
        this.handleMakeCampuses = this.handleCampuses.bind(this);
    }

    render() {
        return (
            <div>
                <p>${this.state.displayBalance}</p>
                <p>Students: {this.state.displayStudents}  $perHour: +{this.state.displayStudents}</p>
                <p>Reputation: {this.state.displayReputation} Positive Reputation: {this.state.posReputation} Negative Reputation: {this.state.negReputation}</p>
                <p>{this.state.displaySeconds}</p>
                <form onSubmit={this.handleMakeMoney}>
                    <button>
                        Make Money!!
                    </button>
                </form>
                <form onSubmit={this.handleBribeChild}>
                    <button>
                        Bribe a Child (+ 1 student). Cost $5
                    </button>
                </form>
                <form onSubmit={this.handleMarketing}>
                    <button>
                        Make a marketing video (+ 0-4 students). Cost $12
                    </button>
                </form>
                <form onSubmit={this.handleSurpriseMechanics}>
                    <button>
                        Legally indulge in surprise mechanics! (+ -30-50 students). Cost $100 and decreases reputation
                    </button>
                </form>
                <form onSubmit={this.handleDonationsToHungryHuskies}>
                    <button>
                        Donate to Hungry Huskies. Cost $2500
                    </button>
                </form>
                <form onSubmit={this.handleMakeCampuses}>
                    <button>
                        Build a new campus! Cost $10,000
                    </button>
                </form>
            </div>
        );
    }

    handleMakeMoney(e) {
        e.preventDefault();
        this.setState(state => ({
            balance: state.balance + 1,
            displayBalance : parseInt(state.balance + 1)
        }));
        

    }

    handleBribeChild(e) {
        e.preventDefault();
        if (this.state.balance < 5) {
            return;
        }
        let newStudents = 1;
        this.setState(state => ({
            studentOverflow : state.students > state.campuses * 1000 ? state.studentOverflow + 1 : state.studentOverflow,
            balance: state.balance - 5,
            students: state.students + newStudents,
            displayBalance : parseInt(state.balance - 5),
            displayStudents : parseInt(state.students + newStudents)
        }));
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
        if (this.state.balance < 12) {
            return;
        }
        let newStudents = Math.floor(Math.random() * 4);
        this.setState(state => ({
            balance: state.balance - 10,
            students: state.students + newStudents,
            studentOverflow: state.students > state.campuses * 1000 ? state.studentOverflow + newStudents : state.studentOverflow,
            displayBalance : parseInt(state.balance - 10),
            displayStudents : parseInt(state.students + newStudents)
            
        }));
    }

    handleSurpriseMechanics(e) {
        e.preventDefault();
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
            negReputation: state.negReputation + 10
        }));
    }

    handleDonationsToHungryHuskies(e) {
        e.preventDefault();
        if (this.state.balance < 2500) {
            return;
        }
        this.setState(state => ({
            balance: state.balance - 2500,
            displayBalance : parseInt(state.balance - 2500),
            numDonations : state.numDonations + 1
        }));
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 0.1,
            displaySeconds: parseInt(state.seconds + 0.1),
            posReputation: state.balance * state.balanceRepMultiplier + state.displayStudents * state.studentRepMultiplier 
            + state.numDonations * 5,
            negReputation : state.negReputation + state.studentOverflow * state.studentOverflowMulitplier,
            reputation: state.posReputation - state.negReputation,
            displayReputation: parseInt(state.reputation * 10) / 10

        }));
        if(this.state.students > 0) {
            this.setState(state => ({
                balance: state.balance + 0.1 * state.students,
                displayBalance: parseInt(state.balance + 0.1 * state.students)
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
