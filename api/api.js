var http       = require('http'),
    mockserver = require('mockserver');

var server = http.createServer(mockserver('./mocks'),).listen('9001');
mockserver.headers = ['Access Control Allow Origin', '*'];