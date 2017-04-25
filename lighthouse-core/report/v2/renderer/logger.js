/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * Logs messages via a UI butter.
 * @class
 */
class Logger {
  /**
   * @param {!Element} element
   */
  constructor(element) {
    this.el = element;
  }

  /**
   * Shows a butter bar.
   * @param {!string} msg The message to show.
   * @param {boolean=} optAutoHide True to hide the message after a duration.
   *     Default is true.
   */
  log(msg, optAutoHide) {
    const autoHide = typeof optAutoHide === 'undefined' ? true : optAutoHide;

    clearTimeout(this._id);

    this.el.textContent = msg;
    this.el.classList.add('show');
    if (autoHide) {
      this._id = setTimeout(_ => {
        this.el.classList.remove('show');
      }, 7000);
    }
  }

  /**
   * @param {string} msg
   */
  warn(msg) {
    this.log('Warning: ' + msg);
  }

  /**
   * @param {string} msg
   */
  error(msg) {
    this.log(msg);
  }

  /**
   * Explicitly hides the butter bar.
   */
  hide() {
    clearTimeout(this._id);
    this.el.classList.remove('show');
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Logger;
}