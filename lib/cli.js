#!/usr/bin/env node
'use strict';

var _electron = require('electron');

var _electron2 = _interopRequireDefault(_electron);

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let params = [require.resolve('./es6-init')].concat(process.argv.slice(2));

let child = _child_process2.default.spawn(_electron2.default, params, { stdio: 'inherit' });
child.on('close', code => process.exit(code));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGkuanMiXSwibmFtZXMiOlsicGFyYW1zIiwicmVxdWlyZSIsInJlc29sdmUiLCJjb25jYXQiLCJwcm9jZXNzIiwiYXJndiIsInNsaWNlIiwiY2hpbGQiLCJwcm9jIiwic3Bhd24iLCJlbGVjdHJvbiIsInN0ZGlvIiwib24iLCJjb2RlIiwiZXhpdCJdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTLENBQUNDLFFBQVFDLE9BQVIsQ0FBZ0IsWUFBaEIsQ0FBRCxFQUFnQ0MsTUFBaEMsQ0FBdUNDLFFBQVFDLElBQVIsQ0FBYUMsS0FBYixDQUFtQixDQUFuQixDQUF2QyxDQUFiOztBQUVBLElBQUlDLFFBQVFDLHdCQUFLQyxLQUFMLENBQVdDLGtCQUFYLEVBQXFCVixNQUFyQixFQUE2QixFQUFDVyxPQUFPLFNBQVIsRUFBN0IsQ0FBWjtBQUNBSixNQUFNSyxFQUFOLENBQVMsT0FBVCxFQUFtQkMsSUFBRCxJQUFVVCxRQUFRVSxJQUFSLENBQWFELElBQWIsQ0FBNUIiLCJmaWxlIjoiY2xpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBlbGVjdHJvbiBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgcHJvYyBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxubGV0IHBhcmFtcyA9IFtyZXF1aXJlLnJlc29sdmUoJy4vZXM2LWluaXQnKV0uY29uY2F0KHByb2Nlc3MuYXJndi5zbGljZSgyKSk7XG5cbmxldCBjaGlsZCA9IHByb2Muc3Bhd24oZWxlY3Ryb24sIHBhcmFtcywge3N0ZGlvOiAnaW5oZXJpdCd9KTtcbmNoaWxkLm9uKCdjbG9zZScsIChjb2RlKSA9PiBwcm9jZXNzLmV4aXQoY29kZSkpO1xuIl19