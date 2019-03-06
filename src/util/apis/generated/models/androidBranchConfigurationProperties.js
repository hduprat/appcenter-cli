/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Build configuration for Android projects
 *
 */
class AndroidBranchConfigurationProperties {
  /**
   * Create a AndroidBranchConfigurationProperties.
   * @member {string} [gradleWrapperPath] Path to the Gradle wrapper script
   * @member {string} module The Gradle module to build
   * @member {string} buildVariant The Android build variant to build
   * @member {boolean} [runTests] Whether to run unit tests during the build
   * (default). Default value: true .
   * @member {boolean} [runLint] Whether to run lint checks during the build
   * (default). Default value: true .
   * @member {boolean} [isRoot] Whether it is the root module or not. Default
   * value: true .
   * @member {boolean} [automaticSigning] Whether to apply automatic signing or
   * not. Default value: true .
   * @member {string} [keystorePassword] The password of the keystore
   * @member {string} [keyAlias] The key alias
   * @member {string} [keyPassword] The key password
   * @member {string} [keystoreFilename] The name of the keystore file
   * @member {string} [keystoreEncoded] The keystore encoded value
   */
  constructor() {
  }

  /**
   * Defines the metadata of AndroidBranchConfigurationProperties
   *
   * @returns {object} metadata of AndroidBranchConfigurationProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AndroidBranchConfigurationProperties',
      type: {
        name: 'Composite',
        className: 'AndroidBranchConfigurationProperties',
        modelProperties: {
          gradleWrapperPath: {
            required: false,
            serializedName: 'gradleWrapperPath',
            type: {
              name: 'String'
            }
          },
          module: {
            required: true,
            serializedName: 'module',
            type: {
              name: 'String'
            }
          },
          buildVariant: {
            required: true,
            serializedName: 'buildVariant',
            type: {
              name: 'String'
            }
          },
          runTests: {
            required: false,
            serializedName: 'runTests',
            defaultValue: true,
            type: {
              name: 'Boolean'
            }
          },
          runLint: {
            required: false,
            serializedName: 'runLint',
            defaultValue: true,
            type: {
              name: 'Boolean'
            }
          },
          isRoot: {
            required: false,
            serializedName: 'isRoot',
            defaultValue: true,
            type: {
              name: 'Boolean'
            }
          },
          automaticSigning: {
            required: false,
            serializedName: 'automaticSigning',
            defaultValue: true,
            type: {
              name: 'Boolean'
            }
          },
          keystorePassword: {
            required: false,
            serializedName: 'keystorePassword',
            type: {
              name: 'String'
            }
          },
          keyAlias: {
            required: false,
            serializedName: 'keyAlias',
            type: {
              name: 'String'
            }
          },
          keyPassword: {
            required: false,
            serializedName: 'keyPassword',
            type: {
              name: 'String'
            }
          },
          keystoreFilename: {
            required: false,
            serializedName: 'keystoreFilename',
            type: {
              name: 'String'
            }
          },
          keystoreEncoded: {
            required: false,
            serializedName: 'keystoreEncoded',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AndroidBranchConfigurationProperties;
