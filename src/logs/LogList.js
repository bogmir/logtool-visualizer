import React, {Component} from 'react';
import LogData from '../data/epa-http-small.json';

class LogList extends Component {
    render() {
        return (
            <div>
              <h1>Hello, man</h1>
              {LogData.map(((logLine, index) => {
                  return (
                      <div>
                        <h1>{logLine.host}</h1>
                        <p>{logLine.datetime.day}:{logLine.datetime.hour}:{logLine.datetime.minute}:{logLine.datetime.second}</p>
                      </div>
                    );
              }))
              }
            </div>
          );
    }
}

export default LogList;