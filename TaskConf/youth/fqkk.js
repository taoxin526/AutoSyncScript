
// 番茄看看复写配置
[URL Rewrite]

^http://.+/(task/read|t/show.html)\? url script-response-body https://raw.githubusercontent.com/taoxin526/AutoSyncScript/Sunertnew/TaskConf/youth/fqkk_auto.js
^http://.+/fast_reada/j?\? url script-response-header https://raw.githubusercontent.com/taoxin526/AutoSyncScript/Sunertnew/TaskConf/youth/fqkk_auto.js
^http://.+/mock/read url script-analyze-echo-response https://raw.githubusercontent.com/taoxin526/AutoSyncScript/Sunertnew/TaskConf/youth/fqkk_auto.js