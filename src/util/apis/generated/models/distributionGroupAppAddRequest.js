/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a DistributionGroupAppAddRequest.
 */
class DistributionGroupAppAddRequest {
  /**
   * Create a DistributionGroupAppAddRequest.
   * @member {array} [apps] The list of apps to add to distribution group
   */
  constructor() {
  }

  /**
   * Defines the metadata of DistributionGroupAppAddRequest
   *
   * @returns {object} metadata of DistributionGroupAppAddRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DistributionGroupAppAddRequest',
      type: {
        name: 'Composite',
        className: 'DistributionGroupAppAddRequest',
        modelProperties: {
          apps: {
            required: false,
            serializedName: 'apps',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AppAddRequestElementType',
                  type: {
                    name: 'Composite',
                    className: 'AppAddRequest'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DistributionGroupAppAddRequest;
