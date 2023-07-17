document.write("<link rel='stylesheet' type='text/css' href='"+basePath+"mvcbms/pub/js/ztree/zTreeStyle/zTreeStyle.css'/>");
document.write("<script src='"+basePath+"mvcbms/pub/js/ztree/jquery.ztree.core-3.5.min.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"mvcbms/pub/js/ztree/jquery.ztree.excheck-3.5.min.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"mvcbms/pub/js/navtree.js' type='text/javascript'></script>");
var perid = "";
var pername = "";
var permiValueId="";
jQuery(function(){
    jQuery("#searchForm [id='search']").bind("click",function(){searchTab('searchForm','search')});
    jQuery("#searchForm [id='reset']").bind("click",function(){btn_click_reset('searchForm')});
    jQuery("#add").bind("click",function(){btn_click_add()});
    jQuery("#addForm_save").unbind("click").bind("click",function(){savePermi()});
    jQuery("#editForm_save").unbind("click").bind("click",function(){editPermi()});

    jQuery("#deleteAllRole").removeAttr("onclick");
    jQuery("#deleteAllRole").unbind("click").bind("click",function(){btn_click_delete('','','roles')});
    jQuery("#roles").bind("click",function(){isSelAll('roles')});
    jQuery("#searchForm_r [id='first']").bind("click",function(){searchTab('searchForm','first')});
    jQuery("#searchForm_r [id='before']").bind("click",function(){searchTab('searchForm','before')});
    jQuery("#searchForm_r [id='next']").bind("click",function(){searchTab('searchForm','next')});
    jQuery("#searchForm_r [id='end']").bind("click",function(){searchTab('searchForm','end')});
    jQuery("#searchForm_r [id='go']").bind("click",function(){searchTab('searchForm','go')});
    jQuery("#deleteCg [id='qd']").removeAttr("onclick");
    jQuery("#deleteCg [id='close']").removeAttr("onclick");
    jQuery("#pop_deleteCg [id='qd']").removeAttr("onclick");
    jQuery("#pop_deleteCg [id='close']").removeAttr("onclick");
    ///getOptionContent("addUserForm");
    //getOptionContent("roleuserForm");
    initData();
});
function initData(){
    setPageMessage("searchForm");
    var searchData = jQuery("#searchForm").serializeArray();
    searchData = eval(searchData);
    jQuery.ajax({
        type:"post",
        cache:"false",
        url:basePath+"permiss/list.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
        success:function(result){
            //获取分页信息
            pageMessage = result.pageDTO.pageBean;
            //分页信息展示
            pagingMessage("searchForm",pageMessage);
            //数据展示
            tableUtil(eval(result.list),"role");
        },
        error:function(){
            showMessageTxt("异常操作，请查看系统日志！","roles_msg","deleteCg");
            jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
            jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        }
    });
}
/**
 * 获取下拉框选项的内容
 * @param formid
 */
function getOptionContent(formid){
    //用户性别下拉框内容
    var userSexOption = jsonData.userSexSelectList;
    initOptionContent(userSexOption,formid,"userSex");
    //用户状态下拉框内容
    var userStatusOption = jsonData.userStatusSelectList;
    initOptionContent(userStatusOption,formid,"userStatus");
}

/**
 * 查询角色
 * @param tab 可选参数：first,end,before,next;
 * @param countPageNum 可选参数 countPageNum 每页显示条数;
 */
function searchTab(formId,tab,countPageNum){
    var checked = $("input[id='roles']").attr("checked");
    if(checked){
        $("input[id='roles']").attr("checked",false);
    }
    //go第几页
    var goPage = jQuery("#gotoRole").val();
    jQuery("#gotoRole").val("");
    var url = basePath+"permiss/list.controller";
    search(url,tab,"role",formId,countPageNum,goPage);
}

function findPeriValue(formId,tab,countPageNum){
    var checked = $("input[id='users']").attr("checked");
    if(checked){
        $("input[id='users']").attr("checked",false);
    }
    //go第几页
    var goPage = jQuery("#gotoUserRole").val();
    jQuery("#gotoUserRole").val("");
    var url = basePath+"permiss/getPermiValues.controller";
    search(url,tab,"userRole",formId,countPageNum,goPage);
}

function edit_value(id,value){
    $("#editValue_dataPermiValue").val(value);
    $("#editDataPermiValueId").val(id);
    jQuery("#editValue_save").unbind("click").bind("click",function(){editPermiValue()});
    hide('cover','yhpz');
    show('cover','editValue');
    //window.location.href=basePath+"role/edit.controller?id="+rid;
}


/**
 * 查询用户角色
 * @param formId
 * @param tab
 * @param countPageNum
 */
function findUserRole(formId,tab,countPageNum){
    var checked = $("input[id='addusers']").attr("checked");
    if(checked){
        $("input[id='addusers']").attr("checked",false);
    }
    //go第几页
    var goPage = jQuery("#gotoUser").val();
    jQuery("#gotoUser").val("");
    var url = basePath+"permiss/queryRelateUsers.controller";
    search(url,tab,"useradd",formId,countPageNum,goPage);
}
/**
 * 查询用户
 * @param formId
 * @param tab
 * @param countPageNum
 */
function findUser(formId,tab,countPageNum){
    var checked = $("input[id='addusers']").attr("checked");
    if(checked){
        $("input[id='addusers']").attr("checked",false);
    }
    //go第几页
    var goPage = jQuery("#gotoUser").val();
    jQuery("#gotoUser").val("");
    var url = basePath+"userConfig/listNotCheckedUsers.controller";
    search(url,tab,"useradd",formId,countPageNum,goPage);
}
/**
 * form重置
 */
function btn_click_reset(formid){
    document.getElementById(formid).reset();
   initData();

    //var sexdiv = jQuery("#"+formid+" [id='userSexSelected']");
    //var statusdiv = jQuery("#"+formid+" [id='userStatusSelected']");
    //jQuery("#"+sexdiv+"[class='fleft']").text("请选择");
    //jQuery("#"+statusdiv+"[class='fleft']").text("请选择");
}

function resetPermi(formid,id){
    document.getElementById(formid).reset();
    requestGetUserData(id);
}
/**
 * 根据name值重置
 */
function click_reset(){
    $("div :input[type=text]").each(function () {
        $(this).val("");
    });
}
/**
 * 新增角色事件
 */
function btn_click_add(){
    $("#sjqx_dataPermiName").val("");
    $("#sjqx_dataPermiCode").val("");
    show('cover','sjqx');
    //window.location.href=basePath+"role/add.controller";
}

function savePermiValue(){
    var dataPermiName = $("#addJsUser_dataPermiName").val().trim();
    if(dataPermiName == "" || dataPermiName == null){
        $("#addJsUser_dataPermiName_span").html("数据权限值不能为空");
        return;
    }
    var id = $("#dataPermiId").val();
    perid = id;
    jQuery("#saveCg_id").unbind("click").bind("click",function(){showUser(id);hide('cover','saveValueCg');showTB('cover','yhpz');popTable('yhpz');});
    jQuery("#saveCg_cancle_id").unbind("click").bind("click",function(){showUser(id);hide('cover','saveValueCg');showTB('cover','yhpz');popTable('yhpz')});
    var subdata = jQuery("#addPermiValue").serializeArray();
    jQuery.ajax({
        type:"post",
        url:basePath+"permiss/savePermiValue.controller?t="+Math.random(),
        dataType:"json",
        data:subdata,
        success:function(result){
            if(result.success){
                $("#saveValueCg_msg").html("保存成功");
                hide('cover','addJsUser');
                show("cover","saveValueCg");
            }else if(result.message!=""){
                $("#saveValueCg_msg").html("保存失败,"+result.message);
                hide('cover','addJsUser');
                show("cover","saveValueCg");
            }else{
                $("#saveValueCg_msg").html("保存失败");
                hide('cover','addJsUser');
                show("cover","saveValueCg");
            }
        }
    });

    $("#addJsUser_dataPermiName").val("");
}

function editPermiValue(){
    $("#editValue_dataPermiName_span").html("");
    var dataPermiName = $("#editValue_dataPermiValue").val().trim();
    if(dataPermiName == "" || dataPermiName == null){
        $("#editValue_dataPermiName_span").html("数据权限值不能为空");
        return;
    }
    jQuery("#saveCg_id").unbind("click").bind("click",function(){showUser(perid);hide('cover','saveValueCg');showTB('cover','yhpz');popTable('yhpz');});
    jQuery("#saveCg_cancle_id").unbind("click").bind("click",function(){showUser(perid);hide('cover','saveValueCg');showTB('cover','yhpz');popTable('yhpz')});
    //var subdata = jQuery("#editPermiValue").serializeArray();
    jQuery.ajax({
        type:"post",
        url:basePath+"permiss/updateValue.controller?t="+Math.random(),
        dataType:"json",
        data:{'id':$("#editDataPermiValueId").val(),'dataPermiValue':$("#editValue_dataPermiValue").val(),'dataPermiId':perid},
        success:function(result){
            if(result.success){
                $("#saveValueCg_msg").html("编辑保存成功");
                hide('cover','editValue');
                show("cover","saveValueCg");
            }else if(result.message!=""){
                $("#saveValueCg_msg").html("编辑保存失败,"+result.message);
                hide('cover','editValue');
                show("cover","saveValueCg");
            }else{
                $("#saveValueCg_msg").html("编辑保存失败");
                hide('cover','editValue');
                show("cover","saveValueCg");
            }
        }
    });
}

function savePermi(){
    $("#dataPermiName_span").html("");
    $("#dataPermiCode_span").html("");
    var dataPermiName = $("#sjqx_dataPermiName").val().trim();
    if(dataPermiName == "" || dataPermiName == null){
        $("#dataPermiName_span").html("数据权限名称不能为空");
        return;
    }
    var dataPermiCode = $("#sjqx_dataPermiCode").val().trim();
    if(dataPermiCode == "" || dataPermiCode == null){
        $("#dataPermiCode_span").html("数据权限编码不能为空");
        return;
    }
    var subdata = jQuery("#addForm").serializeArray();
    jQuery.ajax({
        type:"post",
        url:basePath+"permiss/save.controller?t="+Math.random(),
        dataType:"json",
        data:subdata,
        success:function(result){
            if(result.success){
                $("#saveCg_msg").html("保存成功");
                hide('cover','sjqx');
                show("cover","saveCg");
            }else if(result.message!=""){
                $("#saveCg_msg").html("保存失败,"+result.message);
                hide('cover','sjqx');
                show("cover","saveCg");
            }else{
                $("#saveCg_msg").html("保存失败");
                hide('cover','sjqx');
                show("cover","saveCg");
            }
        }
    });
}

function editPermi(){
    $("#bjqx_dataPermiName_span").html("");
    $("#bjqx_dataPermiCode_span").html("");

    $("#bjqx_dataPermiName_span").html("");
    $("#bjqx_dataPermiCode_span").html("");
    var dataPermiName = $("#bjqx_dataPermiName").val().trim();
    if(dataPermiName == "" || dataPermiName == null){
        $("#bjqx_dataPermiName_span").html("数据权限名称不能为空");
        return;
    }
    var dataPermiCode = $("#bjqx_dataPermiCode").val().trim();
    if(dataPermiCode == "" || dataPermiCode == null){
        $("#bjqx_dataPermiCode_span").html("数据权限编码不能为空");
        return;
    }
    var subdata = jQuery("#editForm").serializeArray();
    jQuery.ajax({
        type:"post",
        url:basePath+"permiss/update.controller?t="+Math.random(),
        dataType:"json",
        data:subdata,
        success:function(result){
            if(result.success){
                $("#saveCg_msg").html("编辑保存成功");
                hide('cover','bjqx');
                show("cover","saveCg");
            }else if(result.message!=""){
                $("#saveCg_msg").html("编辑保存失败,"+result.message);
                hide('cover','bjqx');
                show("cover","saveCg");
            }else{
                $("#saveCg_msg").html("编辑保存失败");
                hide('cover','bjqx');
                show("cover","saveCg");
            }
        }
    });
}

function relateUser(id){

    hide('cover','yhpz');
    show('cover','addReleateUser');
}

/**
 * 显示角色下的用户
 * @param id
 */
function showRelateUser(id){

    if(id != "")
        permiValueId = id;
    else
        id = permiValueId;

    btn_click_reset('addUserForm');
    jQuery("#btnadd").removeAttr("onclick");
    jQuery("#btnadd").unbind("click").bind("click",function(){addUser();hide('cover','yhpz');showTB('cover','addJsUser');popTable('addJsUser')});
    jQuery("#deleteAllUser").removeAttr("onclick");
    jQuery("#deleteAllUser").unbind("click").bind("click",function(){btn_click_delete('',id,'users')});
    jQuery("#users").bind("click",function(){isSelAll('users')});
    jQuery("#addUserForm [id='reset']").bind("click",function(){findRelateUserreset('addUserForm')});
    jQuery("#addUserForm [id='search']").bind("click",function(){findRelateUser('addUserForm','search')});
    jQuery("#addUserForm_r [id='first']").bind("click",function(){findRelateUser('addUserForm','first')});
    jQuery("#addUserForm_r [id='before']").bind("click",function(){findRelateUser('addUserForm','before')});
    jQuery("#addUserForm_r [id='next']").bind("click",function(){findRelateUser('addUserForm','next')});
    jQuery("#addUserForm_r [id='end']").bind("click",function(){findRelateUser('addUserForm','end')});
    jQuery("#addUserForm_r [id='go']").bind("click",function(){findRelateUser('addUserForm','go')});
    jQuery("#back").removeAttr("onclick");
    jQuery("#back").unbind("click").bind("click",function(){back_to_request();hide('cover','addJsUser');show('cover','yhpz')});
    var isChecked = jQuery("input[id='users']").attr("checked");
    if(isChecked){
        jQuery("input[id='users']").attr("checked",false);
    }

    jQuery("#back1").unbind("click").bind("click",function(){showUser(perid);showTB('cover','yhpz');popTable('yhpz')});

    setPageMessage("addUserForm");
    requestGetRelateUserData(id);
}
/**
 * 请求获取用户的数据
 */
function requestGetRelateUserData(id){
    jQuery("#addUser").html("");
    jQuery("#addUser").append("<input type='hidden' name='dataPermiValueId' id='dataPermiValueId' value='"+id+"'/>");
    var subdata = jQuery("#addUserForm").serializeArray();
    jQuery.ajax({
        type:"get",
        cache:"false",
        url:basePath+"permiss/queryRelateUsers.controller?t="+Math.random(),
        dataType:"json",
        data:subdata,
        success:function(result){
            //获取分页信息
            pageMessage = result.pageDTO.pageBean;
            //分页信息展示
            pagingMessage('addUserForm',pageMessage);
            //数据展示
            tableUtil(eval(result.list),"useradd");
        },
        error:function(){
            jQuery("#userRole_tbody").html("");
            showMessageTxt("异常操作，请查看系统日志！","roles_msg","deleteCg");
            jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
            jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        }
    });
}

function findRelateUser(formId,tab,countPageNum){
    var checked = $("input[id='addusers']").attr("checked");
    if(checked){
        $("input[id='addusers']").attr("checked",false);
    }
    //go第几页
    var goPage = jQuery("#gotoUser").val();
    jQuery("#gotoUser").val("");
    var url = basePath+"permiss/queryRelateUsers.controller";
    search(url,tab,"useradd",formId,countPageNum,goPage);
}

function findRelateUserreset(formid){
    document.getElementById(formid).reset();
    showRelateUser(permiValueId)
    //var sexdiv = jQuery("#"+formid+" [id='userSexSelected']");
    //var statusdiv = jQuery("#"+formid+" [id='userStatusSelected']");
    //jQuery("#"+sexdiv+"[class='fleft']").text("请选择");
    //jQuery("#"+statusdiv+"[class='fleft']").text("请选择");
}


/**
 * @param id
 */
function addingUser(){
    $("#dataPermiValueId").val(permiValueId);
    btn_click_reset('addiingUserForm');
    jQuery("#btnadd").removeAttr("onclick");
    jQuery("#btnadd").unbind("click").bind("click",function(){addUser();hide('cover','yhpz');showTB('cover','addJsUser');popTable('addJsUser')});
    jQuery("#deleteAllUser").removeAttr("onclick");
    jQuery("#deleteAllUser").unbind("click").bind("click",function(){btn_click_delete('',id,'users')});
    jQuery("#users").bind("click",function(){isSelAll('users')});
    jQuery("#addiingUserForm [id='reset']").bind("click",function(){adding_reset('addiingUserForm')});
    jQuery("#addiingUserForm [id='search']").bind("click",function(){findAddingUser('addiingUserForm','search')});
    jQuery("#addiingUserForm_r [id='first']").bind("click",function(){findAddingUser('addiingUserForm','first')});
    jQuery("#addiingUserForm_r [id='before']").bind("click",function(){findAddingUser('addiingUserForm','before')});
    jQuery("#addiingUserForm_r [id='next']").bind("click",function(){findAddingUser('addiingUserForm','next')});
    jQuery("#addiingUserForm_r [id='end']").bind("click",function(){findAddingUser('addiingUserForm','end')});
    jQuery("#addiingUserForm_r [id='go']").bind("click",function(){findAddingUser('addiingUserForm','go')});
    jQuery("#back2").removeAttr("onclick");
    jQuery("#back2").unbind("click").bind("click",function(){showRelateUser(permiValueId);hide('cover','addingUser');show('cover','addReleateUser');});
    var isChecked = jQuery("input[id='users']").attr("checked");
    if(isChecked){
        jQuery("input[id='users']").attr("checked",false);
    }
    setPageMessage("addiingUserForm");
    addingUserData(permiValueId);

}

/**
 * 查询用户角色
 * @param formId
 * @param tab
 * @param countPageNum
 */
function findAddingUser(formId,tab,countPageNum){
    var checked = $("input[id='addusers']").attr("checked");
    if(checked){
        $("input[id='addusers']").attr("checked",false);
    }
    //go第几页
    var goPage = jQuery("#gotoUsers").val();
    jQuery("#gotoUsers").val("");
    var url = basePath+"permiss/queryNotRelateUsers.controller";
    search(url,tab,"useradding",formId,countPageNum,goPage);
}
/**
 * 请求获取用户的数据
 */
function addingUserData(id){
    jQuery("#addUser").html("");
    jQuery("#addUser").append("<input type='hidden' name='dataPermiValueId' id='dataPermiValueId' value='"+id+"'/>");
    var subdata = jQuery("#addUserForm").serializeArray();
    jQuery.ajax({
        type:"get",
        cache:"false",
        url:basePath+"permiss/queryNotRelateUsers.controller?t="+Math.random(),
        dataType:"json",
        data:subdata,
        success:function(result){
            //获取分页信息
            pageMessage = result.pageDTO.pageBean;
            //分页信息展示
            pagingMessage('addiingUserForm',pageMessage);
            //数据展示
            tableUtil(eval(result.list),"useradding");
        },
        error:function(){
            jQuery("#userRole_tbody").html("");
            showMessageTxt("异常操作，请查看系统日志！","roles_msg","deleteCg");
            jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
            jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        }
    });
}

function adding_reset(formid){
    document.getElementById(formid).reset();
    addingUserData(permiValueId);

    //var sexdiv = jQuery("#"+formid+" [id='userSexSelected']");
    //var statusdiv = jQuery("#"+formid+" [id='userStatusSelected']");
    //jQuery("#"+sexdiv+"[class='fleft']").text("请选择");
    //jQuery("#"+statusdiv+"[class='fleft']").text("请选择");
}

/**
 * 请求获取用户的数据
 */
function toRelateUser(userId){
    jQuery("#addingUsers").html("");
    jQuery("#addingUsers").append("<input type='hidden' name='dataPermiValueId' id='dataPermiValueId' value='"+permiValueId+"'/>");
    jQuery("#addingUsers").append("<input type='hidden' name='userId' id='userId' value='"+userId+"'/>");
    var subdata = jQuery("#addiingUserForm").serializeArray();

    jQuery("#saveCg_id").unbind("click").bind("click",function(){showRelateUser(permiValueId);hide('cover','saveValueCg');showTB('cover','addReleateUser');popTable('addReleateUser');});
    jQuery("#saveCg_cancle_id").unbind("click").bind("click",function(){showRelateUser(permiValueId);hide('cover','saveValueCg');showTB('cover','addReleateUser');popTable('addReleateUser')});
    jQuery.ajax({
        type:"get",
        cache:"false",
        url:basePath+"permiss/saveValueUser.controller?t="+Math.random(),
        dataType:"json",
        data:subdata,
        success:function(result){
            if(result.success){
                $("#saveValueCg_msg").html("关联成功");
                hide('cover','addingUser');
                show("cover","saveValueCg");
            }else{
                $("#saveValueCg_msg").html("关联失败");
                hide('cover','addingUser');
                show("cover","saveValueCg");
            }
        }
    });
}

function deleteValueUser_sure(userId){
    jQuery("#delete_sure_span").unbind("click").bind("click",function(){showRelateUser(permiValueId);hide('cover','delete_sure');showTB('cover','addReleateUser');popTable('addReleateUser');});
    jQuery("#delete_sure_bqd").unbind("click").bind("click",function(){showRelateUser(permiValueId);hide('cover','delete_sure');showTB('cover','addReleateUser');popTable('addReleateUser');});
    jQuery("#delete_sure_qd").unbind("click").bind("click",function(){deleteValueUser(userId);hide('cover','delete_sure');});
    hide('cover','addReleateUser');
    show('cover','delete_sure');
}

function deleteValueUser(userId){
    jQuery("#saveCg_id").unbind("click").bind("click",function(){showRelateUser(permiValueId);hide('cover','saveValueCg');showTB('cover','addReleateUser');popTable('addReleateUser');});
    jQuery("#saveCg_cancle_id").unbind("click").bind("click",function(){showRelateUser(permiValueId);hide('cover','saveValueCg');showTB('cover','addReleateUser');popTable('addReleateUser')});
    jQuery.ajax({
        type:"post",
        url:basePath+"permiss/deleteValueUser.controller?t="+Math.random(),
        dataType:"json",
        data:{'userId':userId,'permiValueId':permiValueId},
        success:function(result){
            if(result.success){
                $("#saveValueCg_msg").html("删除成功");
                hide('cover','delete_sure');
                show("cover","saveValueCg");
            }else{
                $("#saveValueCg_msg").html("删除失败");
                hide('cover','delete_sure');
                show("cover","saveValueCg");
            }
        }
    });

}


function delete_sure(id){
    jQuery("#delete_sure_span").unbind("click").bind("click",function(){location.reload()});
    jQuery("#delete_sure_bqd").unbind("click").bind("click",function(){location.reload()});
    jQuery("#delete_sure_qd").unbind("click").bind("click",function(){btn_click_delete(id);hide('cover','delete_sure');});
    //hide('','');
    show('cover','delete_sure');
}

/**
 * 删除事件
 * @param ids
 * @returns {Boolean}
 */
function btn_click_delete(id){
    jQuery.ajax({
        type:"post",
        url:basePath+"permiss/delete.controller?t="+Math.random(),
        dataType:"json",
        data:{'id':id},
        success:function(result){
            if(result.success){
                $("#saveCg_msg").html("删除成功");
                //hide('cover','bjqx');
                show("cover","saveCg");
            }else{
                $("#saveCg_msg").html("删除失败");
                //hide('cover','bjqx');
                show("cover","saveCg");
            }
        }
    });

}

function deleteValue_sure(id){
    jQuery("#delete_sure_span").unbind("click").bind("click",function(){showUser(perid);hide('cover','delete_sure');showTB('cover','yhpz');popTable('yhpz');});
    jQuery("#delete_sure_bqd").unbind("click").bind("click",function(){showUser(perid);hide('cover','delete_sure');showTB('cover','yhpz');popTable('yhpz');});
    jQuery("#delete_sure_qd").unbind("click").bind("click",function(){deleteValue(id);hide('cover','delete_sure');});
    hide('cover','yhpz');
    show('cover','delete_sure');
}

function deleteValue(id){
    jQuery("#saveCg_id").unbind("click").bind("click",function(){showUser(perid);hide('cover','saveValueCg');showTB('cover','yhpz');popTable('yhpz');});
    jQuery("#saveCg_cancle_id").unbind("click").bind("click",function(){showUser(perid);hide('cover','saveValueCg');showTB('cover','yhpz');popTable('yhpz')});
    jQuery.ajax({
        type:"post",
        url:basePath+"permiss/deleteValue.controller?t="+Math.random(),
        dataType:"json",
        data:{'id':id},
        success:function(result){
            if(result.success){
                $("#saveValueCg_msg").html("删除成功");
                hide('cover','delete_sure');
                show("cover","saveValueCg");
            }else{
                $("#saveValueCg_msg").html("删除失败");
                hide('cover','delete_sure');
                show("cover","saveValueCg");
            }
        }
    });

}
/**
 * 得到checkBox的选中项
 * @param name
 * @returns {Array}
 */
function getChecks(name){
    var re = [];
    var ck = jQuery("[name='"+name+"']");
    for(var i=0; i<ck.length; i++)
    {
        if(ck[i].checked)
        {
            re.push(ck[i].value);
        }
    }
    return re;
}
/**
 * 确定是否删除对话框
 * @param text 提示内容
 * @param ids 所选记录的id数组
 */
function showDialog(text,ids,roleid,name){
    $("#"+name+"_dialog").text(text);
    if(name=="roles"){
        //var delRolehref="confirm_delete_role(\'"+ids+"\')";
        show('cover','pl_delete');
        $("#roles_qd").unbind("click").bind("click",function(){confirm_delete_role(ids);});
    }else if(name=="users"){
        show('cover','delete');
        //var delUserhref="confirm_delete_user(\'"+ids+"\')";
        $("#users_qd").unbind("click").bind("click",function(){confirm_delete_user(ids,roleid);});
    }
}
/**
 * 确定删除角色
 * @param ids
 */
function confirm_delete_role(ids){
    hide('cover','pl_delete');
    jQuery.ajax({
        type:"get",
        cache:"false",
        url:basePath+"roleDelete/delete.controller?t="+Math.random()+"&ids="+ids,
        dataType:"json",
        success:function(result){
            showMessageTxt(result.message,"roles_msg","deleteCg");
            if(result.messageCode.indexOf("S")==0){
                //var link = "delSuccess(\'deleteCg\')";
                jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){delSuccess('deleteCg')});
                jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){delSuccess('deleteCg')});
            }
        },
        error:function(){
            showMessageTxt("异常操作，请查看系统日志！","roles_msg","deleteCg");
            jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
            jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        }
    });
}
function delSuccess(divid,roleid){
    hide("cover",divid);
    if(divid == "pop_deleteCg"){
        showUser(roleid);
        showTB("cover","yhpz");
    }
    if(divid == "deleteCg"){
        window.location.href=basePath+"role/list.controller";
    }
}
/**
 * 确定删除用户角色
 * @param ids
 */
function confirm_delete_user(ids,roleid){
    hide('cover','delete');
    jQuery.ajax({
        type:"get",
        cache:"false",
        url:basePath+"userConfig/deleteUserRole.controller?t="+Math.random()+"&ids="+ids+"&roleid="+roleid,
        dataType:"json",
        success:function(result){
            showMessageTxt(result.message,"users_msg","pop_deleteCg");
            if(result.messageCode.indexOf("S")==0){
                var isChecked = jQuery("input[id='users']").attr("checked");
                if(isChecked){
                    jQuery("input[id='users']").attr("checked",false);
                }
                var rid = jQuery("#roleid").val();
                //var link = "delSuccess(\'pop_deleteCg\',\'"+rid+"\')";
                jQuery("#pop_deleteCg [id='qd']").unbind("click").bind("click",function(){delSuccess('pop_deleteCg',rid)});
                jQuery("#pop_deleteCg [id='close']").unbind("click").bind("click",function(){delSuccess('pop_deleteCg',rid)});
            }
        },
        error:function(){
            showMessageTxt("异常操作，请查看系统日志！","roles_msg","deleteCg");
            jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
            jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        }
    });
}
/**
 * 添加用户的弹出层中_点击返回_事件
 */
function back_to_request(){
    btn_click_reset('addUserForm');
    jQuery("#roleuserForm [id='pageNum']").val(1);
    jQuery("#roleuserForm [id='firstEnter']").val(false);
    var isChecked = jQuery("input[id='addusers']").attr("checked");
    if(isChecked){
        jQuery("input[id='addusers']").attr("checked",false);
    }
    requestGetUserData(jQuery("#rid").val());
}
/**
 * 显示角色下的用户
 * @param id
 */
function showUser(id){
    btn_click_reset('roleuserForm');
    jQuery("#btnadd").removeAttr("onclick");
    jQuery("#btnadd").unbind("click").bind("click",function(){hide('cover','yhpz');showTB('cover','addJsUser');});
    if(id==""){
        id=$("#dataPermiId").val();
    }
    perid = id;
    $("#dataPermiId").val(id);
    jQuery("#deleteAllUser").removeAttr("onclick");
    jQuery("#deleteAllUser").unbind("click").bind("click",function(){btn_click_delete('',id,'users')});
    jQuery("#users").bind("click",function(){isSelAll('users')});

    jQuery("#addJsUser_save").unbind("click").bind("click",function(){savePermiValue()});
    jQuery("#roleuserForm [id='reset']").bind("click",function(){resetPermi('roleuserForm',id)});
    jQuery("#roleuserForm [id='search']").bind("click",function(){findPeriValue('roleuserForm','search')});
    jQuery("#roleuserForm_r [id='first']").bind("click",function(){findPeriValue('roleuserForm','first')});
    jQuery("#roleuserForm_r [id='before']").bind("click",function(){findPeriValue('roleuserForm','before')});
    jQuery("#roleuserForm_r [id='next']").bind("click",function(){findPeriValue('roleuserForm','next')});
    jQuery("#roleuserForm_r [id='end']").bind("click",function(){findPeriValue('roleuserForm','end')});
    jQuery("#roleuserForm_r [id='go']").bind("click",function(){findPeriValue('roleuserForm','go')});
    jQuery("#back").removeAttr("onclick");
    jQuery("#back").unbind("click").bind("click",function(){back_to_request();hide('cover','addJsUser');show('cover','yhpz')});
    var isChecked = jQuery("input[id='users']").attr("checked");
    if(isChecked){
        jQuery("input[id='users']").attr("checked",false);
    }
    setPageMessage("roleuserForm");
    requestGetUserData(id);
}
/**
 * 请求获取用户的数据
 */
function requestGetUserData(id){
    jQuery("#roleuser").html("");
    jQuery("#roleuser").append("<input type='hidden' name='dataPermiId' id='id' value='"+id+"'/>");
    var subdata = jQuery("#roleuserForm").serializeArray();
    jQuery.ajax({
        type:"get",
        cache:"false",
        url:basePath+"permiss/getPermiValues.controller?t="+Math.random(),
        dataType:"json",
        data:subdata,
        success:function(result){
            //获取分页信息
            pageMessage = result.pageDTO.pageBean;
            //分页信息展示
            pagingMessage('roleuserForm',pageMessage);
            //数据展示
            tableUtil(eval(result.list),"userRole");
        },
        error:function(){
            jQuery("#userRole_tbody").html("");
            showMessageTxt("异常操作，请查看系统日志！","roles_msg","deleteCg");
            jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
            jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        }
    });
}
/**
 * 显示权限
 * @param id
 */
function showFunc(id,name){
    perid = id;
    pername = name;
    jQuery("#tab2").unbind("click").bind("click",function(){btnFunc("tab2");getFuncList(id);});
    //首次弹出页面，默认是tab2
    jQuery("#submit").removeAttr("onclick");
    jQuery("#submit").unbind("click").bind("click",function(){submitFunc("tab2")});
    $(".roleName_").text(name);
    getFuncList(id);
    getGranted(id);
}
/**
 * 显示权限
 * @param id
 */
function showFuncByUid(id){
    $("#tab_2").show();
    $("#tab_1").hide();
    $("#tab1").removeClass("hover");
    $("#tab2").addClass("hover");
    jQuery("#tab1").unbind("click").bind("click",function(){btnFunc("tab1");getAppList(id);});
    jQuery("#tab2").unbind("click").bind("click",function(){btnFunc("tab2");getFuncList(id);});
    //首次弹出页面，默认是tab2
    jQuery("#submit").removeAttr("onclick");
    jQuery("#submit").unbind("click").bind("click",function(){submitFunc("tab2")});
    jQuery("#selectAll").unbind("click").bind("click",function(){selAll("tab2")});
    jQuery("#deSelectAll").unbind("click").bind("click",function(){deSelAll("tab2")});
    getFuncListByUid(id);
}
/**
 * 绑定btn不同的事件
 * @param tab
 */
function btnFunc(tab){
    jQuery("#submit").unbind("click").bind("click",function(){submitFunc(tab)});
    jQuery("#selectAll").unbind("click").bind("click",function(){selAll(tab)});
    jQuery("#deSelectAll").unbind("click").bind("click",function(){deSelAll(tab)});
}
/**
 * 获取权限列表根据角色id
 * @param id
 */
function getFuncList(id){
    jQuery("#func").html("");
    jQuery("#func").append("<div id='tree'></div>");
    //获取权限
    getTree(basePath+"permiss/getFuncs.controller","zTreeCheck");

    $("#par").html("");
    $("#par").append("<input type='hidden' name='id' value='"+id+"'/>");
}

function getGranted(id){
    jQuery.ajax({
        type:"post",
        url:basePath+"permiss/getGranted.controller?t="+Math.random(),
        dataType:"json",
        data:{'id':id},
        success:function(result){
            if(result != null && result != ""){
                var funcids = result.split(",");
                var treeObj = $.fn.zTree.getZTreeObj("tree");
               var node = treeObj.getNodes();
                var nodes = treeObj.transformToArray(node);
                for (var i=0, l=nodes.length; i < l; i++) {
                    for(var j=0, k=funcids.length; j < k; j++){
                        var node = nodes[i].value;
                        if(funcids[j] == nodes[i].value){
                            treeObj.checkNode(nodes[i], true, false);
                            break;
                        }
                    }
                }

            }

        }
    });
}


/**
 * 获取权限列表根据用户id
 * @param id
 */
function getFuncListByUid(id){
    jQuery("#sjqx_shu").html("");
    jQuery("#sjqx_shu").append("<div id='tree'></div>");
    //获取权限
    getTree(basePath+"funcConfig/getFuncsByUid.controller?userid="+id,"zTreeCheck");
    $("#par").html("");
    $("#par").append("<input type='hidden' name='roleid' value='"+id+"'/>");
}
/**
 *ztree插件的回调函数
 */
function sel() {}
function zTreeOnCheck() {}
//菜单树的点击事件请求权限资源数据
function showFuncById(fId,fpId){
    var dAuth = $("#" + fId + "_da").val();
    var daid = $("#" + fId + "_id").val();
    jQuery.ajax({
        type:"get",
        cache:"false",
        url:basePath+"dataAuthConfig/queryDataAuthByFId.controller?s="+Math.random(),
        dataType:"json",
        data:{"funcid":fId,"dataauth":dAuth,"id":daid},
        success:function(result){
            //当用户点击菜单树中某个节点时候，在页面中加入一个隐藏域放置该对象的fid
            jQuery("#dAuthfid_").html("<input type='hidden' name='funcid' value='"+fId+"'></input>");

            jQuery("#dAuthid_").html("<input type='hidden' name='id' id='id_' value='"+(result == null?"":result.bmsDataAuth.id)+"'></input>");
            if(result == null || result == "" || result.bmsDataAuth.dataauth == null || result.bmsDataAuth.dataauth == ""){
                var dataauths = 					"<tr>                                                                                           "+
                    "	<td><input type=\"text\" class=\"da_input\" name=\"dataauths\" /></td>"+
                    "	<td>                                                                                        "+
                    "	<div class=\"minus_div\" onclick=\"deltr(this)\" ></div>                                    "+
                    "    </td>                                                                                      "+
                    "</tr>                                                                                          "+
                    "<tr>                                                                                           "+
                    "	<td><input type=\"text\" class=\"da_input\" name=\"dataauths\" /></td>"+
                    "	<td>                                                                                        "+
                    "	<div class=\"minus_div\" onclick=\"deltr(this)\" ></div>                                    "+
                    "    </td>                                                                                      "+
                    "</tr>                                                                                          "+
                    "<tr>                                                                                    "+
                    "	<td><input type=\"text\" class=\"da_input\" name=\"dataauths\" /></td> "+
                    "	<td>                                                                                 "+
                    "	<span onclick=\"addtr(this)\">                                                         "+
                    "	<div class=\"plus1\">                                                                  "+
                    "    <div class=\"plus1_div\"></div>                                                       "+
                    "  	</div>                                                                               "+
                    "	<div class=\"plus2\">                                                                  "+
                    "    <div class=\"plus2_div\"></div>                                                       "+
                    "  	</div>                                                                               "+
                    "  	</span>                                                                              "+
                    "    </td>                                                                               "+
                    "</tr>                                                                                   "+
                    "<tr>                                                                                        "+
                    "<td colspan=\"2\" align=\"center\">                                                             "+
                    "<span onclick=\"save_dataAuth()\" style=\"padding: 5px 38px;background: rgba(102, 255, 255, 1);color: #333;\">保存</span> "+
                    "<span onclick=\"click_reset()\" style=\"padding: 5px 38px;background: #ddd;margin-left: 10px;\">重置</span></td>        "+
                    "</tr>"
                jQuery("#dAuthInFo_table").html(dataauths);
            } else {
                var bmsDataAuth = "";
                bmsDataAuth = result.bmsDataAuth;
                //展示数据授权数据
                showRscFunc(bmsDataAuth);
            }
        },
        error:function(){
            showMsg("操作失败！");
        }
    });
}
/**
 * 删除当前行
 * @param that
 */
function deltr(that){
    /*$(that).parent().parent().parent().remove();*/
    $(that).parent().parent().remove();
}
/**
 * 向下新增行
 * @param that
 */
function addtr(that){
    var tr = "<tr>                                                                                    "+
        "	<td><input type=\"text\" class=\"da_input\" name=\"dataAuthBean.dataauth\" value=\"\"/></td> "+
        "	<td>                                                                                 "+
        "	<span onclick=\"addtr(this)\">                                                         "+
        "	<div class=\"plus1\">                                                                  "+
        "    <div class=\"plus1_div\"></div>                                                       "+
        "  	</div>                                                                               "+
        "	<div class=\"plus2\">                                                                  "+
        "    <div class=\"plus2_div\"></div>                                                       "+
        "  	</div>                                                                               "+
        "  	</span>                                                                              "+
        "    </td>                                                                               "+
        "</tr>                                                                                   "
    $(that).parent().parent().after(tr);
    $(that).parent().html("<div class=\"minus_div\" onclick=\"deltr(this)\"></div>");
}
/**
 * 展示权限详细信息
 * @param bmsDataAuth
 * @param resources
 */
function showRscFunc(bmsDataAuth,resources){
    jQuery("#dAuthid_").html("<input type='hidden' name='id' id='id_' value='"+bmsDataAuth.id+"'></input>");
    //遍历功能权限的json数据，在页面展示
    for (var k in bmsDataAuth){
        var el = jQuery('#showDataAuth [id='+k+'_]');
        if (el){
            if(k=='id'){
                el.val(bmsDataAuth[k]);
            }else{
                if(k=='dataauth'){
                    var arr= new Array();
                    var dataauths = "";
                    if(bmsDataAuth[k] == null || bmsDataAuth[k] == ""){

                    } else {
                        arr=bmsDataAuth[k].split(',');
                        var top_inp = 71;
                        var top_m = 84 ;
                        for (i=0;i<arr.length ;i++ ) {
                            var dataauth = "";
                            if(i == (arr.length -1)){
                                dataauth = "<tr>                                                                                    "+
                                    "	<td><input type=\"text\" class=\"da_input\" name=\"dataauths\" value=\""+ arr[i] +"\"/></td> "+
                                    "	<td>                                                                                 "+
                                    "	<span onclick=\"addtr(this)\">                                                         "+
                                    "	<div class=\"plus1\">                                                                  "+
                                    "    <div class=\"plus1_div\"></div>                                                       "+
                                    "  	</div>                                                                               "+
                                    "	<div class=\"plus2\">                                                                  "+
                                    "    <div class=\"plus2_div\"></div>                                                       "+
                                    "  	</div>                                                                               "+
                                    "  	</span>                                                                              "+
                                    "    </td>                                                                               "+
                                    "</tr>                                                                                   "
                            } else {
                                dataauth = "<tr>                                                                                           "+
                                    "	<td><input type=\"text\" class=\"da_input\" name=\"dataauths\" value=\""+ arr[i] +"\"/></td>"+
                                    "	<td>                                                                                        "+
                                    "	<div class=\"minus_div\" onclick=\"deltr(this)\" ></div>                                    "+
                                    "    </td>                                                                                      "+
                                    "</tr>                                                                                          "
                            }
                            top_inp += 34;
                            top_m += 34;
                            /*var dataauth = "<div class=\"sjqx_apd ax_default text_field\">" +
                            "<input type=\"text\" class=\"sjqx_apd_inp\" name=\"dataauths\" value=\""+ arr[i] +"\"/>"+"</div>"*/
                            dataauths += dataauth;
                        }
                    }
                    dataauths = dataauths +
                        "<tr>                                                                                        "+
                        "<td colspan=\"2\" align=\"center\">                                                             "+
                        "<span onclick=\"save_dataAuth()\" style=\"padding: 5px 38px;background: rgba(102, 255, 255, 1);color: #333;\">保存</span> "+
                        "<span onclick=\"click_reset()\" style=\"padding: 5px 38px;background: #ddd;margin-left: 10px;\">重置</span></td>        "+
                        "</tr>                                                                                       "

//					jQuery("#showDataAuth").html(dataauths);
                    jQuery("#dAuthInFo_table").html(dataauths);
                }
                el.val(bmsDataAuth[k]==null?"无":bmsDataAuth[k]);
                jQuery("#sjqx").trigger("create");
            }
        }
    }
    //权限资源数据
    if(!jQuery.isEmptyObject(resources)){
        //不是菜单
        jQuery("#show_resources").removeClass("undis");
        jQuery("#menus_").html("否");
        tableUtil(resources,"resourcesdata");
    }else{
        //是菜单
        jQuery("#show_resources").addClass("undis");
        jQuery("#menus_").html("是");
    }

}
/**
 *批量追加数据权限信息
 */
function batch_apd_dataAuth(){
    var subdata = jQuery("#saveDataAuthForm").serializeArray();
    jQuery.ajax({
        type:"post",
        url:basePath+"dataAuthConfig/batchSetDataAuth.controller?t="+Math.random(),
        dataType:"json",
        data:subdata,
        success:function(result){
            if($("#rep"+ result.fid +"").val() == "rep"){
                $("#" + result.fid + "").html(result.apphtmltd);
            } else {
                $("#appendDataAuthForm [id='par']").append(result.apphtmltr);
            }
        }
    });
}
/**
 * 保存数据权限信息
 */
function save_dataAuth(){
    var subdata = jQuery("#saveDataAuthForm").serializeArray();
    jQuery.ajax({
        type:"post",
        url:basePath+"dataAuthConfig/setDataAuthForUser.controller?t="+Math.random(),
        dataType:"json",
        data:subdata,
        success:function(result){
            showMessageTxt(result.message,"message","bccg");
        }
    });
}
/**
 * 弹窗关闭时清除数据
 */
function re_dataAuth(){
    var table = "<span style=\"visibility:hidden;width:30%;float:left ;text-align: right;margin-top: 10px\">查询条件：</span>"+
        "<table id=\"dAuthInFo_table\"></table>";
    jQuery("#dAuthInFo_").html(table);
    jQuery("#appendDataAuthForm").html("<p id=\"par\"/>");
}
/**
 * 获取小应用列表
 * @param id
 */
function getAppList(id){
    jQuery("#appList").html("");
    jQuery.ajax({
        type:"get",
        cache:"false",
        url:basePath + "funcConfig/getApps.controller?roleid="+id+"&t="+Math.random(),
        dataType:"json",
        success:function(result){
            var pageModelList = eval(result.appList);
            if(pageModelList!=null){
                for(var i = 0; i<pageModelList.length;i++){
                    if(pageModelList[i].checked){
                        jQuery("#appList").append("<li class='middle'><input type='checkbox' name='appName' checked='checked' value='"+pageModelList[i].id+"'/><span>"+pageModelList[i].appName+"</span></li>");
                    }else{
                        jQuery("#appList").append("<li class='middle'><input type='checkbox' name='appName' value='"+pageModelList[i].id+"'/><span>"+pageModelList[i].appName+"</span></li>");
                    }

                }
            }
        },
        error:function(){
            showMessageTxt("异常操作，请联系管理员！","roles_msg","deleteCg");
            jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
            jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        }
    });
    $("#parApp").html("");
    $("#parApp").append("<input type='hidden' name='id' value='"+id+"'/>");
}
/**
 * 提交授权
 * @returns {Boolean}
 */
function submitFunc(tab){
    hide("cover","qxpz");
    if(tab=="tab2"){
        var nodes;
        var treeObj = $.fn.zTree.getZTreeObj("tree");
        nodes = treeObj.getCheckedNodes();
        var bool=false;
        if(nodes.length>0){
            bool=true;
        }
        if(bool){
            for(var i=1;i<nodes.length;i++){
                $("#par").append("<input type='hidden' name='treeChk' value='"+nodes[i].value+"'/>");
            }
            jQuery("#saveCg_id").unbind("click").bind("click",function(){showFunc(perid,pername);show('cover','qxpz');hide('cover','saveValueCg');});
            jQuery("#saveCg_cancle_id").unbind("click").bind("click",function(){showFunc(perid,pername);show('cover','qxpz');hide('cover','saveValueCg');});
            var subdata = jQuery("#form1").serializeArray();
            jQuery.ajax({
                type:"post",
                url:basePath+"permiss/grantFunc.controller?t="+Math.random(),
                dataType:"json",
                data:subdata,
                success:function(result){
                    //showMessageTxt(result.message,"roles_msg","deleteCg");
                    $("#saveValueCg_msg").html("授权成功");
                    hide('cover','qxpz');
                    show("cover","saveValueCg");
                }
                //,
                // error:function(){
                //     showMessageTxt("没有授权权限！","roles_msg","deleteCg");
                //     jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
                //     jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
                // }
            });
        }else{
            jQuery("#saveCg_id").unbind("click").bind("click",function(){showFunc(perid,pername);show('cover','qxpz');hide('cover','saveValueCg');});
            jQuery("#saveCg_cancle_id").unbind("click").bind("click",function(){showFunc(perid,pername);show('cover','qxpz');hide('cover','saveValueCg');});
            $("#saveValueCg_msg").html("授权失败");
            hide('cover','qxpz');
            show("cover","saveValueCg");
            //showMessageTxt("请选择至少一项！","roles_msg","deleteCg");
            jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');showFunc(perid,pername);show('cover','qxpz')});
            jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
            return false;
        }
    }
}
/**
 * 添加用户（用户列表--非本角色下的用户）
 * @param roleid
 */
function addUser(isFirst){
    btn_click_reset('roleuserForm');
    $("input[id='users']").attr("checked",false);
    jQuery("#addUserForm [id='reset']").unbind("click").bind("click",function(){btn_click_reset('addUserForm')});
    jQuery("#addUserForm [id='search']").unbind("click").bind("click",function(){findUser('addUserForm','search')});
    jQuery("#grantFunc").removeAttr("onclick");
    jQuery("#grantFunc").unbind("click").bind("click",function(){addUserForRole()});
    jQuery("#addusers").unbind("click").bind("click",function(){isSelAll('addusers')});
    jQuery("#addUserForm_r [id='first']").bind("click",function(){findUser('addUserForm','first')});
    jQuery("#addUserForm_r [id='before']").bind("click",function(){findUser('addUserForm','before')});
    jQuery("#addUserForm_r [id='next']").bind("click",function(){findUser('addUserForm','next')});
    jQuery("#addUserForm_r [id='end']").bind("click",function(){findUser('addUserForm','end')});
    jQuery("#addUserForm_r [id='go']").bind("click",function(){findUser('addUserForm','go')});
    jQuery("#addUser").html("");
    var rid = jQuery("#roleid").val();
    jQuery("#addUser").append("<input type='hidden' name='roleid' id='rid' value='"+rid+"'/>");
    if(isFirst){
        jQuery("#addUserForm [id='pageNum']").val(1);
        jQuery("#addUserForm [id='firstEnter']").val(true);
        isFirst = false;
    }else{
        setPageMessage("addUserForm");
    }
    var subdata = jQuery("#addUserForm").serializeArray();
    document.getElementById("load_id").src=basePath + "mvcbms/pub/css/images/loading.gif";
    jQuery.ajax({
        type:"post",
        url:basePath+"userConfig/listNotCheckedUsers.controller?t="+Math.random(),
        dataType:"json",
        data:subdata,
        success:function(result){
            //获取分页信息
            pageMessage = result.pageDTO.pageBean;
            //分页信息展示
            pagingMessage('addUserForm',pageMessage);
            //数据展示
            tableUtil(eval(result.list),"useradd");
            popTable('addJsUser');
            document.getElementById("useradd_tbody").style.visibility="";
            document.getElementById("load_id").style.visibility="hidden";
        }
    });
}
/**
 * 添加本角色对应的用户
 * @param roleid
 */
function addUserForRole(){
    hide("cover","addJsUser");
    var chkids = getChecks("addusers").join(",");
    if(chkids == "")
    {
        jQuery("#pop_deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','pop_deleteCg');showTB('cover','addJsUser')});
        jQuery("#pop_deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','pop_deleteCg');showTB('cover','addJsUser')});
        showMessageTxt("请选择一条或多条记录!","users_msg","pop_deleteCg");
        return false;
    }
    var rid = jQuery("#roleid").val();
    jQuery.ajax({
        type:"post",
        url:basePath+"userConfig/addUsersForRole.controller?t="+Math.random()+"&ids="+chkids+"&roleid="+rid,
        dataType:"json",
        success:function(result){
            if(result.messageCode.indexOf("S")==0){
                //hide('cover','addJsUser');
                //var link = "saveToList(\'pop_deleteCg\')"
                jQuery("#pop_deleteCg [id='qd']").unbind("click").bind("click",function(){saveToList('pop_deleteCg')});
                jQuery("#pop_deleteCg [id='close']").unbind("click").bind("click",function(){saveToList('pop_deleteCg')});
            }
            showMessageTxt(result.message,"users_msg","pop_deleteCg");
        }
    });
}

/**
 * 授权成功后，'确定'事件
 */
function saveToList(divid){
    hide("cover",divid);
    if(divid == "pop_deleteCg"){
        var isChecked = jQuery("#addusers").attr("checked");
        if(isChecked){
            jQuery("#addusers").attr("checked",false);
        }
        addUser(true);
        showTB("cover","addJsUser");
    }
    if(divid == "deleteCg"){
        hide("cover","qxpz");
        initData();
    }
}
//选择全部
function selAll(tab)
{
    if(tab=="tab1"){
        jQuery("input[name='appName']").attr("checked",true);
    }
    if(tab=="tab2"){
        var treeObj = $.fn.zTree.getZTreeObj("tree");
        treeObj.checkAllNodes(true);
        /*if(treetype == "zTreeCheck"){
             var treeObj = $.fn.zTree.getZTreeObj("tree");
             treeObj.checkAllNodes(true);
        }
        if(treetype == "easyUiTree"){
            var node = $("#tree").tree('find',1);
            $("#tree").tree('check', node.target);
        }*/
    }
}
//全取消
function deSelAll(tab)
{
    if(tab=="tab1"){
        jQuery("input[name='appName']").attr("checked",false);
    }
    if(tab=="tab2"){
        var treeObj = $.fn.zTree.getZTreeObj("tree");
        treeObj.checkAllNodes(false);
        /*if(treetype == "zTreeCheck"){
              var treeObj = $.fn.zTree.getZTreeObj("tree");
              treeObj.checkAllNodes(false);
            }
        if(treetype == "easyUiTree"){
            var node = $("#tree").tree('find',1);
            $("#tree").tree('uncheck', node.target);
        }*/
    }
}

/**
 * 全选/取消全选
 */
function isSelAll(itemname){
//    var isChecked = $("input[id='"+itemname+"']").attr("checked");
//    if(isChecked){
//        $("input[name='"+itemname+"']").attr("checked",true);
//    }else{
//        $("input[name='"+itemname+"']").attr("checked",false);
//    }
	var isChecked = $("input[id='"+itemname+"']")[0].checked;
	var ipt = $("input[name='"+itemname+"']");
	for(var i = 0; i<ipt.length;i++){
		if(isChecked){
			ipt[i].checked=true;
		}else{
			ipt[i].checked=false; 
		}
	}
}
/**
 * 查看角色
 * @param rid
 */
function show_role(rid){
    window.location.href=basePath+"role/show.controller?id="+rid;
}
/**
 * 编辑角色
 * @param rid
 */
function edit_role(id,name,code){
    $("#bjqx_dataPermiName").val(name);
    $("#bjqx_dataPermiCode").val(code);
    $("#permis_id").val(id);
    show('cover','bjqx');
    //window.location.href=basePath+"role/edit.controller?id="+rid;
}
function sub_batch_(){
    var nodes;
    var treeObj = $.fn.zTree.getZTreeObj("tree");
    nodes = treeObj.getCheckedNodes();
    var bool=false;
    if(nodes.length>0){
        bool=true;
    }
    if(bool){
        for(var i=0;i<nodes.length;i++){
            $("#appendDataAuthForm [id='par']").append("<input type='hidden' name='treeChk' value='"+nodes[i].value+"'/>");
        }
        var subdata = jQuery("#appendDataAuthForm").serializeArray();
        jQuery.ajax({
            type:"post",
            url:basePath+"dataAuthConfig/grantDataAuth.controller?t="+Math.random(),
            dataType:"json",
            data:subdata,
            success:function(result){
                showMessageTxt(result.message,"message","bccg");
                /*showMessageTxt(result.message,"roles_msg","deleteCg");
                if(result.messageCode.indexOf("S")==0){
                    //var link = "saveToList(\'deleteCg\')";
                    jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){saveToList('deleteCg')});
                    jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){saveToList('deleteCg')});
                }else{
                    jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
                    jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
                }*/
            },
            error:function(){
                showMsg("操作失败！");
            }
        });
    }else{
        showMessageTxt("请选择至少一项！","message","bccg");
        /*showMessageTxt("请选择至少一项！","roles_msg","deleteCg");
        jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
        jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
        return false;*/
    }
}