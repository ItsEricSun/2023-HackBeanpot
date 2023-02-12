import React from "react"

class CEO extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            balance: 1, 
            displayBalance: 1.0, 
            students: 0, 
            displayStudents: 0.0, 
            autoBribe: false,
            displayAutoBribe: "OFF",
            displayPerHour: 0,
            seconds: 0, 
            displaySeconds: 0.0,
            displayStudentCost: 1.0,
        displayMarketingCost: 12.0};
        this.handleMakeMoney = this.handleMakeMoney.bind(this);
        this.handleBribeChild = this.handleBribeChild.bind(this);
        this.handleMarketing = this.handleMarketing.bind(this);
        this.handleAutoBribe = this.handleAutoBribe.bind(this);
    }

    render() {
        return (
            <div>
                <p>${this.state.displayBalance}</p>
                <form onSubmit={this.handleMakeMoney}>
                    <button>
                        Make Money
                    </button>
                </form>
                <p> Students: {this.state.displayStudents} $perHour: +{this.state.displayPerHour} </p>

                <form onSubmit={this.handleBribeChild}>
                    <button>
                        Bribe a Child
                    </button>
                </form>

                <form onSubmit={this.handleAutoBribe}>
                    <button>
                        AutoBribe: {this.state.displayAutoBribe}
                    </button>
                </form>
                <p> Cost: {this.state.displayStudentCost}</p>

                <form onSubmit={this.handleMarketing}>
                    <button>
                        Create marketing video
                    </button>
                </form>
                <p> Cost: {this.state.displayMarketingCost}</p>

                <p>{this.state.displaySeconds}</p>
            </div>
        );
    }

    handleMakeMoney(e) {
        e.preventDefault();
        this.setState(state => ({
            balance: state.balance + 1,
            displayBalance : parseInt(state.balance + 1),
            }));
    }

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
            displayBalance : parseInt(state.balance - state.displayStudentCost),
            displayStudents : parseInt(state.students + newStudents),
        }));
        if (this.state.displayStudentCost < 10 || this.state.displayStudents < 15) {
            this.setState(state => ({
                displayStudentCost: state.displayStudentCost + 1,
                displayPerHour : state.displayPerHour + 1
            }))
        } else {
            let newCost = Math.floor(this.state.displayStudentCost * 1.14);
            this.setState(state => ({
                displayStudentCost: parseInt(newCost),
                displayPerHour : state.displayPerHour + parseInt(Math.floor(expo))
            }));
        }
    }

    handleAutoBribe(e) {
        e.preventDefault();
        if (this.state.balance > this.state.displayStudentCost) {
            if (this.state.autoBribe) {
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
    }

    handleMarketing(e) {
        e.preventDefault();
        if (this.state.balance < this.state.displayMarketingCost) {
            return;
        }
        let newStudents = Math.floor(Math.random() * 4);
        let newCost = Math.floor(this.state.displayMarketingCost * 1.2);
        if (this.state.displayMarketingCost < 30) {
            this.setState(state => ({
                balance: state.balance - state.displayMarketingCost - 2,
                students: state.students + newStudents,
                displayBalance: parseInt(state.balance - state.displayMarketingCost - 2),
                displayStudents: parseInt(state.students + newStudents),
                displayMarketingCost: state.displayMarketingCost + 2,
                displayPerHour: state.displayPerHour + 1
            }));
        } else {
            this.setState(state => ({
                balance: state.balance - newCost,
                students: state.students + newStudents,
                displayBalance: parseInt(state.balance - newCost),
                displayStudents: parseInt(state.students + newStudents),
                displayMarketingCost : newCost,
                displayPerHour: state.displayPerHour + 1
            }));
        }
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 0.1,
            displaySeconds : parseInt(state.seconds + 0.1)

        }));
        if(this.state.students > 0) {
            this.setState(state => ({
                balance: state.balance + 0.1 * state.students,
                displayBalance: parseInt(state.balance + 0.1 * state.students)
            }));
        }
        if (this.state.autoBribe && (this.state.balance > this.state.displayStudentCost)) {
            console.log("a");
            this.handleBribeChild();
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
