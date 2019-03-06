/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a Crash.
 */
class Crash {
  /**
   * Create a Crash.
   * @member {object} [details]
   * @member {string} [details.carrierCountry] Carrier country code (for mobile
   * devices).
   * @member {string} [details.carrierName] Carrier name (for mobile devices).
   * @member {string} [details.locale] Language code (example: en_US).
   * @member {string} [details.osBuild] OS build code (example: LMY47X).
   * @member {boolean} [details.rooted] Whether the device where the crash
   * occurred is rooted or jailbroken
   * @member {string} [details.screenSize] Screen size of the device in pixels
   * (example: 640x480).
   * @member {date} [details.appStartTimestamp] Application launch timestamp
   * (example: 1985-04-12T23:20:50.52Z).
   * @member {string} newCrashGroupId
   * @member {string} crashId
   * @member {string} newCrashId
   * @member {string} [displayId]
   * @member {date} timestamp
   * @member {string} version
   * @member {string} build
   * @member {string} device
   * @member {string} [deviceName]
   * @member {string} osVersion
   * @member {string} [osType]
   * @member {object} [stacktrace]
   * @member {string} [stacktrace.title]
   * @member {string} [stacktrace.reason]
   * @member {array} [stacktrace.threads]
   * @member {object} [stacktrace.exception]
   * @member {string} [stacktrace.exception.reason] Reason of the exception
   * @member {string} [stacktrace.exception.type] Type of the exception
   * (NSSomethingException, NullPointerException)
   * @member {array} [stacktrace.exception.frames] frames of the excetpion
   * @member {boolean} [stacktrace.exception.relevant] relevant exception
   * (crashed)
   * @member {array} [stacktrace.exception.innerExceptions]
   * @member {string} [stacktrace.exception.platform] SDK/Platform this thread
   * is beeing generated from. Possible values include: 'ios', 'android',
   * 'xamarin', 'react-native', 'ndk', 'unity', 'other'
   * @member {string} userName
   * @member {string} [userEmail]
   */
  constructor() {
  }

  /**
   * Defines the metadata of Crash
   *
   * @returns {object} metadata of Crash
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Crash',
      type: {
        name: 'Composite',
        className: 'Crash',
        modelProperties: {
          details: {
            required: false,
            serializedName: 'details',
            type: {
              name: 'Composite',
              className: 'CrashDetails'
            }
          },
          newCrashGroupId: {
            required: true,
            serializedName: 'new_crash_group_id',
            type: {
              name: 'String'
            }
          },
          crashId: {
            required: true,
            serializedName: 'crash_id',
            type: {
              name: 'String'
            }
          },
          newCrashId: {
            required: true,
            serializedName: 'new_crash_id',
            type: {
              name: 'String'
            }
          },
          displayId: {
            required: false,
            serializedName: 'display_id',
            type: {
              name: 'String'
            }
          },
          timestamp: {
            required: true,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          },
          version: {
            required: true,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          build: {
            required: true,
            serializedName: 'build',
            type: {
              name: 'String'
            }
          },
          device: {
            required: true,
            serializedName: 'device',
            type: {
              name: 'String'
            }
          },
          deviceName: {
            required: false,
            serializedName: 'device_name',
            type: {
              name: 'String'
            }
          },
          osVersion: {
            required: true,
            serializedName: 'os_version',
            type: {
              name: 'String'
            }
          },
          osType: {
            required: false,
            serializedName: 'os_type',
            type: {
              name: 'String'
            }
          },
          stacktrace: {
            required: false,
            serializedName: 'stacktrace',
            type: {
              name: 'Composite',
              className: 'Stacktrace'
            }
          },
          userName: {
            required: true,
            serializedName: 'user_name',
            type: {
              name: 'String'
            }
          },
          userEmail: {
            required: false,
            serializedName: 'user_email',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Crash;
