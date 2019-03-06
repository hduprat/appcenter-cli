/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * SharedConnectionRequest
 *
 */
class SharedConnectionRequest {
  /**
   * Create a SharedConnectionRequest.
   * @member {string} [displayName] display name of shared connection
   * @member {string} [credentialType] credential type of the shared
   * connection. Values can be credentials|certificate. Possible values
   * include: 'credentials', 'certificate'. Default value: 'credentials' .
   * @member {string} serviceType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of SharedConnectionRequest
   *
   * @returns {object} metadata of SharedConnectionRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SharedConnectionRequest',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'serviceType',
          clientName: 'serviceType'
        },
        uberParent: 'SharedConnectionRequest',
        className: 'SharedConnectionRequest',
        modelProperties: {
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          credentialType: {
            required: false,
            serializedName: 'credentialType',
            defaultValue: 'credentials',
            type: {
              name: 'String'
            }
          },
          serviceType: {
            required: true,
            serializedName: 'serviceType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SharedConnectionRequest;
