import React from "react"

class CEO extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            balance: 1, 
            displayBalance: 1.0, 
            students: 0, 
            displayStudents: 0.0, 
            seconds: 0, 
            displaySeconds: 0.0,
            displayStudentCost: 1.0};
        //   this.handleChange = this.handleChange.bind(this);
        this.handleMakeMoney = this.handleMakeMoney.bind(this);
        this.handleBribeChild = this.handleBribeChild.bind(this);
        this.handleMarketing = this.handleMarketing.bind(this);
    }

    render() {
        return (
            <div>
                <p>${this.state.displayBalance}</p>
                <p>Students: {this.state.displayStudents}  $perHour: +{this.state.displayStudents}</p>
                <p>{this.state.displaySeconds}</p>
                <form onSubmit={this.handleMakeMoney}>
                    <button>
                        Make Money
                    </button>
                </form>


                <form onSubmit={this.handleBribeChild}>
                    <button>
                        Bribe a Child
                    </button>
                </form>
                <p>Cost: {this.state.displayStudentCost}</p>


                <form onSubmit={this.handleMarketing}>
                    <button>
                        Create marketing video
                    </button>
                </form>
            </div>
        );
    }

    handleMakeMoney(e) {
        e.preventDefault();
        let expo = this.state.displayStudents * 0.15;
        if (this.state.balance < 20) {
            this.setState(state => ({
                balance: state.balance + 1,
                displayBalance : parseInt(state.balance + 1)
            }));
        } else {
            this.setState(state => ({
                balance: state.balance * Math.floor(expo),
                displayBalance : parseInt(state.balance + Math.floor(expo))
            }));
        }
        if (this.state.displayStudentCost < 10) {
            this.setState(state => ({
                displayStudentCost: state.displayStudentCost + 1
            }))
            return;
        }
        let multiplier = Math.random() / 16;
        let newCost = Math.floor(Math.pow(this.state.displayStudentCost, 1 + multiplier));
        this.setState(state => ({
            displayStudentCost: parseInt(newCost)
        }));
    }

    handleBribeChild(e) {
        e.preventDefault();
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
        if (this.state.displayStudentCost < 10) {
            this.setState(state => ({
                displayStudentCost: state.displayStudentCost + 1
            }))
        } else {
            let multiplier = Math.random() * 2 / 16;
            let newCost = Math.floor(Math.pow(this.state.displayStudentCost, 1 + multiplier));
            this.setState(state => ({
                displayStudentCost: parseInt(newCost)
            }));
        }
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
            displayBalance : parseInt(state.balance - 10),
            displayStudents : parseInt(state.students + newStudents)
            
        }));
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 0.1,
            displaySeconds : parseInt(state.seconds + 0.1)

        }));
        if(this.state.students > 0) {
            this.setState(state => ({
                balance: state.balance + 0.1 * state.students,
                displayBalance : parseInt(state.balance + 0.1 * state.students)
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
