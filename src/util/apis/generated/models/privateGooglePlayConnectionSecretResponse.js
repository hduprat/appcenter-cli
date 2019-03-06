/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * private google connection secrets response
 *
 * @extends models['PrivateSharedConnectionResponse']
 */
class PrivateGooglePlayConnectionSecretResponse extends models['PrivateSharedConnectionResponse'] {
  /**
   * Create a PrivateGooglePlayConnectionSecretResponse.
   * @member {object} data google secret details
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PrivateGooglePlayConnectionSecretResponse
   *
   * @returns {object} metadata of PrivateGooglePlayConnectionSecretResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PrivateGooglePlayConnectionSecretResponse',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'serviceType',
          clientName: 'serviceType'
        },
        uberParent: 'PrivateSharedConnectionResponse',
        className: 'PrivateGooglePlayConnectionSecretResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          isValid: {
            required: false,
            serializedName: 'isValid',
            type: {
              name: 'Boolean'
            }
          },
          is2FA: {
            required: false,
            serializedName: 'is2FA',
            type: {
              name: 'Boolean'
            }
          },
          serviceType: {
            required: true,
            serializedName: 'serviceType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          data: {
            required: true,
            serializedName: 'data',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = PrivateGooglePlayConnectionSecretResponse;
