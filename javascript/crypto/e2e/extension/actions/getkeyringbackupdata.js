// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * @fileoverview Retrieves the data needed to back up generated ECC keys.
 */

goog.provide('e2e.ext.actions.GetKeyringBackupData');

goog.require('e2e.ext.actions.Action');

goog.scope(function() {
var actions = e2e.ext.actions;



/**
 * Constructor for the action.
 * @constructor
 * @implements {actions.Action}
 */
actions.GetKeyringBackupData = function() {};


/** @inheritDoc */
actions.GetKeyringBackupData.prototype.execute =
    function(ctx, request, requestor, callback, errorCallback) {
  ctx.getKeyringBackupData().addCallback(callback).addErrback(errorCallback);
};

});
