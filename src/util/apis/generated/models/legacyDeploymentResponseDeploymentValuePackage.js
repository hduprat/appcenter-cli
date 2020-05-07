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

/**
 * Class representing a LegacyDeploymentResponseDeploymentValuePackage.
 */
class LegacyDeploymentResponseDeploymentValuePackage {
  /**
   * Create a LegacyDeploymentResponseDeploymentValuePackage.
   * @property {string} [appVersion] The version of the release
   * @property {boolean} [isDisabled] Flag used to determine if release is
   * disabled
   * @property {boolean} [isMandatory] Flag used to determine if release is
   * mandatory
   * @property {number} [rollout] Percentage (out of 100) that release is
   * deployed to
   * @property {string} [blobUrl] Location (URL) of release package
   * @property {number} [size] Size of release package
   * @property {string} [releaseMethod] Method used to deploy release
   * @property {number} [uploadTime] Release upload time as epoch Unix
   * timestamp
   * @property {string} [label] Release label (aka release name)
   * @property {string} [releasedByUserId] User ID that triggered most recent
   * release
   * @property {string} [manifestBlobUrl] The URL location of the package's
   * manifest file.
   * @property {object} [diffPackageMap] Object containing URL and size of
   * changed package hashes contained in the release
   */
  constructor() {
  }

  /**
   * Defines the metadata of LegacyDeploymentResponseDeploymentValuePackage
   *
   * @returns {object} metadata of LegacyDeploymentResponseDeploymentValuePackage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LegacyDeploymentResponse_deploymentValue_package',
      type: {
        name: 'Composite',
        className: 'LegacyDeploymentResponseDeploymentValuePackage',
        modelProperties: {
          appVersion: {
            required: false,
            serializedName: 'appVersion',
            type: {
              name: 'String'
            }
          },
          isDisabled: {
            required: false,
            serializedName: 'isDisabled',
            type: {
              name: 'Boolean'
            }
          },
          isMandatory: {
            required: false,
            serializedName: 'isMandatory',
            type: {
              name: 'Boolean'
            }
          },
          rollout: {
            required: false,
            serializedName: 'rollout',
            type: {
              name: 'Number'
            }
          },
          blobUrl: {
            required: false,
            serializedName: 'blobUrl',
            type: {
              name: 'String'
            }
          },
          size: {
            required: false,
            serializedName: 'size',
            type: {
              name: 'Number'
            }
          },
          releaseMethod: {
            required: false,
            serializedName: 'releaseMethod',
            type: {
              name: 'String'
            }
          },
          uploadTime: {
            required: false,
            serializedName: 'uploadTime',
            type: {
              name: 'Number'
            }
          },
          label: {
            required: false,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          },
          releasedByUserId: {
            required: false,
            serializedName: 'releasedByUserId',
            type: {
              name: 'String'
            }
          },
          manifestBlobUrl: {
            required: false,
            serializedName: 'manifestBlobUrl',
            type: {
              name: 'String'
            }
          },
          diffPackageMap: {
            required: false,
            serializedName: 'diffPackageMap',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = LegacyDeploymentResponseDeploymentValuePackage;