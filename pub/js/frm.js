$("form").submit(function(){
$("input[type=sumbit]")
.prop("disabled","true")
})

$("form").validate({
    rules: {
        name: {
            required: true,
            maxlength: 50
        }
    },
    messages: {
        name: {
            required: "お名前を入力してください。",
            maxlength: "お名前は50文字以内で入力してください。"
        },
     }
});
