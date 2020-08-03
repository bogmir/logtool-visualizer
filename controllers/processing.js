const {chain}  = require('stream-chain');
const {parser} = require('stream-json');
const {streamArray} = require('stream-json/streamers/StreamArray');

const fs = require('fs');

const HTTPANSWER_LIMIT_SIZE = 1000;

let requestMethodChartData = [];
let answerChartData = [];
let requestsPerMinuteChartData = [];
let answerSizeChartData = [];

/* input: [ 'GET', 'GET', 'GET', 'GET', 'POST', 'GET', 'GET',  'GET',
    'GET', 'POST', 'GET', .....
 */
const buildMethodRequestsChartData = (...arr) => {
    if (arr == null) return [];

    /*  e.g. returns: ['GET': 46014, 'POST': 1622, 'HEAD': 106 , 'empty': 6] 
     */ 
    const requestMethodsObject = arr.reduce((acc, el) => {
        if (el === '') el = 'empty';

        acc[el] = acc[el] + 1 || 1; //counter init: 1
        return acc;
    }, {});
      
    /*  e.g. return: [{'name': 'GET', 'value': 46014},  {'name': 'POST', 'value': 1622}, 
            {'name': 'HEAD', 'value': 106}, {'empty': '400', 'value': 6} ...
     */  
    Object.keys(requestMethodsObject)
        .map(reqKey => {
            requestMethodChartData.push({
                'name': reqKey, 'value': requestMethodsObject[reqKey]
            })
        });
        
    return requestMethodChartData;
};
    
/*  input: [  { code: '200', size: '7005' }, { code: '200', size: '3302' }, 
    {code: '302', size: '-' }, {code: '302', size: '213' }, ...]
 */    
const buildAnswerResponsesChartData = (...arr) => {
    if (arr == null) return [];

/*  e.g. returns: ['200': { counter: 36712, counterSize: 10030}, '302': { counter: 4506, counterSize: 877}, 
        '304': { counter: 5300, counterSize: 1000}, '400': { counter: 6, counterSize: 0}, ...]
*/    
    const answerObjects = arr.reduce((acc, el) => {
        if (acc[el.code] == null) {
            acc[el.code] = {'counter': 1, 'counterSize': +el.size < HTTPANSWER_LIMIT_SIZE ? 1 : 0};
        } else {
            acc[el.code] = { 'counter': acc[el.code]['counter'] + 1, 
                'counterSize': +el.size < HTTPANSWER_LIMIT_SIZE 
                    ? acc[el.code]['counterSize'] + 1 : acc[el.code]['counterSize']
            };
        }
        return acc;
    }, {});

/*  e.g. returns: [{'name': '200', 'value': 36712, 'size': 24211 },  {'name': '302', 'value': 4506, 'size': 3009}, 
        {'name': '304', 'value': 5300, 'size': 4087}, {'name': '400', 'value': 6, 'size': 0}, ...]
*/    
    Object.keys(answerObjects)
        .map(ansKey => {
            answerChartData.push({
                'name': ansKey,
                'value': answerObjects[ansKey].counter,
                'size': answerObjects[ansKey].counterSize
                })
        });

    return answerChartData;
}

/*  input: [..., { day: '29', hour: '23', minute: '57' },
  { day: '29', hour: '23', minute: '57' },
  { day: '29', hour: '23', minute: '57' },
  { day: '29', hour: '23', minute: '57' }, 
  { day: '29', hour: '23', minute: '58' }, ...]
 */  
const buildRequestsPerMinChartData = (...arr) => {
    if (arr == null) return [];

/*  e.g. returns: [{'(29)23:57': 54, 'value': 36712},  {'name': '(29)23:58', 'value': 30}, 
        {'name': '(29)23:59', 'value': 23}, {'name': '(29)24:00', 'value': 6}, ...]
*/       
    const reqPerMinObjects = arr.reduce((acc, el) => {
        let timeElem = `(${el.day}) ${el.hour}:${el.minute}`;
        acc[timeElem] = acc[timeElem] + 1 || 1;
        return acc;
    }, {});
/*  e.g. returns: [{'name': '(29)23:57', 'value': 54},  {'name': '(29)23:58', 'value': 30}, 
        {'name': '(29)23:59', 'value': 23}, {'name': '(29)24:00', 'value': 6}, ...]
*/
    Object.keys(reqPerMinObjects)
        .map(reqKey => {
            requestsPerMinuteChartData.push({
            'name': reqKey, 'value': reqPerMinObjects[reqKey]
        })
    });

    return requestsPerMinuteChartData;
}
    


const processFile = (filepath='src/data/epa-http.json') => {
    requestMethodChartData = [];
    answerChartData = [];
    requestsPerMinuteChartData = [];
    answerSizeChartData = [];

    let requestMethodArray = [];
    let minutesArray = []; 
    let answerCodeArray = [];

    return new Promise ((resolve, reject) => {
        const pipeline = chain([    //reads file
            fs.createReadStream(filepath),
            parser(),
            streamArray(),
            data => data.value
        ]);
        
        pipeline.on('data', (data) => { //reads line by line
            requestMethodArray.push(data.serverRequest.httpRequestMethod);
            answerCodeArray.push({"code": data.httpAnswerCode, "size": data.requestSize});
            minutesArray.push({"day": data.datetime.day, "hour": data.datetime.hour, "minute": data.datetime.minute});
        });
        
        pipeline.on('end', () => {
            console.log(`Total hosts: ${answerCodeArray.length} .`);
        
            buildMethodRequestsChartData(...requestMethodArray);
            buildAnswerResponsesChartData(...answerCodeArray);
            buildRequestsPerMinChartData(...minutesArray);
            //answerChartData[0] -> { name: '200', value: .... }
            answerSizeChartData.push({'totalCodeOK': answerChartData[0].size, 'totalSmallSize': answerChartData[0].value-answerChartData[0].size});

            resolve();
        }); 
    });

}

const getChartData = () => {
    return { requestMethodChartData,
         answerChartData,
         answerSizeChartData,
         requestsPerMinuteChartData
    };
}

module.exports = {getChartData, processFile};