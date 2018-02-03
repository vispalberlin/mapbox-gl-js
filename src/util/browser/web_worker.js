// @flow

import WebWorkify from 'webworkify';

import window from '../window';
const workerURL = window.URL.createObjectURL(new WebWorkify(require('../../source/worker'), {bare: true}));

import type {WorkerInterface} from '../web_worker';

module.exports = function (): WorkerInterface {
    return (new window.Worker(workerURL): any);
};
