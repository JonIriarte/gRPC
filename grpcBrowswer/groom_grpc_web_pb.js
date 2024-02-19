/**
 * @fileoverview gRPC-Web generated client stub for groom
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.20.1
// source: groom.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.groom = require('./groom_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.groom.GroomClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.groom.GroomPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.groom.RoomRegistrationRequest,
 *   !proto.groom.RoomRegistrationResponse>}
 */
const methodDescriptor_Groom_RegisterToRoom = new grpc.web.MethodDescriptor(
  '/groom.Groom/RegisterToRoom',
  grpc.web.MethodType.UNARY,
  proto.groom.RoomRegistrationRequest,
  proto.groom.RoomRegistrationResponse,
  /**
   * @param {!proto.groom.RoomRegistrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.groom.RoomRegistrationResponse.deserializeBinary
);


/**
 * @param {!proto.groom.RoomRegistrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.groom.RoomRegistrationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.groom.RoomRegistrationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.groom.GroomClient.prototype.registerToRoom =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/groom.Groom/RegisterToRoom',
      request,
      metadata || {},
      methodDescriptor_Groom_RegisterToRoom,
      callback);
};


/**
 * @param {!proto.groom.RoomRegistrationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.groom.RoomRegistrationResponse>}
 *     Promise that resolves to the response
 */
proto.groom.GroomPromiseClient.prototype.registerToRoom =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/groom.Groom/RegisterToRoom',
      request,
      metadata || {},
      methodDescriptor_Groom_RegisterToRoom);
};


module.exports = proto.groom;

