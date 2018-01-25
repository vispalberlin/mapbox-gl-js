// @flow

const WebWorkify = require('webworkify');
const window = require('../window');
const workerURL = window.URL.createObjectURL(new WebWorkify(require('../../source/worker'), {bare: true}));

import type {WorkerInterface} from '../web_worker';

module.exports = function (): WorkerInterface {
    try {
        return (new window.Worker(workerURL): any);
    } catch (e) {
        if (!/content security policy/i.test(e.message)) {
            throw e;
        }

        const workerBundleURL = (require('../..'): any).workerBundleURL;
        if (!workerBundleURL) {
            throw new Error(`Could not create a web worker using blob url because the document's Content Security Policy forbids it. Set mapboxgl.workerBundleURL to the location of the mapbox-gl-worker.js in order to load the web worker over the network instead.`)
        }
        return (new window.Worker(workerBundleURL): any);
    }
};
