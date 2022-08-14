import React, { Component } from "react";
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notifications from './Notifications/Notifications';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  feedbackIncrement = (type) => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 }
    });
  }

  countTotalFeedback = () => { 
  return Object.values(this.state).reduce(function (a, b) {
    return a + b;
  })
  }
  countPositivePercentage = total => {
    return Math.round((this.state.good / total) * 100)
  }


  render() {

    const total = this.countTotalFeedback();
    const percent = this.countPositivePercentage(total);

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions 
            options={Object.keys(this.state)}
            onChangeFeedback={this.feedbackIncrement}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics 
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
              total={total}
              positivePercentage={percent}
            />
          ) : (
              <Notifications message="No feedback given" />
          )
        }
        </Section>
      </div>
    );
  }
}
