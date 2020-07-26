const {chain}  = require('stream-chain');

const {parser} = require('stream-json');
const {streamArray} = require('stream-json/streamers/StreamArray');

const fs = require('fs');

const limitSize = 1000;


const pipeline = chain([
    fs.createReadStream('resources/epa-http.json'),
    parser(),
    streamArray(),
    data => data.value
  ]);

const requestMethodArray = [];
const requestMethodChartData = [];
const answerChartData = [];
const answerSizeChartData = [];
const requestsPerMinuteChartData = [];

let answerCodeArray = [];
let minutesArray = [];

pipeline.on('data', (data) => {
    requestMethodArray.push(data.serverRequest.httpRequestMethod);
    answerCodeArray.push({"code": data.httpAnswerCode, "size": data.requestSize});
    minutesArray.push({"day": data.datetime.day, "hour": data.datetime.hour, "minute": data.datetime.minute});
});

pipeline.on('end', () => {
    console.log(`Total hosts: ${answerCodeArray.length} .`);

    const requestMethodObj = requestMethodArray.reduce((acc, el) => {
        el = (el === '') ? 'empty' : el;
        acc[el] = acc[el] + 1 || 1;
        return acc;
    }, {});

    const answerCodeObj = answerCodeArray.reduce((acc, el) => {
        if (acc[el.code] === undefined) {
            acc[el.code] = {'counter': 1, 'counterSize': +el.size > limitSize ? 1 : 0};
        } else {
            acc[el.code] = { 'counter': acc[el.code]['counter'] + 1, 
                'counterSize': +el.size > limitSize 
                    ? acc[el.code]['counterSize'] + 1 : acc[el.code]['counterSize']
            };
        }
        //acc[el.code]['counterSize'] = acc[el.code]['counterSize'] + 1 || 1;
        return acc;
    }, {});

    const minObj = minutesArray.reduce((acc, el) => {
        let timeElem = el.day + ":" + el.hour + ":" + el.minute;
        acc[timeElem] = acc[timeElem] + 1 || 1;
        return acc;
    }, {});

    Object.keys(requestMethodObj)
        .map(reqKey => {
        requestMethodChartData.push({
            'name': reqKey, 'value': requestMethodObj[reqKey]
        })
    })

    Object.keys(answerCodeObj)
        .map(ansKey => {
            answerChartData.push({
            'name': ansKey, 'value': answerCodeObj[ansKey].counter
        })
    })

    answerSizeChartData.push({'name': `Status OK, size > ${limitSize}`, 'value': answerCodeObj['200']});
    
    //TODOminutes

/*     console.log("req:" + JSON.stringify(requestMethodChartData));
    console.log(answerChartData);
 */
console.log(answerSizeChartData);

});

module.exports = {requestMethodChartData : requestMethodChartData,
    answerChartData: answerChartData,
    answerSizeChartData: answerSizeChartData,
    requestsPerMinuteChartData: requestsPerMinuteChartData
};