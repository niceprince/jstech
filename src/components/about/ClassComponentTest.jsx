import React, {Component} from 'react';
import MyContext from '../../context/MyContext';

class ClassComponentTest extends React.Component {
  // static contextType = MyContext;

  render() {
    // const { data, name, age } = this.context;

    return (
      <>
        <MyContext.Consumer>
          { (context) => (
            <div>
              {console.log("context", context)}
              <p>{context.data}</p>
              <p>{context.name}</p>
              <p>{context.age}</p>
              <div>
                This is Class components and trying to access contest here as well.
              </div>
            </div>
            )
          }
        </MyContext.Consumer>
      </>
    )
  }
}

export default ClassComponentTest;