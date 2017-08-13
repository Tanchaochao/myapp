define(function(require, exports) {
    var $ = require("$");

    var store = {
        page: {
            curPage: 1,
            eachPage: 5,
            count: 0,
            maxPage: 0,
            data: [],
            empName: ""
        }
    };

    function getEmpList() {
        $.ajax({
            type: "POST",
            url: "/emp/getAllEmpByPage",
            data: "curPage=" + store.page.curPage + "&eachPage=" + store.page.eachPage,
            success: function(msg) {
                store.page = msg;
                render(store);
            }
        });
    }

    function render(store) {
        var arr = store.page.data.map(function(item, index) {
            return "<tr><td>" + item._id + "</td><td>" + item.empName + "</td><td>" + item.sal + "</td><td>" + item.job + "</td><td><input type='button' class='delBtn' value='删除' key='" + index + "' /></td></tr>"
        });
        $("tbody").html(arr.join(""));
        $("#count").html(store.page.count);
        $("#maxPage").html(store.page.maxPage);
        $("#eachPage").val(store.page.eachPage);
        var str = "";
        for (var i = 1; i <= store.page.maxPage; i++) {
            str += "<option value='" + i + "'>" + i + "</option>"
        }
        $("#curPage").html(str).val(store.page.curPage);
    }
    exports.load = function() {
        $(".info").load("./info/emp/emp.html", function() {
            getEmpList();

            $("#firstPage").on("click", function() {
                store.page.curPage = 1;
                getEmpList();
            });
            $("#prePage").on("click", function() {
                if (store.page.curPage > 1) {
                    store.page.curPage--;
                    getEmpList();
                }
            });
            $("#nextPage").on("click", function() {
                if (store.page.curPage < store.page.maxPage) {
                    store.page.curPage++;
                    getEmpList();
                }
            });
            $("#lastPage").on("click", function() {
                store.page.curPage = store.page.maxPage;
                getEmpList();
            });

            $("#curPage").on("change", function() {
                store.page.curPage = $(this).val();
                getEmpList();
            });

            $("#eachPage").on("input", function() {
                store.page.eachPage = $(this).val();
                getEmpList();
            });

            $("#checkoutBtn").on("click", function() {
                $.ajax({
                    type: "POST",
                    url: "/users/checkout",
                    success: function(msg) {
                        location.href = "/login.html"
                    }
                });
            });

            $("#empName").on("input", function() {
                store.page.empName = $(this).val();
                $.ajax({
                    type: "POST",
                    url: "/emp/getAllEmpByPageAndName",
                    data: "curPage=" + store.page.curPage + "&eachPage=" + store.page.eachPage + "&empName=" + store.page.empName,
                    success: function(msg) {
                        store.page = msg;
                        render(store);
                    }
                });
            })
        });
    }
})
