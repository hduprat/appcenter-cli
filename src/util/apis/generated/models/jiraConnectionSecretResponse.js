/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Jira connection secrets
 *
 * @extends models['SharedConnectionResponse']
 */
class JiraConnectionSecretResponse extends models['SharedConnectionResponse'] {
  /**
   * Create a JiraConnectionSecretResponse.
   * @property {object} data jira secret details
   * @property {string} [data.baseUrl] baseUrl to connect to jira instance
   * @property {string} [data.username] username to connect to jira instance
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JiraConnectionSecretResponse
   *
   * @returns {object} metadata of JiraConnectionSecretResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JiraConnectionSecretResponse',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'serviceType',
          clientName: 'serviceType'
        },
        uberParent: 'SharedConnectionResponse',
        className: 'JiraConnectionSecretResponse',
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
              name: 'Composite',
              className: 'JiraSecretDetailsResponse'
            }
          }
        }
      }
    };
  }
}

module.exports = JiraConnectionSecretResponse;