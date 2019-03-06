/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ErrorLocation.
 */
class ErrorLocation {
  /**
   * Create a ErrorLocation.
   * @member {string} [uri]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorLocation
   *
   * @returns {object} metadata of ErrorLocation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorLocation',
      type: {
        name: 'Composite',
        className: 'ErrorLocation',
        modelProperties: {
          uri: {
            required: false,
            serializedName: 'uri',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorLocation;
