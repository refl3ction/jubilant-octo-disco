const axios = require('axios');

const doRequest = async (config) => {

    try {
        console.log(`Starting request to ${config.url}`)
        const res = await axios.get(config.url)
        console.log({ status: res.status, data: res.data })

    } catch (error) {
        console.log({ status: res.status, data: res.data, message: "Error trying to execute requests." })
    }
    return
}

function sleep(time) {
    console.log(`Waiting ${time} ms before continuing.`)
    return new Promise(resolve => setTimeout(resolve, time));
}

const readConfig = (async () => {

    const config = {
        url: process.env.URL,
        interval: process.env.INTERVAL
    }

    while (true) {
        await doRequest(config);
        await sleep(config.interval);
    }

})();
