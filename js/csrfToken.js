function updateForms(token) {
    // �õ�ҳ�������е� form Ԫ��
    var forms = document.getElementsByTagName('form');
    for(i=0; i<forms.length; i++) {
        var url = forms[i].action;
        // ������ form �� action ֵΪ�գ��򲻸��� csrftoken
        if(url == null || url == "" ) continue;
        // ��̬���� input Ԫ�أ����뵽 form ֮��
        var e = document.createElement("input");
        e.name = "csrftoken";
        e.value = token;
        e.type="hidden";
        forms[i].appendChild(e);
    }
 }
 function updateTags(token) {
    var all = document.getElementsByTagName('a');
    var len = all.length;
    // �������� a Ԫ��
    for(var i=0; i<len; i++) {
        var e = all[i];
        updateTag(e, 'href', token);
    }
 }
 function updateTag(element, attr, token) {
    var location = element.getAttribute(attr);
    if(location != null && location != '') {
        var fragmentIndex = location.indexOf('#');
        var fragment = null;
        if(fragmentIndex != -1){
            //url �к���ֻ�൱ҳ��ê���
            fragment = location.substring(fragmentIndex);
            location = location.substring(0,fragmentIndex);
        }               

        var index = location.indexOf('?');
        if(index != -1) {
            //url ���Ѻ�����������
            location = location + '&csrftoken=' + token;
        } else {
            //url ��û����������
            location = location + '?csrftoken=' + token;
        }
        if(fragment != null){
            location += fragment;
        }
		element.setAttribute(attr, location);
    }
 } 