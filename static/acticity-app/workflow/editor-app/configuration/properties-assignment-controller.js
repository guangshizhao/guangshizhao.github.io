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
 * Assignment
 */
var KisBpmAssignmentCtrl = [
  '$scope',
  '$modal',
  function($scope, $modal) {
    // Config for the modal window
    var opts = {
      template:
        'editor-app/configuration/properties/assignment-popup.html?version=' +
        Date.now(),
      scope: $scope,
      backdrop: 'static'
    }

    // Open the dialog
    $modal(opts)
  }
]

var KisBpmAssignmentPopupCtrl = [
  '$scope',
  '$http',
  function($scope, $http) {
    //初始化值
    $scope.type = 0
    $scope.initiatortype = 0 //流程发起人的
    $scope.usertype = 0 //指定用户的
    $scope.depttype = 1 //部门的
    $scope.deptid = '' //部门的
    $scope.deptname = '' //部门的
    $scope.roleid = '' //角色的
    $scope.usershow = '' //用户显
    var setInputShow = function() {
      if ($scope.type == 0) {
        return
      }
      if ($scope.type == 1) {
        if ($scope.initiatortype == 0) {
          $scope.property.value.inputshow = '流程发起人'
        } else {
          $scope.property.value.inputshow = '流程发起人 直属领导'
        }
      } else if ($scope.type == 3) {
        for (var m = 0; m < result_dept.length; m++) {
          if (result_dept[m].id == $scope.deptid) {
            $scope.property.value.inputshow = result_dept[m].name
            break
          }
        }
        if ($scope.depttype == 1) {
          $scope.property.value.inputshow += ' 直属成员'
        } else {
          $scope.property.value.inputshow += ' 部门领导'
        }
      } else if ($scope.type == 4) {
        for (var m = 0; m < $scope.roles.length; m++) {
          if ($scope.roles[m].id == $scope.roleid) {
            $scope.property.value.inputshow = $scope.roles[m].rname
            break
          }
        }
      } else {
        //指定用户
        if ($scope.usertype == 1) {
          for (var m = 0; m < result.length; m++) {
            if (result[m].jobNumber == $scope.userid) {
              $scope.property.value.inputshow = result[m].uname + ' 直属领导'
              break
            }
          }
        } else {
          for (var m = 0; m < result.length; m++) {
            if (result[m].jobNumber == $scope.userid) {
              $scope.property.value.inputshow = result[m].uname
              break
            }
          }
        }
      }
    }
    var setType = function(assignee, candidateUsers) {
      if (assignee.length == 0 && candidateUsers.length == 0) {
        return
      }
      if (assignee.indexOf('initiator') > -1) {
        //代表选中流程发起人
        $scope.type = 1
        if (assignee.indexOf('assignment.getDirectLeader') > -1) {
          $scope.initiatortype = 1
        } else {
          $scope.initiatortype = 0
        }
      } else if (
        candidateUsers.indexOf('assignment.getDepartmentMembers') > -1 ||
        assignee.indexOf('assignment.getDepartmentLeader') > -1
      ) {
        //部门
        $scope.type = 3
        if (candidateUsers.indexOf('assignment.getDepartmentMembers') > -1) {
          $scope.depttype = 1
          $scope.deptid = candidateUsers.substring(
            candidateUsers.indexOf('("') + 2,
            candidateUsers.indexOf('")')
          )
        } else {
          $scope.depttype = 2
          $scope.deptid = assignee.substring(
            assignee.indexOf('("') + 2,
            assignee.indexOf('")')
          )
        }
      } else if (candidateUsers.indexOf('assignment.getRoleUsers') > -1) {
        //角色
        $scope.type = 4
        $scope.roleid = candidateUsers.substring(
          candidateUsers.indexOf('("') + 2,
          candidateUsers.indexOf('")')
        )
      } else {
        //指定用户
        $scope.type = 2
        if (assignee.indexOf('assignment.getDirectLeader') > -1) {
          $scope.usertype = 1
          $scope.userid = assignee.substring(
            assignee.indexOf('("') + 2,
            assignee.indexOf('")')
          )
        } else {
          $scope.usertype = 0
          $scope.userid = assignee
        }
      }
    }
    // Put json representing assignment on scope
    if (
      $scope.property.value !== undefined &&
      $scope.property.value !== null &&
      $scope.property.value.assignment !== undefined &&
      $scope.property.value.assignment !== null
    ) {
      $scope.assignment = $scope.property.value.assignment
      setType(
        $scope.assignment.assignee ? $scope.assignment.assignee : '',
        $scope.assignment.candidateUsers ? $scope.assignment.candidateUsers : ''
      )
    } else {
      $scope.assignment = {}
    }
    $scope.save = function() {
      $scope.property.value = {}
      if ($scope.type == 1) {
        //代表选中流程发起人
        if ($scope.initiatortype == 1) {
          //选中直属上级
          $scope.assignment.assignee =
            '${assignment.getDirectLeader(initiator)}'
        } else {
          $scope.assignment.assignee = '${initiator}'
        }
        $scope.assignment.candidateUsers = ''
      } else if ($scope.type == 2) {
        //指定用户
        if ($scope.usertype == 1) {
          //选中直属上级
          if ($scope.userid) {
            $scope.assignment.assignee =
              '${assignment.getDirectLeader("' + $scope.userid + '")}'
          } else {
            $scope.assignment.assignee = ''
          }
        } else {
          $scope.assignment.assignee = $scope.userid
        }
        $scope.assignment.candidateUsers = ''
      } else if ($scope.type == 3) {
        //部门
        if ($scope.depttype == 1) {
          //选中直属成员
          $scope.assignment.assignee = ''
          if ($scope.deptid) {
            $scope.assignment.candidateUsers =
              '${assignment.getDepartmentMembers("' + $scope.deptid + '")}'
          } else {
            $scope.assignment.candidateUsers = ''
          }
        } else {
          //部门领导
          $scope.assignment.candidateUsers = ''
          if ($scope.deptid) {
            $scope.assignment.assignee =
              '${assignment.getDepartmentLeader("' + $scope.deptid + '")}'
          } else {
            $scope.assignment.assignee = ''
          }
        }
      } else if ($scope.type == 4) {
        //角色
        $scope.assignment.assignee = ''
        if ($scope.roleid) {
          $scope.assignment.candidateUsers =
            '${assignment.getRoleUsers("' + $scope.roleid + '")}'
        } else {
          $scope.assignment.candidateUsers = ''
        }
      }
      $scope.property.value.assignment = $scope.assignment
      setInputShow()
      $scope.updatePropertyInModel($scope.property)
      $scope.close()
    }

    // Close button handler
    $scope.close = function() {
      $scope.property.mode = 'read'
      $scope.$hide()
    }

    //选人弹窗逻辑
    $scope.records = []
    $scope.searchs = []
    $scope.searchkeyword = ''
    $scope.isSearch = true
    var result = []
    var result_dept = []
    var result_gw = []
    //获取组织人员
    ACTIVITI.CONFIG.ajaxGet(
      $http,
      ACTIVITI.CONFIG.contextApi +
        '/Organization?condition=&pageIndex=-1&pageSize=-1',
      function(data, status, headers, config) {
        result = data.data.rows
        result_dept = []
        let h = 0
        for (var k = 0; k < result.length; k++) {
          var item = result[k]
          if (item.id == $scope.deptid) {
            $scope.deptname = item.name
          }
          result_dept.push(JSON.parse(JSON.stringify(item)))
          if (item.userList && item.userList.length > 0) {
            for (var m = 0; m < item.userList.length; m++) {
              var uitem = item.userList[m]
              uitem.parentId = item.id
              if (uitem.jobNumber == $scope.userid) {
                $scope.records = []
                $scope.records.push(uitem)
                $scope.usershow = uitem.name
              }
              h++
              result.push(uitem)
            }
          }
          if (h != 0 && result.length - h - 1 == k) {
            break
          }
        }
      }
    )
    //获取岗位人员
    ACTIVITI.CONFIG.ajaxGet(
      $http,
      ACTIVITI.CONFIG.contextApi +
        '/Position?condition=&pageIndex=-1&pageSize=-1',
      function(data, status, headers, config) {
        result_gw = data.data.rows
        let h = 0
        for (var k = 0; k < result_gw.length; k++) {
          var item = result_gw[k]
          if (item.userList && item.userList.length > 0) {
            for (var m = 0; m < item.userList.length; m++) {
              var uitem = item.userList[m]
              uitem.parentId = item.id
              if (uitem.jobNumber == $scope.userid) {
                $scope.records = []
                $scope.records.push(uitem)
              }
              h++
              result_gw.push(uitem)
            }
          }
          if (h != 0 && result.length - h - 1 == k) {
            break
          }
        }
      }
    )
    //获取角色
    ACTIVITI.CONFIG.ajaxGet(
      $http,
      ACTIVITI.CONFIG.contextApi + '/Role?condition=&pageIndex=-1&pageSize=-1',
      function(data, status, headers, config) {
        $scope.roles = data.data.rows
      }
    )
    var setting = {
      view: {
        selectedMulti: false
      },
      check: {
        enable: false
      },
      callback: {
        beforeClick: function(treeId, treeNode, clickFlag) {
          if (treeNode.isParent) {
            if (treeNode.open) {
              zTree.expandNode(treeNode, false)
            } else {
              zTree.expandNode(treeNode, true)
            }
          }
          return treeNode.jobNumber == undefined ? false : true
        },
        onClick: function(event, treeId, treeNode) {
          $scope.records = []
          $scope.records.push(treeNode)
          $scope.$apply()
        }
      },
      data: {
        simpleData: {
          enable: true, //是否采用简单数据模式
          idKey: 'id', //树节点ID名称
          pIdKey: 'parentId', //父节点ID名称
          rootPId: -1 //根节点ID
        }
      }
    }
    var setting_gw = {
      view: {
        selectedMulti: false
      },
      check: {
        enable: false
      },
      callback: {
        beforeClick: function(treeId, treeNode, clickFlag) {
          if (treeNode.isParent) {
            if (treeNode.open) {
              zTree_gw.expandNode(treeNode, false)
            } else {
              zTree_gw.expandNode(treeNode, true)
            }
          }
          return treeNode.jobNumber == undefined ? false : true
        },
        onClick: function(event, treeId, treeNode) {
          $scope.records = []
          $scope.records.push(treeNode)
          $scope.$apply()
        }
      },
      data: {
        simpleData: {
          enable: true, //是否采用简单数据模式
          idKey: 'id', //树节点ID名称
          pIdKey: 'parentId', //父节点ID名称
          rootPId: -1 //根节点ID
        }
      }
    }
    var setting_dept = {
      view: {
        selectedMulti: false
      },
      check: {
        enable: false
      },
      data: {
        simpleData: {
          enable: true, //是否采用简单数据模式
          idKey: 'id', //树节点ID名称
          pIdKey: 'parentId', //父节点ID名称
          rootPId: -1 //根节点ID
        }
      }
    }
    var zTree = null
    var zTree_gw = null
    var zTree_dept = null
    $scope.openForSelectPerson = function() {
      zTree = jQuery.fn.zTree.init(
        angular.element(document.querySelector('#treeforzz')),
        setting,
        result
      )
      zTree_gw = jQuery.fn.zTree.init(
        angular.element(document.querySelector('#treeforgw')),
        setting_gw,
        result_gw
      )
      jQuery('#selectmodal').modal('show')
      jQuery('#myTab li:first-child a').tab('show')
      zTree.expandAll(true)
      zTree_gw.expandAll(true)
    }
    $scope.clearForSelectPerson = function() {
      $scope.userid = ''
      $scope.usershow = ''
      $scope.records = []
    }
    $scope.openForSelectDept = function() {
      zTree_dept = jQuery.fn.zTree.init(
        angular.element(document.querySelector('#treefordept')),
        setting_dept,
        result_dept
      )
      var node = zTree_dept.getNodeByParam('id', $scope.deptid)
      if (node != null) {
        zTree_dept.selectNode(node, true)
      }
      jQuery('#selectdept').modal('show')
      zTree_dept.expandAll(true)
    }
    $scope.clearForSelectDept = function() {
      $scope.deptid = ''
      $scope.deptname = ''
    }
    $scope.closeForSelect = function() {
      jQuery('#selectmodal').modal('hide')
    }
    $scope.closeForDept = function() {
      jQuery('#selectdept').modal('hide')
    }

    $scope.saveForSelect = function() {
      $scope.userid = $scope.records[0].jobNumber
        ? $scope.records[0].jobNumber
        : ''
      $scope.usershow = $scope.records[0].name ? $scope.records[0].name : ''
      jQuery('#selectmodal').modal('hide')
    }
    $scope.saveForDept = function() {
      $scope.deptname =
        zTree_dept.getSelectedNodes().length > 0
          ? zTree_dept.getSelectedNodes()[0].name
          : ''
      $scope.deptid =
        zTree_dept.getSelectedNodes().length > 0
          ? zTree_dept.getSelectedNodes()[0].id
          : ''
      jQuery('#selectdept').modal('hide')
    }
    $scope.addUser = function(index) {
      $scope.records = []
      $scope.records.push($scope.searchs[index])
    }
    $scope.removeUser = function(index) {
      $scope.records.splice(index, 1)
    }
    $scope.searchbt = function() {
      var keyword = jQuery('#keyword').val()
      var c = encodeURIComponent('{like:' + keyword + '}')
      if (keyword == '') {
        $scope.isSearch = true
      } else {
        ACTIVITI.CONFIG.ajaxGet(
          $http,
          ACTIVITI.CONFIG.contextApi +
            '/User?condition=' +
            c +
            '&pageIndex=-1&pageSize=-1',
          function(data, status, headers, config) {
            $scope.searchs = data.data.rows
            $scope.isSearch = false
          }
        )
      }
    }
  }
]
