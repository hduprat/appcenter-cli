/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Google Play connection secrets
 *
 * @extends models['SharedConnectionResponse']
 */
class GooglePlayConnectionSecretResponse extends models['SharedConnectionResponse'] {
  /**
   * Create a GooglePlayConnectionSecretResponse.
   * @member {object} data google play secret details
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of GooglePlayConnectionSecretResponse
   *
   * @returns {object} metadata of GooglePlayConnectionSecretResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GooglePlayConnectionSecretResponse',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'serviceType',
          clientName: 'serviceType'
        },
        uberParent: 'SharedConnectionResponse',
        className: 'GooglePlayConnectionSecretResponse',
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
          credentialType: {
            required: true,
            serializedName: 'credentialType',
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

module.exports = GooglePlayConnectionSecretResponse;
