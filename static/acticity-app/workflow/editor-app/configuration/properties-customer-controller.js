/*
 * Activiti Modeler component part of the Activiti project
 * Copyright 2005-2014 Alfresco Software, Ltd. All rights reserved.
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.

 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */

/*
 * 自定义表单
 */
var KisBpmCustomCtrl = [ '$scope', '$modal', function($scope, $modal) {

    // Config for the modal window
    var opts = {
        template:  'editor-app/configuration/properties/custom-popup.html?version=' + Date.now(),
        scope: $scope,
        backdrop:"static"
    };
    // Open the dialog
    $modal(opts);
}];

var KisBpmCustomPopupCtrl = [ '$scope','$http', function($scope,$http) {

    var isGuidFormat = function (guid) {
        var reg = new RegExp(/^[0-9a-zA-Z]{8}[0-9a-zA-Z]{4}[0-9a-zA-Z]{4}[0-9a-zA-Z]{4}[0-9a-zA-Z]{12}$/);
        if (reg.test(guid)) {
            return true;
        }
        return false;
    }
    if($scope.property.value){
        if(isGuidFormat($scope.property.value)){
            $scope.type = 1;
            $scope.selecteValue = $scope.property.value;
            $scope.inputValue = "";
        }else{
            $scope.type = 2;
            $scope.selecteValue = "";
            $scope.inputValue = $scope.property.value;
        }
    }else{
        $scope.type = 1;
        $scope.selecteValue = "";
        $scope.inputValue = "";
    }
    $scope.customs = [];
    //获取自定义表单
    ACTIVITI.CONFIG.ajaxGet($http,(ACTIVITI.CONFIG.contextApi+"/Customform?condition=&pageIndex=-1&pageSize=-1"),function (data, status, headers, config) {
        $scope.customs = data.data.rows;
    });

    $scope.save = function() {
        if($scope.type==1){
            $scope.property.value =  $scope.selecteValue;
        }else if($scope.type==2){
            $scope.property.value =  $scope.inputValue;
        }
        $scope.updatePropertyInModel($scope.property);
        $scope.close();
    };

    // Close button handler
    $scope.close = function() {
        $scope.property.mode = 'read';
        $scope.$hide();
    };
}];