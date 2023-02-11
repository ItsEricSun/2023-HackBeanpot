import React from "react"

class CEO extends React.Component {
    constructor(props) {
        super(props);
        this.state = { balance: 1, displayBalance: 1.0, students: 0, displayStudents: 0.0, seconds: 0, displaySeconds: 0.0};
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
            balance: state.balance - 5,
            students: state.students + newStudents,
            displayBalance : parseInt(state.balance - 5),
            displayStudents : parseInt(state.students + newStudents)
            
        }));
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
